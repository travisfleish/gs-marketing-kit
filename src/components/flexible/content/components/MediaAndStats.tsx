import React, { useState, useRef } from "react";
// elements
import Asset, { AssetProps } from "~/components/elements/media/Asset";
import { useInView, AnimatePresence, m, LazyMotion, domAnimation } from "framer-motion";
// helpers
import useAutoTransition from "~/hooks/useAutoTransition";

interface MediaAndStatsProps {
	large_media_item: AssetProps;
	stats: {
		stat: string;
		old_stat?: string;
		caption: string;
	}[];
	small_media_item: AssetProps;
}

function MediaAndStats({ large_media_item, stats, small_media_item }: MediaAndStatsProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.4 });

	const [activeStat, setActiveStat] = useState(0);

	useAutoTransition({
		ref,
		max: stats?.length,
		interval: 4000,
		active: activeStat,
		setter: setActiveStat,
	});

	// animation controls
	const ease = [0.68, -0.2, 0.15, 0.98];

	const initial = {
		opacity: 0,
		transform: "translateY(-2rem)",
	};

	const anIn = {
		opacity: 1,
		transform: "translateY(0rem)",
	};

	const out = {
		opacity: 0,
		transform: "translateY(2rem)",
	};

	return (
		<div className="relative grid gap-y-3 overflow-hidden text-center md:grid-cols-12 lg:gap-x-6 lg:overflow-visible">
			{/* lrg media */}
			<div className="relative aspect-[130/73] overflow-hidden rounded-md md:col-span-12 lg:col-span-5">
				<Asset {...large_media_item} />
			</div>

			<div className="grid grid-cols-2 gap-x-3 md:col-span-12 md:flex md:gap-x-0 md:space-x-3 lg:col-span-7 lg:space-x-6">
				{/* stat */}
				<LazyMotion features={domAnimation}>
					<div ref={ref} className="flex shrink-0 rounded-md bg-lightBlue p-3 text-left text-navy md:min-w-[16.25rem] md:p-5">
						<AnimatePresence mode="popLayout" initial={false}>
							<m.div
								className="flex h-full w-full flex-col"
								key={`stat-${activeStat}-${Math.floor(Math.random() * 100) + 1}`}
								initial={initial}
								animate={anIn}
								exit={out}
								transition={{
									duration: 1,
									ease,
									delay: 0,
								}}
							>
								<div className="text-70 relative mb-6 py-4 lg:py-8">
									<span className="text-70 relative z-10 bg-lightBlue" dangerouslySetInnerHTML={{ __html: stats?.[activeStat]?.stat }} />

									{/* outline */}
									<span
										className="stat-stroke absolute left-0 top-0 text-lightBlue"
										dangerouslySetInnerHTML={{ __html: stats?.[activeStat]?.old_stat || stats?.[activeStat]?.stat }}
									/>
									<span
										className="stat-stroke absolute bottom-0 left-0 text-lightBlue"
										dangerouslySetInnerHTML={{ __html: stats?.[activeStat]?.old_stat || stats?.[activeStat]?.stat }}
									/>
								</div>
								<p className="text-20 mt-auto" dangerouslySetInnerHTML={{ __html: stats?.[activeStat]?.caption }} />
							</m.div>
						</AnimatePresence>
					</div>
				</LazyMotion>
				{/* small asset */}
				<div className="relative aspect-[60/73] shrink-0 overflow-hidden rounded-md">
					<Asset {...small_media_item} />
				</div>
				<div className="hidden h-full lg:!-ml-4 lg:block">
					<RightLines height="100%" isInView={isInView} />
				</div>
				<div className="hidden w-full min-w-[295px] md:block lg:!-ml-4 lg:hidden">
					<RightLines width="100%" isInView={isInView} />
				</div>
			</div>
		</div>
	);
}

function RightLines({ height = null, width = null, isInView = false }) {
	return (
		<LazyMotion features={domAnimation}>
			<svg
				style={{
					transformBox: "fill-box",
				}}
				width={width}
				height={height}
				viewBox="0 0 295 292"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				{/* Top lines */}
				<m.g
					style={{
						transformBox: "fill-box",
						transformOrigin: "right",
					}}
					initial={{ scaleX: 0 }}
					animate={{
						scaleX: isInView ? 1 : 0,
						transition: {
							duration: 0.6,
							ease: "easeInOut",
						},
						transformOrigin: "right",
					}}
				>
					<path d="M292.477 183.5V-0.500006" stroke="#95ECFD" strokeWidth="5.36158" />
					<path d="M277.058 183.5V-0.500006" stroke="#95ECFD" strokeWidth="5.77401" />
					<path d="M261.639 183.5V-0.500006" stroke="#95ECFD" strokeWidth="6.18644" />
					<path d="M246.219 183.5V-0.500006" stroke="#95ECFD" strokeWidth="6.59887" />
					<path d="M230.8 183.5V-0.500006" stroke="#95ECFD" strokeWidth="7.0113" />
					<path d="M215.381 183.5V-0.500006" stroke="#95ECFD" strokeWidth="7.42373" />
					<path d="M199.961 183.5V-0.500006" stroke="#95ECFD" strokeWidth="7.83616" />
					<path d="M184.542 183.5V-0.500006" stroke="#95ECFD" strokeWidth="8.24859" />
					<path d="M169.123 183.5V-0.500006" stroke="#95ECFD" strokeWidth="8.66102" />
					<path d="M153.703 183.5V-0.500006" stroke="#95ECFD" strokeWidth="9.07345" />
					<path d="M138.284 183.5V-0.500006" stroke="#95ECFD" strokeWidth="9.48588" />
					<path d="M122.865 183.5V-0.500006" stroke="#95ECFD" strokeWidth="9.8983" />
					<path d="M107.445 183.5V-0.500006" stroke="#95ECFD" strokeWidth="10.3107" />
					<path d="M92.0259 183.5V-0.500006" stroke="#95ECFD" strokeWidth="10.7232" />
					<path d="M76.6065 183.5V-0.500006" stroke="#95ECFD" strokeWidth="11.1356" />
					<path d="M61.1871 183.5V-0.500006" stroke="#95ECFD" strokeWidth="11.548" />
					<path d="M45.7678 183.5V-0.500006" stroke="#95ECFD" strokeWidth="11.9605" />
					<path d="M30.3485 183.5V-0.500006" stroke="#95ECFD" strokeWidth="12.3729" />
					<path d="M14.9291 183.5V-0.500006" stroke="#95ECFD" strokeWidth="12.7853" />
					<path d="M-0.490234 183.5V-0.500006" stroke="#95ECFD" strokeWidth="13.1977" />
				</m.g>

				{/* Bottom lines */}
				<m.g
					style={{
						transformBox: "fill-box",
					}}
					initial={{ scaleX: 0 }}
					animate={{
						scaleX: isInView ? 1 : 0,
						transition: {
							duration: 0.6,
							ease: "easeInOut",
						},
						transformOrigin: "left",
					}}
				>
					<path d="M15.0793 292.032V114.798" stroke="#95ECFD" strokeWidth="0.824859" />
					<path d="M30.5097 292.032V114.798" stroke="#95ECFD" strokeWidth="1.23729" />
					<path d="M45.9401 292.032V114.798" stroke="#95ECFD" strokeWidth="1.64972" />
					<path d="M61.3705 292.032V114.798" stroke="#95ECFD" strokeWidth="2.06215" />
					<path d="M76.8009 292.032V114.798" stroke="#95ECFD" strokeWidth="2.47458" />
					<path d="M92.2313 292.032V114.798" stroke="#95ECFD" strokeWidth="2.88701" />
					<path d="M107.662 292.032V114.798" stroke="#95ECFD" strokeWidth="3.29943" />
					<path d="M123.092 292.032V114.798" stroke="#95ECFD" strokeWidth="3.71186" />
					<path d="M138.522 292.032V114.798" stroke="#95ECFD" strokeWidth="4.12429" />
					<path d="M153.953 292.032V114.798" stroke="#95ECFD" strokeWidth="4.53672" />
					<path d="M169.383 292.032V114.798" stroke="#95ECFD" strokeWidth="4.94915" />
					<path d="M184.813 292.032V114.798" stroke="#95ECFD" strokeWidth="5.36158" />
					<path d="M200.244 292.032V114.798" stroke="#95ECFD" strokeWidth="5.77401" />
					<path d="M215.674 292.032V114.798" stroke="#95ECFD" strokeWidth="6.18644" />
					<path d="M231.105 292.032V114.798" stroke="#95ECFD" strokeWidth="6.59887" />
					<path d="M246.535 292.032V114.798" stroke="#95ECFD" strokeWidth="7.0113" />
					<path d="M261.965 292.032V114.798" stroke="#95ECFD" strokeWidth="7.42373" />
					<path d="M277.396 292.032V114.798" stroke="#95ECFD" strokeWidth="7.83616" />
					<path d="M292.826 292.032V114.798" stroke="#95ECFD" strokeWidth="8.24859" />
				</m.g>
			</svg>
		</LazyMotion>
	);
}

export default MediaAndStats;
