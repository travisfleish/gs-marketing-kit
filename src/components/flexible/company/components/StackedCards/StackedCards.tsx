import React, { createRef, useRef, useState } from "react";
import clsx from "clsx";
import { useIsomorphicLayoutEffect, useInView } from "framer-motion";
import useSection from "~/components/layouts/Section/useSection";
import { useMeasure, useWindowSize } from "react-use";
import TwoColContent, { TwoColContentProps } from "../../../content/components/TwoColContent";
import HeadingAssetRow, { HeadingAssetRowProps } from "./HeadingAssetRow";

interface StackedCard {
	component_type: "twoColContent" | "headingAssetRow";
	two_col_content: TwoColContentProps;
	heading_asset_row: HeadingAssetRowProps;
}
interface StackedCardsProps {
	content: {
		cards: StackedCard[];
	};
}

function StackedCards(props: StackedCardsProps) {
	const [linesHeightRef, { height: linesHeight }] = useMeasure() as any;
	const { width: windowWidth } = useWindowSize();

	const { content } = props;
	const cardRefs = useRef([]) as any;

	const [totalCardsHeight, setTotalCardsHeight] = useState(0);

	const { paddingBottomMap, paddingTopMap } = useSection();

	// Initialize cardRefs with refs for each card
	cardRefs.current = content?.cards.map((_: any, i: string | number) => cardRefs.current[i] || createRef());

	// Calculate total height of all cards by summing up the offsetHeight of each card
	useIsomorphicLayoutEffect(() => {
		const newTotalHeight = cardRefs.current.reduce(
			(sum: any, ref: { current: { offsetHeight: number } }) => sum + (ref.current ? ref.current.offsetHeight : 0),
			0
		);

		setTotalCardsHeight(newTotalHeight);
	}, [windowWidth, content?.cards]);

	const cardPaddingMap = {
		twoColContent: `${paddingBottomMap?.min} ${paddingTopMap?.min}`,
		headingAssetRow: `${paddingBottomMap?.min} ${paddingTopMap?.min}`,
	};

	const linesRef = useRef(null);
	const isInView = useInView(linesRef, { amount: 0.7 });

	const marginValue = windowWidth > 768 ? 12 : 4;
	const cardTopValue = windowWidth > 768 ? 18 : 10;

	return (
		<div className="stacked-cards">
			{/* Lines */}
			<div ref={linesHeightRef} className="sticky top-0">
				<div
					ref={linesRef}
					className={clsx(
						isInView ? "scale-y-100" : "scale-y-0",
						"origin-top transition-transform duration-300 ease-linear",
						"leaders-grid__row-one__lines flex w-full flex-col"
					)}
				>
					{Array(5)
						.fill("")
						.map((_, i) => (
							<div style={{ height: `${12 - i * 2.4}px`, marginBottom: `${marginValue + i * 0.6}px` }} className="w-full bg-blue" />
						))}
				</div>
			</div>

			<div className="">
				<div
					className="relative"
					style={{
						height: totalCardsHeight + content.cards.length * 18 + linesHeight,
					}}
				>
					{content?.cards?.length > 0 &&
						content?.cards?.map((card, index) => {
							const componentMap = {
								twoColContent: <TwoColContent {...card.two_col_content} />,
								headingAssetRow: <HeadingAssetRow {...card.heading_asset_row} />,
							};

							return (
								<div
									ref={cardRefs.current[index]}
									style={{
										top: `${index * cardTopValue + linesHeight}px`,
										borderTop: "1px solid",
										borderColor: "rgba(0, 0, 220, 1)",
									}}
									className={clsx(cardPaddingMap?.[card?.component_type], "sticky bg-white")}
									key={`card-${index}`}
								>
									{componentMap[card.component_type]}
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
}

export default StackedCards;
