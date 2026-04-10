import React from "react";
// elements
import { AssetProps } from "~/components/elements/media/Asset";
// blocks
import ProductGridCard from "./ProductGrid/ProductGridCard";
import FullWidthProductCard from "./ProductGrid/FullWidthProductCard";

interface ProductGridProps {
	grid?: {
		acf_fc_layout?: "full_width" | "half_grid" | "staggered_grid_left" | "staggered_grid_right";
		content_width?: "small" | "medium" | "large";
		card?: {
			heading?: string;
			content?: string;
			link_card;
			media?: AssetProps;
			options?: {
				color?: string;
				content_order: "textFirst" | "mediaFirst";
			};
		};
		card_left?: {
			heading?: string;
			content?: string;
			link_card;
			media?: AssetProps;
			options?: {
				color?: string;
				content_order: "textFirst" | "mediaFirst";
			};
		};
		card_right?: {
			heading?: string;
			content?: string;
			link_card;
			media?: AssetProps;
			options?: {
				color?: string;
				content_order: "textFirst" | "mediaFirst";
			};
		};
	}[];
}

function ProductGrid({ grid }: ProductGridProps) {
	// variables
	// card layout
	// content width -> if full width
	return (
		<div className="mx-auto grid max-w-[69.375rem] gap-y-6 md:grid-cols-12 md:gap-6 lg:gap-10">
			{grid?.map((card, index) => (
				<React.Fragment key={`${card?.acf_fc_layout} - ${index}`}>
					{/* full width */}
					{card?.acf_fc_layout === "full_width" && <FullWidthProductCard key={index} card={card} content_width={card?.content_width} />}
					{/* half grids */}
					{card?.acf_fc_layout === "half_grid" && (
						<div key={`half-grid-${index}`} className="grid gap-y-6 md:col-span-12 md:grid-cols-2 md:gap-x-6 lg:gap-x-10">
							<div className="flex flex-col space-y-5">
								<ProductGridCard card={card.card_left} />
							</div>
							<div className="space-y-5">
								<ProductGridCard card={card.card_right} />
							</div>
						</div>
					)}
					{/* staggered grids */}
					{(card?.acf_fc_layout === "staggered_grid_right" || card?.acf_fc_layout === "staggered_grid_left") && (
						<div key={`${card?.acf_fc_layout}-${index}`} className="grid gap-y-6 md:col-span-12 md:grid-cols-12 md:gap-x-6 lg:gap-x-10">
							<div className={card?.acf_fc_layout === "staggered_grid_left" ? "md:col-span-7" : "md:col-span-5"}>
								<ProductGridCard card={card.card_left} />
							</div>
							<div className={card?.acf_fc_layout === "staggered_grid_left" ? "md:col-span-5" : "md:col-span-7"}>
								<ProductGridCard card={card.card_right} />
							</div>
						</div>
					)}
				</React.Fragment>
			))}
		</div>
	);
}

export default ProductGrid;
