import React from "react";
// elements
import { WpImageProps } from "~/components/elements/Wp";
// blocks
import SimpleLearnPreviewCard from "./previewCards/SimpleLearnPreviewCard";
import LearnPreviewTextCard from "./previewCards/LearnPreviewTextCard";
import LearnGridLink, { LearnGridLinkCardProps } from "./previewCards/LearnGridLink";

interface LearnPostsProps {
	layout: "grid" | "twoColumn";
	link_card?: {
		link: {
			link_type: "resource" | "link";
			resource?: InnerPostProps;
			link_card?: LearnGridLinkCardProps;
		};
		featured_post?: InnerPostProps;
	};
	posts: InnerPostProps[];
}

interface InnerPostProps {
	ID: string;
	permalink: string;
	post_title: string;
	post_date_gmt: string;
	featured_image?: {
		src: string;
		width: number;
		height: number;
	};
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
}

function LearnPosts({ layout, link_card, posts }: LearnPostsProps) {
	if (layout === "grid") {
		return (
			<div className="grid gap-6 md:grid-cols-2">
				<div className="">{posts?.slice(0, 1)?.map((item) => <SimpleLearnPreviewCard key={item.ID} sizeLrg flip item={item} />)}</div>

				{/* other posts */}
				<div className="flex flex-col space-y-6">
					{/* link card */}
					{link_card.link?.link_type === "resource" ? (
						<LearnPreviewTextCard item={link_card.link?.resource} />
					) : (
						<LearnGridLink link={link_card.link?.link_card} />
					)}
					{/* post */}
					{posts?.slice(1)?.map((item) => <LearnPreviewTextCard key={item.ID} item={item} />)}
				</div>
			</div>
		);
	}

	return (
		<div className="grid gap-y-10 md:grid-cols-12 md:gap-x-10">
			{/* sticky post */}
			<div className="md:col-span-7">
				<div className="md:sticky md:top-32">{posts?.slice(0, 1)?.map((item) => <SimpleLearnPreviewCard key={item.ID} sizeLrg item={item} />)}</div>
			</div>
			{/* other posts */}
			<div className="flex flex-col space-y-10 md:col-span-5 md:space-y-12 lg:col-span-4 lg:col-start-9 lg:space-y-[4.625rem]">
				{posts?.slice(1)?.map((item) => <SimpleLearnPreviewCard key={item.ID} sizeLrg={false} item={item} />)}
			</div>
		</div>
	);
}

export default LearnPosts;
