// TODO ; Setup icon themes

import { FeaturedLinkTopRightArrowCircle, MinusCircle, PlusCircle } from "~/components/elements/Icons";
import { useContext } from "react";
import clsx from "clsx";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import WpImage from "~/components/elements/Wp";
import { getHighlightedText } from "~/utils/text";
import Link from "next/link";
import { getLinkTarget } from "~/utils/links";
import { getBackgroundColor, getTextColor } from "~/components/ColorHelpers";
import { TabType } from "../types";
import { LinkedTwoColContext } from "../context";

interface ExpandedTabProps {
	bgColorType: "light" | "dark";
	tab: TabType;
	onClick?: () => void;
	isActive?: boolean;
}

function ExpandedTab({ tab, onClick, isActive, bgColorType }: ExpandedTabProps) {
	const { heading, content, add_featured_link, featured_link } = tab;
	const { text, link } = featured_link;
	const [context] = useContext(LinkedTwoColContext);
	const { themeColor } = context || {};

	let finalText = "";

	if (add_featured_link) {
		finalText = getHighlightedText({ content: text, color: themeColor });
	}

	const plusColor = ["brightGreen"]?.includes(themeColor) ? "text-navy" : "text-white";

	return (
		<LazyMotion features={domAnimation}>
			<AnimatePresence initial={false}>
				<m.button
					layout="position"
					type="button"
					onClick={() => {
						onClick?.();
					}}
					className="flex flex-col px-5 py-4"
				>
					{/* Icon & Heading */}
					<div className="flex gap-3">
						<m.div
							layout="preserve-aspect"
							initial={{
								opacity: 0,
							}}
							animate={{
								opacity: 1,
								transition: { duration: 0.4, ease: "easeInOut" },
							}}
							key={isActive.toString()}
						>
							<span className="block h-6 w-6">
								{isActive ? (
									<MinusCircle circleClassName={bgColorType === "dark" ? "text-white" : "text-lightGrey"} />
								) : (
									<PlusCircle circleClassName={getTextColor(themeColor)} plusClassName={plusColor} />
								)}
							</span>
						</m.div>

						<m.h3
							layout="preserve-aspect"
							className="text-18 text-left"
							dangerouslySetInnerHTML={{
								__html: heading,
							}}
						/>
					</div>

					{/* Content */}
					{isActive && (
						<>
							<m.p
								layout="preserve-aspect"
								className={clsx("text-16 mt-3 text-left font-body")}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.4, ease: "easeInOut" }}
								dangerouslySetInnerHTML={{
									__html: content,
								}}
							/>

							{/* Featured Link */}
							{add_featured_link && (
								<Link
									href={link?.url || "/"}
									target={getLinkTarget(link?.target)}
									className="group relative mt-5 flex w-full items-center justify-start gap-5 rounded-lg bg-navy p-2"
								>
									{/* Arrow */}
									<div className="transition-[transform, opacity] absolute right-3 top-3 translate-y-2 opacity-0 duration-300 ease-linear group-hover:translate-y-0 group-hover:opacity-100">
										<FeaturedLinkTopRightArrowCircle />
									</div>

									{/* Image */}
									<WpImage image={featured_link?.image} className="aspect-[1/1] h-full max-w-[72px] rounded-lg object-cover" />

									{/* Content */}
									<p
										className="text-16 max-w-[100%] text-left font-body text-white sm:max-w-[50%]"
										dangerouslySetInnerHTML={{
											__html: finalText,
										}}
									/>
								</Link>
							)}
						</>
					)}
				</m.button>
			</AnimatePresence>
		</LazyMotion>
	);
}

export default ExpandedTab;
