import clsx from "clsx";
import { getBackgroundColor } from "~/components/ColorHelpers";
import WpImage, { ImageProps } from "~/components/elements/Wp";

export interface ArticleBasicQuotesProps {
	quotes: {
		author: {
			avatar: ImageProps;
			name: string;
			job_title: string;
			company: string;
		};
		main_text: string;
		background_color: string;
	}[];
}

function AuthorDetails({ author }) {
	return (
		<div className="flex flex-col">
			{/* Name */}
			{!!author?.name && <p className="text-18 font-bold" dangerouslySetInnerHTML={{ __html: author?.name }} />}

			{/* Job title */}
			<p className="text-15 font-body font-normal opacity-85">
				{/* Job title */}
				{author?.job_title}

				{/* Company */}
				<span
					className="font-medium"
					dangerouslySetInnerHTML={{
						__html: author?.company ? `, ${author?.company}` : "",
					}}
				/>
			</p>
		</div>
	);
}

function ArticleBasicQuotes(props: ArticleBasicQuotesProps) {
	// console.log("ArticleBasicQuotes.props", props);

	const { quotes } = props;

	// const { author, background_color, main_text } = props;

	// return null;

	return (
		<div className="flex flex-col gap-10 md:gap-14">
			{quotes?.map((quote, index) => {
				const { author, background_color, main_text } = quote;

				return (
					<div
						key={`quote-${index}`}
						className={clsx(
							getBackgroundColor(background_color),
							"article-quote flex flex-col rounded-lg p-8 md:p-12",
							background_color === "navy" && "text-white",
							background_color === "lightGrey" && "text-navy"
						)}
					>
						{/* Main text */}
						{!!main_text && <p className="text-20 mb-8 text-center sm:mb-16 sm:text-left" dangerouslySetInnerHTML={{ __html: main_text }} />}

						<div className="flex flex-col items-center gap-4 sm:flex-row">
							<div className="flex items-center gap-6">
								{!!author?.avatar && <WpImage image={author?.avatar} className="h-16 w-16 rounded-full object-cover object-center" />}

								<span className="block sm:hidden">
									<AuthorDetails author={author} />
								</span>
							</div>

							<div className="flex flex-row items-center gap-7">
								<span className="hidden sm:block">
									<AuthorDetails author={author} />
								</span>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default ArticleBasicQuotes;
