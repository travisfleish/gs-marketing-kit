import React, { useState } from "react";
// elements
import Link from "next/link";
import WpImage, { WpImageProps } from "~/components/elements/Wp";
// blocks
import PodcastSpring from "~/components/elements/PodcastSpring";
import getPostPreviewImage from "~/utils/getPostPreviewImage";

interface ProductGridLinkCardProps {
	link;
	fullWidth?: boolean;
}

function ProductGridLinkCard({ link, fullWidth }: ProductGridLinkCardProps) {
	const [cardHovered, setCardHovered] = useState(false);
	if (link?.link_type === "resource") {
		return (
			<Link
				href={link?.resource?.permalink || "#"}
				className={`group flex items-center space-x-3 rounded-lg p-2 lg:space-x-5 ${fullWidth ? "mt-8 bg-navy text-white md:mt-auto " : "bg-lightGrey"}`}
			>
				{/* thumbnail */}
				<div className="relative aspect-[57/32] w-full max-w-[7rem] overflow-hidden rounded-md bg-lightBlue">
					<WpImage image={getPostPreviewImage(link?.resource)} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.07]" />
				</div>
				{/* content */}
				<h3 className="text-16--clamp max-w-[19.875rem] font-body !leading-[1.3]" dangerouslySetInnerHTML={{ __html: link?.resource?.post_title }} />
			</Link>
		);
	}

	return (
		<Link
			href={link?.link_card?.link?.url || "#"}
			className="block overflow-hidden rounded-lg bg-navy p-3 text-white md:p-4"
			onMouseOver={() => setCardHovered(true)}
			onMouseLeave={() => setCardHovered(false)}
		>
			<div className="mb-3 flex items-center space-x-3 md:mb-4 lg:space-x-4">
				{link?.link_card?.tag && (
					<span
						className="text-15 rounded-md bg-white/10 px-2 py-[.3rem] font-body font-medium text-white"
						dangerouslySetInnerHTML={{ __html: link?.link_card?.tag }}
					/>
				)}
				{link?.link_card?.date && <span className="text-15 font-regular font-body" dangerouslySetInnerHTML={{ __html: link?.link_card?.date }} />}
			</div>
			<h3
				className={`text-22 is-heading font-medium ${link?.link_card?.podcast_link ? "mb-2 line-clamp-1  md:mb-3" : ""}`}
				dangerouslySetInnerHTML={{ __html: link?.link_card?.link?.title }}
			/>
			{link?.link_card?.podcast_link && <PodcastSpring cardHovered={cardHovered} />}
		</Link>
	);
}

export default ProductGridLinkCard;
