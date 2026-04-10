import { useState } from "react";
import { WpTeamMemberPost } from "~/types/wp";
import { getSplitBreakText } from "~/utils/text";
import { useWindowSize } from "react-use";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useIsClient from "~/hooks/useIsClient";
import LeadersGridCard from "./LeadersGridCard";

interface LeadersGridProps {
	content: {
		heading: string;
		team_members: WpTeamMemberPost[];
	};
}

function LeadersGrid(props: LeadersGridProps) {
	const { content } = props;
	const { heading, team_members } = content;
	const { width: windowWidth } = useWindowSize();

	const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);
	const [_, setSwiperInstanceUpdate] = useState<SwiperCore | null>(null);

	const { isClient } = useIsClient();

	return (
		<div className="leaders-grid">
			<div className="flex flex-col items-center md:items-end">
				{/* Heading */}
				{!!heading && (
					<span
						className="text-h2 mx-auto mb-12 font-[450] text-white sm:mb-20"
						dangerouslySetInnerHTML={{
							__html: getSplitBreakText({
								text: heading,
								breakAtAll: true,
							}),
						}}
					/>
				)}

				{/* Grid */}
				{team_members?.length > 0 && isClient && (
					<>
						{/* Desktop */}
						{windowWidth > 768 && (
							<div className="relative mb-6 grid w-full grid-cols-2 gap-6 md:mb-9 md:grid-cols-3 md:gap-9 lg:grid-cols-4">
								{[...team_members]?.map((team_member, i) => (
									<LeadersGridCard isFirstItem={i === 0} isLastItem={i === team_members.length - 1} key={team_member?.ID} team_member={team_member} />
								))}
							</div>
						)}

						{windowWidth <= 768 && (
							<div className="w-full">
								<Swiper
									onSwiper={(s) => setSwiperInstance(s)}
									onSlideChange={(s) => {
										setSwiperInstanceUpdate({ ...s });
									}}
									className="!overflow-visible"
									spaceBetween={24}
									slidesPerView={1.4}
									breakpoints={{
										480: { slidesPerView: 1.75 },
										768: { slidesPerView: 2 },
									}}
								>
									{team_members?.map((team_member, i) => (
										<SwiperSlide key={`slide-${i}`}>
											<LeadersGridCard isFirstItem={i === 0} isLastItem={i === team_members.length - 1} key={team_member?.ID} team_member={team_member} />
										</SwiperSlide>
									))}
								</Swiper>
							</div>
						)}
					</>
				)}
			</div>
		</div>
	);
}

export default LeadersGrid;
