import clsx from "clsx";
import ArticleBlocksRenderer from "~/components/article/ArticleBlocksRenderer";
import FeaturedBlogPostsGrid from "~/components/flexible/blog/components/FeaturedBlogPosts/FeaturedBlogPostsGrid";
import useSection from "~/components/layouts/Section/useSection";
import { WpPage } from "~/types/wp";
import parseSlug from "~/utils/parseSlug";
import { useLayoutEffect, useMemo, useState } from "react";
import WpImage from "~/components/elements/Wp";
import PostShare from "../../SingleResource/components/PostShare";
import CustomerNavDesktop from "./CustomerNavDesktop";
// import CustomerNavMobile from "./CustomerNavMobile";

function SingleCustomerStoryBody(props: WpPage) {
	// console.log("SingleCustomerStoryBody", props);
	const { inner_page, related_articles } = props;
	const { article } = inner_page || {};

	// @ts-ignore
	const full_width_testimonial = inner_page?.other?.full_width_testimonial;

	const { paddingTopMap, paddingBottomMap } = useSection();

	const getAsideNavLinks = (components: any[]) => {
		const links = components?.reduce((acc, component) => {
			if (component?.acf_fc_layout === "text_content" && !!component?.text_content?.add_anchor_id) {
				acc.push({ label: component?.text_content?.anchor_id, link: parseSlug(component?.text_content?.anchor_id) });
			}

			return acc;
		}, []);

		return links;
	};

	const asideNavLinks = useMemo(() => getAsideNavLinks(article?.components), [article?.components]);

	const [activeSections, setActiveSections] = useState<string[] | null>([]);
	const [mostTopSection, setMostTopSection] = useState<string | null>(asideNavLinks?.length > 0 ? asideNavLinks[0].link : null);
	const [lastMostTopSection, setLastMostTopSection] = useState<string | null>(null);

	const onSectionInViewHandler = (id) => {
		setActiveSections((prev) => {
			if (!prev.includes(id)) {
				return [...prev, id];
			}
			return prev;
		});
	};

	const onSectionNotInViewHandler = (id) => {
		setActiveSections((prev) => {
			if (prev.includes(id)) {
				return prev.filter((heading) => heading !== id);
			}
			return prev;
		});
	};

	// Set top most section based on all sections in view
	useLayoutEffect(() => {
		const allTextComponents = article?.components?.filter((component) => component?.acf_fc_layout === "text_content");

		const topSection = activeSections?.reduce((acc, curr) => {
			if (allTextComponents.indexOf(curr) < allTextComponents.indexOf(acc)) {
				return curr;
			}
			return acc;
		}, activeSections[0]);

		setMostTopSection(parseSlug(topSection));

		if (activeSections?.length > 0) {
			// Set last most top section when any section is is in view
			setLastMostTopSection(topSection);
		} else {
			// If no section is in view, set most top section to last in history
			setMostTopSection(parseSlug(lastMostTopSection));
		}
	}, [activeSections, article?.components, lastMostTopSection]);

	return (
		<>
			<div className={`single-customer-story-body pt-10 md:pt-14 ${related_articles?.length > 0 ? "" : "pb-8 md:pb-32"}`}>
				{/* Nav mobile */}
				{/* <CustomerNavMobile asideNavLinks={asideNavLinks} /> */}

				<div className="container--1014px container">
					{/* Aside and article content */}
					<div className="flex flex-col justify-start gap-10 md:flex-row md:gap-16 lg:gap-[111px]">
						{/* Aside */}
						<aside className="hidden h-fit flex-1 md:sticky md:top-32 md:block lg:max-w-[215px]">
							{/* Nav desktop */}
							<CustomerNavDesktop
								article={article}
								activeSection={mostTopSection}
								// onItemClick={setActiveSection((link) => link)}
								asideNavLinks={asideNavLinks}
							/>

							<PostShare className="mt-14 flex" />
						</aside>

						{/* Article content */}
						<div className="flex w-full max-w-[736px] flex-col items-start gap-10">
							{/* Article blocks */}
							<ArticleBlocksRenderer
								article={article?.components}
								onTextContentInView={(anchorID) => {
									onSectionInViewHandler(anchorID);
								}}
								onTextContentNotInView={(anchorID) => {
									onSectionNotInViewHandler(anchorID);
								}}
							/>
						</div>
					</div>
				</div>

				<div className="container">
					{/* Full width testimonial */}
					{full_width_testimonial?.add_full_width_testimonial && (
						<div className="relative mt-32 flex w-full max-w-[1280px] items-center justify-center overflow-hidden rounded-lg py-12 md:mt-44 md:py-28 lg:py-[133px]">
							{/* Background image */}
							{!!full_width_testimonial?.content?.image?.url && (
								<WpImage image={full_width_testimonial?.content?.image} className="absolute inset-0 h-full w-full object-cover object-center" />
							)}

							{/* Content */}
							<div className="relative max-w-[90%] overflow-hidden rounded-lg bg-white p-8 sm:p-12 md:max-w-[70%] lg:max-w-[846px]">
								{/* Testimonial */}
								{!!full_width_testimonial?.content?.testimonial && (
									<p
										className="text-24 mb-8 font-[450] sm:mb-14"
										dangerouslySetInnerHTML={{
											__html: `"${full_width_testimonial?.content?.testimonial}"`,
										}}
									/>
								)}

								{/* Author details */}
								<div className="flex items-center justify-start gap-4">
									{/* Thumbnail */}
									{!!full_width_testimonial?.content?.thumbnail && (
										<WpImage className="h-14 w-14 rounded-full" image={full_width_testimonial?.content?.thumbnail} />
									)}

									{/* Author details */}
									<div className="flex flex-col items-start text-navy/85">
										{!!full_width_testimonial?.content?.author?.name && (
											<p dangerouslySetInnerHTML={{ __html: full_width_testimonial?.content?.author?.name }} className="text-18 font-medium" />
										)}
										<p
											dangerouslySetInnerHTML={{
												__html: `<span class="font-normal">${full_width_testimonial?.content?.author?.job_role}</span>${full_width_testimonial?.content?.author?.company ? `, ${full_width_testimonial?.content?.author?.company}` : ""}`,
											}}
											className="text-15 font-body font-medium"
										/>
									</div>
								</div>
							</div>
						</div>
					)}

					<PostShare className="mx-auto mt-14 block w-fit md:hidden" />
				</div>
			</div>

			{/* Related articles */}
			{related_articles?.length > 0 && (
				<div className={clsx("container", paddingTopMap.huge, paddingBottomMap.medium)}>
					<FeaturedBlogPostsGrid
						heading="More Stories"
						// imageAccessor="acf.media.thumbnail"
						categoriesAccessor="customer_stories_categories"
						posts={related_articles}
					/>
				</div>
			)}
		</>
	);
}

export default SingleCustomerStoryBody;
