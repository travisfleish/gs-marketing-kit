import React from "react";
// elements
import LinkGroup, { LinkGroupProps } from "~/components/elements/links/LinkGroup";
import Asset, { AssetProps } from "~/components/elements/media/Asset";
import { getSplitBreakText } from "~/utils/text";
import DotSubheading from "./elements/DotSubheading";

interface TwoColumnMastheadProps {
	content: {
		subheading?: string;
		heading?: string;
		content?: string;
		links?: LinkGroupProps[];
	};
	media?: AssetProps;
	options?: {
		simple_subheading?: boolean;
		subheading_colour?: {
			colours?: string;
		};
		content_max_width?: number;
		content_size?: "default" | "large";
		media_width?: "default" | "large";
	};
}

function TwoColumnMasthead({ content, media, options }: TwoColumnMastheadProps) {
	// maxWidth
	const widthRems = options?.content_max_width ? Number(options?.content_max_width) / 16 : false;
	// content size
	const contentLrg = options?.content_size === "large";

	const contentColSpan = [""];
	const mediaColSpan = [""];

	if (options?.media_width === "large") {
		contentColSpan.push("md:col-span-5");
		mediaColSpan.push("md:col-span-7");
	} else {
		contentColSpan.push("md:col-span-6");
		mediaColSpan.push("md:col-span-6");
	}

	return (
		<div className="grid gap-x-6 gap-y-10 md:grid-cols-12 md:items-center">
			{/* content */}
			<div className={`pt-8 md:pt-10 ${contentColSpan.join(" ")}`}>
				{/* content controls */}
				<div style={widthRems ? { maxWidth: `${widthRems}rem` } : {}}>
					{content?.subheading &&
						(options?.simple_subheading ? (
							<span className="text-15 mb-3 inline-block opacity-80 md:mb-4" dangerouslySetInnerHTML={{ __html: content?.subheading }} />
						) : (
							<DotSubheading subheading={content?.subheading} colour={options?.subheading_colour?.colours} />
						))}
					{content?.heading && (
						<h1
							dangerouslySetInnerHTML={{
								__html: getSplitBreakText({
									text: content?.heading,
								}),
							}}
						/>
					)}
					{content?.content && (
						<p className={`mt-3 font-body md:mt-5 ${contentLrg ? "text-20" : "text-18"}`} dangerouslySetInnerHTML={{ __html: content?.content }} />
					)}
					{content?.links?.length > 0 && (
						<div className="mt-8 md:mt-12">
							<LinkGroup links={content?.links} />
						</div>
					)}
				</div>
			</div>
			{/* media */}
			<div className={mediaColSpan.join(" ")}>
				<div className="-mr-6 xl:-mr-20">
					<Asset {...media} />
				</div>
			</div>
		</div>
	);
}

export default TwoColumnMasthead;
