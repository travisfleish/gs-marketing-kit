// TODO : Split into components

import clsx from "clsx";
import { getBackgroundColor } from "~/components/ColorHelpers";
import Asset from "~/components/elements/media/Asset";
import parseSlug from "~/utils/parseSlug";
import { getSplitBreakText } from "~/utils/text";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useWindowSize } from "react-use";
import { ContentSectionType } from "../types";
import ExpandedTabs from "./ExpandedTabs";
import FeauturedSection from "./FeaturedSection";
import LinkedTwoColContentAndLinks from "./LinkedTwoColContentAndLinks";

// const assetSizeMap = {
// 	default: "w-full xl:max-w-[628px] md:aspect-[628/740]",
// 	extraSmall: "w-full xl:max-w-[519px] md:aspect-[519/620]",
// 	small: "w-full xl:max-w-[572px] md:aspect-[572/684]",
// 	medium: "w-full xl:max-w-[614px] md:aspect-[614/680]",
// 	large: "w-full xl:max-w-[614px] md:aspect-[614/589]",
// 	extraLarge: "w-full xl:max-w-[628px] md:aspect-[628/608]",
// 	extraExtraLarge: "w-full xl:max-w-[628px] md:aspect-[628/620]",
// };

const mobileGapMap = {
	"32px": "gap-8",
	none: "",
};

const desktopGapMap = {
	"96px": "lg:gap-24",
	"192px": "lg:gap-48",
};

interface ContentSectionProps {
	section: ContentSectionType;
	onInView?: () => void;
}

function ContentSection({ section, onInView }: ContentSectionProps) {
	const { width: windowWidth } = useWindowSize();

	const {
		section_heading,
		heading: sectionHeading,
		asset,
		asset_mobile,
		// asset_size,
		asset_position,
		add_featured_section = false,
		add_expanded_tabs = false,
		featured_section,
		expanded_tabs,
		mobile_gap,
		desktop_gap,
	} = section;
	const ref = useRef(null);
	const isInView = useInView(ref, { amount: 0.7 });

	const isAssetImage = asset?.type === "image";
	let sectionBgColor = "";
	const hasBackgroundColor = section?.section_background_color !== "none";

	if (hasBackgroundColor) {
		sectionBgColor = getBackgroundColor(section?.section_background_color);
	}

	useEffect(() => {
		if (isInView && windowWidth > 768) {
			onInView?.();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isInView]);

	const tabsLayout = !!add_expanded_tabs;
	const hasMobileAsset = Object.keys(asset_mobile)?.length > 1;

	return (
		<div>
			<div
				ref={ref}
				key={section_heading}
				id={parseSlug(section_heading)}
				className={clsx(
					tabsLayout ? `${mobileGapMap?.[mobile_gap]} md:!items-stretch md:gap-24` : `gap-8 md:gap-10 ${desktopGapMap?.[desktop_gap]}`,
					"flex w-full scroll-mt-20 flex-col items-center justify-between overflow-hidden",
					hasBackgroundColor ? "py-8 md:py-0" : "flex-col-reverse",
					asset_position === "left" ? "md:flex-row-reverse" : "md:flex-row",
					sectionBgColor,
					hasBackgroundColor && "rounded-xl"
				)}
			>
				{/* Content */}
				<div
					className={clsx(
						(tabsLayout || hasBackgroundColor) && "p-5 pt-0 md:pt-5",
						tabsLayout ? "flex flex-col justify-between md:max-w-[50%]" : "md:max-w-[48%]",
						"sm:p-8",
						hasBackgroundColor && asset_position === "left" && "xl:pl-0",
						hasBackgroundColor && asset_position === "right" && "xl:pr-0",
						hasBackgroundColor ? "xl:p-16" : "xl:p-0"
					)}
				>
					<div>
						{/* Heading */}
						<h2
							className={clsx(tabsLayout && "text-h4", "text-h3 mb-4 block font-normal !tracking-[-0.0175em] md:mb-6")}
							dangerouslySetInnerHTML={{
								__html: getSplitBreakText({
									text: sectionHeading,
									disable: windowWidth < 1150,
								}),
							}}
						/>

						<div className={clsx(tabsLayout && "block md:hidden lg:block")}>
							<LinkedTwoColContentAndLinks section={section} hasBgColor={hasBackgroundColor} />
						</div>
					</div>

					{add_expanded_tabs && <ExpandedTabs bgColorType={!hasBackgroundColor ? "dark" : "light"} tabs={expanded_tabs?.expanded_tabs?.tabs} />}

					{/* Featured Desktop */}
					{add_featured_section && (
						<div className="hidden xl:block">
							<FeauturedSection featuredSection={featured_section} />
						</div>
					)}
				</div>

				{/* Asset container */}
				<div
					className={clsx(
						asset_position === "left" && "pr-5 sm:pr-0",
						asset_position === "right" && "pl-5 sm:pl-0",
						"flex w-full flex-shrink-0 flex-col justify-between xs:max-w-[80%] md:max-w-[45%] lg:max-w-[50%] lg:justify-end"
						// assetSizeMap?.[asset_size || "default"]
					)}
				>
					{tabsLayout && (
						<div className={clsx("hidden md:block lg:hidden", asset_position === "right" && "pr-8 pt-8", asset_position === "left" && "pl-8 pt-8")}>
							<LinkedTwoColContentAndLinks section={section} hasBgColor={hasBackgroundColor} />
						</div>
					)}

					{/* Asset */}
					<div
						className={clsx(
							"lg:max-w-full",
							isAssetImage && "w-full flex-shrink-0",
							// assetSizeMap?.[asset_size || "default"],
							!hasBackgroundColor && "overflow-hidden rounded-lg md:rounded-xl"
						)}
					>
						<Asset
							// {...asset}
							{...(windowWidth < 768 && hasMobileAsset ? asset_mobile : asset)}
							className={clsx(
								isAssetImage && "object-cover object-center",
								asset_position === "right" && "md:object-right-bottom",
								asset_position === "left" && "md:object-left-bottom"
							)}
						/>
					</div>
				</div>
			</div>

			{/* Featured smaller devices */}
			{add_featured_section && (
				<div
					className={clsx(
						"mt-4 block xl:hidden",
						asset_position === "left" && !tabsLayout && "md:pr-10",
						asset_position === "right" && !tabsLayout && "md:pl-10"
					)}
				>
					<FeauturedSection featuredSection={featured_section} />
				</div>
			)}
		</div>
	);
}

export default ContentSection;
