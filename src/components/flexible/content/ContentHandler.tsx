// Define inner handler and reuse
// Pass in map as props
// Update to aliased imports

import React from "react";
import dynamic from "next/dynamic";
// Components
import TextCard from "~/components/elements/text/TextCard";

// Dynamic Imports
const TwoColContent = dynamic(() => import("./components/TwoColContent"));
const RotatingHeading = dynamic(() => import("./components/RotatingHeading"));
const FourColumnThumbnailGrid = dynamic(() => import("./components/FourColumnThumbnailGrid"));
const MediaAndStats = dynamic(() => import("./components/MediaAndStats"), { ssr: false });
const MosaicContent = dynamic(() => import("./components/MosaicContent"));
const LinkedTwoColContent = dynamic(() => import("./components/LinkedTwoColContent/LinkedTwoColContent"));
const ProductSlideOut = dynamic(() => import("./components/ProductSlideOut"));
const ThreeColumnCardGrid = dynamic(() => import("./components/ThreeColumnCardGrid"));
const FourColumnListGrid = dynamic(() => import("./components/FourColumnListGrid"));
const StatsGrid = dynamic(() => import("./components/StatsGrid"));
const IconGrid = dynamic(() => import("./components/IconGrid"));
const FullWidthProductCallout = dynamic(() => import("./components/FullWidthProductCallout"));
const ProductGrid = dynamic(() => import("./components/ProductGrid"));
const StaggeredThumbnailGrid = dynamic(() => import("./components/StaggeredThumbnailGrid"));
const ReportGrid = dynamic(() => import("./components/ReportGrid"));
const SubscribeContent = dynamic(() => import("./components/SubscribeContent"), { ssr: false });
const PageLinkCard = dynamic(() => import("./components/PageLinkCard"));
const HeadingAssetRow = dynamic(() => import("../company/components/StackedCards/HeadingAssetRow"));
const FormEmbeds = dynamic(() => import("./components/FormEmbeds"), { ssr: false });
const FeatureSlider = dynamic(() => import("./components/FeatureSlider"));

interface CustomersHandlerProps {
	sectionBG: string;
	components: {
		acf_fc_layout: string;
	}[];
}

function ContentHandler({ components, sectionBG }: CustomersHandlerProps) {
	// console.log(components);
	const layoutComponents = {
		text_card: TextCard,
		two_col_content: TwoColContent,
		rotating_heading: RotatingHeading,
		four_column_thumbnail_grid: FourColumnThumbnailGrid,
		media_and_stats: MediaAndStats,
		mosaic_content: MosaicContent,
		linked_two_col_content: LinkedTwoColContent,
		product_slide_out: ProductSlideOut,
		three_column_card_grid: ThreeColumnCardGrid,
		stats_grid: StatsGrid,
		icon_grid: IconGrid,
		full_width_product_callout: FullWidthProductCallout,
		product_grid: ProductGrid,
		staggered_thumbnail_grid: StaggeredThumbnailGrid,
		report_grid: ReportGrid,
		subscribe_content: SubscribeContent,
		page_link_card: PageLinkCard,
		heading_asset_row: HeadingAssetRow,
		form_embeds: FormEmbeds,
		feature_slider: FeatureSlider,
		four_column_list_grid: FourColumnListGrid,
	};

	return components?.map((layout, index) => {
		const { acf_fc_layout: layoutName, ...rest } = layout;
		const LayoutComponent = layoutComponents[layoutName];

		return <React.Fragment key={index}>{LayoutComponent && <LayoutComponent key={index} {...rest} sectionBG={sectionBG} />}</React.Fragment>;
	});
}

export default ContentHandler;
