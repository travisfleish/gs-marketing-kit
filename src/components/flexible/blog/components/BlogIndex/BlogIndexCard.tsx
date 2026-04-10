// TODO : Split into components
// TODO : Create CustomerStoryIndexCard
// TODO : Create BlogIndexCard

import Link from "next/link";
import { RightArrowCircle } from "~/components/elements/Icons";
import PostTag from "~/components/elements/PostTag";
import WpImage from "~/components/elements/Wp";
import { WpCustomerStory, WpPost } from "~/types/wp";
// eslint-disable-next-line
import get from "lodash/get";
import { motion } from "framer-motion";

interface BlogIndexCardProps {
	post: WpPost | WpCustomerStory;
	categoryAccessor?: string;
	imageAccessor?: string;
	hideCTA?: boolean;
	showCustomerLogo?: boolean;
	index: number;
	disableAnimation?: boolean;
	searchOpen?: boolean;
}

const cardAnim = {
	initial: { opacity: 0, x: 10 },
	animate: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.3,
		},
	},
};

function AnimWrapper({ children, index, animKey }) {
	return (
		<motion.div
			key={animKey}
			variants={cardAnim}
			initial="initial"
			animate="animate"
			transition={{
				delay: index * 0.1,
				type: "spring",
				stiffness: 120,
				damping: 20,
			}}
			className="flex h-full w-full flex-col gap-6"
		>
			{children}
		</motion.div>
	);
}

function InnerContent({ post, imageAccessor, categoryAccessor, showCustomerLogo, hideCTA }) {
	const { post_title } = post;
	let imageURL = get(post, imageAccessor);
	if (!imageURL && post?.featured_image?.src) {
		imageURL = { ...post?.featured_image, url: post?.featured_image?.src };
	}

	// @ts-ignore
	const isOnDemand = post?.acf?.visual_tags?.tags?.includes("On-demand");

	// Check if is a customer story post
	const isCustomerStory = post?.permalink?.includes("customer-stories");

	return (
		<>
			{/* Image */}
			<div className="relative aspect-[411/231] w-full overflow-hidden rounded-lg bg-lightGrey md:max-w-[411px]">
				<WpImage image={imageURL} className="h-full w-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105" />

				{/* @ts-ignore */}
				{showCustomerLogo && !!post?.acf?.media?.light_logo && (
					<>
						{/* Overlay */}
						<div className="absolute inset-0 z-0 bg-black/20" />
						<div className="absolute inset-0 z-10 flex items-center justify-center">
							{/* @ts-ignore */}
							<WpImage className="linear w-full max-w-[45%] transition-transform duration-300 group-hover:scale-105" image={post?.acf?.media?.light_logo} />
						</div>
					</>
				)}
			</div>

			{/* Categories, date, tags row */}
			<div className="flex flex-col gap-5">
				<div className="text-15 flex flex-wrap items-center gap-4 font-body font-normal">
					{/* Categories */}
					{post?.[categoryAccessor]?.map((category) => <PostTag key={category?.id} text={category.name} />)}

					{/* Date */}
					{!isCustomerStory && (
						<span
							className="text-15 font-body font-normal"
							dangerouslySetInnerHTML={{
								__html: isOnDemand ? "On-demand" : post?.post_date_gmt,
							}}
						/>
					)}

					{/* Tags */}
					<span
						dangerouslySetInnerHTML={{
							// Priority - location, first normal post tag, first visual tag, first custom tag
							__html:
								// @ts-ignore
								post?.acf?.visual_tags?.location || post?.tags?.[0]?.name || post?.acf?.visual_tags?.tags?.[0] || post?.acf?.visual_tags?.custom_tags?.[0],
						}}
					/>
				</div>
			</div>

			{/* Title */}
			<span className="preview-text-heading text-22 is-heading -mt-3 text-left !font-medium sm:mt-0" dangerouslySetInnerHTML={{ __html: post_title }} />

			{/* CTA */}
			{!hideCTA && (
				<div className="mt-auto flex items-center gap-[14px]">
					<RightArrowCircle circleClassName="text-navy group-hover:text-blue" />
					<span className="text-17 group font-semibold">Learn more</span>
				</div>
			)}
		</>
	);
}

function BlogIndexCard({
	post,
	categoryAccessor = "categories",
	imageAccessor = "acf.preview.thumbnail",
	hideCTA = false,
	showCustomerLogo = false,
	index,
	disableAnimation,
	searchOpen,
}: BlogIndexCardProps) {
	const { post_title } = post;

	// @ts-ignore
	const isExternalLink = !!post?.acf?.preview?.external_link;

	return (
		<Link
			className="blog-index-card group"
			// @ts-ignore
			href={post?.acf?.preview?.external_link || post?.permalink || "#"}
			target={isExternalLink ? "_blank" : "_self"}
			rel="noopener noreferrer"
			aria-label="Read article"
		>
			{disableAnimation ? (
				<div className="flex h-full w-full flex-col gap-6">
					<InnerContent post={post} imageAccessor={imageAccessor} categoryAccessor={categoryAccessor} showCustomerLogo={showCustomerLogo} hideCTA={hideCTA} />
				</div>
			) : (
				<AnimWrapper animKey={`${post_title}-${searchOpen}`} index={index}>
					<InnerContent post={post} imageAccessor={imageAccessor} categoryAccessor={categoryAccessor} showCustomerLogo={showCustomerLogo} hideCTA={hideCTA} />
				</AnimWrapper>
			)}
		</Link>
	);
}

export default BlogIndexCard;
