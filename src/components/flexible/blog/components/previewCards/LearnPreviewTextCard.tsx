import React from "react";
// elements
import Link from "next/link";
import WpImage, { WpImageProps } from "~/components/elements/Wp";
import { CircleArrow } from "~/components/elements/Icons";

interface LearnPreviewTextCardProps {
	item: {
		ID: string;
		permalink: string;
		post_title: string;
		post_date_gmt: string;
		author: {
			name: string;
			role: string;
			profile_picture?: WpImageProps["image"];
		};
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

function LearnPreviewTextCard({ item }: LearnPreviewTextCardProps) {
	return (
		<Link href={item.permalink} key={item.ID} className="group relative flex grow flex-col rounded-lg bg-[#F6F7F9] p-6">
			{/* arrow */}
			<div className="absolute right-6 top-6 z-10 h-6 w-6 scale-0 rounded-full bg-black text-white transition-transform duration-200 group-hover:scale-100 ">
				<CircleArrow />
			</div>
			{/* date category */}
			<div className="mb-10 flex items-center space-x-3 md:mb-12 lg:space-x-4">
				{item?.categories?.length > 0 && (
					<span
						className="text-15 rounded-md bg-blue px-2 py-[.3rem] font-body font-medium text-white"
						dangerouslySetInnerHTML={{ __html: item?.categories[0]?.name }}
					/>
				)}
				<span className="text-15 font-regular font-body" dangerouslySetInnerHTML={{ __html: item.post_date_gmt }} />
			</div>
			<span
				className="preview-text-heading text-h6 !font-book mb-6 mt-auto line-clamp-2 max-w-[28.125rem] md:mb-8"
				dangerouslySetInnerHTML={{ __html: item.post_title }}
			/>
			{/* author */}
			<div className="flex items-center space-x-3 lg:space-x-4">
				{item?.author?.profile_picture && (
					<div className="relative h-10 w-10 overflow-hidden rounded-md bg-blue lg:h-[3.5rem] lg:w-[3.5rem]">
						<WpImage image={item?.author?.profile_picture} fill className="h-full w-full object-cover" />
					</div>
				)}
				<div className="flex flex-col">
					<span className="text-18 font-heading font-medium" dangerouslySetInnerHTML={{ __html: item.author.name }} />
					{item?.author?.role && <span className="text-15 font-body opacity-80" dangerouslySetInnerHTML={{ __html: item.author.role }} />}
				</div>
			</div>
		</Link>
	);
}

export default LearnPreviewTextCard;
