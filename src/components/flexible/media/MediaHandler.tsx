import React from "react";
import dynamic from "next/dynamic";

// Components
import LogoMarquee from "./components/LogoMarquee";
import Media from "./components/Media";

const TwoColumnMediaGrid = dynamic(() => import("./components/TwoColumnMediaGrid"));
const TextMediaBox = dynamic(() => import("./components/TextMediaBox"));

interface MediaHandlerProps {
	components: {
		acf_fc_layout: string;
	}[];
	sectionBG: string;
}

function MediaHandler({ components, sectionBG }: MediaHandlerProps) {
	// console.log(components);
	const layoutComponents = {
		logo_marquee: LogoMarquee,
		media: Media,
		two_column_media_grid: TwoColumnMediaGrid,
		text_media_box: TextMediaBox,
	};
	return components?.map((layout, index) => {
		const { acf_fc_layout: layoutName, ...rest } = layout;
		const LayoutComponent = layoutComponents[layoutName];

		// console.log(layoutName);

		return <React.Fragment key={index}>{LayoutComponent && <LayoutComponent key={index} {...rest} sectionBG={sectionBG} />}</React.Fragment>;
	});
}

export default MediaHandler;
