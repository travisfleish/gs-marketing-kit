import clsx from "clsx";
import Link from "next/link";
import PostTag from "~/components/elements/PostTag";
import WpImage from "~/components/elements/Wp";
import LinkGroup from "~/components/elements/links/LinkGroup";
import useSection from "~/components/layouts/Section/useSection";
import { WpPost, WpSimpleTextCard } from "~/types/wp";
import { getSplitBreakText } from "~/utils/text";
import { LazyMotion, domAnimation, motion, m, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import getPostPreviewImage from "~/utils/getPostPreviewImage";

interface BlogMastheadProps {
	content: WpSimpleTextCard;
	posts: WpPost[];
}

type BottomLinesProps = {
	width?: string;
	height?: string;
};

function BottomLines({ width = "1440", height }: BottomLinesProps) {
	return (
		<svg width={width} height={height} viewBox="0 0 1440 165" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_1406_29720)">
				<path d="M759 -0.333405L1440 -0.333253" stroke="#E1FF67" strokeWidth="12" />
				<path d="M759 17.9999L1440 18.0001" stroke="#E1FF67" strokeWidth="10" />
				<path d="M759 36.3333L1440 36.3334" stroke="#E1FF67" strokeWidth="8" />
				<path d="M759 54.6666L1440 54.6667" stroke="#E1FF67" strokeWidth="6" />
				<path d="M759 72.9999L1440 73" stroke="#E1FF67" strokeWidth="4" />
				<path d="M759 91.3332L1440 91.3333" stroke="#E1FF67" strokeWidth="3" />
				<path d="M759 109.667L1440 109.667" stroke="#E1FF67" strokeWidth="2" />
				<path d="M759 128L1440 128" stroke="#E1FF67" />
				<path d="M0 -6.10352e-05L759 0.000107775" stroke="#E1FF67" strokeWidth="14" />
				<path d="M0 18.3333L759 18.3335" stroke="#E1FF67" strokeWidth="14" />
				<path d="M0 36.6666L759 36.6668" stroke="#E1FF67" strokeWidth="12" />
				<path d="M0 54.9999L759 55.0001" stroke="#E1FF67" strokeWidth="10" />
				<path d="M0 73.3333L759 73.3334" stroke="#E1FF67" strokeWidth="8" />
				<path d="M0 91.6666L759 91.6667" stroke="#E1FF67" strokeWidth="6" />
				<path d="M0 110L759 110" stroke="#E1FF67" strokeWidth="4" />
				<path d="M0 128.333L759 128.333" stroke="#E1FF67" strokeWidth="3" />
				<path d="M0 146.667L759 146.667" stroke="#E1FF67" strokeWidth="2" />
				<path d="M0 165L759 165" stroke="#E1FF67" />
			</g>
			<defs>
				<clipPath id="clip0_1406_29720">
					<rect width="1440" height="165" fill="white" transform="translate(1440 165) rotate(-180)" />
				</clipPath>
			</defs>
		</svg>
	);
}

function BlogMasthead(props: BlogMastheadProps) {
	const { paddingTopMap } = useSection();

	const { content, posts } = props;

	const ref = useRef(null);

	const containerRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end start"],
	});

	const springyY = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	const yTransform = useTransform(springyY, [0, 0.3], ["-70%", "0%"]);

	return (
		<div className="w-full">
			<div className="blog-masthead relative z-10 bg-brightGreen">
				<div className="container--1292px container">
					<div ref={containerRef} className={clsx(paddingTopMap?.min, "pb-[50px]")}>
						{/* Text */}
						<div className="mb-12 flex flex-col items-center sm:mb-20 md:mb-[102px]">
							{/* Subheading */}
							<span
								className="text-15 mb-[18px] text-navy/80"
								dangerouslySetInnerHTML={{
									__html: content?.subheading,
								}}
							/>

							{/* Heading */}
							<h1
								className="text-80 mb-[33px] text-center font-normal !tracking-[-0.04em] text-navy"
								dangerouslySetInnerHTML={{
									__html: getSplitBreakText({ text: content?.heading }),
								}}
							/>

							{/* Links */}
							<LinkGroup {...content?.links} centered />
						</div>

						{/* Featured posts */}
						{posts?.length > 0 && (
							<div className="grid gap-2 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
								{posts?.map((post) => (
									<Link key={post.ID} href={post?.permalink} aria-label="Open post" className="group flex gap-5 rounded-lg bg-white p-2 pr-5">
										{!!getPostPreviewImage(post) && (
											<div className="aspect-[154/88] w-full max-w-[40%] flex-shrink-0 overflow-hidden rounded xs:max-w-[154px]">
												<WpImage
													image={getPostPreviewImage(post)}
													className="h-full w-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-110"
												/>
											</div>
										)}

										<div className="flex flex-col items-start gap-[10px]">
											<PostTag text="Featured" />

											{!!post?.post_title && (
												<p
													className="text-16 line-clamp-2 font-body font-normal"
													dangerouslySetInnerHTML={{
														__html: post.post_title,
													}}
												/>
											)}
										</div>
									</Link>
								))}
							</div>
						)}
					</div>
				</div>
			</div>

			{/* Bottom Lines */}
			<LazyMotion features={domAnimation}>
				<m.div
					style={{
						y: yTransform,
					}}
					transition={{ delay: 0.5, ease: "linear" }}
					ref={ref}
				>
					<BottomLines width="100%" />
				</m.div>
			</LazyMotion>
		</div>
	);
}

export default BlogMasthead;
