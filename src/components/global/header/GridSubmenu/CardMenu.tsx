import React from "react";
// elements
import Link from "next/link";
import cmsUrlToNextHref from "~/utils/cmsUrlToNextHref";
import { RightArrow, CircleArrow } from "~/components/elements/Icons";
import trackEvent from "~/utils/trackEvent";
import WpImage, { ImageProps } from "~/components/elements/Wp";

interface CardMenuProps {
	parentMenu: any;
	card: {
		card_link: {
			url: string;
			title: string;
			target: "_blank" | "";
		};
		card_type: "image" | "links";
		image: ImageProps;
		description: string;
		inner_menu: {
			link: {
				url: string;
				title: string;
				target: "_blank" | "";
			};
		}[];
	};
}

function CardMenu({ card, parentMenu }: CardMenuProps) {
	const bars = Array.from({ length: 30 }, (_, i) => i + 1);

	const { card_type, image } = card || {};

	return (
		<div className="w-full md:ml-auto md:max-w-[37.625rem]">
			<div className="relative z-10 flex h-full flex-col overflow-hidden rounded-lg bg-navy p-4 text-white lg:p-8">
				{/* card content */}
				<div className="mb-10 max-w-[16.5rem]">
					<span className="text-20 mb-2 font-heading font-medium tracking-[-0.0125em]" dangerouslySetInnerHTML={{ __html: card?.card_link?.title }} />
					<p className="text-15 font-body !leading-[1.4] tracking-[-0.009375em] opacity-80" dangerouslySetInnerHTML={{ __html: card?.description }} />
				</div>

				{/* Image */}
				{card_type === "image" && !!card?.image?.url && (
					<div className="relative z-10 aspect-[400/160] w-full overflow-hidden rounded-xl">
						<WpImage image={image} fill className="object-cover object-center" />
					</div>
				)}

				{/* inner menu */}
				{card_type === "links" && (
					<menu className="relative z-[5] mt-auto grid gap-2 sm:grid-cols-2">
						{card?.inner_menu?.length > 0 &&
							card?.inner_menu?.map((item) => (
								<Link
									key={item?.link?.title}
									href={cmsUrlToNextHref(item?.link?.url)}
									target={item?.link?.target}
									className="group flex items-center space-x-2 rounded-md bg-white/5 p-4 py-[.94rem] backdrop-blur-lg"
									onClick={() => {
										trackEvent("menu_trackevent", {
											level_1: parentMenu.menu_item.title,
											level_2: item?.link?.title,
											menu_type: "menu_header",
										});
									}}
								>
									<span
										className="text-16 font-heading font-normal !leading-none opacity-[.75] transition-opacity duration-200 group-hover:opacity-100"
										dangerouslySetInnerHTML={{ __html: item?.link?.title }}
									/>
									<div className="h-[0.625rem] w-[0.6875rem] -translate-x-2 opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100">
										<RightArrow />
									</div>
								</Link>
							))}
					</menu>
				)}
				<Link
					href={cmsUrlToNextHref(card?.card_link?.url)}
					target={card?.card_link?.target}
					className="group absolute inset-0"
					onClick={() => {
						trackEvent("menu_trackevent", {
							level_1: parentMenu.menu_item.title,
							level_2: card.card_link.title,
							menu_type: "menu_header",
						});
					}}
				>
					{/* arrow */}
					<div className="absolute right-6 top-6 z-[5] h-5 w-5 rounded-full bg-white text-navy transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[1] lg:rotate-45 lg:scale-0">
						<CircleArrow />
					</div>
					{/* bars */}
					<div className="absolute bottom-[50%] right-0 flex h-[30%] w-1/3 origin-right flex-row-reverse justify-start transition-transform duration-300 group-hover:scale-x-100 lg:w-1/3 lg:scale-x-0">
						{bars.slice(0, 16).map((index) => (
							<div
								key={`bars-first-set-${index}`}
								className="h-full shrink-0 bg-blue"
								style={{ width: `${3.5 - index * 0.2}px`, marginLeft: `${6 + 0.1 * index}px` }}
							/>
						))}
					</div>
					<div className="absolute bottom-0 right-0 flex h-1/2 w-3/4 origin-right flex-row-reverse justify-start transition-transform duration-300 group-hover:scale-x-100 lg:w-1/3 lg:scale-x-0">
						{bars.map((index) => (
							<div
								key={`bars-second-set-${index}`}
								className="h-full shrink-0 bg-blue"
								style={{ width: `${6 - index * 0.2}px`, marginLeft: `${6 + 0.1 * index}px` }}
							/>
						))}
					</div>
				</Link>
			</div>
		</div>
	);
}

export default CardMenu;
