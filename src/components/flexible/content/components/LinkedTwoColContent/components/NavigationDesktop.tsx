import clsx from "clsx";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Link from "next/link";
import { getBackgroundColor } from "~/components/ColorHelpers";
import parseSlug from "~/utils/parseSlug";

function NavigationDesktop({ heading, sections, activeSection, themeColor }) {
	const indicatorColor = getBackgroundColor(themeColor);

	return (
		<div className="sticky top-0 z-10 mb-16 hidden border-y border-[#0d12260d] bg-white py-5 md:mb-20 md:block lg:mb-36">
			<menu className="container justify-between gap-x-8 md:flex">
				{/* Heading */}
				<span
					className="text-16 font-body font-normal"
					dangerouslySetInnerHTML={{
						__html: heading,
					}}
				/>

				{/* Navigation */}
				<nav className="flex items-center md:gap-x-10 lg:gap-x-20">
					{sections?.length > 0 &&
						sections?.map((section) => {
							const { section_heading } = section;

							const isActive = activeSection === section_heading;

							return (
								<Link
									className={clsx(isActive ? "font-medium text-navy" : "font-normal text-navy/60", "text-16 flex items-center gap-x-3")}
									key={section_heading}
									href={`#${parseSlug(section_heading)}`}
								>
									{isActive && (
										<LazyMotion features={domAnimation}>
											<m.span
												initial={{
													y: "-100%",
													opacity: 0,
												}}
												animate={{
													y: 0,
													opacity: 1,
													transition: {
														duration: 0.25,
														ease: "easeInOut",
													},
												}}
												className={clsx(indicatorColor, "h-2 w-2 rounded-full")}
											/>
										</LazyMotion>
									)}

									{section_heading}
								</Link>
							);
						})}
				</nav>
			</menu>
		</div>
	);
}

export default NavigationDesktop;
