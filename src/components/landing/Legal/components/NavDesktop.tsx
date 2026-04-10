import { LegalType } from "~/types/wp";
import parseSlug from "~/utils/parseSlug";
import { LayoutGroup, motion } from "framer-motion";

interface LegalNavDesktopProps {
	content: LegalType["content"];
	activeSection: string;
	// eslint-disable-next-line
	onItemClick?: (sectionHeading: string) => void;
}

function NavDesktop({ content, activeSection, onItemClick }: LegalNavDesktopProps) {
	return (
		<aside className="sticky top-20 hidden w-full max-w-[30%] flex-shrink-0 flex-col gap-y-5 md:flex xl:max-w-[300px]">
			{content?.length > 0 &&
				content?.map(({ nav, section }) => {
					const isActive = activeSection === section?.heading || activeSection === nav?.heading;

					return (
						<nav className="flex items-center gap-4" key={section.heading}>
							{/* Indicator */}
							<LayoutGroup>{isActive && <motion.span layoutId="nav-indicator" layout="position" className="h-2 w-2 rounded-full bg-blue" />}</LayoutGroup>

							{/* Link */}
							<motion.a
								layout
								href={`#${parseSlug(section?.heading)}`}
								onClick={() => {
									onItemClick?.(section?.heading);
								}}
								className="text-16 block text-navy/60"
								dangerouslySetInnerHTML={{
									__html: nav?.heading || section?.heading,
								}}
							/>
						</nav>
					);
				})}
		</aside>
	);
}

export default NavDesktop;
