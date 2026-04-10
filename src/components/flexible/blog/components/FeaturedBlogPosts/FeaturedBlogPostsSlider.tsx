import { WpPost } from "~/types/wp";
import PostsSlider from "./PostsSlider";

interface FeaturedBlogPostsSliderProps {
	content: {
		heading?: string;
		layout: "mixedPostsSlider" | "categoryPostsSlider";
		posts: WpPost[];
		post_category?: {
			recent_posts?: WpPost[];
		};
	};
	categoriesAccessor?: string;
}

function FeaturedBlogPosts(props: FeaturedBlogPostsSliderProps) {
	const { content, categoriesAccessor } = props;
	const { heading, layout, posts, post_category } = content || {};

	const { recent_posts } = post_category || {};

	return (
		<div className="featured-blog-posts-slider">
			{layout === "mixedPostsSlider" && <PostsSlider categoriesAccessor={categoriesAccessor} heading={heading} posts={posts} />}
			{layout === "categoryPostsSlider" && <PostsSlider categoriesAccessor={categoriesAccessor} heading={heading} posts={recent_posts} />}
		</div>
	);
}

export default FeaturedBlogPosts;
