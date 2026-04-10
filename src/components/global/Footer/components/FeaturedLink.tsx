// Setup extends hoverType
import type { WpLinkType } from "~/types/wp";

import clsx from "clsx";
import { Link } from "~/components/elements/links/Link";
import { useState } from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { FooterFeaturedLinksArrow } from "~/components/elements/Icons";
import WpImage from "~/components/elements/Wp";
import { getLinkTarget } from "~/utils/links";
import { trackFooterMenuItemClick } from "~/utils/trackEvent";

const arrowAnimation = {
	hidden: {
		opacity: 0,
		x: -5,
		y: 5,
		scale: 0.9,
	},
	visible: {
		opacity: 1,
		scale: 1,
		x: 0,
		y: 0,
		transition: {
			duration: 0.4,
			ease: "easeInOut",
		},
	},
};

function ExtendedRightArea() {
	return (
		<svg width="30" height="72" viewBox="0 0 30 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
			<path d="M4.01758 0V72" stroke="#F6F7F9" strokeWidth="8" />
			<path d="M12.0176 0V72" stroke="#F6F7F9" strokeWidth="6" />
			<path d="M20.0176 0V72" stroke="#F6F7F9" strokeWidth="4" />
			<path d="M28.0176 0V72" stroke="#F6F7F9" strokeWidth="2" />
		</svg>
	);
}

interface FeaturedLinkProps {
	link: WpLinkType & {
		text: string;
		image: any;
		link: WpLinkType;
	};
	className?: string;
	footer?: boolean;
	hoverType?: "arrow" | "extends";
}

function FeaturedLink({ link, className, footer, hoverType = "arrow" }: FeaturedLinkProps) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<LazyMotion features={domAnimation}>
			<div className={clsx("flex items-start", className)} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
				<Link
					href={link?.link?.url || "#"}
					target={getLinkTarget(link?.link?.target)}
					className={clsx(
						"relative flex items-center gap-4 bg-lightGrey p-2 transition-transform duration-200 ease-in-out",
						hoverType === "extends" ? `${isHovered ? "rounded-l" : "rounded"}` : "rounded",
						footer && "w-full"
					)}
					onClick={() => {
						trackFooterMenuItemClick(link?.text || link?.link?.title);
					}}
				>
					{/* Arrow */}
					{hoverType === "arrow" && (
						<m.div variants={arrowAnimation} initial="hidden" animate={isHovered ? "visible" : "hidden"} className="absolute right-3 top-3">
							<FooterFeaturedLinksArrow />
						</m.div>
					)}

					{/* Image */}
					<WpImage image={link?.image} className="h-14 w-14 overflow-hidden rounded-[3px] object-cover object-left" />

					{/* Text */}
					<p className="text-14 max-w-[70%] font-medium text-navy/80" dangerouslySetInnerHTML={{ __html: link?.text }} />
				</Link>
				{hoverType === "extends" && (
					<div className={clsx("transition-transform duration-300 ease-in-out", isHovered ? "translate-x-0" : "translate-x-[-100%]")}>
						<ExtendedRightArea />
					</div>
				)}
			</div>
		</LazyMotion>
	);
}

export default FeaturedLink;
