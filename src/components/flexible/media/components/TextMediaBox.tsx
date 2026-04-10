import React from "react";

// elements
import LinkGroup, { LinkGroupProps } from "~/components/elements/links/LinkGroup";
import Asset, { AssetProps } from "~/components/elements/media/Asset";

interface TextMediaBoxProps {
	heading?: string;
	description?: string;
	links?: LinkGroupProps[];
	media: AssetProps;
}

function TextMediaBox({ heading, description, links, media }: TextMediaBoxProps) {
	const bars = Array.from({ length: 20 }, (_, i) => i + 1);
	return (
		<div className="-mx-6 w-[calc(100%+3rem)] overflow-hidden bg-lightGrey px-6 pb-12 pt-10 text-navy md:px-10 md:pb-[4.5rem] md:pt-[6.125rem] lg:mx-auto lg:w-full lg:rounded-lg lg:px-[6.5625rem]">
			{/* content */}
			<div className="mx-auto max-w-[35.9375rem] text-center">
				{heading && <h2 className="text-h3" dangerouslySetInnerHTML={{ __html: heading }} />}
				{description && <p className="text-18 mt-4 font-body opacity-80 md:mt-6" dangerouslySetInnerHTML={{ __html: description }} />}
				{links && (
					<div className="mt-6 md:mt-10">
						<LinkGroup links={links} centered />
					</div>
				)}
			</div>
			{/* media */}
			<div className="relative mt-8 md:mt-[7.5rem]">
				{/* bars right */}
				<div className="absolute left-[79%] top-[5%] flex h-[40%] w-[30%] flex-row-reverse justify-between">
					{bars.map((index) => (
						<div key={`bars-second-set-${index}`} className="h-full shrink-0 bg-blue" style={{ width: `${9 - index * 0.4}px` }} />
					))}
				</div>
				<div className=" relative z-10 overflow-hidden rounded-lg">
					<Asset {...media} />
				</div>
				{/* bars left */}
				<div className="absolute right-[70%] top-[75%] flex h-[40%] w-[40%] justify-between">
					{bars.map((index) => (
						<div key={`bars-second-set-${index}`} className="h-full shrink-0 bg-blue" style={{ width: `${9 - index * 0.4}px` }} />
					))}
				</div>
			</div>
		</div>
	);
}

export default TextMediaBox;
