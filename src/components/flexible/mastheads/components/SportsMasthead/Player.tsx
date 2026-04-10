import React, { useState } from "react";
// elements
import WpImage, { WpImageProps } from "~/components/elements/Wp";
// motion
import { m, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { useWindowSize } from "react-use";

const PlayerPosition = [
	{ top: "", right: "", bottom: "86%", left: "5%" },
	{ top: "", right: "", bottom: "82%", left: "35%" },
	{ top: "", right: "", bottom: "93%", left: "65%" },
	{ top: "", right: "", bottom: "75%", left: "98%" },
	{ smallBottom: "30%", smallLeft: "85%", bottom: "29%", left: "98%" },
	{ smallBottom: "0%", smallLeft: "80%", bottom: "10%", left: "80%" },
	{ smallBottom: "15%", smallLeft: "90%", bottom: "0%", left: "55%" },
	{ smallBottom: "2%", smallLeft: "0%", bottom: "5%", left: "30%" },
	{ smallBottom: "15%", smallLeft: "25%", bottom: "16%", left: "10%" },
	{ smallBottom: "35%", smallLeft: "20%", bottom: "47%", left: "0%" },
];

interface PlayerProps {
	interval: number;
	showPlayer: number;
	isDesktop?: boolean;
	isInView?: boolean;
	player: {
		image?: WpImageProps["image"];
		name?: string;
		stat_caption?: string;
		stat_total_percentage?: boolean;
		stat_10?: number;
		stat_percentage?: number;
	};
}

function Player({ player, interval, isInView, isDesktop, showPlayer }: PlayerProps) {
	const chartValue = player?.stat_total_percentage ? player?.stat_percentage : Number(player?.stat_10) * 10;

	const [activePlayer, setActivePlayer] = useState(-1);
	const { width: windowWidth } = useWindowSize();

	let isActive = false;
	// if the random player is selected then set it as active
	if (showPlayer === interval) {
		isActive = true;
	}
	// else just set the tapped/hovered player as active
	if (activePlayer === interval) {
		isActive = true;
	}
	// colour theme
	let themeHex = "";
	let themeBg = "";
	let themeText = "";

	if (interval % 2) {
		themeHex = "#0000DC";
		themeBg = "bg-blue";
		themeText = "text-blue";
	} else {
		themeHex = "#F76B6A";
		themeBg = "bg-lightRed";
		themeText = "text-lightRed";
	}

	const isMobile = windowWidth < 768;
	const leftThreshold = isMobile ? 20 : 10;
	const rightThreshold = isMobile ? 75 : 90;

	const getAbPosition = (position) => {
		const leftNumber = isMobile ? Number(position?.smallLeft.replace("%", "")) : Number(position?.left.replace("%", ""));

		if (leftNumber < leftThreshold) {
			return "left-[130%]";
		}
		if (leftNumber > rightThreshold) {
			return "right-[130%]";
		}

		return "left-[130%]";
	};

	return (
		<m.div
			className="absolute z-10 inline-flex"
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
			transition={{ delay: interval * 0.2, duration: 0.2, ease: "easeOut" }}
			style={{
				bottom: isDesktop ? PlayerPosition[interval].bottom : PlayerPosition[interval].smallBottom,
				left: isDesktop ? PlayerPosition[interval].left : PlayerPosition[interval].smallLeft,
			}}
		>
			<div className={`rounded-full transition-colors duration-200 ${isActive ? "bg-navy/5" : "bg-white"}`}>
				<m.button
					type="button"
					aria-label="Show Player Stats"
					className="flex h-12 w-12 items-center justify-center rounded-full p-[.2rem] transition-all duration-300 ease-out"
					onTap={isDesktop ? null : () => setActivePlayer(interval)}
					onMouseEnter={isDesktop ? () => setActivePlayer(interval) : null}
					onMouseLeave={() => setActivePlayer(-1)}
					animate={{
						background: isActive
							? `conic-gradient(${themeHex} 0%, ${themeHex} ${chartValue}%, transparent ${chartValue}%)`
							: "conic-gradient(#0D122605 0%, #0D122605 0%, transparent 0%, transparent 100%)",
					}}
				>
					<div className="flex h-full w-full items-center justify-center rounded-full bg-white">
						<span className={`block h-2 w-2 rounded-full ${themeBg}`} />
					</div>
				</m.button>
			</div>

			<AnimatePresence>
				{isActive && (
					// player info
					<div className={clsx(getAbPosition(PlayerPosition?.[interval]), "absolute z-10 flex space-x-4")}>
						{/* thumbnail */}
						<m.div
							className={`relative aspect-[1/1] h-12 overflow-hidden rounded-[.22rem] ${themeBg}`}
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.8 }}
							transition={{
								duration: 0.2,
								ease: "easeOut",
							}}
						>
							<WpImage image={player?.image} fill className="h-full w-full object-cover" />
						</m.div>

						{/* details */}
						<m.div
							initial={{ opacity: 0, x: -30, scale: 0.8 }}
							animate={{ opacity: 1, x: 0, scale: 1 }}
							exit={{ opacity: 0, x: -30, scale: 0.8 }}
							transition={{
								duration: 0.2,
								ease: "easeOut",
								delay: 0.1,
							}}
						>
							<span className="text-16 whitespace-nowrap font-medium opacity-80" dangerouslySetInnerHTML={{ __html: player?.name }} />
							<div className="whitespace-nowrap ">
								<span className="sports-player-stat font-body opacity-[.65]" dangerouslySetInnerHTML={{ __html: player?.stat_caption }} />
								<span
									className={`sports-player-stat ml-1 font-semibold ${themeText}`}
									dangerouslySetInnerHTML={{ __html: player?.stat_total_percentage ? `${player?.stat_percentage}%` : player?.stat_10 }}
								/>
							</div>
						</m.div>
					</div>
				)}
			</AnimatePresence>
		</m.div>
	);
}

export default Player;
