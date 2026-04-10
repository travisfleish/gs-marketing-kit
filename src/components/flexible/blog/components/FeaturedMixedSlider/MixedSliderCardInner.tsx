import WpImage from "~/components/elements/Wp";
import getPostPreviewImage from "~/utils/getPostPreviewImage";

function MixedSliderCardInner({ item }) {
	const { layout, page, post, file } = item;
	// Set image
	let image = null;

	if (layout === "post") {
		image = getPostPreviewImage(post?.[0]);
	}
	if (layout === "page") {
		image = page?.image;
	}
	if (layout === "file") {
		image = file?.image;
	}

	// Set tag
	let tag = null;

	if (layout === "post") {
		tag = post?.[0]?.post_date_gmt;
	}
	if (layout === "page") {
		tag = page?.tag;
	}
	if (layout === "file") {
		tag = file?.tag;
	}

	// Set heading
	let heading = null;

	if (layout === "post") {
		heading = post?.[0]?.post_title;
	}
	if (layout === "page") {
		heading = page?.heading;
	}
	if (layout === "file") {
		heading = file?.heading;
	}

	return (
		<>
			{/* Image */}
			<div className="mb-6 aspect-[411/227] w-full overflow-hidden rounded-md">
				<WpImage image={image} className="h-full w-full object-cover object-center transition-transform duration-300 ease-linear group-hover:scale-110" />
			</div>

			{/* Tag */}
			<span className="text-15 mb-5 font-body">{tag}</span>

			{/* Heading */}
			<p className="text-22 font-medium lg:max-w-[90%]" dangerouslySetInnerHTML={{ __html: heading }} />
		</>
	);
}

export default MixedSliderCardInner;
