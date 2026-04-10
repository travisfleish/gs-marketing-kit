import Link from "next/link";
import { getLinkTarget } from "~/utils/links";
import clsx from "clsx";
import { useState } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import { ContactGridItem } from "./types";
import ItemHeadings from "./ItemHeadings";
import ItemArrows from "./ItemArrows";
import AnimatedLines from "./AnimatedLines";

interface LinkItemProps {
	item: ContactGridItem;
	highlight?: boolean;
}

function LinkItem({ item, highlight = false }: LinkItemProps) {
	const { subheading, heading, link } = item;
	const [isHovered, setIsHovered] = useState(false);

	return (
		<LazyMotion features={domAnimation}>
			<Link
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				href={link?.url || "#"}
				target={getLinkTarget(link?.target)}
				className={clsx(
					"group relative flex h-full w-full flex-col items-start justify-between overflow-hidden rounded-lg p-4 transition-colors duration-300 ease-in-out md:p-6 lg:p-8",
					highlight ? "bg-blue text-white" : "bg-lightGrey hover:bg-navy"
				)}
			>
				{/* Animated lines */}
				<AnimatedLines isHovered={isHovered} highlight={highlight} />

				{/* Headings */}
				<ItemHeadings subheading={subheading} heading={heading} altVer={highlight} />

				{/* Arrows */}
				<ItemArrows altVer={highlight} isHovered={isHovered} />
			</Link>
		</LazyMotion>
	);
}

export default LinkItem;
