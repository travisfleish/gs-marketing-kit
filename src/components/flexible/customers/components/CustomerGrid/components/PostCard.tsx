import Link from "next/link";
import { TopRightArrowCircle } from "~/components/elements/Icons";
import WpImage from "~/components/elements/Wp";

function PostCard({ card }) {
	const relatedPost = card?.post?.[0];

	return (
		<Link
			href={relatedPost?.permalink || "/"}
			className="customer-grid-card--post group relative min-h-[250px] overflow-hidden rounded-lg px-7 py-6 md:min-h-[348px]"
		>
			{/* Background image */}
			<WpImage
				image={relatedPost?.acf?.media?.thumbnail}
				className="linear absolute inset-0 h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
			/>

			{/* Overlay */}
			<div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />

			{/* Content */}
			<div className="relative flex h-full flex-col justify-between">
				<div className="flex w-full justify-between">
					<WpImage image={relatedPost?.acf?.media?.light_logo} className="h-8 w-auto" />

					<div className="transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-105">
						<TopRightArrowCircle width="36" height="36" />
					</div>
				</div>

				<span
					className="text-h6 max-w-full font-[450] text-white md:max-w-[85%]"
					dangerouslySetInnerHTML={{
						__html: relatedPost?.post_title,
					}}
				/>
			</div>
		</Link>
	);
}

export default PostCard;
