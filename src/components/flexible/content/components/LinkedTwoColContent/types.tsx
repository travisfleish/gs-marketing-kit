import { ImageProps } from "~/components/elements/Wp";
import { AssetProps } from "~/components/elements/media/Asset";
import { WpLinkType } from "~/types/wp";

export interface TabType {
	content: string;
	add_featured_link: boolean;
	featured_link: {
		image: ImageProps;
		link: WpLinkType;
		text: string;
		text_highlight_color: "lightGreen";
	};
	heading: string;
}

export interface ContentSectionType {
	add_expanded_tabs: boolean;
	add_featured_section: boolean;
	asset: AssetProps;
	asset_mobile: AssetProps;
	asset_size: string;
	asset_position: "left" | "right";
	content: string;
	default_links_type: "default" | "extends";
	expanded_tabs: {
		expanded_tabs: {
			tabs: TabType[];
		};
	};
	featured_section: {
		asset: AssetProps;
		content: string;
		heading: string;
	};
	heading: string;
	hide_default_links: boolean;
	links: {
		link: WpLinkType;
		show_new_tag?: boolean;
	}[];
	mobile_gap: "32px" | "none" | string;
	desktop_gap: "96px" | string;
	section_background_color: "none" | "lightGrey";
	section_heading: string;
}
