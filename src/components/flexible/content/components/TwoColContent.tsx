// Update aspect ratio
// Responsiveness
// Featured link extends hover type

import clsx from "clsx";
import { getBackgroundAndTextColor } from "~/components/ColorHelpers";
import { ImageProps } from "~/components/elements/Wp";
import LinkGroup from "~/components/elements/links/LinkGroup";
import Asset, { AssetProps } from "~/components/elements/media/Asset";
import FeaturedLink from "~/components/global/Footer/components/FeaturedLink";
import { WpLinkType, WpSimpleTextCard } from "~/types/wp";
import { getSplitBreakText } from "~/utils/text";
import { useWindowSize } from "react-use";

interface Content extends WpSimpleTextCard {
	featured_link: {
		text: string;
		image: ImageProps;
		link: WpLinkType;
	};
}

export interface TwoColContentProps {
	content: Content;
	media: {
		asset: AssetProps;
		asset_mobile?: AssetProps;
	};
	options: {
		align_asset_to_edge?: boolean;
		asset_max_width?: string;
		asset_position: "left" | "right";
		background_color: string;
		add_featured_link?: boolean;
		heading_font_size: {
			text_size?: string;
		};
		gap?: string;
		container_size?: string;
	};
}

const assetPositionMap = {
	left: "md:flex-row-reverse",
	right: "md:flex-row",
};

const getHeadingFontSize = (text_size: string) => {
	if (text_size === "default") {
		return "text-h4 is-smaller-mob";
	}

	return `text-${text_size}`;
};

const gapMap = {
	127: "xl:gap-[127px]",
	65: "xl:gap-[65px]",
	50: "xl:gap-[50px]",
};

const containerMap = {
	default: "container container--extra-small",
	large: "container",
};

function TwoColContent(props: TwoColContentProps) {
	const { content, media, options } = props;
	const { add_featured_link, background_color } = options || {};

	const hasBackgroundColor = options.background_color !== "none";

	const { width: windowWidth } = useWindowSize();

	const containerMapKey = hasBackgroundColor ? "large" : options.container_size;
	const hasMobileAsset = Object.keys(media?.asset_mobile)?.length > 1;

	const noFullWidthOnMobile = hasBackgroundColor;

	return (
		<div className="two-col-content">
			<div className={clsx(containerMap?.[containerMapKey])}>
				<div
					className={clsx(
						hasBackgroundColor ? "flex-col pt-16" : "flex-col-reverse",
						"flex items-center gap-8 md:gap-10 lg:gap-24",
						gapMap?.[options?.gap],
						hasBackgroundColor &&
							`${getBackgroundAndTextColor(background_color)} -ml-5 w-[100vw] overflow-hidden pb-16 sm:ml-0 sm:w-fit sm:rounded-xl md:py-[38px] md:pl-20 md:pr-0 lg:pl-[109px] xl:py-0`,
						assetPositionMap?.[options?.asset_position],
						options?.align_asset_to_edge && options?.asset_position === "right" && "justify-end",
						options?.align_asset_to_edge && options?.asset_position === "left" && "justify-start"
					)}
				>
					{/* Content */}
					<div className={clsx("flex flex-col", hasBackgroundColor ? "sm:pr-[28px]" : "sm:pl-0", options?.align_asset_to_edge && "max-w-[434px]")}>
						{/* Heading */}
						{!!content?.heading && (
							<h2
								dangerouslySetInnerHTML={{
									__html: getSplitBreakText({
										text: content.heading,
										breakAtAll: true,
									}),
								}}
								className={clsx(
									getHeadingFontSize(options?.heading_font_size?.text_size),
									"mb-4 !font-normal !tracking-[-0.025em] md:mb-5",
									hasBackgroundColor && "text-center md:text-left"
								)}
							/>
						)}

						{/* Content */}
						{!!content?.content && (
							<div
								dangerouslySetInnerHTML={{ __html: content.content }}
								className={clsx("text-18 prose font-body opacity-80", hasBackgroundColor && "px-5 text-center md:px-0 md:text-left")}
							/>
						)}

						{/* Links */}
						{content?.links?.links?.length > 0 && (
							<LinkGroup
								className={clsx("mt-6 md:mt-8 lg:mt-10", hasBackgroundColor && "mx-auto px-5 md:mx-0 md:px-0")}
								links={content.links?.links}
								noFullWidthOnMobile={noFullWidthOnMobile}
							/>
						)}

						{/* Featured Link */}
						{add_featured_link && content?.featured_link && (
							<FeaturedLink link={content?.featured_link} className="mt-8 sm:mt-10 xl:mt-20" hoverType="extends" />
						)}
					</div>

					{/* Aspect */}
					{!!media.asset && (
						<div
							className={clsx(
								"w-full flex-shrink-0 overflow-hidden rounded-lg sm:max-w-[60%] md:max-w-[50%]",
								options?.align_asset_to_edge && options?.asset_position === "right" && "md:-mr-20 1441px:-mr-0",
								options?.align_asset_to_edge && options?.asset_position === "left" && "md:-ml-20 1441px:-ml-0"
							)}
							{...(windowWidth > 1280 && {
								style: {
									maxWidth: options?.align_asset_to_edge ? "700px" : options.asset_max_width,
								},
							})}
						>
							{windowWidth < 768 && hasMobileAsset ? <Asset {...media.asset_mobile} /> : <Asset {...media.asset} />}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default TwoColContent;
