import { m } from "framer-motion";

function StatisticCard({ card, isInView }) {
	const { statistic } = card;

	return (
		<m.div
			animate={{ y: isInView ? 0 : "105%", transition: { delay: 0.1, duration: 0.4, ease: "easeInOut" } }}
			className="relative flex h-full w-full flex-col justify-between rounded-lg bg-blue 960:h-auto 960:rounded-t-lg"
		>
			<div className="p-4 md:p-6">
				{/* Heading */}
				{!!statistic?.heading && (
					<p
						className="text-h2 mb-4 !tracking-[-0.02em] text-lightBlue sm:mb-12 xl:mb-[100px]"
						dangerouslySetInnerHTML={{
							__html: statistic.heading,
						}}
					/>
				)}

				{/* Label */}
				{!!statistic?.label && (
					<p
						className="text-16 mb-2 font-body text-lightBlue/90"
						dangerouslySetInnerHTML={{
							__html: statistic.label,
						}}
					/>
				)}
			</div>

			{/* Lines */}
			<div className="flex flex-col-reverse gap-[12px]">
				{Array(7)
					.fill("")
					.map((_, i) => (
						<div key={`statistic-line-${i}`} style={{ height: `${4 - i * 0.6}px` }} className="w-full bg-lightBlue" />
					))}
			</div>
		</m.div>
	);
}

export default StatisticCard;
