import React, { useContext } from "react";
// elements
import { GlobalContext } from "~/utils/context";
// blocks
import BlogPagination from "../../blog/components/BlogIndex/BlogPagination";

interface PodcastIndexProps {
	heading?: string;
}

function PodcastIndex({ heading }: PodcastIndexProps) {
	const [context] = useContext(GlobalContext);
	const { postListing } = context;

	// console.log(postListing);

	const podcasts = postListing?.posts;
	return (
		<div className="space-y-10 md:space-y-20">
			{/* heading */}
			<div className="text-center">
				<span className="text-h4" dangerouslySetInnerHTML={{ __html: heading }} />
			</div>
			{/* index */}
			<div className="grid gap-y-6 sm:grid-cols-2 sm:gap-x-5 md:gap-x-6 md:gap-y-[1.75rem]">
				{podcasts?.map((item) => <div key={item.ID} dangerouslySetInnerHTML={{ __html: item?.acf?.podcast_embed }} />)}
			</div>
			<div>
				<BlogPagination postListing={postListing} basePath={postListing?.base_path} onClick={null} />
			</div>
		</div>
	);
}

export default PodcastIndex;
