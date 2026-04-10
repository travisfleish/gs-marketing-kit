import { ImageProps } from "~/components/elements/Wp";
import { LinkProps } from "~/components/elements/links/Link";
import { AssetProps } from "~/components/elements/media/Asset";
import { ProfileCardProps } from "~/components/templates/SingleResource/components/ProfileCard";

export type WpLinkType = {
	title?: string;
	url?: string;
	target?: string;
};

export type SectionProps = {
	components?: any[];
	id?: string;
	classnames?: string;
	inner_spacing?: string;
	has_container?: boolean;
	overflow?: boolean;
	background?: {
		background_color?: string;
	};
	padding_top?: string;
	padding_bottom?: string;
	is_rounded?: boolean;
	rounded_options?: {
		has_inner_container?: boolean;
		inner_background_color?: string;
		inner_padding_top?: string;
		inner_padding_bottom?: string;
	};
	right_align_content?: boolean;
	isFirstSection?: boolean;
};

export interface WpPageSettings {
	header: {
		hide?: boolean;
		color: "match-first-section" | "white" | "navy" | "brightGreen" | "lightBlue" | "lightOrange" | "lightPurple" | "purple" | "blue";
		show_toast_bar?: boolean;
		show_popup_page?: boolean;
	};
	footer: {
		hide_all?: boolean;
		color: "navy" | "white";
		hide_cta: boolean;
		hide_featured_links: boolean;
	};
}

// TODO : Remove extends, extend page in base post template files instead
export interface WpPage extends WpPost, WpNewsPost, WpCustomerStory {
	author: {
		name: string;
		acf: {
			profile_picture: ImageProps;
			external_redirect?: string;
		};
	};
	footer_cta: FooterCTA;
	footer_featured_links: FooterFeaturedLink[];
	ID: number;
	page_settings: WpPageSettings;
	post_author: string | number;
	post_date: string;
	post_date_gmt: string;
	post_modified: string;
	post_modified_gmt: string;
	post_content: string;
	post_title: string;
	post_excerpt: string;
	post_status: "draft" | "publish";
	post_password?: string;
	post_name: string;
	post_parent: string;
	guid: string;
	menu_order: number;
	post_type: string;
	url: string;
	flexible_content: FlexibleContent[];
	sections: FlexibleContent[];
	seo: WpSeo;
}

export type WpSeo = {
	title?: string;
	description?: string;
	robots?: string;
	image?: string;
	schema?: string;
};

interface FooterCol {
	heading: string;
	links: {
		link: WpLinkType;
	}[];
}

interface SocialLink {
	image: ImageProps;
	link: WpLinkType;
}

interface FooterCTA {
	heading: string;
	background_color_transition: string;
	link: WpLinkType;
	text: string;
}

interface FooterFeaturedLink {
	text: string;
	image: ImageProps;
	link: WpLinkType;
}

export interface WpOptionsFooter {
	columns: FooterCol[];
	social: {
		links: SocialLink[];
	};
	global_cta: {
		footer_cta: FooterCTA;
	};
	global_featured_links: {
		footer_featured_links: FooterFeaturedLink[];
	};
	terms: {
		content: string;
		links: {
			link: WpLinkType;
		}[];
	};
}

export type WpOptions = {
	header?: any;
	footer: WpOptionsFooter;
};

export type FlexibleContentLayouts = "fourOhFour" | "legal";

export type FlexibleContent = {
	acf_fc_layout: "section" | "landing_page";
	background: {
		background_color: string;
	};
	landing_page: any;
	section: SectionProps;
	layout: FlexibleContentLayouts;
	four_oh_four: FourOhFourType;
	legal: LegalType;
};

export type WpRedirect = {
	source: string;
	destination: string;
	type?: string;
	permanent?: boolean;
};

export interface WpSimpleTextCard {
	content?: string;
	heading?: string;
	subheading?: string;
	links?: { links: LinkProps[] };
}

// Landing pages
export interface FourOhFourType {
	content: WpSimpleTextCard;
	asset: AssetProps;
}

export interface LegalType {
	masthead: {
		heading: string;
		last_updated: string;
	};
	content: {
		nav: {
			heading: string;
			disable_anchor: boolean;
		};
		section: {
			heading: string;
			content: string;
		};
	}[];
}
export interface WpDefaultPostFields {
	ID: number;
	featured_image?: {
		width: number;
		height: number;
		src: string;
	};
	permalink: string;
	post_title: string;
}

export interface WpTeamMemberPost extends WpDefaultPostFields {
	acf: {
		preview: {
			full_name: string;
			image: ImageProps;
			link: WpLinkType;
			role: string;
		};
	};
}

export type WpCustomTaxonomyItem = {
	id: number;
	name: string;
	slug: string;
};

export type WpGuestAuthor = {
	avatar: ImageProps;
	name: string;
	role: string;
	company: string;
};

export type VisualTagsType = {
	custom_tags: { tag: string }[];
	location: string;
	tags: string[];
};

export interface WpCustomerStory extends WpDefaultPostFields {
	acf: {
		customer_colour: string;
		key_quote: {
			quotation: string;
			name: string;
			organisation: string;
			role: string;
		};
		media: {
			logo: ImageProps;
			logo_light: ImageProps;
			thumbnail: ImageProps;
		};
	};
	customer_stories_categories: WpCustomTaxonomyItem[];
	products: WpCustomTaxonomyItem[];
	inner_page: {
		article: {
			components: any[]; // Update
			intro?: string;
		};
		masthead: {
			asset: AssetProps;
		};
		other: {
			full_width_testimonial: {
				add_full_width_testimonial: boolean;
				content: {
					testimonial: string;
					thumbnail: ImageProps;
					image: ImageProps;
					job_role: string;
					author: {
						name: string;
						job_role: string;
						company: string;
					};
				};
			};
		};
	};
	banner_sidebar: {
		logo: ImageProps;
		show_sidebar: boolean;
		company_name: string;
		location: string;
		revenue: string;
		industry: string;
		objective: string;
		button_text: string;
		button_url: string;
		open_in_new_tab: boolean;
	};
	media: {
		logo: ImageProps;
		light_logo: ImageProps;
		thumbnail: ImageProps;
	};
	related_articles: WpCustomerStory[];
	post_date_gmt: string;
}

export interface WpPost extends WpDefaultPostFields {
	acf: {
		preview: {
			thumbnail: ImageProps;
			external_link?: string;
		};
		guest_author?: WpGuestAuthor;
		show_guest_author?: boolean;
		visual_tags?: VisualTagsType;
	};
	event: {
		event_form_source: string;
		address: string;
		date: {
			day: string;
			month: string;
		};
		time: {
			start_time: string;
			start_time_label: string;
			end_time: string;
			end_time_label: string;
		};
		speakers: {
			cards: ProfileCardProps["card"][];
		};
	};
	inner_page: {
		article: {
			components: any[]; // Update
			intro?: string;
		};
		masthead: {
			asset: AssetProps;
			guest_author: {
				show_guest_author: boolean;
				guest_author: WpGuestAuthor;
			};
			heading?: string;
		};
	};
	layout: "blog" | "event" | "webinar";
	categories: WpCustomTaxonomyItem[];
	post_date_gmt: string;
	related_articles: WpPost[];
	tags: string[] | { id: number; name: string; slug: string }[];
	webinar: {
		webinar_form_source: string;
		hosts: {
			cards: ProfileCardProps["card"][];
		};
	};
	author?: {
		name?: string;
		role?: string;
		profile_picture?: ImageProps;
	};
	visual_tags?: VisualTagsType;
}

export interface WpNewsPost extends WpDefaultPostFields {
	newsroom_categories: string[];
	inner_page: {
		masthead: {
			image: ImageProps;
			guest_author: {
				show_guest_author: boolean;
				guest_author: WpGuestAuthor;
			};
		};
		article: {
			components: any[]; // Update
		};
	};
	preview: {
		thumbnail: ImageProps;
		external_link?: string;
	};
}

export interface WpStackedText {
	top_text?: string;
	center_text?: string;
	bottom_text?: string;
}

export type WpFile = {
	ID: number;
	id: number;
	title: string;
	filename: string;
	filesize: number;
	url: string;
	link: string;
	author: string;
	name: string;
	status: string;
	uploaded_to: number;
	date: string;
	modified: string;
	mime_type: string;
	type: string;
	subtype: string;
	icon: string;
};
