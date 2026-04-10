import React from "react";
// elements
import Link from "next/link";
import Asset, { AssetProps } from "~/components/elements/media/Asset";
import { CircleArrow } from "~/components/elements/Icons";

interface FullWidthProductCalloutProps {
	media?: AssetProps;
	link?: {
		url?: string;
		title: string;
		target?: "_blank" | "";
	};
	description?: string;
}

function FullWidthProductCallout({ media, link, description }: FullWidthProductCalloutProps) {
	return (
		<div>
			<Link href={link?.url} target={link?.target} className="group space-y-6 lg:space-y-8">
				<div className="relative w-full overflow-hidden rounded-lg max-md:aspect-[16/8]">
					<div className="absolute left-3 right-0 top-3 z-10 h-5 w-5 scale-0 rounded-full bg-black text-white transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[1] lg:left-4 lg:top-4 lg:h-8 lg:w-8 lg:rotate-45">
						<CircleArrow />
					</div>
					<div className="max-md:absolute max-md:inset-0">
						<Asset className="max-md:object-cover max-md:object-left-top" {...media} />
					</div>
				</div>
				<div className="max-w-[39.25rem] space-y-2 md:p-3 lg:space-y-3">
					{link?.title && <span className="text-22 is-heading block font-medium" dangerouslySetInnerHTML={{ __html: link?.title }} />}
					{description && <p className="text-18 w-full font-body opacity-80" dangerouslySetInnerHTML={{ __html: description }} />}
				</div>
			</Link>
		</div>
	);
}

export default FullWidthProductCallout;
