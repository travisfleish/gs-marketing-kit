import Link from "next/link";
import PostTag from "~/components/elements/PostTag";
import WpImage from "~/components/elements/Wp";
import { WpPost } from "~/types/wp";
// eslint-disable-next-line
// import get from "lodash/get";

interface PostPreviewCardProps {
	post: WpPost;
	categoriesAccessor?: string;
	// imageAccessor?: string;
}

function PostPreviewCard({
	post,
	categoriesAccessor = "categories",
	// imageAccessor = "acf.preview.thumbnail"
}: PostPreviewCardProps) {
	return (
		<Link href={post?.permalink || "/"} className="preview-card group flex w-full flex-col gap-5 md:aspect-[411/397] md:max-w-[411px] md:gap-6">
			{/* Image */}
			<div className="aspect-[411/227] w-full overflow-hidden rounded-md">
				{post?.featured_image?.src ? (
					<WpImage
						image={{
							url: post?.featured_image?.src,
							width: post?.featured_image?.width,
							height: post?.featured_image?.height,
						}}
						className="h-full w-full object-cover object-center transition-transform duration-300 ease-linear group-hover:scale-110"
					/>
				) : (
					<div className="h-full w-full bg-lightGrey" />
				)}
			</div>

			{/* Category and date */}
			<div className="flex flex-wrap items-center gap-4">
				{/* Category tags */}
				{post?.[categoriesAccessor]?.length > 0 && post?.[categoriesAccessor].map((category) => <PostTag key={category.id} text={category.name} />)}

				{/* Date */}
				{!!post?.post_date_gmt && <p dangerouslySetInnerHTML={{ __html: post.post_date_gmt }} className="text-15 font-body" />}
			</div>

			{/* Post title */}
			{!!post?.post_title && <p dangerouslySetInnerHTML={{ __html: post.post_title }} className="text-22 -mt-1 text-left font-medium" />}
		</Link>
	);
}

export default PostPreviewCard;
