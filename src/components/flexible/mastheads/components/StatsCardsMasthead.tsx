import React from "react";
// elements
import Asset, { AssetProps } from "~/components/elements/media/Asset";
import TextStrokeStack from "~/components/elements/TextStrokeStack";

interface StatsCardsMastheadProps {
	cards?: {
		stat: string;
		old_stat?: string;
		caption?: string;
		background?: AssetProps;
	}[];
}

function StatsCardsMasthead({ cards }: StatsCardsMastheadProps) {
	return (
		<div className="grid gap-y-6 md:grid-cols-3 md:gap-6">
			{cards?.length > 0 &&
				cards?.map((card, index) => (
					<div key={index} className="relative flex aspect-[82/113] flex-col overflow-hidden rounded-lg bg-lightBlue p-4">
						{/* background */}
						<div className="absolute inset-0">
							<Asset {...card?.background} priority={index === 0} className="h-full w-full" />
						</div>
						{/* stats */}
						<div className="relative z-10 mt-auto rounded-md bg-navy p-5 text-white lg:p-6">
							<TextStrokeStack
								centerText={card.stat}
								topText={card?.old_stat || card.stat}
								bottomText={card?.old_stat || card.stat}
								int={index}
								options={{
									textColor: "white",
									strokeColor: "white",
									bgColor: "navy",
									textSize: "64",
								}}
							/>
							<span className="text-20 font-regular mt-2 inline-block font-heading" dangerouslySetInnerHTML={{ __html: card?.caption }} />
						</div>
					</div>
				))}
		</div>
	);
}

export default StatsCardsMasthead;
