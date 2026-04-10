// TODO : Fix related articles categories and dates

import clsx from "clsx";
import ArticleBlocksRenderer from "~/components/article/ArticleBlocksRenderer";
import FeaturedBlogPostsSlider from "~/components/flexible/blog/components/FeaturedBlogPosts/FeaturedBlogPostsSlider";
import useSection from "~/components/layouts/Section/useSection";
import { WpPage } from "~/types/wp";
import PostShare from "../../SingleResource/components/PostShare";

function SingleNewsBody(props: WpPage) {
	// console.log("SingleNewsBody.props", props);
	const { inner_page, related_articles } = props;
	const { article } = inner_page;

	const { paddingTopMap, paddingBottomMap } = useSection();

	return (
		<>
			<div className="single-news-body pt-12 md:pt-20">
				<div className="container--676px container">
					{/* Article blocks */}
					<ArticleBlocksRenderer ySpacing="80" article={article?.components} />

					<div className="mx-auto mt-20 w-fit">
						<PostShare />
					</div>
				</div>
			</div>

			{/* Related articles */}
			<div className={clsx("container", paddingTopMap.huge, paddingBottomMap.huge)}>
				<FeaturedBlogPostsSlider
					categoriesAccessor="newsroom_categories"
					content={{ heading: "Related articles", layout: "mixedPostsSlider", posts: related_articles }}
				/>
			</div>
		</>
	);
}

export default SingleNewsBody;
