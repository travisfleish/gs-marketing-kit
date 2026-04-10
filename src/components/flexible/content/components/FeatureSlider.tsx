import React, { useRef } from "react";
// elements
import { Link } from "~/components/elements/links/Link";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { RightArrowCircle } from "~/components/elements/Icons";
import { getBackgroundAndTextColor } from "~/components/ColorHelpers";
// swiper
import Asset, { AssetProps } from "~/components/elements/media/Asset";

import clsx from "clsx";

// swiper :(
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css";
import Media from "../../media/components/Media";

function FeatureSlider({ slides = [] }) {
	const swiperRef = useRef(null);
	return (
		<LazyMotion features={domAnimation}>
			<Swiper
				ref={swiperRef}
				direction="horizontal"
				spaceBetween={92}
				speed={1200}
				slidesPerView={1.15}
				centeredSlides
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
				}}
				breakpoints={{
					320: {
						slidesPerView: 1,
					},
					1200: {
						slidesPerView: 1.15,
					},
				}}
				modules={[Autoplay, Pagination]}
				className="quote-slider !mx-0 !overflow-visible will-change-transform"
			>
				{slides?.map((slide) => (
					<SwiperSlide key={`slide-${slide.permalink}`} className="!h-auto overflow-hidden rounded-xl transition-all duration-300 md:max-h-[620px]">
						{({ isActive }) => (
							<>
								{slide?.layout === "image" && (
									<SlideLayoutImage
										isActive={isActive}
										title={slide?.image.title}
										link={slide?.image?.link}
										colours={slide?.image.colours}
										image={slide?.image}
									/>
								)}
								{slide?.layout === "video" && <Media media={slide?.video?.media} options={slide?.video?.options} />}
							</>
						)}
					</SwiperSlide>
				))}
			</Swiper>
		</LazyMotion>
	);
}

export default FeatureSlider;

function SlideLayoutImage({ title, colours, image, isActive, link }) {
	// const { title } = props;
	const theme = getBackgroundAndTextColor(colours);
	const ref = useRef(null);

	return (
		<div ref={ref} className={clsx("relative flex h-full flex-col overflow-hidden transition-all duration-300 sm:rounded-xl", theme)}>
			<div className="absolute left-0 top-0 h-full w-[50%]">
				<RightLines isActive={isActive} height="100%" />
			</div>
			{isActive && (
				<m.div
					initial={{ opacity: 0 }}
					transition={{ delay: 1.3, duration: 0.55 }}
					animate={{
						opacity: isActive ? 1 : 0,
					}}
					className="flex h-full flex-col justify-between p-4  md:px-11 md:py-8"
				>
					<div className="relative rounded-xl md:aspect-[974/400]">
						<Link href={link?.url} className="w-full">
							<Asset {...image} priority className="!w-[80% mx-auto] mx-auto max-h-[130px] rounded-xl sm:max-h-full sm:!w-auto" />
						</Link>
					</div>
					<div className="items-end justify-between text-center sm:text-left md:flex">
						<div className="pt-3 md:max-w-[430px] md:pt-6">
							<Link href={link?.url}>
								<h2 className="text-40-s text-center !leading-[1.1] md:text-left">{title}</h2>
							</Link>
						</div>
						<Link href={link?.url} className="mt-2 flex items-center space-x-3 md:mt-0">
							<RightArrowCircle />
							<span className="text-18 font-semibold">{link?.title}</span>
						</Link>
					</div>
				</m.div>
			)}
		</div>
	);
}

function RightLines({ height = null, width = null, isActive = false }) {
	return (
		<LazyMotion features={domAnimation}>
			<svg
				style={{
					transformBox: "fill-box",
				}}
				width={width}
				height={height}
				viewBox="0 0 500 480"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<m.g
					style={{
						transformBox: "fill-box",
					}}
					initial={{ scaleX: 1 }}
					animate={{
						scaleX: isActive ? 0 : 1,
						transition: {
							duration: 0.7,
							delay: 0.8,
							ease: "easeInOut",
						},
						originX: "0px",
					}}
				>
					<path d="M450 265.873L450 4.27961e-05" stroke="#0D1226" strokeWidth="0.49655" />
					<path d="M431.419 265.873L431.419 4.27961e-05" stroke="#0D1226" strokeWidth="0.9931" />
					<path d="M412.839 265.873L412.839 4.27961e-05" stroke="#0D1226" strokeWidth="1.48965" />
					<path d="M394.258 265.873L394.258 4.27961e-05" stroke="#0D1226" strokeWidth="1.9862" />
					<path d="M375.677 265.873L375.677 4.27961e-05" stroke="#0D1226" strokeWidth="2.48275" />
					<path d="M357.097 265.873L357.097 4.27961e-05" stroke="#0D1226" strokeWidth="2.9793" />
					<path d="M338.516 265.873L338.516 4.27961e-05" stroke="#0D1226" strokeWidth="3.47585" />
					<path d="M319.936 265.873L319.936 4.27961e-05" stroke="#0D1226" strokeWidth="3.9724" />
					<path d="M301.355 265.873L301.355 4.27961e-05" stroke="#0D1226" strokeWidth="4.46895" />
					<path d="M282.774 265.873L282.774 4.27961e-05" stroke="#0D1226" strokeWidth="4.9655" />
					<path d="M264.193 265.873L264.193 4.27961e-05" stroke="#0D1226" strokeWidth="5.46205" />
					<path d="M245.613 265.873L245.613 4.27961e-05" stroke="#0D1226" strokeWidth="5.9586" />
					<path d="M227.032 265.873L227.032 4.27961e-05" stroke="#0D1226" strokeWidth="6.45515" />
					<path d="M208.452 265.873L208.452 4.27961e-05" stroke="#0D1226" strokeWidth="6.9517" />
					<path d="M189.871 265.873L189.871 4.27961e-05" stroke="#0D1226" strokeWidth="7.44825" />
					<path d="M171.291 265.873L171.291 4.27961e-05" stroke="#0D1226" strokeWidth="7.9448" />
					<path d="M152.709 265.873L152.709 4.27961e-05" stroke="#0D1226" strokeWidth="8.44135" />
					<path d="M134.129 265.873L134.129 4.27961e-05" stroke="#0D1226" strokeWidth="8.93789" />
					<path d="M115.548 265.873L115.548 4.27961e-05" stroke="#0D1226" strokeWidth="9.43444" />
					<path d="M96.9678 265.873L96.9678 4.27961e-05" stroke="#0D1226" strokeWidth="9.93099" />
					<path d="M78.3872 265.873L78.3872 4.27961e-05" stroke="#0D1226" strokeWidth="10.4275" />
					<path d="M59.8062 265.873L59.8062 4.27961e-05" stroke="#0D1226" strokeWidth="10.9241" />
					<path d="M41.2256 265.873L41.2256 4.27961e-05" stroke="#0D1226" strokeWidth="11.4206" />
					<path d="M22.645 265.873L22.645 4.27961e-05" stroke="#0D1226" strokeWidth="11.9172" />
					<path d="M4.06445 265.873L4.06445 4.27961e-05" stroke="#0D1226" strokeWidth="12.4137" />
					<path d="M580 603V265.031" stroke="#0D1226" strokeWidth="0.49655" />
					<path d="M561.419 603V265.031" stroke="#0D1226" strokeWidth="0.9931" />
					<path d="M542.839 603V265.031" stroke="#0D1226" strokeWidth="1.48965" />
					<path d="M524.258 603V265.031" stroke="#0D1226" strokeWidth="1.9862" />
					<path d="M505.677 603V265.031" stroke="#0D1226" strokeWidth="2.48275" />
					<path d="M487.097 603V265.031" stroke="#0D1226" strokeWidth="2.9793" />
					<path d="M468.516 603V265.031" stroke="#0D1226" strokeWidth="3.47585" />
					<path d="M449.936 603V265.031" stroke="#0D1226" strokeWidth="3.9724" />
					<path d="M431.355 603V265.031" stroke="#0D1226" strokeWidth="4.46895" />
					<path d="M412.774 603V265.031" stroke="#0D1226" strokeWidth="4.9655" />
					<path d="M394.193 603V265.031" stroke="#0D1226" strokeWidth="5.46205" />
					<path d="M375.613 603V265.031" stroke="#0D1226" strokeWidth="5.9586" />
					<path d="M357.032 603V265.031" stroke="#0D1226" strokeWidth="6.45515" />
					<path d="M338.452 603V265.031" stroke="#0D1226" strokeWidth="6.9517" />
					<path d="M319.871 603V265.031" stroke="#0D1226" strokeWidth="7.44825" />
					<path d="M301.291 603V265.031" stroke="#0D1226" strokeWidth="7.9448" />
					<path d="M282.71 603V265.031" stroke="#0D1226" strokeWidth="8.44135" />
					<path d="M264.129 603V265.031" stroke="#0D1226" strokeWidth="8.93789" />
					<path d="M245.548 603L245.548 265.031" stroke="#0D1226" strokeWidth="9.43444" />
					<path d="M226.968 603L226.968 265.031" stroke="#0D1226" strokeWidth="9.93099" />
					<path d="M208.387 603L208.387 265.031" stroke="#0D1226" strokeWidth="10.4275" />
					<path d="M189.807 603L189.807 265.031" stroke="#0D1226" strokeWidth="10.9241" />
					<path d="M171.226 603L171.226 265.031" stroke="#0D1226" strokeWidth="11.4206" />
					<path d="M152.646 603L152.646 265.031" stroke="#0D1226" strokeWidth="11.9172" />
					<path d="M134.065 603L134.065 265.031" stroke="#0D1226" strokeWidth="12.4137" />
					<path d="M115.484 603L115.484 265.031" stroke="#0D1226" strokeWidth="12.9103" />
					<path d="M96.9033 603L96.9033 265.031" stroke="#0D1226" strokeWidth="13.4068" />
					<path d="M78.3228 603L78.3228 265.031" stroke="#0D1226" strokeWidth="13.9034" />
					<path d="M59.7422 603L59.7422 265.031" stroke="#0D1226" strokeWidth="14.3999" />
					<path d="M41.1616 603L41.1616 265.031" stroke="#0D1226" strokeWidth="14.8965" />
					<path d="M22.5811 603L22.5811 265.031" stroke="#0D1226" strokeWidth="15.393" />
					<path d="M4.00049 603L4.00049 265.031" stroke="#0D1226" strokeWidth="15.8896" />
				</m.g>
			</svg>
		</LazyMotion>
	);
}
