import React from "react";
// elements
import Link from "next/link";
import Icon from "~/components/elements/media/Icon";
import { WpImageProps } from "~/components/elements/Wp";
import { CircleArrow } from "~/components/elements/Icons";
import trackEvent from "~/utils/trackEvent";
import PillTag from "~/components/elements/PillTag";

interface HeaderIconCardProps {
	gapLrg: boolean;
	parentMenu?: any;
	item: {
		add_new_tag?: boolean;
		icon: {
			type: "image" | "rive";
			image: WpImageProps["image"];
		};
		link: {
			url: string;
			title: string;
			target: "_blank" | "";
		};
		description: string;
	};
}

function HeaderIconCard({ item, gapLrg, parentMenu }: HeaderIconCardProps) {
	return (
		<Link
			href={item?.link?.url || "#"}
			target={item?.link?.target}
			className="group relative flex flex-col rounded-lg bg-lightGrey p-4 text-left transition-colors duration-200 hover:bg-lightGrey md:p-6 lg:col-span-7 lg:bg-white"
			onClick={() => {
				if (!parentMenu) return;
				trackEvent("menu_trackevent", {
					level_1: parentMenu.menu_item.title,
					level_2: item.link.title,
					menu_type: "menu_header",
				});
			}}
		>
			{/* icon */}
			{/* <div className={`item-center filter-icon relative mb-5 flex h-8 w-8 ${gapLrg ? "md:mb-8" : "md:mb-[1.0625rem]"}`}>
				<Icon icon={item.icon} />
			</div> */}
			{/* arrow */}
			<div className="absolute right-4 top-4 h-5 w-5 rounded-full bg-black text-white transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[1] md:right-6 md:top-6 lg:rotate-45 lg:scale-0">
				<CircleArrow />
			</div>
			{/* content */}
			<div className="mb-1 flex items-center justify-start gap-3 lg:mb-2">
				{/* Title */}
				<span className="text-20 block font-heading font-medium tracking-[-0.0125em]" dangerouslySetInnerHTML={{ __html: item?.link?.title }} />

				{/* New tag */}
				{item?.add_new_tag && <PillTag text="NEW" />}
			</div>

			<p className="text-15 font-body !leading-[1.4] tracking-[-0.009375em] opacity-80" dangerouslySetInnerHTML={{ __html: item?.description }} />
		</Link>
	);
}

export default HeaderIconCard;
