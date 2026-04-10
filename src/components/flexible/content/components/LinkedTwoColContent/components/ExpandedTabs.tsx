// TODO ; Setup icon themes

import { useState } from "react";
import clsx from "clsx";
import { TabType } from "../types";
import ExpandedTab from "./ExpandedTab";

interface ExpandedTabsProps {
	tabs: TabType[];
	bgColorType: "light" | "dark";
	className?: string;
}

function ExpandedTabs({ tabs, bgColorType = "light", className }: ExpandedTabsProps) {
	const [activeTabIndex, setActiveTabIndex] = useState<number | null>(null);

	return (
		<div
			className={clsx(
				className,
				"mt-8 flex w-full flex-col divide-y divide-lightGrey overflow-hidden rounded-lg",
				bgColorType === "light" && "bg-white",
				bgColorType === "dark" && "bg-lightGrey"
			)}
		>
			{tabs?.length > 0 &&
				tabs?.map((tab, index) => (
					<ExpandedTab
						tab={tab}
						bgColorType={bgColorType}
						key={`tab-${index}`}
						onClick={() => {
							setActiveTabIndex(index === activeTabIndex ? null : index);
						}}
						isActive={index === activeTabIndex}
					/>
				))}
		</div>
	);
}

export default ExpandedTabs;
