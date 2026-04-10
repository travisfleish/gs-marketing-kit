import React from "react";
// elements
import Link from "next/link";
import Asset, { AssetProps } from "~/components/elements/media/Asset";
import { CircleArrow } from "~/components/elements/Icons";
import HighlightedText from "~/components/elements/text/HighlightedText";
// animation
import { m } from "framer-motion";
// helpers
import { getClassValue } from "~/components/ColorHelpers";

interface ProductSlideOutCardProps {
	item: {
		colours?: string;
		media: AssetProps;
		link: {
			title: string;
			url: string;
			target: "_blank" | "";
		};
		heading_width?: "default" | "small";
		description: string;
	};
	setActiveSlide;
	activeSlide;
	index: number;
}

function ProductSlideOutCard({ item, setActiveSlide, activeSlide, index }: ProductSlideOutCardProps) {
	const ease = [0.68, -0.2, 0.15, 0.98];

	let basis = ["", "lg:basis-[28%] xl:basis-[27.3%]", "lg:basis-[23%] xl:basis-[19.8%]"];
	if (activeSlide === 1) {
		basis = ["lg:basis-[28%] xl:basis-[27.3%]", "", "lg:basis-[23%] xl:basis-[19.8%]"];
	} else if (activeSlide === 2) {
		basis = ["lg:basis-[28%] xl:basis-[27.3%]", "lg:basis-[23%] xl:basis-[19.8%]"];
	}

	return (
		<m.div
			layout
			className={`overflow-hidden transition-all duration-500 ${index === 0 ? "md:col-span-2" : ""} ${activeSlide === index ? "grow lg:basis-[44%] xl:basis-[49%]" : `shrink ${basis[index]}`}`}
		>
			<Link
				href={item?.link?.url}
				className={`group flex h-full flex-col ${index === 0 ? "md:max-lg:flex md:max-lg:flex-row md:max-lg:items-center md:max-lg:space-x-8" : ""}`}
				onMouseEnter={() => setActiveSlide(index)}
			>
				{/* thumbnail */}
				<div
					className={`h-auto shrink-0 overflow-hidden rounded-lg transition-colors duration-300 lg:h-[25.75rem] xl:h-[32.5rem] ${index === 0 ? "w-auto md:w-[48%] lg:w-auto" : ""} ${getClassValue(item?.colours)} ${activeSlide === index ? "" : " md:!bg-lightGrey"}`}
				>
					<m.div className="relative aspect-[157/130] h-full w-full max-lg:!opacity-100">
						<Asset {...item?.media} fill className="object-center lg:object-left" isHovered={activeSlide === index} />
						<div className="absolute left-3 right-0 top-3 z-10 h-5 w-5 rounded-full bg-black text-white transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[1] md:scale-0 lg:left-4 lg:top-4 lg:h-8 lg:w-8 lg:rotate-45">
							<CircleArrow />
						</div>
					</m.div>
				</div>
				{/* content */}
				<div className={`pt-8 lg:pl-3 lg:pt-10 ${index === 0 ? "md:w-1/2 md:shrink-0 md:pt-0 lg:w-full" : ""}`}>
					<HighlightedText
						tag="span"
						className={`text-22 is-heading block font-medium lg:mb-4 ${item.heading_width === "small" ? "max-w-[17.7rem]" : "lg:max-w-[17rem] xl:max-w-none"}`}
						content={item?.link?.title}
						color=""
					/>

					<m.p
						className="text-18 w-full max-w-[24rem] font-body max-lg:!translate-x-0 max-lg:!opacity-80 lg:line-clamp-2 lg:max-w-[31.75rem]"
						dangerouslySetInnerHTML={{ __html: item?.description }}
						animate={{
							opacity: activeSlide === index ? 0.8 : 0,
							transform: activeSlide === index ? "translateY(0rem)" : "translateX(1.5rem)",
						}}
						transition={{
							duration: 0.6,
							ease,
						}}
					/>
				</div>
			</Link>
		</m.div>
	);
}

export default ProductSlideOutCard;
