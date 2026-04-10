import React, { useState, useRef } from "react";
// elements
import { Link } from "~/components/elements/links/Link";
import WpImage, { WpImageProps } from "~/components/elements/Wp";
import { m, LazyMotion, domAnimation, useAnimationControls } from "framer-motion";
import { RightArrowCircle } from "~/components/elements/Icons";
// swiper :(
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css";

interface QuoteProps {
	customers: {
		permalink: string;
		acf: {
			media: {
				logo: WpImageProps["image"];
			};
			key_quote: {
				quotation: string;
			};
		};
	}[];
}

function RotatingQuotes({ customers }: QuoteProps) {
	// animation values
	const ease = [0.68, -0.2, 0.15, 0.98];

	const initial = {
		opacity: 0,
		transform: "translateY(-2rem)",
	};

	const animate = {
		opacity: 1,
		transform: "translateY(0rem)",
	};

	const exit = {
		opacity: 0,
		transform: "translateY(2rem)",
	};

	const controls = useAnimationControls();
	// handle slides
	const [activeQuote, setActiveQuote] = useState<number>(0);

	const swiperRef = useRef(null);

	const handleSlideChange = () => {
		if (swiperRef.current) {
			setActiveQuote(swiperRef.current.swiper.activeIndex);
		}
	};
	// slider pagination
	const pagination = {
		clickable: true,
		renderBullet(index, className) {
			return `<button type="button" aria-label="Select the next slide" class="${className}"></button>`;
		},
	};
	return (
		<LazyMotion features={domAnimation}>
			{/* slides */}
			<Swiper
				ref={swiperRef}
				direction="horizontal"
				spaceBetween={24}
				speed={1200}
				slidesPerView={1}
				effect="fade"
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				onSlideChange={handleSlideChange}
				pagination={pagination}
				modules={[Autoplay, Pagination, EffectFade]}
				className="quote-slider !mx-0 !overflow-visible will-change-transform"
			>
				{customers?.map((customer, l) => (
					<SwiperSlide key={`customer-${customer.permalink}`}>
						<div key={`customer-${customer.permalink}`} className="mx-auto flex max-w-[41.5rem] flex-col items-center justify-center text-center">
							<m.div
								className="relative mb-6 h-[3.5rem] w-24 md:h-[4.375rem] lg:mb-[2.1875rem] lg:h-[5.5rem] lg:w-32"
								initial={initial}
								animate={activeQuote === l ? animate : exit}
								transition={{
									duration: activeQuote === l ? 1 : 0.5,
									ease,
									delay: activeQuote === l ? 0.6 : 0.2,
								}}
							>
								<WpImage image={customer.acf?.media?.logo} fill className="h-full w-full object-contain" />
							</m.div>
							<m.blockquote
								className="quote-lg font-book font-heading"
								dangerouslySetInnerHTML={{ __html: customer.acf?.key_quote?.quotation }}
								initial={initial}
								animate={activeQuote === l ? animate : exit}
								transition={{
									duration: activeQuote === l ? 1 : 0.5,
									ease,
									delay: activeQuote === l ? 0.7 : 0.1,
								}}
							/>
							<m.div
								className="mt-12"
								initial={initial}
								animate={activeQuote === l ? animate : exit}
								transition={{
									duration: activeQuote === l ? 1 : 0.5,
									ease,
									delay: activeQuote === l ? 0.8 : 0,
								}}
							>
								<Link href={customer.permalink} className="text-17 group inline-flex items-center space-x-3">
									<div className="z-10 h-[1.625rem] w-[1.625rem]">
										<RightArrowCircle circleClassName="text-navy group-hover:text-blue" arrowClassName="text-white group-hover:text-white" />
									</div>
									<span className="font-semibold" dangerouslySetInnerHTML={{ __html: "Read full story" }} />
								</Link>
							</m.div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</LazyMotion>
	);
}

export default RotatingQuotes;
