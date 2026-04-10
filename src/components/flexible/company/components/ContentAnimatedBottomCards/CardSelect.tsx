// TODO : Update responsiveness

import clsx from "clsx";
import { ContentAnimatedBottomCardsCard } from "./types";
import AssetCard from "./AssetCard";
import StatisticCard from "./StatisticCard";
import TestimonialCard from "./TestimonialCard";

function CardSelect({ card, areCardsInView, index }: { card: ContentAnimatedBottomCardsCard; areCardsInView: boolean; index: number }) {
	const { card_type } = card;

	return (
		// <div className="960:aspect-none aspect-auto h-full w-full md:aspect-[100/100] md:h-auto md:overflow-hidden">
		<>
			{card_type === "asset" && <AssetCard card={card} isInView={areCardsInView} className={clsx(index === 0 && "rounded-lg 960:rounded-t-lg")} />}
			{card_type === "statistic" && <StatisticCard card={card} isInView={areCardsInView} />}
			{card_type === "testimonial" && <TestimonialCard card={card} isInView={areCardsInView} />}
		</>
		// </div>
	);
}

export default CardSelect;
