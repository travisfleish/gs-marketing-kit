import React, { useState } from "react";

// elements
import Link from "next/link";
import Asset, { AssetProps } from "~/components/elements/media/Asset";
import { CircleArrow } from "~/components/elements/Icons";
import { trackLinkClickProduct } from "~/utils/trackEvent";

interface GridCardProps {
	item: {
		link?: {
			title: string;
			url: string;
			target: string;
		};
		media: AssetProps;
		description: string;
	};
	onClick?: (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
}

function GridCard({ item, ...other }: GridCardProps) {
	const [isHovered, setIsHovered] = useState(false);
	const link = item?.link || {};
	let urlPath = item.link.url.trim().replace(/^[a-zA-Z]{3,5}:\/{2}[a-zA-Z0-9_.:-]+\//, "");
	if (urlPath.slice(0, 1) !== "/" && urlPath.slice(0, 1) !== "#") {
		urlPath = `/${urlPath}`;
	}

	return (
		<Link
			key={item?.link?.title}
			href={item?.link?.url || "#"}
			target={item?.link?.target}
			className="group w-[17.0625rem] shrink-0 snap-start md:w-[18.875rem] lg:w-auto"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onClick={(e) => {
				trackLinkClickProduct({ ...link, url: urlPath });
				if (other.onClick) other.onClick(e);
			}}
		>
			{/* media */}
			<div className="relative mb-8 aspect-[151/193]">
				<Asset {...item.media} isHovered={isHovered} />
			</div>
			<div className="mb-3 flex items-center transition-transform duration-300 lg:mb-5 lg:-translate-x-8 lg:space-x-3 lg:group-hover:translate-x-0">
				<div className="z-10 hidden h-5 w-5 rotate-45 scale-0 rounded-full bg-black text-white transition-transform duration-300 group-hover:scale-[1] lg:flex">
					<CircleArrow />
				</div>
				<h3 className="text-22 is-heading font-medium" dangerouslySetInnerHTML={{ __html: item?.link?.title }} />
			</div>
			<p className="text-16 max-w-[18.4rem] font-body opacity-80" dangerouslySetInnerHTML={{ __html: item?.description }} />
		</Link>
	);
}

export default GridCard;
