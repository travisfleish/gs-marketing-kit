import React from "react";
// elements
import Asset, { AssetProps } from "~/components/elements/media/Asset";
import HighlightedText from "~/components/elements/text/HighlightedText";
// block
import { sectionColor } from "~/components/ColorHelpers";
import ProductGridLinkCard from "./ProductGridLinkCard";
// helper

interface ProductGridCardProps {
	card: {
		heading?: string;
		content?: string;
		link_card;
		media?: AssetProps;
		embed?: string;
		options?: {
			color?: string;
			content_order: "textFirst" | "mediaFirst";
			add_link?: boolean;
			add_embed?: boolean;
		};
	};
}

function ProductGridCard({ card }: ProductGridCardProps) {
	const cardColour = card.options.color;
	const cardOrder = card.options.content_order;
	const cardClasses = ["", sectionColor(cardColour)];

	// card content order
	if (cardOrder === "textFirst") {
		cardClasses.push(" ");
	} else {
		cardClasses.push(" flex flex-col-reverse");
	}

	// add resource or linkCard
	const hasLink = card?.options?.add_link;

	if (!hasLink) {
		cardClasses.push(" h-full");
	}

	const hasEmbed = card?.options?.add_embed;

	return (
		<>
			<div className={`overflow-hidden rounded-md md:rounded-xl ${cardClasses.join(" ")}`}>
				{/* Content */}
				<div className="mx-auto w-full p-6 md:p-8 lg:p-10">
					<HighlightedText tag="span" className="text-h6 mb-2 block md:mb-4" content={card?.heading} color="" />
					<p className="text-18 font-body opacity-80" dangerouslySetInnerHTML={{ __html: card?.content }} />
				</div>

				{/* Media */}
				<div className="w-full">
					<Asset {...card?.media} />
				</div>
			</div>

			{/* Embed */}
			{hasEmbed && <div dangerouslySetInnerHTML={{ __html: card?.embed }} />}

			{/* Link */}
			{hasLink && <ProductGridLinkCard link={card?.link_card?.link} fullWidth={false} />}
		</>
	);
}

export default ProductGridCard;
