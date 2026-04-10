import React from "react";

// elements
import WpImage, { WpImageProps } from "../Wp";

export interface IconProps {
	priority?: boolean;
	icon: {
		type: "image" | "rive";
		image: WpImageProps["image"];
	};
}

function Icon({ priority = false, icon }: IconProps) {
	return (
		<div className="h-full w-full">
			{icon?.type === "image" && <WpImage image={icon?.image} fill priority={priority} className="h-full w-full object-contain" />}
		</div>
	);
}

export default Icon;
