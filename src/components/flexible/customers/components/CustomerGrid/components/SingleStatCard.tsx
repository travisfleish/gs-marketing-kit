import TextStrokeStack from "~/components/elements/TextStrokeStack";

function SingleStatCard({ card }) {
	return (
		<div className="custome-grid__single-stat-card relative min-h-[250px] overflow-hidden rounded-lg bg-brightGreen md:min-h-0">
			<div className="absolute right-0 top-0 h-full">
				<RightLines height="100%" />
			</div>

			{/* Content */}
			<div className="relative flex h-full flex-col items-start justify-between p-8">
				<TextStrokeStack
					textClassName="!tracking-[0em]"
					bottomText={card?.single_stat?.stacked_text?.top_text}
					centerText={card?.single_stat?.stacked_text?.center_text}
					topText={card?.single_stat?.stacked_text?.bottom_text}
					options={{
						textSize: "88",
						textColor: "navy",
						bgColor: "brightGreen",
						strokeColor: "navy",
					}}
				/>

				<p className="text-h6 font-[450]" dangerouslySetInnerHTML={{ __html: card?.single_stat?.label }} />
			</div>
		</div>
	);
}

function RightLines({ width = null, height = null }) {
	return (
		<svg width={width} height={height} viewBox="0 0 277 348" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1 0V348" stroke="white" strokeWidth="0.5" />
			<path d="M19.709 0V348" stroke="white" />
			<path d="M38.4199 0V348" stroke="white" strokeWidth="1.5" />
			<path d="M57.1289 0V348" stroke="white" strokeWidth="2" />
			<path d="M75.8379 0V348" stroke="white" strokeWidth="2.5" />
			<path d="M94.5488 0V348" stroke="white" strokeWidth="3" />
			<path d="M113.258 0V348" stroke="white" strokeWidth="3.5" />
			<path d="M131.967 0V348" stroke="white" strokeWidth="4" />
			<path d="M150.678 0V348" stroke="white" strokeWidth="4.5" />
			<path d="M169.387 0V348" stroke="white" strokeWidth="5" />
			<path d="M188.098 0V348" stroke="white" strokeWidth="5.5" />
			<path d="M206.807 0V348" stroke="white" strokeWidth="6" />
			<path d="M225.516 0V348" stroke="white" strokeWidth="6.5" />
			<path d="M244.227 0V348" stroke="white" strokeWidth="7" />
			<path d="M262.936 0V348" stroke="white" strokeWidth="7.5" />
		</svg>
	);
}

export default SingleStatCard;
