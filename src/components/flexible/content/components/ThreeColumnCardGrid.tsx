import React from "react";
// elements
import Asset, { AssetProps } from "~/components/elements/media/Asset";
// helpers
import { getClassValue } from "~/components/ColorHelpers";

interface ThreeColumnCardGridProps {
	spring_colour?: {
		colours?: string;
	};
	hide_springs?: boolean;
	grid: {
		media: AssetProps;
		heading: string;
		description: string;
	}[];
}

function ThreeColumnCardGrid({ spring_colour, hide_springs, grid }: ThreeColumnCardGridProps) {
	const bars = Array.from({ length: 12 }, (_, i) => i + 1);

	return (
		<div className="grid gap-y-6 md:grid-cols-3 md:gap-6">
			{grid?.map((item, i) => (
				<div key={i} className="overflow-hidden rounded-lg bg-lightGrey text-navy">
					{/* media */}
					<div className="relative px-6 py-5 lg:px-[1.875rem] lg:py-[1.625rem]">
						<div className="relative z-10 aspect-[352/195] overflow-hidden rounded-lg">
							<Asset {...item?.media} fill className="object-cover" />
						</div>
						{/* bars */}
						{!hide_springs && (
							<div className="absolute inset-x-0 top-0 flex h-1/2 flex-col justify-between">
								{bars?.map((index) => <div key={index} className={`w-full ${getClassValue(spring_colour?.colours)}`} style={{ height: 6 - 0.5 * index }} />)}
							</div>
						)}
					</div>
					{/* content */}
					<div className="p-6 lg:p-8">
						<h3 className="text-h6 mb-2 lg:mb-4" dangerouslySetInnerHTML={{ __html: item?.heading }} />
						{item?.description && (
							<p className="text-18 font-body !leading-[1.45] !tracking-[-0.01125em]" dangerouslySetInnerHTML={{ __html: item?.description }} />
						)}
					</div>
				</div>
			))}
		</div>
	);
}

export default ThreeColumnCardGrid;
