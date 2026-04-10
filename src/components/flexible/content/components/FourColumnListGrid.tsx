import React from "react";
// elements
// helpers
import { getClassValue } from "~/components/ColorHelpers";

interface ThreeColumnCardGridProps {
	spring_colour?: {
		colours?: string;
	};
	hide_springs?: boolean;
	grid: {
		heading: string;
		description: string;
	}[];
}

function FourColumnListGrid({ spring_colour, hide_springs, grid }: ThreeColumnCardGridProps) {
	const bars = Array.from({ length: 12 }, (_, i) => i + 1);

	return (
		<div className="grid gap-y-6 md:grid-cols-4 md:gap-6">
			{grid?.map((item, i) => (
				<div key={i} className="overflow-hidden rounded-lg bg-lightGrey text-navy">
					{/* content */}
					<div className="p-6">
						<span className="text-h3 block pb-4 text-blue md:pb-6">{i + 1}.</span>
						<h3 className="text-h7 mb-2 lg:mb-3" dangerouslySetInnerHTML={{ __html: item?.heading }} />
						{item?.description && (
							<p className="text-18 font-body !leading-[1.45] !tracking-[-0.01125em]" dangerouslySetInnerHTML={{ __html: item?.description }} />
						)}
					</div>
				</div>
			))}
		</div>
	);
}

export default FourColumnListGrid;
