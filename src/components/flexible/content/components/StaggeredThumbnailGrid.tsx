import React from "react";
// elements
import Link from "next/link";
import WpImage, { WpImageProps } from "~/components/elements/Wp";
import { CircleArrow } from "~/components/elements/Icons";

interface StaggeredThumbnailGridProps {
	grid?: {
		thumbnail: WpImageProps["image"];
		heading: string;
		description: string;
		link?: {
			title: string;
			url?: string;
			target: "_blank" | "";
		};
	}[];
}

function StaggeredThumbnailGrid({ grid }: StaggeredThumbnailGridProps) {
	return (
		<div className="mx-auto grid w-full max-w-[69.375rem] gap-y-10 sm:gap-y-12 md:grid-cols-2 md:gap-x-6 md:gap-y-20 lg:gap-y-32">
			{grid?.map((item, index) => {
				if (index % 2) {
					return (
						<div key={index} className="flex md:pl-16 lg:pl-20">
							<GridContent item={item} />
						</div>
					);
				}
				return (
					<div key={index}>
						<GridContent item={item} />
					</div>
				);
			})}
		</div>
	);
}

export default StaggeredThumbnailGrid;

function GridContent({ item }) {
	if (item?.link?.url) {
		return (
			<Link href={item?.link?.url} className="group mt-auto">
				<div className="relative mb-8 aspect-[54/39] w-full overflow-hidden rounded-lg lg:mb-16">
					<WpImage image={item?.thumbnail} fill className="h-full w-full object-cover" />
				</div>
				<h3 className="text-h5 font-book" dangerouslySetInnerHTML={{ __html: item?.heading }} />
				{item?.description && <p className="text-18 mt-4 font-body md:mt-6" dangerouslySetInnerHTML={{ __html: item?.description }} />}
				<div className="mt-auto flex items-center space-x-3 pt-4 md:pt-10">
					<div className="h-6 w-6 rotate-[45deg] rounded-full bg-navy text-white transition-colors duration-300 group-hover:bg-blue group-hover:text-white">
						<CircleArrow />
					</div>
					<span className="text-17 font-semibold" dangerouslySetInnerHTML={{ __html: item?.link?.title }} />
				</div>
			</Link>
		);
	}
	return (
		<div className="mt-auto">
			<div className="relative mb-8 aspect-[54/39] w-full overflow-hidden rounded-lg lg:mb-16">
				<WpImage image={item?.thumbnail} fill className="h-full w-full object-cover" />
			</div>
			<h3 className="text-h5 font-book" dangerouslySetInnerHTML={{ __html: item?.heading }} />
			{item?.description && <p className="text-18 mt-4 font-body md:mt-6" dangerouslySetInnerHTML={{ __html: item?.description }} />}
		</div>
	);
}
