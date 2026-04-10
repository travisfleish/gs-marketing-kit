import { useState } from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { WpPost } from "~/types/wp";
import { NavLeftIcon } from "~/components/elements/Icons";
import clsx from "clsx";
import PostPreviewCard from "./PostPreviewCard";

interface PostsSliderProps {
	heading: string;
	posts: WpPost[];
	categoriesAccessor?: string;
}

function PostsSlider({ heading, posts, categoriesAccessor }: PostsSliderProps) {
	const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);
	const [_, setSwiperInstanceUpdate] = useState<SwiperCore | null>(null);

	const disablePrevButton = swiperInstance?.isBeginning;
	const disableNextButton = swiperInstance?.isEnd;

	return (
		posts?.length > 0 && (
			<div className="posts-slider">
				{/* Heading and navigation */}
				<div className="mb-12 flex items-center justify-between gap-12 md:mb-16 xl:mb-24">
					{/* Heading */}
					<span dangerouslySetInnerHTML={{ __html: heading }} className="text-h3 font-normal" />

					{/* Navigation buttons */}
					<div className="flex gap-2">
						{/* Prev btn */}
						<button
							className={clsx("group", disablePrevButton && "pointer-events-none opacity-50")}
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
							className={clsx("group", disableNextButton && "pointer-events-none opacity-50")}
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

				{/* Post Preview Slider */}
				<Swiper
					onSwiper={(s) => setSwiperInstance(s)}
					onSlideChange={(s) => {
						setSwiperInstanceUpdate({ ...s });
					}}
					spaceBetween={24}
					slidesPerView={1.2}
					breakpoints={{
						480: { slidesPerView: 1.75 },
						768: { slidesPerView: 3.2 },
					}}
					className="!overflow-visible"
				>
					{posts?.length > 0 &&
						posts?.map((post, index) => (
							<SwiperSlide key={`slide-${index}`}>
								<PostPreviewCard categoriesAccessor={categoriesAccessor} key={post.ID} post={post} />
							</SwiperSlide>
						))}
				</Swiper>
			</div>
		)
	);
}

export default PostsSlider;
