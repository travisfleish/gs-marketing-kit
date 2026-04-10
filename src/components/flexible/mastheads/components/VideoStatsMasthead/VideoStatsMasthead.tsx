import TextStrokeStack from "~/components/elements/TextStrokeStack";
import Asset, { AssetProps } from "~/components/elements/media/Asset";
import RotatingHeading, { RotatingHeadingProps } from "~/components/flexible/content/components/RotatingHeading";
import { useInView } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";

interface VideoStatsMastheadStat {
	heading: string;
	text: string;
}

interface VideoStatsMastheadProps {
	content: {
		asset: AssetProps;
		rotating_heading: RotatingHeadingProps;
		stats: VideoStatsMastheadStat[];
	};
}

function VideoStatsMasthead(props: VideoStatsMastheadProps) {
	const { content } = props;
	const { asset, rotating_heading, stats } = content;

	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.4 });

	return (
		<div className="video-stats-masthead">
			<div className="flex flex-col items-center gap-10 md:gap-24">
				{/* Heading & rotating heading */}
				<div className="mx-auto flex max-w-[1000px] flex-col items-center">
					{/* Rotating Heading */}
					<RotatingHeading {...rotating_heading} />
				</div>

				{/* Asset */}
				{!!asset && (
					<div className="relative h-full">
						<div
							className={clsx(
								"absolute left-[-13%] top-[8%] h-[50%] origin-right transition-transform duration-300 ease-linear",
								isInView ? "scale-x-[100%]" : "scale-x-0"
							)}
						>
							<LeftLines height="100%" />
						</div>
						<div
							className={clsx(
								"absolute bottom-[8%] right-[-12%] h-[50%] origin-left transition-transform delay-200 duration-300 ease-linear",
								isInView ? "scale-x-[100%]" : "scale-x-0"
							)}
						>
							<RightLines height="100%" />
						</div>
						<div ref={ref} className="relative h-full w-full overflow-hidden rounded-lg">
							<Asset {...asset} />
						</div>
					</div>
				)}

				{/* Stat cards */}
				{stats?.length > 0 && (
					<div className="mx-auto grid w-full max-w-[1168px] grid-cols-2 justify-between gap-x-3 gap-y-5 md:flex md:gap-6">
						{stats?.map((stat, index) => {
							const { heading, text } = stat;

							return (
								<div key={`stat-${index}`} className="flex flex-col items-center gap-4 md:gap-8">
									<TextStrokeStack centerText={heading} int={index} />

									<p className="text-20 is-stat text-center font-heading text-white" dangerouslySetInnerHTML={{ __html: text }} />
								</div>
							);
						})}
					</div>
				)}
			</div>
		</div>
	);
}

function LeftLines({ width = null, height = null }) {
	return (
		<svg width={width} height={height} viewBox="0 0 151 349" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M150 349L150 5.54919e-05" stroke="#E1FF67" strokeWidth="0.5" />
			<path d="M131.289 349L131.289 5.54919e-05" stroke="#E1FF67" />
			<path d="M112.582 349L112.582 5.54919e-05" stroke="#E1FF67" strokeWidth="1.5" />
			<path d="M93.8711 349L93.8711 5.54919e-05" stroke="#E1FF67" strokeWidth="2" />
			<path d="M75.1602 349L75.1602 5.54919e-05" stroke="#E1FF67" strokeWidth="2.5" />
			<path d="M56.4531 349L56.4532 5.54919e-05" stroke="#E1FF67" strokeWidth="3" />
			<path d="M37.7422 349L37.7422 5.54919e-05" stroke="#E1FF67" strokeWidth="3.5" />
			<path d="M19.0312 349L19.0313 5.54919e-05" stroke="#E1FF67" strokeWidth="4" />
			<path d="M0.324219 349L0.324249 5.54919e-05" stroke="#E1FF67" strokeWidth="4.5" />
		</svg>
	);
}

function RightLines({ width = null, height = null }) {
	return (
		<svg width={width} height={height} viewBox="0 0 289 349" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M288.645 0L288.645 349" stroke="#E1FF67" strokeWidth="8.5" />
			<path d="M269.934 0L269.934 349" stroke="#E1FF67" strokeWidth="9" />
			<path d="M251.227 0L251.227 349" stroke="#E1FF67" strokeWidth="9.5" />
			<path d="M232.516 6.10352e-05L232.516 349" stroke="#E1FF67" strokeWidth="10" />
			<path d="M213.805 6.10352e-05L213.805 349" stroke="#E1FF67" strokeWidth="10.5" />
			<path d="M195.098 6.10352e-05L195.098 349" stroke="#E1FF67" strokeWidth="11" />
			<path d="M176.387 6.10352e-05L176.387 349" stroke="#E1FF67" strokeWidth="11.5" />
			<path d="M157.676 6.10352e-05L157.676 349" stroke="#E1FF67" strokeWidth="12" />
			<path d="M138.969 6.10352e-05L138.969 349" stroke="#E1FF67" strokeWidth="12.5" />
			<path d="M120.258 6.10352e-05L120.258 349" stroke="#E1FF67" strokeWidth="13" />
			<path d="M101.547 6.10352e-05L101.547 349" stroke="#E1FF67" strokeWidth="13.5" />
			<path d="M82.8398 6.10352e-05L82.8399 349" stroke="#E1FF67" strokeWidth="14" />
			<path d="M64.1289 6.10352e-05L64.1289 349" stroke="#E1FF67" strokeWidth="14.5" />
			<path d="M45.418 6.10352e-05L45.418 349" stroke="#E1FF67" strokeWidth="15" />
			<path d="M26.7109 6.10352e-05L26.711 349" stroke="#E1FF67" strokeWidth="15.5" />
			<path d="M8 6.10352e-05L8.00003 349" stroke="#E1FF67" strokeWidth="16" />
		</svg>
	);
}

export default VideoStatsMasthead;
