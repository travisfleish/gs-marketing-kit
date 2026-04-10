import React from "react";
// Elements
import clsx from "clsx";
import WpImage, { ImageProps } from "../Wp";
import RivePlayer from "./RivePlayer";
import AssetVideo from "./AssetVideo";

export interface AssetProps {
	type?: string;
	image: ImageProps;
	animation: {
		animation: {
			url: string;
		};
		aspect_ratio?: string;
	};
	ratio: string;
	priority: boolean;
	isHovered?: boolean;
	video?: {
		file?: {
			url: string;
		};
		show_controls?: boolean;
		poster?: {
			url?: string;
		};
	};
	fill?: boolean;
	className?: string;
}

// Set up priority function for rive
// Add video

export default function Asset({ isHovered, type, animation, video, priority = false, ratio, image, fill = false, className = "" }: AssetProps) {
	return (
		<div className={`h-full w-full ${fill ? "absolute inset-0" : ""}`} style={type === "animation" ? { aspectRatio: animation?.aspect_ratio } : {}}>
			{type === "image" && (
				<WpImage image={image} fill={fill} priority={priority} className={clsx("h-full w-full", fill ? "object-cover" : "object-contain", className)} />
			)}
			{type === "animation" && animation?.animation && <RivePlayer riveFile={animation?.animation} priority={priority} isHovered={isHovered} />}
			{type === "video" && video && <AssetVideo video={video} />}
		</div>
	);
}
