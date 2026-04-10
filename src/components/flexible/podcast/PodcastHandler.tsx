import React from "react";
import dynamic from "next/dynamic";
// elements
const FeaturedPodcast = dynamic(() => import("./components/FeaturedPodcast"));
const PodcastIndex = dynamic(() => import("./components/PodcastIndex"));

interface PodcastHandlerProps {
	components: {
		acf_fc_layout: string;
	}[];
	sectionBG?: string;
}

function PodcastHandler({ components, sectionBG }: PodcastHandlerProps) {
	// console.log(components);
	const layoutComponents = {
		featured_podcast: FeaturedPodcast,
		podcast_index: PodcastIndex,
	};
	return components?.map((layout, index) => {
		const { acf_fc_layout: layoutName, ...rest } = layout;
		const LayoutComponent = layoutComponents[layoutName];

		// console.log(layoutName);

		return <React.Fragment key={index}>{LayoutComponent && <LayoutComponent key={index} {...rest} sectionBG={sectionBG} />}</React.Fragment>;
	});
}

export default PodcastHandler;
