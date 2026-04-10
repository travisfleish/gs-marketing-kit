import clsx from "clsx";
import ArticleBlocksRenderer from "~/components/article/ArticleBlocksRenderer";
import FeaturedBlogPostsGrid from "~/components/flexible/blog/components/FeaturedBlogPosts/FeaturedBlogPostsGrid";
import useSection from "~/components/layouts/Section/useSection";
import { WpPage } from "~/types/wp";
import PostShare from "./PostShare";
import ProfileCard from "./ProfileCard";

function EventBody(props: WpPage) {
	// console.log("EventBody.props", props);
	const { inner_page, related_articles, event } = props;
	const { article } = inner_page;

	const { paddingTopMap, paddingBottomMap } = useSection();

	return (
		<section className="bg-white text-navy">
			<div className="webinar-body pt-12 md:pt-[120px]">
				<div className="container">
					{/* Article content */}
					<div className="flex flex-col justify-start gap-16 md:gap-28 lg:flex-row">
						{/* Article blocks */}
						<div className="flex flex-col gap-12 md:gap-20">
							<ArticleBlocksRenderer liColor="orange" article={article?.components} />

							<PostShare />
						</div>

						{/* Speakers */}
						<aside className="sticky top-10 h-fit w-full flex-1 lg:min-w-[435px]">
							<h5 className="mb-10 md:mb-16">Speakers</h5>

							<div className="flex flex-col gap-6">
								{event?.speakers?.cards?.map((card, index) => <ProfileCard key={`card-${index}`} card={card} variant="dark" />)}
							</div>
							{/* <div className="h-[509px] w-[435px] rounded-lg bg-lightGrey" /> */}
						</aside>
					</div>
				</div>
			</div>

			{/* Related articles */}
			<section className="bg-white">
				<div className={clsx("container", paddingTopMap.medium, paddingBottomMap.medium)}>
					<FeaturedBlogPostsGrid heading="More events" posts={related_articles} />
				</div>
			</section>
		</section>
	);
}

export default EventBody;
