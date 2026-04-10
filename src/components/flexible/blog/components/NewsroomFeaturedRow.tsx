import clsx from "clsx";
import Link from "next/link";
import { RightArrowCircle } from "~/components/elements/Icons";
import PostTag from "~/components/elements/PostTag";
import WpImage from "~/components/elements/Wp";
import { WpPost } from "~/types/wp";
import getPostPreviewImage from "~/utils/getPostPreviewImage";

interface NewsroomFeaturedRowProps {
	post: WpPost[];
	options: {
		asset_position: "left" | "right";
	};
}

function NewsroomFeaturedRow(props: NewsroomFeaturedRowProps) {
	// console.log("NewsroomFeaturedRow.props", props);

	const { post, options } = props;

	if (!post || !post.length) return null;

	const relatedPost = post[0];

	const useAuthorGuest = relatedPost?.acf?.show_guest_author || false;
	const authorImage = useAuthorGuest ? relatedPost?.acf?.guest_author?.avatar : relatedPost?.author?.profile_picture;
	const authorName = useAuthorGuest ? relatedPost?.acf?.guest_author?.name : relatedPost?.author?.name;

	return (
		<div className="blog-featured-row">
			<div className="container">
				<Link
					href={relatedPost?.permalink || "/"}
					className={clsx(
						options.asset_position === "left" ? "md:flex-row-reverse" : "md:flex-row",
						"group flex flex-col-reverse justify-start gap-6 sm:gap-12 md:justify-between md:gap-16 xl:gap-20"
					)}
				>
					{/* Content */}
					<div className="flex w-full max-w-[520px] flex-col items-start justify-between gap-4 sm:gap-6">
						<div>
							{/* Tags */}
							<div className="mb-6 flex items-center justify-start gap-4">
								<PostTag text="Featured" bgColor="blue" textColor="white" />
								<span className="text-15 font-body font-normal">{relatedPost?.post_date_gmt}</span>
							</div>

							{/* Heading */}
							{!!relatedPost?.post_title && (
								<p
									className="preview-text-heading text-h5 !leading-[1.20] !tracking-[-0.015em]"
									dangerouslySetInnerHTML={{ __html: relatedPost?.post_title }}
								/>
							)}
						</div>

						{/* CTA */}
						<div className="text-17 flex items-center gap-[14px] font-semibold">
							<RightArrowCircle circleClassName="group-hover:text-blue" />
							<span dangerouslySetInnerHTML={{ __html: "Read article" }} />
						</div>
					</div>

					{/* Asset */}
					<div className="aspect-[652/366] w-full overflow-hidden rounded object-cover object-center md:max-w-[652px]">
						<WpImage
							image={getPostPreviewImage(relatedPost)}
							className="h-full w-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
						/>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default NewsroomFeaturedRow;
