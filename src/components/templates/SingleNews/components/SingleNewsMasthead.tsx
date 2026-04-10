import { WpPage } from "~/types/wp";
import Link from "next/link";
import { RightArrowCircle } from "~/components/elements/Icons";
import Asset from "~/components/elements/media/Asset";
import AuthorAndDate from "../../SingleResource/components/AuthorAndDate";

function SingleNewsMasthead(props: WpPage) {
	// console.log("SingleNewsMasthead.props", props);
	const { inner_page, post_title, author, post_date, newsroom_categories } = props;

	const { masthead } = inner_page;

	const hasAsset = Object.keys(masthead.asset).length > 1;

	return (
		<div className="single-news-masthead">
			{/* Back button */}
			<div className="container">
				<Link className="group flex w-fit justify-start gap-4 py-6 md:py-12" href="/newsroom/">
					<div className="rotate-180">
						<RightArrowCircle circleClassName="text-navy group-hover:text-blue" />
					</div>
					Take me back
				</Link>
			</div>

			{/* Main */}
			<div className="container--extra-small container">
				<div className="flex w-full flex-col items-center">
					{/* Tags */}
					<div className="mb-6 flex items-center gap-4">
						<span className="font-15 font-body font-normal">News</span>

						{newsroom_categories?.length > 0 &&
							newsroom_categories?.map((category, index) => (
								<span
									key={`category-${index}`}
									className="font-15 rounded bg-lightGrey px-[10px] py-1 font-body font-medium text-navy"
									dangerouslySetInnerHTML={{
										__html: category,
									}}
								/>
							))}
					</div>

					{/* Heading */}
					{!!post_title && (
						<h1
							className="text-h2 mx-auto mb-8 max-w-[894px] text-center md:mb-12"
							dangerouslySetInnerHTML={{
								__html: post_title,
							}}
						/>
					)}

					{/* Author, date */}
					<AuthorAndDate
						showGuestAuthor={masthead?.guest_author?.show_guest_author || false}
						guestAuthor={{
							image: masthead?.guest_author?.guest_author?.avatar,
							name: masthead?.guest_author?.guest_author?.name,
						}}
						author={{
							image: author?.acf?.profile_picture,
							name: author?.name,
						}}
						post_date={post_date}
					/>

					{/* Asset */}
					{!!hasAsset && (
						<div className="aspect-[1110/623] w-full max-w-[1110px] overflow-hidden rounded-[14px]">
							<Asset className="h-full w-full object-cover object-center" {...masthead.asset} />
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default SingleNewsMasthead;
