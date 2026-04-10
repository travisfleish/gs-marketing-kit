import React from "react";
// elements
import Link from "next/link";
import WpImage, { WpImageProps } from "~/components/elements/Wp";
import { CircleArrow } from "~/components/elements/Icons";
import { LazyMotion, m, domAnimation } from "framer-motion";

interface PageLinkCardProps {
	content: {
		subheading?: string;
		heading?: string;
		link?: {
			title: string;
			url?: string;
			target: "_blank" | "";
		};
	};
	thumbnail: WpImageProps["image"];
}

function PageLinkCard({ content, thumbnail }: PageLinkCardProps) {
	const ease = [0.68, -0.2, 0.15, 0.98];

	const initial = {
		opacity: 0,
		transform: "translateX(3rem)",
	};

	const scaleAnimate = {
		opacity: 1,
		transform: "scaleX(1)",
	};

	const scaleExit = {
		opacity: 0,
		transform: "scaleX(0)",
	};

	const bars = Array.from({ length: 20 }, (_, i) => i + 1);

	return (
		<LazyMotion features={domAnimation}>
			<Link
				href={content.link?.url || "/#"}
				className="group mx-auto grid max-w-[42rem] overflow-hidden rounded-[.25rem] bg-navy pt-8 text-white md:items-center md:py-16 lg:max-w-[69.375rem] lg:grid-cols-9 lg:gap-x-5 lg:rounded-[.125rem] lg:pb-[10rem] lg:pt-[7.5rem]"
			>
				{/* content */}
				<div className="mb-4 space-y-6 px-5 md:px-8 lg:col-span-5 lg:mb-0 lg:space-y-8 lg:pl-16">
					{content?.subheading && (
						<m.span
							className="text-15 inline-block font-body opacity-80"
							dangerouslySetInnerHTML={{ __html: content?.subheading }}
							initial={initial}
							whileInView={scaleAnimate}
							viewport={{ once: true }}
							transition={{
								duration: 1,
								ease,
								delay: 0.4,
							}}
						/>
					)}
					<m.h3
						className="text-h5 max-w-[20.5rem] !font-[450] !leading-[1.2]"
						initial={initial}
						whileInView={scaleAnimate}
						viewport={{ once: true }}
						transition={{
							duration: 1,
							ease,
							delay: 0.3,
						}}
						dangerouslySetInnerHTML={{ __html: content.heading }}
					/>
					<m.span
						className="text-16 inline-flex items-center space-x-3"
						initial={initial}
						whileInView={scaleAnimate}
						viewport={{ once: true }}
						transition={{
							duration: 1,
							ease,
							delay: 0.4,
						}}
					>
						<div className="z-10 h-[1.375rem] w-[1.375rem] rotate-45 rounded-full bg-white text-navy transition-colors duration-200 group-hover:bg-blue group-hover:text-white">
							<CircleArrow />
						</div>
						<span className="font-semibold" dangerouslySetInnerHTML={{ __html: content?.link?.title }} />
					</m.span>
				</div>
				{/* thumbnail */}
				<div className="relative p-5 pt-6 md:p-8 lg:col-span-4 lg:p-0">
					{/* image */}
					<m.div
						className="relative z-10 aspect-[78/47] w-full max-w-[32rem] overflow-hidden rounded-[0.375rem] lg:max-w-[25.625rem]"
						initial={initial}
						whileInView={scaleAnimate}
						viewport={{ once: true }}
						transition={{
							duration: 1,
							ease,
							delay: 0.1,
						}}
					>
						<WpImage image={thumbnail} fill className="h-full w-full object-cover" />
					</m.div>
					{/* image mask */}
					<m.div
						className="absolute left-[-9%] top-[15%] hidden aspect-[1/1] h-full bg-[#EAFBFF] lg:block"
						initial={initial}
						whileInView={scaleAnimate}
						viewport={{ once: true }}
						transition={{
							duration: 1,
							ease,
							delay: 0.6,
						}}
					/>
					{/* background */}
					<div className="absolute inset-y-0 right-0 w-2/3 lg:inset-y-[-10rem]">
						<m.div
							className="flex h-[55%] w-full origin-left justify-between"
							initial={scaleExit}
							whileInView={scaleAnimate}
							viewport={{ once: true }}
							transition={{
								duration: 1,
								ease,
								delay: 0.5,
							}}
						>
							{bars?.map((index) => <div key={index} className="h-full bg-lightBlue" style={{ width: `${13 - index * 0.4}px` }} />)}
						</m.div>
						<m.div
							className="ml-auto mt-auto flex h-[45%] w-1/3 origin-right justify-between"
							initial={scaleExit}
							whileInView={scaleAnimate}
							viewport={{ once: true }}
							transition={{
								duration: 1,
								ease,
								delay: 0.6,
							}}
						>
							{bars?.slice(0, 8)?.map((index) => <div key={index} className="h-full bg-lightBlue" style={{ width: `${0.4 + index * 0.4}px` }} />)}
						</m.div>
					</div>
				</div>
			</Link>
		</LazyMotion>
	);
}

export default PageLinkCard;
