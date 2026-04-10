import React, { useState } from "react";
// elements
import Link from "next/link";
import WpImage, { WpImageProps } from "~/components/elements/Wp";
import { CircleArrow } from "~/components/elements/Icons";

interface LearnGridLinkProps {
	link: LearnGridLinkCardProps;
}

export interface LearnGridLinkCardProps {
	podcast_link?: boolean;
	date?: string;
	tag?: string;
	thumbnail?: WpImageProps["image"];
	link?: {
		title?: string;
		target?: "" | "_blank";
		url?: string;
	};
}

function LearnGridLink({ link }: LearnGridLinkProps) {
	const bars = Array.from({ length: 35 }, (_, i) => i + 1);
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
			href={link?.link?.url}
			onMouseOver={() => setCardHovered(true)}
			onMouseLeave={() => setCardHovered(false)}
			className="group relative flex flex-wrap items-center rounded-lg bg-navy p-4 text-white md:flex-nowrap md:space-x-3 lg:space-x-4"
		>
			{link?.thumbnail && (
				<div className="relative aspect-[1/1] w-[28%] shrink-0 overflow-hidden rounded-[0.1525rem] md:h-[7rem] md:w-[7rem] lg:h-[9.625rem] lg:w-[9.625rem]">
					<WpImage image={link?.thumbnail} fill className="h-full w-full object-cover" />
				</div>
			)}
			{/* arrow */}
			<div className="absolute right-4 top-4 z-10 h-6 w-6 scale-0 rounded-full bg-white text-navy transition-transform duration-200 group-hover:scale-100">
				<CircleArrow />
			</div>
			<div className="w-[72%] pl-4 md:w-auto md:pl-0">
				{/* date tag */}
				<div className="flex items-center space-x-3 lg:space-x-4">
					{link?.tag && (
						<span className="text-15 rounded-md bg-white/10 px-2 py-[.3rem] font-body font-medium text-white" dangerouslySetInnerHTML={{ __html: link?.tag }} />
					)}
					{link?.podcast_link && link?.date && <span className="text-15 font-regular font-body" dangerouslySetInnerHTML={{ __html: link?.date }} />}
				</div>
				<span
					className={`text-h6 !font-book mt-3  md:my-[1.375rem] ${link?.podcast_link ? "line-clamp-1" : "line-clamp-2"}`}
					dangerouslySetInnerHTML={{ __html: link?.link?.title }}
				/>
				{link?.podcast_link && (
					<div className="hidden h-[2.625rem] w-full items-end justify-between overflow-hidden md:flex">
						{bars.map((index) => {
							const translateY = getRandomTranslate(barTranslate);
							return (
								<div
									className="flex h-full flex-col items-center transition-transform duration-300"
									key={`podcast-bar-set-1-${index}`}
									style={{ transform: `translateY(${cardHovered ? translateY[0] : cardHovered[1]}%)` }}
								>
									<div className="h-[.5rem] w-[0.0625rem] shrink-0 bg-lightPurple" />
									<div className="h-full w-[0.2rem] bg-lightPurple" />
								</div>
							);
						})}
					</div>
				)}
			</div>
			{link?.podcast_link && (
				<div className="mt-6 flex h-[2.625rem] w-full shrink-0 items-end justify-between overflow-hidden md:hidden">
					{bars.slice(0, 35)?.map((index) => {
						const translateY = getRandomTranslate(barTranslate);
						return (
							<div
								className="flex h-full flex-col items-center transition-transform duration-300"
								key={`podcast-bar-set-2-${index}`}
								style={{ transform: `translateY(${translateY[0]}%)` }}
							>
								<div className="h-[.5rem] w-[0.0625rem] shrink-0 bg-lightPurple" />
								<div className="h-full w-[0.2rem] bg-lightPurple" />
							</div>
						);
					})}
				</div>
			)}
		</Link>
	);
}
export default LearnGridLink;
