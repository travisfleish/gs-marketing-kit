import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import trackEvent from "~/utils/trackEvent";

interface AssetVideoProps {
	video?: {
		file?: {
			url: string;
		};
		show_controls?: boolean;
		poster?: {
			url?: string;
		};
	};
}

function AssetVideo({ video }: AssetVideoProps) {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [canPlay, setCanPlay] = useState(false);

	const handlePlay = () => {
		setCanPlay(true);
		trackEvent("video_trackevent", {
			id: video?.file?.url,
			play: true,
			progress: getProgress(),
			pause: false,
		});
	};

	const handlePause = () => {
		trackEvent("video_trackevent", {
			id: video?.file?.url,
			play: false,
			progress: getProgress(),
			pause: true,
		});
	};

	const getProgress = () => (videoRef.current ? (videoRef.current.currentTime / videoRef.current.duration) * 100 : 0);

	const handleCanPlay = () => {
		setCanPlay(true);
	};

	useEffect(() => {
		const videoElement = videoRef.current;

		if (videoElement) {
			videoElement.addEventListener("play", handlePlay);
			videoElement.addEventListener("pause", handlePause);
			videoElement.addEventListener("canplay", handleCanPlay);
		}

		return () => {
			if (videoElement) {
				videoElement.removeEventListener("play", handlePlay);
				videoElement.removeEventListener("pause", handlePause);
				videoElement.removeEventListener("canplay", handleCanPlay);
			}
		};
	}, [videoRef?.current]); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div className="relative h-full w-full">
			{!canPlay && video?.poster?.url && <Image src={video?.poster?.url} alt="video thumbnail" width={1280} height={720} objectFit="cover" priority />}
			<video
				ref={videoRef}
				loop
				muted
				autoPlay
				playsInline
				controls={video?.show_controls}
				className={`h-full w-full object-cover object-center ${canPlay ? "opacity-100" : "opacity-0"}`}
			>
				<source src={`${video?.file?.url}`} />
			</video>
		</div>
	);
}

export default AssetVideo;
