import clsx from "clsx";
import ArticleBlocksRenderer from "~/components/article/ArticleBlocksRenderer";
import FeaturedBlogPostsGrid from "~/components/flexible/blog/components/FeaturedBlogPosts/FeaturedBlogPostsGrid";
import useSection from "~/components/layouts/Section/useSection";
import { WpPage } from "~/types/wp";
import { useState } from "react";
import Button from "~/components/elements/buttons/Button";
import { getButtonLinkProps } from "~/utils/links";
import PostShare from "./PostShare";

function WebinarDummyForm() {
	const [isSubmitted, setIsSubmitted] = useState(false);

	const labelInputContainerClasses = "col-span-12";
	const labelClasses = "text-15 font-body text-navy font-medium";
	const inputClasses =
		"contact-dummy-form__input px-4 py-3 bg-snow placeholder-navy/40 font-normal border-[1px] border-[#00000008] mt-2 text-navy rounded-lg w-full focus:border-transparent focus:outline-none focus:ring-0";

	const buttonProps = getButtonLinkProps({
		title: "Submit",
		button: {
			background_color: "navy",
			type: "default",
		},
	});

	return (
		<div className="w-full rounded-lg bg-lightGrey p-8">
			<form>
				<div className="flex flex-col items-stretch gap-4">
					{/* Full name */}
					<div className={labelInputContainerClasses}>
						<label htmlFor="full-name" className={labelClasses}>
							Full name
							<input name="full-name" type="text" placeholder="Enter full name" className={inputClasses} />
						</label>
					</div>

					{/* Work email */}
					<div className={labelInputContainerClasses}>
						<label htmlFor="work-email" className={labelClasses}>
							Work email
							<input name="work-email" type="text" placeholder="Enter work email" className={inputClasses} />
						</label>
					</div>

					{/* Company */}
					<div className={labelInputContainerClasses}>
						<label htmlFor="company" className={labelClasses}>
							Company
							<input name="company" type="text" placeholder="Enter company" className={inputClasses} />
						</label>
					</div>

					{/* Your sport area */}
					<div className={labelInputContainerClasses}>
						<label htmlFor="sport-area" className={labelClasses}>
							Your sport area
							<select name="sport-area" className={inputClasses}>
								<option value="" disabled selected>
									Select one
								</option>
								<option value="football">Football</option>
								<option value="basketball">Basketball</option>
								<option value="american football">American Football</option>
								<option value="hockey">Hockey</option>
							</select>
						</label>
					</div>

					{/* Submit button */}
					<span className="mt-5">
						<Button
							{...buttonProps}
							onClick={() => {
								setIsSubmitted(true);
							}}
						/>
					</span>
				</div>
			</form>
		</div>
	);
}

function WebinarBody(props: WpPage) {
	// console.log("WebinarBody.props", props);
	const { inner_page, webinar, related_articles } = props;
	const { article } = inner_page;

	const { paddingTopMap, paddingBottomMap } = useSection();

	return (
		<section className="bg-white text-navy">
			<div className="webinar-body pt-12 md:pt-[120px]">
				<div className="container">
					{/* Article content */}
					<div className="flex flex-col items-start justify-start gap-16 lg:flex-row lg:gap-28">
						{/* Article blocks */}
						<div className="flex flex-1 flex-col gap-20">
							<ArticleBlocksRenderer article={article?.components} />

							<PostShare />
						</div>

						{/* Subscription Form */}
						<aside id="webinar-aside" className="sticky top-10 w-full flex-1 scroll-mt-32 lg:max-w-[435px]">
							{/* <WebinarDummyForm /> */}
							{webinar?.webinar_form_source && (
								<div className="w-full rounded-lg bg-lightGrey p-8">
									<iframe title="webinar-subscribe" src={webinar?.webinar_form_source} width="100%" height="700" style={{ border: "0" }} />
								</div>
							)}
						</aside>
					</div>
				</div>
			</div>

			{/* Related articles */}
			{related_articles && (
				<div className={clsx("container", paddingTopMap.medium, paddingBottomMap.medium)}>
					<FeaturedBlogPostsGrid heading="More webinars" posts={related_articles} />
				</div>
			)}
		</section>
	);
}

export default WebinarBody;
