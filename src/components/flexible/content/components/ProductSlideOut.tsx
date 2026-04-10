import React, { useState } from "react";
// elements
import { AssetProps } from "~/components/elements/media/Asset";
import { LazyMotion, m, domAnimation } from "framer-motion";
// blocks
import ProductSlideOutCard from "./ProductSlideOut/ProductSlideOutCard";

interface ProductSlideOutProps {
	items: {
		colours?: string;
		media: AssetProps;
		link: {
			title: string;
			url: string;
			target: "_blank" | "";
		};
		heading_width?: "default" | "small";
		description: string;
	}[];
}

function ProductSlideOut({ items }: ProductSlideOutProps) {
	const [activeSlide, setActiveSlide] = useState(0);

	return (
		<LazyMotion features={domAnimation}>
			<div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-8 lg:flex lg:flex-row lg:gap-x-0 lg:gap-y-0 lg:space-x-6">
				{items?.length > 0 &&
					items?.map((item, i) => (
						<ProductSlideOutCard key={item?.link?.title} item={item} index={i} setActiveSlide={setActiveSlide} activeSlide={activeSlide} />
					))}
			</div>
		</LazyMotion>
	);
}

export default ProductSlideOut;
