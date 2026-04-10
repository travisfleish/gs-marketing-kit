import React from "react";
import dynamic from "next/dynamic";

// Components
const LearnPosts = dynamic(() => import("./components/LearnPosts"));
const FeaturedBlogPosts = dynamic(() => import("./components/FeaturedBlogPosts/FeaturedBlogPostsSlider"));
const BlogFeaturedRow = dynamic(() => import("./components/BlogFeaturedRow"));
const BlogFeaturedGrid = dynamic(() => import("./components/BlogFeaturedGrid"));
const BlogIndex = dynamic(() => import("./components/BlogIndex/BlogIndex"));
const NewsroomFeaturedRow = dynamic(() => import("./components/NewsroomFeaturedRow"));
const FeaturedMixedSlider = dynamic(() => import("./components/FeaturedMixedSlider"));
interface BlogHandlerProps {
	components: {
		acf_fc_layout: string;
	}[];
}

function BlogHandler({ components }: BlogHandlerProps) {
	// console.log(components);
	const layoutComponents = {
		learn_posts: LearnPosts,
		featured_blog_posts: FeaturedBlogPosts,
		blog_featured_row: BlogFeaturedRow,
		blog_featured_grid: BlogFeaturedGrid,
		blog_index: BlogIndex,
		newsroom_featured_row: NewsroomFeaturedRow,
		newsroom_index: BlogIndex,
		featured_mixed_slider: FeaturedMixedSlider,
	};

	return components?.map((layout, index) => {
		const { acf_fc_layout: layoutName, ...rest } = layout;
		const LayoutComponent = layoutComponents[layoutName];

		const extraProps = {
			...(layoutName === "newsroom_index" && {
				hideAside: true,
				hidePostShare: true,
				hideTagFilters: true,
				colNumber: 3,
				topFiltersTaxonomyTermAccessor: "newsroom_categories",
				postCategoriesAccessor: "newsroom_categories",
				allLinkURL: "/newsroom/",
				paginationBasePath: "newsroom",
			}), // Custom props for newsroom index
		};

		return <React.Fragment key={`blog-component-${index}`}>{LayoutComponent && <LayoutComponent key={index} {...rest} {...extraProps} />}</React.Fragment>;
	});
}

export default BlogHandler;
