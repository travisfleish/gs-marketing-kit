// Add lines
// Responsiveness

import Link from "next/link";
import { RightArrowCircle } from "~/components/elements/Icons";
import Asset from "~/components/elements/media/Asset";
import { WpPage } from "~/types/wp";
import { getSplitBreakText } from "~/utils/text";
import { useWindowSize } from "react-use";
import PostTag from "~/components/elements/PostTag";
import { useInView } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";
import AuthorAndDate from "./AuthorAndDate";
import VisualTags from "./VisualTags";

function RightLines({ width = "364", height = null }) {
	return (
		<svg width={width} height={height} viewBox="0 0 364 328" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1 0L1 328" stroke="#0000DC" strokeWidth="0.49655" />
			<path d="M18.5488 0L18.5488 328" stroke="#0000DC" strokeWidth="0.9931" />
			<path d="M36.0977 0L36.0977 328" stroke="#0000DC" strokeWidth="1.48965" />
			<path d="M53.6445 0L53.6445 328" stroke="#0000DC" strokeWidth="1.9862" />
			<path d="M71.1934 0L71.1934 328" stroke="#0000DC" strokeWidth="2.48275" />
			<path d="M88.7422 0L88.7422 328" stroke="#0000DC" strokeWidth="2.9793" />
			<path d="M106.291 0L106.291 328" stroke="#0000DC" strokeWidth="3.47585" />
			<path d="M123.838 0L123.838 328" stroke="#0000DC" strokeWidth="3.9724" />
			<path d="M141.387 0L141.387 328" stroke="#0000DC" strokeWidth="4.46895" />
			<path d="M158.936 0L158.936 328" stroke="#0000DC" strokeWidth="4.9655" />
			<path d="M176.484 0L176.484 328" stroke="#0000DC" strokeWidth="5.46205" />
			<path d="M194.033 0L194.033 328" stroke="#0000DC" strokeWidth="5.9586" />
			<path d="M211.58 0L211.58 328" stroke="#0000DC" strokeWidth="6.45515" />
			<path d="M229.129 0L229.129 328" stroke="#0000DC" strokeWidth="6.9517" />
			<path d="M246.678 0L246.678 328" stroke="#0000DC" strokeWidth="7.44825" />
			<path d="M264.227 0L264.227 328" stroke="#0000DC" strokeWidth="7.9448" />
			<path d="M281.773 0L281.773 328" stroke="#0000DC" strokeWidth="8.44135" />
			<path d="M299.322 0L299.322 328" stroke="#0000DC" strokeWidth="8.93789" />
			<path d="M316.871 0L316.871 328" stroke="#0000DC" strokeWidth="9.43444" />
			<path d="M334.42 0L334.42 328" stroke="#0000DC" strokeWidth="9.93099" />
			<path d="M351.969 0L351.969 328" stroke="#0000DC" strokeWidth="10.4275" />
		</svg>
	);
}

function BottomLines({ width = "100%", height = null }) {
	return (
		<svg width={width} height={height} viewBox="0 0 1440 173" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1440 10L-3.43621e-05 10.0003" stroke="#95ECFD" strokeWidth="20" />
			<path d="M1440 26.2L-3.43621e-05 26.2002" stroke="#95ECFD" strokeWidth="18" />
			<path d="M1440 42.4L-3.43621e-05 42.4002" stroke="#95ECFD" strokeWidth="16" />
			<path d="M1440 58.5999L-3.43621e-05 58.6002" stroke="#95ECFD" strokeWidth="14" />
			<path d="M1440 74.7999L-3.43621e-05 74.8002" stroke="#95ECFD" strokeWidth="12" />
			<path d="M1440 90.9999L-3.43621e-05 91.0001" stroke="#95ECFD" strokeWidth="10" />
			<path d="M1440 107.2L-3.43621e-05 107.2" stroke="#95ECFD" strokeWidth="8" />
			<path d="M1440 123.4L-3.43621e-05 123.4" stroke="#95ECFD" strokeWidth="6" />
			<path d="M1440 139.6L-3.43621e-05 139.6" stroke="#95ECFD" strokeWidth="4" />
			<path d="M1440 155.8L-3.43621e-05 155.8" stroke="#95ECFD" strokeWidth="2" />
			<path d="M1440 172L-3.43621e-05 172" stroke="#95ECFD" />
		</svg>
	);
}

function BlogMasthead(props: WpPage) {
	const { post_title, post_date, inner_page, author, tags, visual_tags, featured_image } = props;

	const { masthead } = inner_page;
	const { asset } = masthead;
	if (!asset?.image && featured_image?.src?.length > 0) {
		asset.image = {
			url: featured_image?.src,
			...featured_image,
		};
	}

	const { width: windowWidth } = useWindowSize();

	const showGuestAuthor = masthead?.guest_author?.show_guest_author || false;

	const containerRef = useRef(null);
	const isContainerInView = useInView(containerRef, { amount: 0.5, once: true });
	const assetRef = useRef(null);
	const isAssetInView = useInView(assetRef, { amount: 0.5, once: true });

	return (
		<div ref={containerRef} className="blog-masthead relative bg-lightBlue">
			{/* Back button */}
			<div className="container hidden md:block">
				<Link className="group flex w-fit justify-start gap-4 py-6 md:py-12" href="/content-hub/">
					<div className="rotate-180">
						<RightArrowCircle circleClassName="text-navy group-hover:text-blue" />
					</div>
					Take me back
				</Link>
			</div>

			{/* Tags, heading, author */}
			<div className="relative z-10">
				{/* Right Lines */}
				<div
					className={clsx(
						"linear absolute right-0 top-0 w-[24%] origin-right transition-transform duration-500",
						isContainerInView ? "scale-x-[100%]" : "scale-x-0"
					)}
				>
					<RightLines width="100%" />
				</div>

				<div className="container--1062px container flex flex-col pt-6 md:pt-0">
					{/* Tags */}
					<div className="mb-6 hidden items-center gap-6 md:flex">
						<span className="text-15 font-body text-navy/80">Sport Intelligence</span>

						{tags?.map((tag, index) => <PostTag key={`tag-${index}`} text={tag} bgColor="blue" textColor="white" />)}

						<VisualTags visualTags={visual_tags} className="text-15 font-body text-navy/80" />
					</div>

					{/* Title h1 */}
					<h1
						dangerouslySetInnerHTML={{
							__html: getSplitBreakText({
								text: masthead?.heading ?? post_title,
								disable: windowWidth < 1100,
							}),
						}}
						className="relative mb-6 tracking-[-0.01em] md:mb-12 md:max-w-[90%] lg:max-w-[75%]"
					/>

					<AuthorAndDate
						showGuestAuthor={showGuestAuthor}
						guestAuthor={{
							image: masthead?.guest_author?.guest_author?.avatar, // Update type - caused by variance in acf setup between pages and this post type
							name: masthead?.guest_author?.guest_author?.name, // Update type - caused by variance in acf setup between pages and this post type
						}}
						author={{
							image: author?.acf?.profile_picture,
							name: author?.name,
						}}
						post_date={post_date}
					/>

					{/* Asset */}
					<div ref={assetRef} className="aspect-[1110/614 w-full max-w-[1110px] overflow-hidden rounded-lg">
						<Asset {...asset} />
					</div>
				</div>
			</div>

			{/* Lines */}
			<div
				className={clsx(
					"linear absolute bottom-0 left-0 flex h-[36%] w-full origin-bottom flex-col bg-white transition-transform duration-300",
					isAssetInView ? "scale-y-[100%]" : "scale-y-0"
				)}
			>
				<BottomLines width="100%" />
				{/* <div className="absolute bottom-0 h-[100%] w-full bg-white" /> */}
			</div>
		</div>
	);
}

export default BlogMasthead;
