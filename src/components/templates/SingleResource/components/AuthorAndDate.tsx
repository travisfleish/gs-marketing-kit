import clsx from "clsx";
import WpImage from "~/components/elements/Wp";
import formatDate from "~/utils/formatDate";

function Author({ image, name, className = "" }) {
	return (
		<div className={clsx("flex items-center justify-start gap-4", className)}>
			{/* Image */}
			<WpImage image={image} className="h-10 w-10 rounded-[4px] object-cover object-center" />

			{/* Name */}
			<p dangerouslySetInnerHTML={{ __html: name }} className="text-16 font-body font-medium text-navy" />
		</div>
	);
}

function AuthorAndDate({ showGuestAuthor, guestAuthor, author, post_date }) {
	return (
		<div className="mb-8 flex items-center justify-start gap-7 md:mb-20">
			{/* Author */}
			<Author image={showGuestAuthor ? guestAuthor?.image : author?.image} name={showGuestAuthor ? guestAuthor?.name : author?.name} />

			{/* Date */}
			<span className="text-15 font-normal text-navy/80">{formatDate(post_date)}</span>
		</div>
	);
}

export default AuthorAndDate;
