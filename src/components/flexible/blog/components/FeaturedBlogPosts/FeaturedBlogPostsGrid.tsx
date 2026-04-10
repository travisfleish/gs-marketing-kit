import { WpPost } from "~/types/wp";
import PostPreviewCard from "./PostPreviewCard";

interface FeaturedBlogPostsGridProps {
	heading: string;
	posts: WpPost[];
	categoriesAccessor?: string;
	// imageAccessor?: string;
}

function FeaturedBlogPosts(props: FeaturedBlogPostsGridProps) {
	const {
		posts,
		heading,
		categoriesAccessor,
		// imageAccessor
	} = props;

	return (
		<div className="featured-blog-posts">
			{/* Heading */}
			<h3 className="mb-10 text-center md:mb-[88px]" dangerouslySetInnerHTML={{ __html: heading }} />

			{/* Grid */}
			<div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
				{[...posts]?.splice(0, 3)?.map((post) => (
					<PostPreviewCard
						// imageAccessor={imageAccessor}
						categoriesAccessor={categoriesAccessor}
						key={post.ID}
						post={post}
					/>
				))}
			</div>
		</div>
	);
}

export default FeaturedBlogPosts;
