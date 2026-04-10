import React from "react";
// elements
import { AssetProps } from "~/components/elements/media/Asset";
import useWindowSize from "~/hooks/useWindowSize";
// blocks
import { Swiper, SwiperSlide } from "swiper/react";
import GridCard from "./FourColumnThumbnailGrid/GridCard";
// swiper :(
import "swiper/css";

interface FourColumnThumbnailGridProps {
	grid: {
		media: AssetProps;
		link: {
			url: string;
			title: string;
			target: "_blank" | "";
		};
		description: string;
	}[];
}

function FourColumnThumbnailGrid({ grid }: FourColumnThumbnailGridProps) {
	const { width: windowWidth } = useWindowSize();
	const isDesktop = windowWidth >= 1024;

	if (isDesktop) {
		return <div className="grid w-full grid-cols-4 gap-6">{grid?.map((item) => <GridCard key={item?.link?.title} item={item} />)}</div>;
	}

	return (
		<Swiper
			direction="horizontal"
			spaceBetween={24}
			slidesPerView={1.25}
			breakpoints={{
				540: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 3,
				},
			}}
			className="!mx-0 !overflow-visible will-change-transform"
		>
			{grid?.length > 0 &&
				grid?.map((item) => (
					<SwiperSlide key={item?.link?.title}>
						<GridCard key={item?.link?.title} item={item} />
					</SwiperSlide>
				))}
		</Swiper>
	);
}

export default FourColumnThumbnailGrid;
