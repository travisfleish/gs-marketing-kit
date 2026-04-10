import Link from "next/link";
import MixedSliderCardInner from "./MixedSliderCardInner";
import { FeaturedItem } from "./types";

function MixedSliderCard(props: { item: FeaturedItem }) {
	const { item } = props;
	const { layout, page, post, file } = item;

	// Set link
	let link = {
		link: null,
		target: null,
	};

	if (layout === "post") {
		link = {
			link: post?.[0]?.permalink,
			target: "_self",
		};
	}
	if (layout === "page") {
		link = {
			link: page?.link?.url,
			target: page?.link?.target,
		};
	}

	return (
		<>
			{(layout === "post" || layout === "page") && (
				<Link href={link?.link || "/"} target={link?.target || "_self"} className="mixed-slider-card--page-post group flex flex-col items-start">
					<MixedSliderCardInner item={item} />
				</Link>
			)}

			{layout === "file" && (
				<a download href={file?.file?.url} className="mixed-slider-card--file group flex flex-col items-start">
					<MixedSliderCardInner item={item} />
				</a>
			)}
		</>
	);
}

export default MixedSliderCard;
