import React from "react";
// elements
import { m, useTransform } from "framer-motion";
// helper
import { getClassValue } from "~/components/ColorHelpers";

interface PodcastBarProps {
	scrollYProgress;
	int: number;
	audioColour: string;
	isMobile: boolean;
}

function PodcastBar({ scrollYProgress, int, audioColour, isMobile }: PodcastBarProps) {
	const startY = `${0 + Math.random() * 60}%`;
	const midY = `${0 + Math.random() * 60}%`;
	const endY = `${0 + Math.random() * 60}%`;

	const ytransform = useTransform(scrollYProgress, [0, 0.3, 1], [startY, midY, endY]);

	return (
		<m.div className="flex h-full flex-col items-center will-change-transform" style={{ y: ytransform }}>
			<div className={`h-40 shrink-0 md:h-[21.875rem] ${getClassValue(audioColour)}`} style={{ width: (isMobile ? 16 : 29) - 0.6 * int }} />
		</m.div>
	);
}

export default PodcastBar;
