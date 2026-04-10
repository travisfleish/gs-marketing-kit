import { Fragment } from "react";
import VideoStatsMasthead from "./components/VideoStatsMasthead/VideoStatsMasthead";
import ThreeColLinesMasthead from "./components/ThreeColLinesMasthead/ThreeColLinesMasthead";
import TextMasthead from "./components/TextMasthead";
import TwoColumnMasthead from "./components/TwoColumnMasthead";
import StatsCardsMasthead from "./components/StatsCardsMasthead";
import TwoColumnStatsMasthead from "./components/TwoColumnStatsMasthead";
import BlogMasthead from "./components/BlogMasthead/BlogMasthead";
import NewsroomMasthead from "./components/NewsroomMasthead/NewsroomMasthead";
import FanEngagementMasthead from "./components/FanEngagementMasthead";
import SportsMasthead from "./components/SportsMasthead";
import FormMasthead from "./components/FormMasthead";

interface MastheadsHandlerProps {
	components: {
		acf_fc_layout: string;
	}[];
}

function MastheadsHandler({ components }: MastheadsHandlerProps) {
	const layoutComponents = {
		video_stats_masthead: VideoStatsMasthead,
		three_col_lines_masthead: ThreeColLinesMasthead,
		text_masthead: TextMasthead,
		two_column_masthead: TwoColumnMasthead,
		stats_cards_masthead: StatsCardsMasthead,
		two_column_stats_masthead: TwoColumnStatsMasthead,
		blog_masthead: BlogMasthead,
		newsroom_masthead: NewsroomMasthead,
		fan_engagement_masthead: FanEngagementMasthead,
		sports_masthead: SportsMasthead,
		form_masthead: FormMasthead,
	};

	return components?.map((layout, index) => {
		const { acf_fc_layout: layoutName, ...rest } = layout;
		const LayoutComponent = layoutComponents[layoutName];

		return <Fragment key={index}>{LayoutComponent && <LayoutComponent key={index} {...rest} />}</Fragment>;
	});
}

export default MastheadsHandler;
