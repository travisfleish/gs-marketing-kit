import { NavLeftIcon, SliderCircleArrow } from "~/components/elements/Icons";
import { getSplitBreakText } from "~/utils/text";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import clsx from "clsx";
import { dummyRoleData } from "./dummyData";
import RoleCard from "./RoleCard";

interface RolesOfTheWeekProps {
	heading?: string;
	roles?: {
		job_role: string;
		category: string;
		location?: string;
		link?: {
			url?: string;
			target?: "_blank" | "";
		};
	}[];
}

function RolesOfTheWeek(props: RolesOfTheWeekProps) {
	const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);
	const [_, setSwiperInstanceUpdate] = useState<SwiperCore | null>(null);

	const { heading, roles } = props;

	const disablePrevButton = swiperInstance?.isBeginning;
	const disableNextButton = swiperInstance?.isEnd;

	return (
		<div className="roles-of-the-week">
			<div className="mb-10 flex justify-between gap-12 sm:mb-13 md:mb-[90px]">
				{/* Heading */}
				<span
					className="text-h3 tracking-[-0.0275em]"
					dangerouslySetInnerHTML={{
						__html: getSplitBreakText({
							text: heading,
							breakAtAll: true,
						}),
					}}
				/>

				{/* Navigation buttons */}
				{roles && roles.length >= 4 && (
					<div className="flex items-center gap-2">
						{/* Prev btn */}
						<button
							aria-label="Go to previous slides"
							onClick={() => {
								swiperInstance.slidePrev();
							}}
							type="button"
							className={clsx(disablePrevButton && "pointer-events-none opacity-50")}
						>
							<SliderCircleArrow circleClassName="group-hover:text-navy text-white" arrowClassName="text-navy group-hover:text-white" />
						</button>

						{/* Next btn */}
						<button
							aria-label="Go to next slides"
							onClick={() => {
								swiperInstance.slideNext();
							}}
							type="button"
							className={clsx(disableNextButton && "pointer-events-none opacity-50")}
						>
							<SliderCircleArrow circleClassName="group-hover:text-navy text-white" arrowClassName="text-navy group-hover:text-white" flip />
						</button>
					</div>
				)}
			</div>

			{/* Roles Slider */}

			{roles && roles.length < 4 ? (
				<div className="flex flex-col justify-center gap-6 lg:flex-row">
					{roles &&
						roles.length > 0 &&
						roles.map((role, index) => (
							<div className="mx-auto w-full lg:mx-0 lg:w-[302px]">
								<RoleCard key={index} role={role} />
							</div>
						))}
				</div>
			) : (
				<Swiper
					onSwiper={(s) => setSwiperInstance(s)}
					onSlideChange={(s) => {
						setSwiperInstanceUpdate({ ...s });
					}}
					// className="!overflow-visible"
					spaceBetween={24}
					slidesPerView={1.25}
					breakpoints={{
						480: { slidesPerView: 1.75 },
						768: { slidesPerView: 3 },
						1200: { slidesPerView: 4 },
					}}
					className="!overflow-visible"
				>
					{roles?.length > 0 &&
						roles?.map((role, index) => (
							<SwiperSlide key={`slide-${index}`} className="!h-auto">
								<RoleCard key={index} role={role} />
							</SwiperSlide>
						))}
				</Swiper>
			)}
		</div>
	);
}

export default RolesOfTheWeek;
