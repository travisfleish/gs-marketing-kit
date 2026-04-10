import clsx from "clsx";
import { useInView, motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
// import { getBackgroundColor } from "~/components/ColorHelpers";
import Asset from "~/components/elements/media/Asset";
import { usePageVisibility } from "~/hooks/usePageVisibility";
import { useWindowSize } from "react-use";
import { ThreeColLinesMastheadItem } from "./types";
import { FirstItemLines, SecondItemLines, ThirdItemLines } from "./Lines";

const ROTATING_INTERVAL = 4000;

const assetClassesMap = {
	0: "aspect-[410/347] sm:max-w-[410px] w-full",
	1: "aspect-[410/560] sm:max-w-[410px] w-full",
	2: "aspect-[410/442] sm:max-w-[410px] w-full",
};
const classesMap = {
	0: "mb-2",
	1: "mt-2",
	2: "mb-2",
};

interface GridItemProps {
	item: ThreeColLinesMastheadItem;
	index: number;
}

function GridItem({ item, index }: GridItemProps) {
	const { asset, line_color } = item;

	const ref = useRef(null);
	const isInView = useInView(ref, { amount: 0.7, once: true });

	const yVal = index === 0 ? -20 : 20;

	const [activeIndex, setActiveIndex] = useState(0);
	const assetToRender = item?.layout === "single" ? asset : item?.assets?.[activeIndex];

	const interval = useRef(null);
	const { isVisible } = usePageVisibility();

	const { width: windowWidth } = useWindowSize();
	const isSmallDevice = windowWidth < 640;

	useEffect(() => {
		if (item.layout === "rotating") {
			interval.current = setInterval(() => {
				if (!isVisible) return;
				setActiveIndex((prev) => (prev + 1) % item.assets.length);
			}, ROTATING_INTERVAL);
		}
		return () => {
			clearInterval(interval.current);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeIndex, isVisible, item.layout]);

	return (
		<div
			ref={ref}
			className={clsx("flex gap-2 overflow-hidden", index === 1 && "order-first sm:order-none sm:mt-[12%]", index === 0 ? "flex-col-reverse" : "flex-col")}
		>
			{!isSmallDevice ? (
				<motion.div
					className={clsx("flex-shrink-0", classesMap?.[index])}
					initial={{
						y: yVal,
						opacity: 0,
					}}
					animate={{
						y: isInView ? 0 : yVal,
						opacity: isInView ? 1 : 0,
						transition: {
							type: "spring",
							stiffness: 100,
							damping: 22,
						},
					}}
				>
					{index === 0 && <FirstItemLines width="100%" />}
					{index === 1 && <SecondItemLines width="100%" />}
					{index === 2 && <ThirdItemLines width="100%" />}
				</motion.div>
			) : (
				<div className="w-full">
					{index === 0 && <FirstItemLines width="100%" />}
					{index === 1 && <SecondItemLines width="100%" />}
					{index === 2 && <ThirdItemLines width="100%" />}
				</div>
			)}

			<div className={clsx(index === 1 && "z-10 overflow-hidden rounded-b-lg bg-purple", "overflow-hidden")}>
				<AnimatePresence mode="wait" initial={false}>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.4 }}
						key={activeIndex}
					>
						<Asset {...assetToRender} className={clsx(assetClassesMap?.[index], "object-cover object-bottom")} />
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
}

export default GridItem;
