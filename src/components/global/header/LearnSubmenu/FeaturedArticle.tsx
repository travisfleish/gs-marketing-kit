import React from "react";
// elements
import Link from "next/link";
import cmsUrlToNextHref from "~/utils/cmsUrlToNextHref";
import WpImage, { WpImageProps } from "~/components/elements/Wp";
import { CircleArrow } from "~/components/elements/Icons";
import trackEvent from "~/utils/trackEvent";
import getPostPreviewImage from "~/utils/getPostPreviewImage";

interface FeaturedArticleProps {
	parentMenu?: any;
	item: {
		permalink: string;
		post_title: string;
		acf: {
			preview: {
				thumbnail: WpImageProps["image"];
			};
		};
		categories: {
			id: string;
			name: string;
			slug: string;
		}[];
	};
}

function FeaturedArticle({ item, parentMenu }: FeaturedArticleProps) {
	return (
		<Link
			href={cmsUrlToNextHref(item?.permalink)}
			className="group relative block rounded-lg bg-lightPurple p-3 pb-4 text-navy transition-colors duration-200 hover:bg-lightPurple md:flex md:items-center md:space-x-4 md:bg-[#F6F7F9] md:pb-3"
			onClick={() => {
				if (!parentMenu) return;
				trackEvent("menu_trackevent", {
					level_1: parentMenu.menu_item.title,
					level_2: item?.post_title,
					menu_type: "menu_header",
				});
			}}
		>
			{/* thumbnail */}
			<div className="relative mb-4 aspect-[39/23] w-full shrink-0 overflow-hidden rounded-lg md:mb-0 md:max-w-[11.375rem]">
				<WpImage image={getPostPreviewImage(item)} fill className="h-full w-full object-cover" />
			</div>
			{/* arrow */}
			<div className="absolute right-4 top-3 hidden h-5 w-5 rounded-full bg-black text-white transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[1] md:block lg:rotate-45 lg:scale-0">
				<CircleArrow />
			</div>
			{/* content */}
			<div className="max-w-[21.4375rem]">
				<div className="block">
					{item?.categories?.length > 0 && (
						<span
							className="text-14 rounded-md bg-purple px-2 py-[.3rem] font-body font-medium text-white transition-colors duration-200 group-hover:bg-purple group-hover:text-white md:bg-white md:text-navy"
							dangerouslySetInnerHTML={{ __html: item?.categories[0]?.name }}
						/>
					)}
				</div>
				<h3 className="text-16 !font-book mt-4 line-clamp-2" dangerouslySetInnerHTML={{ __html: item?.post_title }} />
			</div>
		</Link>
	);
}

export default FeaturedArticle;
