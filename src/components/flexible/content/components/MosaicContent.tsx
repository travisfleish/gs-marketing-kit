import React from "react";
// elements
import { AssetProps } from "~/components/elements/media/Asset";
import LinkGroup, { LinkGroupProps } from "~/components/elements/links/LinkGroup";

// blocks
import MosaicDesktop from "./mosaicContent/MosaicDesktop";
import MosaicMarquee from "./mosaicContent/MosaicMarquee";

interface MosaicContentProps {
	content: {
		heading: string;
		content?: string;
		links: LinkGroupProps;
	};
	grid: {
		media: AssetProps;
	}[];
}

function MosaicContent({ content, grid }: MosaicContentProps) {
	return (
		<div className="relative ml-[-1.5rem] w-[calc(100%+3rem)] overflow-hidden bg-blue pt-[4.5rem] text-white md:mx-auto md:w-full md:rounded-[.75rem] lg:pb-[17.3125rem] lg:pt-[6.375rem]">
			{/* content */}
			<div className="relative z-10 mx-auto mb-[4.6875rem] max-w-[35rem] px-5 text-center lg:mb-0">
				<h2 className="text-h4 mb-6" dangerouslySetInnerHTML={{ __html: content.heading }} />
				<p className="opacity-80" dangerouslySetInnerHTML={{ __html: content.content }} />
				<div className="mt-8 lg:mt-10">
					<LinkGroup links={content.links.links} centered />
				</div>
			</div>
			{/* mosaic desktop */}
			<MosaicDesktop grid={grid} />
			{/* mosaic marquee mobile */}
			<MosaicMarquee grid={grid} />
		</div>
	);
}

export default MosaicContent;
