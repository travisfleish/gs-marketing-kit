import React from "react";
// elements
import Asset, { AssetProps } from "~/components/elements/media/Asset";
// helpers
import { getClassValue } from "~/components/ColorHelpers";
// blocks
import MediaBars from "./media/MediaBars";

interface MediaProps {
	media: AssetProps;
	options: {
		media_load?: boolean;
		max_width?: number | "";
		background_colour?: {
			colours: string;
		};
		springs_colour?: {
			colours: string;
		};
		background_springs?: {
			acf_fc_layout?: string;
		}[];
	};
}

function Media({ media, options }: MediaProps) {
	// console.log({ options: options });

	const componentWrapper = [""];
	const mediaWrapper = ["mx-auto relative z-10"];

	// if video or rive clip corners
	if (media?.type !== "image") {
		mediaWrapper.push("rounded-lg overflow-hidden h-full");
	}
	// if background colour is set inset media
	if (options?.background_colour?.colours !== "none") {
		componentWrapper.push("px-5 pt-5 md:px-12 md:pt-12 lg:px-[6.875rem] lg:pt-[6.875rem] rounded-lg", getClassValue(options?.background_colour?.colours));
	}

	// if bars is set to bottom add padding bottom to wrapper
	if (options?.background_springs && options?.background_springs[0]?.acf_fc_layout === "bottom") {
		componentWrapper.push("pb-10 lg:pb-[4.875rem]");
	}
	return (
		<div className={`relative ${componentWrapper.join(" ")}`}>
			{/* media wrapper */}
			<div className={mediaWrapper.join(" ")} style={{ maxWidth: options?.max_width ? `${options?.max_width}px` : "none" }}>
				<Asset {...media} priority={options?.media_load} />
			</div>
			{/* springs wrapper */}
			{options?.background_springs && (
				<MediaBars colour={getClassValue(options?.springs_colour?.colours)} style={options?.background_springs[0]?.acf_fc_layout} />
			)}
		</div>
	);
}

export default Media;
