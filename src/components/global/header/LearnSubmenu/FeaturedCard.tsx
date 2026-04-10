import React, { useState } from "react";
// elements
import Link from "next/link";
import Icon from "~/components/elements/media/Icon";
import { CircleArrow } from "~/components/elements/Icons";
import { WpImageProps } from "~/components/elements/Wp";
import trackEvent from "~/utils/trackEvent";

interface FeaturedCardProps {
	parentMenu?: any;
	item: {
		icon: {
			type: "image" | "rive";
			image: WpImageProps["image"];
		};
		link: {
			url: string;
			title: string;
			target: "_blank" | "";
		};
		description: string;
	};
}

function FeaturedCard({ item, parentMenu }: FeaturedCardProps) {
	const bars = Array.from({ length: 48 }, (_, i) => i + 1);
	const barTranslate = [
		[0, 8],
		[5, 45],
		[10, 1],
		[30, 18],
	];

	const getRandomTranslate = (translates) => {
		const values = translates?.map((obj) => obj);
		return values[Math.floor(Math.random() * values.length)];
	};

	const [cardHovered, setCardHovered] = useState(false);
	return (
		<Link
			href={item?.link?.url || "#"}
			target={item?.link?.target}
			className="group flex flex-col overflow-hidden rounded-lg bg-brightGreen p-4 text-navy transition-colors duration-200 hover:bg-brightGreen hover:text-navy md:h-full md:grow md:bg-purple md:text-white"
			onMouseEnter={() => setCardHovered(true)}
			onMouseLeave={() => setCardHovered(false)}
			onClick={() => {
				if (!parentMenu) return;
				trackEvent("menu_trackevent", {
					level_1: parentMenu.menu_item.title,
					level_2: item.link.title,
					menu_type: "menu_header",
				});
			}}
		>
			{/* icon */}
			<div className="item-center relative mb-4 flex h-[3.5rem] w-[3.5rem] invert transition-colors duration-200 group-hover:invert md:mb-6 md:h-[4.375rem] md:w-[4.375rem] md:invert-0">
				<Icon icon={item.icon} />
			</div>
			{/* arrow */}
			<div className="absolute right-4 top-4 h-5 w-5 rounded-full bg-black text-white transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[1] md:right-6 md:top-6 lg:rotate-45 lg:scale-0">
				<CircleArrow />
			</div>
			{/* content */}
			<div className="mb-6 max-w-[19.875rem]">
				<span className="text-20 mb-1 font-heading font-medium tracking-[-0.0125em] lg:mb-2" dangerouslySetInnerHTML={{ __html: item?.link?.title }} />
				<p className="text-15 font-body !leading-[1.4] tracking-[-0.009375em] opacity-80" dangerouslySetInnerHTML={{ __html: item?.description }} />
			</div>
			<div className=" mt-auto flex h-[2.75rem] w-full items-end justify-between overflow-hidden">
				{bars.map((index) => {
					const translateY = getRandomTranslate(barTranslate);
					return (
						<div
							className="flex h-full flex-col items-center transition-transform duration-300"
							key={`featured-card-bar-${index}`}
							style={{ transform: `translateY(${cardHovered ? translateY[0] : cardHovered[1]}%)` }}
						>
							<div className="h-[.5rem] w-[0.0625rem] shrink-0 bg-purple transition-all duration-200 group-hover:bg-purple md:bg-brightGreen" />
							<div className="h-full w-[0.2rem] bg-purple transition-all duration-200 group-hover:bg-purple md:bg-brightGreen" />
						</div>
					);
				})}
			</div>
		</Link>
	);
}

export default FeaturedCard;
