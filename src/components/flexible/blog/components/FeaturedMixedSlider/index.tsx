import { useState } from "react";
import { NavLeftIcon } from "~/components/elements/Icons";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import clsx from "clsx";
import MixedSliderCard from "./MixedSliderCard";
import { FeaturedItem } from "./types";

interface FeaturedMixedSliderProps {
	heading?: string;
	items: FeaturedItem[];
}

function FeaturedMixedSlider(props: FeaturedMixedSliderProps) {
	// console.log("FeaturedMixedSlider props:", props);

	const { heading, items } = props;

	const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);
	const [_, setSwiperInstanceUpdate] = useState<SwiperCore | null>(null);

	const disablePrevButton = swiperInstance?.isBeginning;
	const disableNextButton = swiperInstance?.isEnd;

	return (
		<div className="featured-page-post-slider">
			{/* Heading and navigation */}
			<div className="mb-12 flex justify-between gap-12 md:mb-16 xl:mb-24">
				{/* Heading */}
				<h3 dangerouslySetInnerHTML={{ __html: heading }} className="font-normal tracking-[-0.0175em]" />

				{/* Navigation buttons */}
				<div className="flex gap-2">
					{/* Prev btn */}
					<button
						className={clsx(disablePrevButton && "pointer-events-none opacity-50")}
						aria-label="Go to previous slides"
						onClick={() => {
							swiperInstance.slidePrev();
						}}
						type="button"
					>
						<NavLeftIcon circleClassName="group-hover:text-navy text-white" arrowClassName="text-navy group-hover:text-white" />
					</button>

					{/* Next btn */}
					<button
						className={clsx(disableNextButton && "pointer-events-none opacity-50")}
						aria-label="Go to next slides"
						onClick={() => {
							swiperInstance.slideNext();
						}}
						type="button"
					>
						<NavLeftIcon circleClassName="group-hover:text-navy text-white" arrowClassName="text-navy group-hover:text-white" className="rotate-180" />
					</button>
				</div>
			</div>

			{/* Mixed Slider */}
			<Swiper
				onSwiper={(s) => setSwiperInstance(s)}
				onSlideChange={(s) => {
					setSwiperInstanceUpdate({ ...s });
				}}
				// className="!overflow-visible"
				spaceBetween={24}
				breakpoints={{
					480: { slidesPerView: 1.75 },
					768: { slidesPerView: 3.2 },
				}}
				className="!overflow-visible"
			>
				{items?.length > 0 &&
					items?.map((item, index) => (
						<SwiperSlide key={`slide-${index}`}>
							<MixedSliderCard key={`item-${index}`} item={item} />
						</SwiperSlide>
					))}
			</Swiper>
		</div>
	);
}

export default FeaturedMixedSlider;
