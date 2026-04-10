import React, { useState, HTMLProps } from "react";
import Image from "next/image";

export interface ImageProps {
	url: string;
	alt?: string;
	title?: string;
	width?: number;
	height?: number;
}

export interface WpImageProps extends HTMLProps<HTMLImageElement> {
	image: ImageProps;
	fill?: boolean;
	priority?: boolean;
	setParentLoadingComplete?: (loadingComplete: boolean) => void;
	onLoad?: () => void;
}

export default function WpImage({ image, fill = false, priority = false, className = "", setParentLoadingComplete, onLoad, ...props }: WpImageProps) {
	if (!image || !image.url) return null;

	const handleLoad = () => {
		if (setParentLoadingComplete) {
			setParentLoadingComplete(true);
		}
		if (onLoad) {
			onLoad();
		}
	};

	const imageProps = {
		src: image.url,
		alt: image.alt || image.title,
		priority,
	};

	if (fill) {
		return <Image {...imageProps} fill className={`${className} animate-opacity transition-opacity duration-200`} priority={priority} onLoad={handleLoad} />;
	}

	return (
		<Image
			{...imageProps}
			width={Number(image.width)}
			height={Number(image.height)}
			className={`${className} animate-opacity transition-opacity duration-200`}
			priority={priority}
			onLoad={handleLoad}
		/>
	);
}
