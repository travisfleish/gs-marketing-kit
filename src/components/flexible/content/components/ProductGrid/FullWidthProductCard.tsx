import React from "react";
// elements
import Asset, { AssetProps } from "~/components/elements/media/Asset";
import HighlightedText from "~/components/elements/text/HighlightedText";
// blocks
import { sectionColor } from "~/components/ColorHelpers";
import ProductGridLinkCard from "./ProductGridLinkCard";
// helper

interface FullWidthProductCardProps {
	content_width;
	card;
}

function FullWidthProductCard({ content_width, card }: FullWidthProductCardProps) {
	// cms variables
	const contentWidth = content_width;
	const cardColour = card.options.color;
	const cardOrder = card.options.content_order;

	const cardClasses = ["", sectionColor(cardColour)];
	const contentClasses = [""];

	// card content order
	if (cardOrder === "textFirst") {
		cardClasses.push("md:items-center  md:flex-row");
		contentClasses.push("md:ml-[3%] md:mr-auto");
	} else {
		cardClasses.push("md:items-center  md:flex-row-reverse");
		contentClasses.push("md:mx-auto");
	}
	// content width
	if (contentWidth === "small") {
		contentClasses.push("max-w-[27.8rem]");
	} else if (contentWidth === "large") {
		contentClasses.push("max-w-[32.5rem]");
	} else {
		contentClasses.push("max-w-[28.25rem]");
	}

	const hasLink = card?.options?.add_link;

	if (hasLink) {
		cardClasses.push("md:!items-stretch");
		contentClasses.push("flex flex-col md:py-[3.5rem]");
	}

	return (
		<div className="md:col-span-12">
			<div className={`flex flex-col overflow-hidden rounded-md md:rounded-xl ${cardClasses.join(" ")}`}>
				{/* content */}
				<div className={`w-full p-6  ${contentClasses.join(" ")}`}>
					<HighlightedText
						tag="span"
						className={`text-h5 mb-4 block lg:mb-6 ${contentWidth === "large" ? "max-w-[22rem]" : ""}`}
						content={card?.heading}
						color=""
					/>
					<p className={`text-18 font-body opacity-80 ${hasLink ? "md:mb-10" : ""}`} dangerouslySetInnerHTML={{ __html: card?.content }} />

					{/* link */}
					{hasLink && <ProductGridLinkCard link={card?.link_card?.link} fullWidth />}
				</div>
				{/* media */}
				<div className="w-full md:max-w-[32.5rem]">
					<Asset {...card?.media} />
				</div>
			</div>
		</div>
	);
}

export default FullWidthProductCard;
