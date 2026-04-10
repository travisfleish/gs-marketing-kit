import TextStrokeStack from "~/components/elements/TextStrokeStack";

function DoubleStatCard({ card }) {
	return (
		<div className="customer-grid__double-stat-card relative grid min-h-[250px] grid-cols-2 overflow-hidden rounded-lg bg-lightBlue md:min-h-0">
			<div className="w-full">
				<DoubleLeftLines width="100%" />
			</div>
			<DoubleStatContentBlock content={card?.double_stats?.[0]} hideBottomRow />
			<DoubleStatContentBlock content={card?.double_stats?.[1]} hideTopRow />
			<div className="flex w-full flex-col justify-end">
				<DoubleRightLines width="100%" />
			</div>
		</div>
	);
}
function DoubleLeftLines({ width = null, height = null }) {
	return (
		<svg width={width} height={height} viewBox="0 0 314 174" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M313 0V174" stroke="white" strokeWidth="0.5" />
			<path d="M294.291 0V174" stroke="white" />
			<path d="M275.58 0V174" stroke="white" strokeWidth="1.5" />
			<path d="M256.871 0V174" stroke="white" strokeWidth="2" />
			<path d="M238.162 0V174" stroke="white" strokeWidth="2.5" />
			<path d="M219.451 0V174" stroke="white" strokeWidth="3" />
			<path d="M200.742 0V174" stroke="white" strokeWidth="3.5" />
			<path d="M182.033 0V174" stroke="white" strokeWidth="4" />
			<path d="M163.322 0V174" stroke="white" strokeWidth="4.5" />
			<path d="M144.613 0V174" stroke="white" strokeWidth="5" />
			<path d="M125.902 0V174" stroke="white" strokeWidth="5.5" />
			<path d="M107.193 0V174" stroke="white" strokeWidth="6" />
			<path d="M88.4844 0V174" stroke="white" strokeWidth="6.5" />
			<path d="M69.7734 0V174" stroke="white" strokeWidth="7" />
			<path d="M51.0645 0V174" stroke="white" strokeWidth="7.5" />
			<path d="M32.3555 0V174" stroke="white" strokeWidth="8" />
			<path d="M13.6445 0V174" stroke="white" strokeWidth="8.5" />
		</svg>
	);
}

function DoubleRightLines({ width = null, height = null }) {
	return (
		<svg width={width} height={height} viewBox="0 0 314 174" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1 0V174" stroke="white" strokeWidth="0.5" />
			<path d="M19.709 0V174" stroke="white" />
			<path d="M38.4199 0V174" stroke="white" strokeWidth="1.5" />
			<path d="M57.1289 0V174" stroke="white" strokeWidth="2" />
			<path d="M75.8379 0V174" stroke="white" strokeWidth="2.5" />
			<path d="M94.5488 0V174" stroke="white" strokeWidth="3" />
			<path d="M113.258 0V174" stroke="white" strokeWidth="3.5" />
			<path d="M131.967 0V174" stroke="white" strokeWidth="4" />
			<path d="M150.678 0V174" stroke="white" strokeWidth="4.5" />
			<path d="M169.387 0V174" stroke="white" strokeWidth="5" />
			<path d="M188.098 0V174" stroke="white" strokeWidth="5.5" />
			<path d="M206.807 0V174" stroke="white" strokeWidth="6" />
			<path d="M225.516 0V174" stroke="white" strokeWidth="6.5" />
			<path d="M244.227 0V174" stroke="white" strokeWidth="7" />
			<path d="M262.936 0V174" stroke="white" strokeWidth="7.5" />
			<path d="M281.645 0V174" stroke="white" strokeWidth="8" />
			<path d="M300.355 0V174" stroke="white" strokeWidth="8.5" />
		</svg>
	);
}

function DoubleStatContentBlock({ content, hideTopRow = false, hideBottomRow = false }) {
	return (
		<div className="flex h-full flex-col items-start justify-between py-3 pl-[22px] pr-3">
			<TextStrokeStack
				hideTopRow={hideTopRow}
				hideBottomRow={hideBottomRow}
				topText={hideBottomRow ? content?.top_text : ""}
				centerText={hideBottomRow ? content?.bottom_text : content?.top_text}
				bottomText={hideTopRow ? content?.bottom_text : ""}
				options={{
					textColor: "navy",
					bgColor: "lightBlue",
					strokeColor: "navy",
				}}
			/>

			<p className="text-22 font-[450] text-navy" dangerouslySetInnerHTML={{ __html: content?.label }} />
		</div>
	);
}

export default DoubleStatCard;
