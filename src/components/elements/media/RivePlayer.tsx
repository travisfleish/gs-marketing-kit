import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

// isHovered controls the hover status of rive files
// runText conditionally run the useEffect that updates the date in a rive file.

interface RivePlayerProps {
	riveFile: {
		url: string;
	};
	priority: boolean;
	isHovered?: boolean;
	runText?: boolean;
}

export default function RivePlayer({ riveFile, priority, isHovered, runText }: RivePlayerProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<div ref={ref} className="rive-wrapper pointer-events-none relative !h-full !w-full">
			{priority ? (
				<LazyRive riveFile={riveFile} isInView={isInView} isHovered={isHovered} runText={runText} />
			) : (
				isInView && <LazyRive riveFile={riveFile} isInView={isInView} isHovered={isHovered} runText={runText} />
			)}
		</div>
	);
}

interface LazyRiveProps {
	riveFile: {
		url: string;
	};
	isInView: boolean;
	isHovered?: boolean;
	runText?: boolean;
}

function LazyRive({ riveFile, isInView, isHovered, runText }: LazyRiveProps) {
	const { useRive, Fit, Layout, useStateMachineInput } = require("@rive-app/react-canvas");
	const { rive, RiveComponent } = useRive({
		src: riveFile?.url,
		autoplay: true,
		artBoard: "New Artboard",
		stateMachines: "State Machine 1",
		layout: new Layout({
			fit: Fit.Cover,
		}),
	});

	const onHoverInput = useStateMachineInput(rive, "State Machine 1", "Boolean 1");

	useEffect(() => {
		if (onHoverInput) {
			if (isHovered !== undefined) {
				onHoverInput.value = isHovered;
			}
		}
	}, [onHoverInput, isHovered]);

	// Updated Rive Date
	const currentDate = runText ? new Date() : null;
	const dayOfMonth = runText ? currentDate.getDate() : null;
	const formattedDay = runText ? (dayOfMonth < 10 ? "0" : "") + dayOfMonth : null;

	useEffect(() => {
		if (runText && rive) {
			rive.setTextRunValue("DATE", formattedDay);
		}
	}, [runText, rive]);

	useEffect(() => {
		if (rive) {
			if (isInView) {
				rive.play();
			} else {
				rive.pause();
			}
		}
	}, [rive, isInView]);

	return <RiveComponent />;
}
