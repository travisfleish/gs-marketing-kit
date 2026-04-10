/* eslint-disable default-case */

import React from "react";
// elements
import Asset, { AssetProps } from "~/components/elements/media/Asset";

interface TwoColumnMediaGridProps {
	layout: "staggered" | "even";
	grid?: { media: AssetProps }[];
}

function TwoColumnMediaGrid({ layout, grid }: TwoColumnMediaGridProps) {
	return (
		<div className="grid gap-y-6 sm:grid-cols-8 sm:gap-6">
			{grid?.map((item, index) => {
				const cardWidth = [];

				if (layout === "staggered") {
					switch (index % 4) {
						case 0:
							cardWidth.push("sm:col-span-5");
							break;
						case 1:
							cardWidth.push("sm:col-span-3");
							break;
						case 2:
							cardWidth.push("sm:col-span-3");
							break;
						case 3:
							cardWidth.push("sm:col-span-5");
							break;
					}
				} else {
					cardWidth.push("sm:col-span-4");
				}

				return (
					<div key={index} className={`relative overflow-hidden rounded-md lg:rounded-lg ${cardWidth.join(" ")}`}>
						<Asset {...item.media} className="object-cover" />
					</div>
				);
			})}
		</div>
	);
}

export default TwoColumnMediaGrid;
