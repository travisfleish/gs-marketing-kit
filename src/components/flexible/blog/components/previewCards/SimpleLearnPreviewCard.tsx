import React from "react";
// elements
import Link from "next/link";
import WpImage, { WpImageProps } from "~/components/elements/Wp";
import { CircleArrow } from "~/components/elements/Icons";

interface SimpleLearnPreviewCardProps {
	sizeLrg: boolean;
	flip?: boolean;
	item: {
		ID: string;
		permalink: string;
		post_title: string;
		post_date_gmt: string;
		featured_image?: {
			src: string;
			width: number;
			height: number;
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

function SimpleLearnPreviewCard({ sizeLrg, flip = false, item }: SimpleLearnPreviewCardProps) {
	const thumbnail = {
		url: item.featured_image?.src,
		...item.featured_image,
		alt: "Blog thumbnail image",
	};
	return (
		<Link href={item.permalink} key={item.ID} className={`group gap-y-6 md:gap-y-8 ${flip ? "flex flex-col md:flex-col-reverse" : "flex flex-col"}`}>
			{/* thumbnail */}
			{!!item?.featured_image.src && (
				<div className="relative aspect-[137/77] overflow-hidden rounded-lg">
					<WpImage image={thumbnail} fill className="object-cover transition-transform duration-[700ms] group-hover:scale-[1.05]" />
				</div>
			)}

			{/* content */}
			<div>
				{/* date category */}
				<div className="mb-4 flex items-center space-x-3 md:mb-5 lg:space-x-4">
					{item?.categories?.length > 0 && (
						<span
							className="text-15 rounded-md bg-[#F6F7F9] px-2 py-[.3rem] font-body font-medium text-navy"
							dangerouslySetInnerHTML={{ __html: item?.categories[0]?.name }}
						/>
					)}
					<span className="text-15 font-regular font-body" dangerouslySetInnerHTML={{ __html: item.post_date_gmt }} />
				</div>
				<h3
					className={`mb-6 block !font-medium md:mb-8 ${flip ? "max-w-[36rem]" : "max-w-[42rem]"} ${sizeLrg ? "text-h6 " : "text-24 is-larger"}`}
					dangerouslySetInnerHTML={{ __html: item.post_title }}
				/>
				<span className="text-17 inline-flex items-center space-x-3">
					<div className="z-10 h-[1.375rem] w-[1.375rem] rotate-45 rounded-full bg-black text-white transition-colors duration-200 group-hover:bg-blue">
						<CircleArrow />
					</div>
					<span className="font-semibold" dangerouslySetInnerHTML={{ __html: "Learn more" }} />
				</span>
			</div>
		</Link>
	);
}

export default SimpleLearnPreviewCard;
