import React from "react";
// elements
import Icon from "~/components/elements/media/Icon";
import { WpImageProps } from "~/components/elements/Wp";
import Link from "next/link";
import { CircleArrow } from "~/components/elements/Icons";

interface IconGridProps {
	sectionBG?: string;
	add_link?: boolean;
	card_type: "icon" | "number";
	grid: {
		icon: {
			type: "image" | "rive";
			image: WpImageProps["image"];
		};
		heading: string;
		description: string;
		link?: {
			url: string;
			title: string;
			target: "_blank" | "";
		};
	}[];
	end_link?: {
		url: string;
		title: string;
		target: "_blank" | "";
	};
}

function IconGrid({ grid, add_link, card_type, end_link, sectionBG }: IconGridProps) {
	const cardColor = [""];

	if (sectionBG === "navy" || sectionBG === "purple") {
		cardColor.push("bg-lightGrey/5");
	} else if (sectionBG === "black" || sectionBG === "blue") {
		cardColor.push("bg-white/15");
	} else if (sectionBG === "brightGreen" || sectionBG === "lightBlue" || sectionBG === "lightPurple" || sectionBG === "lightGrey") {
		cardColor.push("bg-navy/5");
	} else {
		cardColor.push("bg-lightGrey");
	}

	return (
		<>
			<div className="mx-auto grid max-w-[69.75rem] gap-y-6 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-[1.5625rem]">
				{grid?.map((item, index) => {
					if (add_link && item?.link?.url) {
						return (
							<Link href={item?.link?.url} target={item?.link?.target} className={`group rounded-lg p-5 md:p-6 ${cardColor.join(" ")}`} key={item?.heading}>
								<IconContent item={item} addLink={add_link} cardType={card_type} int={index} />
							</Link>
						);
					}
					return (
						<div className={`rounded-lg p-5 md:p-6 ${cardColor.join(" ")}`} key={index}>
							<IconContent item={item} addLink={add_link} cardType={card_type} int={index} />
						</div>
					);
				})}
			</div>
			{end_link?.url && (
				<div className="mt-10 flex justify-center text-center  md:mt-16 lg:mt-20">
					<Link href={end_link?.url} target={end_link?.target} className="group inline-flex items-center space-x-3">
						<div className="h-6 w-6 rotate-[45deg] rounded-full bg-navy text-white transition-colors duration-300 group-hover:bg-blue group-hover:text-white">
							<CircleArrow />
						</div>
						<span className="text-17 font-semibold" dangerouslySetInnerHTML={{ __html: end_link?.title }} />
					</Link>
				</div>
			)}
		</>
	);
}

export default IconGrid;

function IconContent({ item, addLink, cardType, int }) {
	const headingStyle = [""];
	if (addLink || cardType === "number") {
		headingStyle.push(" text-h7");
	} else {
		headingStyle.push(" text-h6");
	}
	return (
		<div className="flex h-full flex-col">
			{/* icon */}
			{cardType === "number" ? (
				<span
					className="text-h3 mb-6 inline-block text-blue md:mb-8"
					dangerouslySetInnerHTML={{ __html: `${Number(int) + 1 > 9 ? "" : "0"}${Number(int) + 1}` }}
				/>
			) : (
				<div className="relative mb-[1.875rem] h-12 w-12">
					<Icon icon={item.icon} />
				</div>
			)}
			{item.heading && <h3 className={`mb-2 !font-[450] lg:mb-4 ${headingStyle.join(" ")}`} dangerouslySetInnerHTML={{ __html: item.heading }} />}
			{item?.description && (
				<p
					className="text-18 max-w-[18.9rem] font-body !leading-[1.45] tracking-[-0.01125rem] opacity-80"
					dangerouslySetInnerHTML={{ __html: item?.description }}
				/>
			)}
			{addLink && item?.link?.title && (
				<div className="mt-auto flex items-center space-x-3 pt-4">
					<div className="h-6 w-6 rotate-[45deg] rounded-full bg-white text-navy transition-colors duration-300 group-hover:bg-blue group-hover:text-white">
						<CircleArrow />
					</div>
					<span className="text-17 font-semibold" dangerouslySetInnerHTML={{ __html: item?.link?.title }} />
				</div>
			)}
		</div>
	);
}
