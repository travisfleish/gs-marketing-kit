import WpImage, { ImageProps } from "~/components/elements/Wp";

export interface ArticleQuoteProps {
	author: {
		avatar: ImageProps;
		name: string;
		job_title: string;
		company: string;
	};
	icon: ImageProps;
	main_text: string;
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

function ArticleQuote(props: ArticleQuoteProps) {
	// console.log("ArticleQuote.props", props);

	const { author, icon, main_text } = props;

	return (
		<div className="article-quote flex flex-col rounded-lg bg-purple p-6 text-white md:p-8">
			{!!icon && <WpImage image={icon} className="mb-10 block h-auto w-[85px] object-contain object-left sm:hidden" />}

			{/* Main text */}
			{!!main_text && <p className="text-24 mb-[2.25rem] text-left sm:mb-16" dangerouslySetInnerHTML={{ __html: main_text }} />}

			<div className="flex flex-col gap-4 sm:flex-row sm:items-center">
				<div className="flex items-center gap-4 sm:gap-6">
					{!!author?.avatar && <WpImage image={author?.avatar} className="h-14 w-14 rounded-full object-cover" />}

					<span className="block sm:hidden">
						<AuthorDetails author={author} />
					</span>
				</div>

				<div className="flex flex-row gap-7 sm:items-center">
					<span className="hidden sm:block">
						<AuthorDetails author={author} />
					</span>

					{/* Divider */}
					<div className="hidden h-[42px] w-[1px] bg-white/20 sm:block" />

					{/* Icon */}
					{!!icon && <WpImage image={icon} className="hidden h-auto w-[85px] object-contain object-left sm:block" />}
				</div>
			</div>
		</div>
	);
}

export default ArticleQuote;
