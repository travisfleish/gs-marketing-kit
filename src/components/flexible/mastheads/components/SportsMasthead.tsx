import React, { useRef, useState, useEffect } from "react";
// elements
import { LinkGroupProps } from "~/components/elements/links/LinkGroup";
import { WpImageProps } from "~/components/elements/Wp";
// motion
import { LazyMotion, domMax, useInView } from "framer-motion";
// hooks & helpers
import useWindowSize from "~/hooks/useWindowSize";
import useAutoTransition from "~/hooks/useAutoTransition";
import getRandomPlayerNumber from "./SportsMasthead/GetRandomPlayerNumber";
// blocks
import SportsMastheadContent from "./SportsMasthead/SportsMastheadContent";
import SportsMastheadPitchMob from "./SportsMasthead/SportsMastheadPitchMob";
import SportsMastheadPitchDesktop from "./SportsMasthead/SportsMastheadPitchDesktop";
import Player from "./SportsMasthead/Player";
import Stats from "./SportsMasthead/Stats";

interface SportsMastheadProps {
	content: {
		subheading?: string;
		heading?: {
			prepend: string;
			rotating_text?: {
				text: string;
			}[];
			append: string;
		};
		content?: string;
		links?: LinkGroupProps[];
	};
	players?: {
		image?: WpImageProps["image"];
		name?: string;
		stat_caption?: string;
		stat_total_percentage?: boolean;
		stat_10?: number;
		stat_percentage?: number;
	}[];
	remove_stats?: boolean;
	stats?: {
		stat?: string;
		old_stat?: string;
		caption?: string;
	}[];
}

function SportsMasthead({ content, players, remove_stats, stats }: SportsMastheadProps) {
	const pitchRef = useRef(null);
	const isInView = useInView(pitchRef, { once: true, amount: 0.4 });

	const { width: windowWidth } = useWindowSize();

	const isDesktop = windowWidth >= 768;

	// rotating heading set here to also trigger random player details
	const [activeWord, setActiveWord] = useState(0);

	useAutoTransition({
		ref: pitchRef,
		max: content?.heading?.rotating_text.length,
		interval: 4000,
		active: activeWord,
		setter: setActiveWord,
		controls: null,
	});

	// generate random active player

	const [showPlayer, setShowPlayer] = useState(-1);

	const min = isDesktop ? 0 : 7;
	const max = isDesktop ? players?.length : Number(players?.length) - 1;
	const [previousNumber, setPreviousNumber] = useState(null);
	// const [currentNumber, setCurrentNumber] = useState(null);

	useEffect(() => {
		const newNumber = getRandomPlayerNumber(min, max, previousNumber);
		setShowPlayer(newNumber);
		setPreviousNumber(newNumber);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeWord]);

	return (
		<LazyMotion features={domMax}>
			<div ref={pitchRef} className="relative pt-12 md:py-[10.875rem]">
				{/* content */}
				<SportsMastheadContent content={content} activeWord={activeWord} />

				{/* players wrapper */}
				<div className="absolute inset-0 z-[5]">
					{players?.map((player, index) => {
						if (!isDesktop && index < 4) {
							return null;
						}
						return <Player key={index} player={player} interval={index} isInView={isInView} isDesktop={isDesktop} showPlayer={Math.floor(showPlayer)} />;
					})}
				</div>

				{/* pitch */}
				{isDesktop ? (
					<>
						<div className="absolute inset-y-0 left-[90%] z-0 w-1/2">
							<SportsMastheadPitchDesktop />
						</div>
						<div className="absolute inset-y-0 right-[90%] z-0 w-1/2">
							<SportsMastheadPitchDesktop flip />
						</div>
					</>
				) : (
					// mobile pitch
					<SportsMastheadPitchMob />
				)}
			</div>

			{/* stats */}
			{!remove_stats && <Stats stats={stats} />}
		</LazyMotion>
	);
}

export default SportsMasthead;
