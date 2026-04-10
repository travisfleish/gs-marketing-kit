import React from "react";
// helpers
// todo - optimise this
import { getClassValue, textColorStat, textOutlineColorStat, textStrokeColorStat } from "~/components/ColorHelpers";
import TextStrokeStack from "~/components/elements/TextStrokeStack";

interface StatsGridProps {
	sectionBG?: string;
	columns: "three" | "four";
	stats: {
		stat: string;
		old_stat?: string;
		caption: string;
	}[];
}

function StatsGrid({ sectionBG, columns, stats }: StatsGridProps) {
	const columnsClasses = [""];
	const cardClasses = ["space-y-0"];
	const statsClass = [""];
	if (columns === "three") {
		columnsClasses.push("grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 md:gap-10");
		statsClass.push(" text-64");
	} else {
		columnsClasses.push("grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-10");
		statsClass.push(" text-70");
	}

	return (
		<div className={`grid ${columnsClasses.join("")}`}>
			{stats?.map((item, l) => (
				<div
					key={l}
					className={`flex flex-col items-center text-center ${(l + 1) % 3 === 0 && columns === "three" ? "sm:col-span-2 md:col-span-1" : ""} ${cardClasses.join(" ")}`}
				>
					<div className={`relative ${statsClass.join(" ")} is-stat py-0 font-heading font-[450]`}>
						<TextStrokeStack
							topText={item?.old_stat || item.stat}
							bottomText={item?.old_stat || item.stat}
							centerText={item.stat}
							int={l}
							options={{
								textColor: "navy",
								strokeColor: "navy",
								bgColor: "white",
								textSize: "64",
							}}
						/>
					</div>
					<p className="text-20 mt-[0] font-heading !leading-[1.4]" dangerouslySetInnerHTML={{ __html: item.caption }} />
				</div>
			))}
		</div>
	);
}

export default StatsGrid;
