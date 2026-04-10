import clsx from "clsx";
import { useState } from "react";
import ArticleBlocksRenderer from "~/components/article/ArticleBlocksRenderer";
import FeaturedBlogPostsSlider from "~/components/flexible/blog/components/FeaturedBlogPosts/FeaturedBlogPostsSlider";
import { HorizontalBars } from "~/components/landing/Legal/components/LegalMasthead";
import useSection from "~/components/layouts/Section/useSection";
import { WpPage } from "~/types/wp";
import { getSplitBreakText } from "~/utils/text";
import { getButtonLinkProps } from "~/utils/links";
import Button from "~/components/elements/buttons/Button";
import PostAsideSubscribe from "~/components/elements/PostAsideSubscribe";
import PostShare from "./PostShare";

const buttonProps = getButtonLinkProps({
	title: "Subscribe",
	button: {
		background_color: "white",
		type: "default",
	},
	className: "font-semibold",
});

export function SubscribeForm({ heading = null }) {
	const [isSubmitHovered, setIsSubmitHovered] = useState(false);

	return (
		<div className="flex flex-col">
			{/* Form */}
			<div className="rounded-t-lg bg-blue p-8 px-6">
				<h6
					className="mb-12 font-normal text-white"
					dangerouslySetInnerHTML={{
						__html: getSplitBreakText({
							text: heading || "Be the first to <> know about new <> content",
						}),
					}}
				/>

				{/* Input */}
				<form>
					<input
						type="email"
						placeholder="Your email"
						className="mb-4 h-12 w-full rounded-lg border-none bg-white/20 px-4 py-3 text-white placeholder:text-white focus:border-transparent focus:outline-none focus:ring-0"
					/>
					<Button {...buttonProps} onMouseEnter={() => setIsSubmitHovered(true)} onMouseLeave={() => setIsSubmitHovered(false)} />
				</form>
			</div>

			{/* Lines */}
			<div className={clsx("transition-transform duration-200 ease-in-out", isSubmitHovered ? "translate-y-[-20%]" : "")}>
				<HorizontalBars
					className="flex flex-col"
					barsClassName="bg-blue"
					barVolume={6}
					heightFactor={1}
					bars={[0, 1, 2, 3, 4]}
					marginInitial={6}
					marginFactor={0.6}
					blockAnimation
				/>
			</div>

			{/* Share */}
			<PostShare className="mt-10" />
		</div>
	);
}

function BlogBody(props: WpPage) {
	const { inner_page, related_articles } = props;
	const { article } = inner_page;

	const { paddingTopMap, paddingBottomMap } = useSection();

	return (
		<>
			<section className="bg-white text-navy">
				<div className="blog-body pt-12 md:pt-20">
					<div className="container--1014px container">
						{/* Article content */}
						<div className="flex flex-col justify-start gap-[72px] lg:flex-row">
							<div className="flex w-full flex-1 flex-col items-start gap-10">
								{/* Intro */}
								{!!article?.intro && <div className="text-22 font-body font-normal text-navy/80" dangerouslySetInnerHTML={{ __html: article?.intro }} />}

								{/* Article blocks */}
								<ArticleBlocksRenderer article={article?.components} />
							</div>

							{/* Subscription Form */}
							<aside className="sticky top-32 h-fit flex-1 lg:max-w-[334px]">
								{/* <SubscribeForm /> */}
								<PostAsideSubscribe />
							</aside>
						</div>
					</div>
				</div>
			</section>
			<section className="overflow-hidden bg-white">
				{/* Related articles */}
				<div className={clsx("container", paddingTopMap.huge, paddingBottomMap.medium)}>
					<FeaturedBlogPostsSlider content={{ heading: "Related articles", layout: "mixedPostsSlider", posts: related_articles }} />
				</div>
			</section>
		</>
	);
}

export default BlogBody;
