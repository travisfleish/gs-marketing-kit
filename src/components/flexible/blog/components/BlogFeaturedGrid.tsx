// TODO : Split into components

import clsx from "clsx";
import Link from "next/link";
import { useWindowSize } from "react-use";
import { RightArrowCircle } from "~/components/elements/Icons";
import PostTag from "~/components/elements/PostTag";
import WpImage from "~/components/elements/Wp";
import { WpPost } from "~/types/wp";
import getPostPreviewImage from "~/utils/getPostPreviewImage";

interface BlogFeaturedGridProps {
	featured_post: WpPost[];
	other_posts: WpPost[];
}

function BlogFeaturedGrid(props: BlogFeaturedGridProps) {
	// console.log("BlogFeaturedGrid.props", props);

	const { featured_post, other_posts } = props;

	const isFeaturedOnDemand = featured_post?.[0]?.acf?.visual_tags?.tags?.includes("On-demand");
	const { width: windowWidth } = useWindowSize();
	const isMobile = windowWidth < 768;
	const mobileTextClass = "text-h6";

	return (
		<div className="blog-featured-grid">
			<div className="flex flex-col items-start justify-start gap-12 md:gap-12 lg:flex-row lg:gap-20">
				{/* Featured post */}
				<Link
					href={featured_post?.[0]?.permalink || "/"}
					className="group flex flex-shrink-0 flex-col gap-4 sm:gap-8 md:max-w-[100%] lg:max-w-[50%] xl:max-w-[42.5%]"
				>
					{/* Image */}
					<div className="aspect-[543/305] w-full overflow-hidden rounded-lg xl:max-w-[543px]">
						<WpImage
							alt={featured_post?.[0]?.post_title}
							image={getPostPreviewImage(featured_post?.[0])}
							className="h-full w-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
						/>
					</div>

					{/* Content */}
					<div className="">
						{/* Tags */}
						<div className="mb-4 flex flex-wrap items-center justify-start gap-4 sm:mb-5">
							{featured_post?.[0]?.categories?.map((category) => <PostTag key={category?.id} text={category.name} />)}
							{/* Date */}
							<span
								className="text-15 font-body font-normal"
								dangerouslySetInnerHTML={{
									__html: isFeaturedOnDemand ? "On-demand" : featured_post?.[0]?.post_date_gmt,
								}}
							/>
						</div>

						{/* Title */}
						<p
							className={clsx("preview-text-heading !text-normal mb-4 sm:mb-8", isMobile ? mobileTextClass : "text-h6")}
							dangerouslySetInnerHTML={{ __html: featured_post?.[0]?.post_title }}
						/>

						{/* CTA */}
						<div className="text-17 group flex items-center gap-[14px] font-semibold">
							<RightArrowCircle circleClassName="text-navy group-hover:text-blue" />
							Read article
						</div>
					</div>
				</Link>

				{/* Other posts */}
				<div className="grid h-full flex-col justify-between gap-10 sm:grid-cols-2 xl:flex">
					{other_posts?.map((post) => {
						const isOnDemand = post?.acf?.visual_tags?.tags?.includes("On-demand");

						return (
							<Link
								href={post?.permalink || "/"}
								key={post.ID}
								className="group flex flex-col items-start justify-start gap-6 lg:gap-[34px] xl:flex-row xl:items-center"
							>
								{/* Image */}
								<div className="aspect-[265/150] w-full overflow-hidden rounded-md xl:max-w-[265px]">
									<WpImage
										image={getPostPreviewImage(post)}
										className="h-full w-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
									/>
								</div>

								{/* Content */}
								<div className="text-15 flex flex-col gap-4 font-body font-normal xl:gap-6">
									{/* Tags */}
									{/* Split into component - reused on blogIndex */}
									<div className="flex items-center gap-4">
										{/* Categories */}
										{post?.categories?.map((category) => <PostTag key={category?.id} text={category.name} />)}

										<div className="flex items-center gap-4 lg:hidden xl:flex">
											{/* Date */}
											<span dangerouslySetInnerHTML={{ __html: isOnDemand ? "On-demand" : post?.post_date_gmt }} />

											{/* Tags */}
											<span
												className="text-15 font-body font-normal"
												// Priority - location, first normal post tag, first visual tag, first custom tag
												dangerouslySetInnerHTML={{
													__html:
														post?.acf?.visual_tags?.location ||
														// @ts-ignore
														post?.tags?.[0]?.name ||
														post?.acf?.visual_tags?.tags?.[0] ||
														post?.acf?.visual_tags?.custom_tags?.[0],
												}}
											/>
										</div>
									</div>

									{/* Smaller grid layout */}
									<div className="hidden items-center gap-4 lg:flex xl:hidden">
										{/* Date */}
										<span dangerouslySetInnerHTML={{ __html: post?.post_date_gmt }} />

										{/* Tags */}
										<span
											className="text-15 font-body font-normal"
											dangerouslySetInnerHTML={{
												// @ts-ignore
												__html: post?.tags?.[0]?.name,
											}}
										/>
									</div>

									{/* Title */}
									<p
										className={clsx("preview-text-heading !font-normal", isMobile ? mobileTextClass : "text-20")}
										dangerouslySetInnerHTML={{ __html: post?.post_title }}
									/>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default BlogFeaturedGrid;
