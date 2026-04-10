import Link from "next/link";
import PostTag from "~/components/elements/PostTag";
import WpImage from "~/components/elements/Wp";
import { WpPost } from "~/types/wp";
import { useWindowSize } from "react-use";
import clsx from "clsx";
import getPostPreviewImage from "~/utils/getPostPreviewImage";

interface BlogFeaturedRowProps {
	post: WpPost[];
}

function BlogFeaturedRow(props: BlogFeaturedRowProps) {
	// console.log("BlogFeaturedRow.props", props);

	const { post } = props;

	const relatedPost = post[0];

	const useAuthorGuest = relatedPost?.acf?.show_guest_author || false;
	const authorImage = useAuthorGuest ? relatedPost?.acf?.guest_author?.avatar : relatedPost?.author?.profile_picture;
	const authorName = useAuthorGuest ? relatedPost?.acf?.guest_author?.name : relatedPost?.author?.name;

	const { width: windowWidth } = useWindowSize();
	const isMobile = windowWidth < 768;
	const mobileTextClass = "text-h6";

	return (
		<div className="blog-featured-row">
			<div className="container">
				<Link href={relatedPost?.permalink || "/"} className="group flex flex-col-reverse justify-start gap-4 sm:gap-12 md:flex-row md:gap-16 xl:gap-20">
					{/* Content */}
					<div className="flex w-full max-w-[520px] flex-col items-start justify-between gap-6">
						<div>
							{/* Tags */}
							<div className="mb-4 flex flex-wrap items-center justify-start gap-4 sm:mb-6">
								<PostTag text="Featured" />
								<span className="text-15 font-body font-normal">{relatedPost?.post_date_gmt}</span>
							</div>

							{/* Heading */}
							{!!relatedPost?.post_title && (
								<p className={clsx(isMobile ? mobileTextClass : "text-h4")} dangerouslySetInnerHTML={{ __html: relatedPost?.post_title }} />
							)}
						</div>

						{/* Author */}
						<div className="flex gap-4">
							<WpImage image={authorImage} className="h-10 w-10 rounded" />
							<div className="flex flex-col font-body text-navy">
								<p className="text-12 font-normal opacity-60">Published by</p>
								<p className="text-16 font-medium text-navy" dangerouslySetInnerHTML={{ __html: authorName }} />
							</div>
						</div>
					</div>

					{/* Asset */}
					<div className="aspect-[652/369] w-full overflow-hidden rounded object-cover object-center md:max-w-[652px]">
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

export default BlogFeaturedRow;
