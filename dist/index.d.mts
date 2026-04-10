import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React$1 from 'react';
import React__default, { ReactNode, HTMLProps } from 'react';

type ButtonProps = {
    link?: {
        title: string;
        url: string;
    };
    button?: {
        background_color?: "navy" | "white" | "lightGrey" | "white-alt" | "white15" | "navy5" | string;
        size?: "small" | "medium" | "wide" | "huge";
        type?: "solid" | "slim" | "default" | "outline" | "header" | string;
    };
    size?: "small" | "medium" | "wide" | "huge";
    className?: string;
    children?: React__default.ReactNode;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
};
declare function Button({ link, button, size, className, children, onClick, onMouseEnter, onMouseLeave, ...other }: ButtonProps): react_jsx_runtime.JSX.Element;

type TextLinkProps = {
    link?: {
        title: string;
        url: string;
    };
    text_link: {
        background_color: "navy" | "white";
    };
    className?: string;
    children?: ReactNode;
};
declare function TextLink({ className, link, children, text_link }: TextLinkProps): react_jsx_runtime.JSX.Element;

interface ImageProps {
    url: string;
    alt?: string;
    title?: string;
    width?: number;
    height?: number;
}
interface WpImageProps extends HTMLProps<HTMLImageElement> {
    image: ImageProps;
    fill?: boolean;
    priority?: boolean;
    setParentLoadingComplete?: (loadingComplete: boolean) => void;
    onLoad?: () => void;
}

interface AssetProps {
    type?: string;
    image: ImageProps;
    animation: {
        animation: {
            url: string;
        };
        aspect_ratio?: string;
    };
    ratio: string;
    priority: boolean;
    isHovered?: boolean;
    video?: {
        file?: {
            url: string;
        };
        show_controls?: boolean;
        poster?: {
            url?: string;
        };
    };
    fill?: boolean;
    className?: string;
}
declare function Asset({ isHovered, type, animation, video, priority, ratio, image, fill, className }: AssetProps): react_jsx_runtime.JSX.Element;

type ProfileCardProps = {
    card: {
        avatar: ImageProps;
        job_role: string;
        logo: ImageProps;
        name: string;
    };
    variant?: "light" | "dark";
};

type WpLinkType = {
	title?: string;
	url?: string;
	target?: string;
};

type SectionProps = {
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

interface WpPageSettings {
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
interface WpPage extends WpPost, WpNewsPost, WpCustomerStory {
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

type WpSeo = {
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

interface WpOptionsFooter {
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

type FlexibleContentLayouts = "fourOhFour" | "legal";

type FlexibleContent = {
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

interface WpSimpleTextCard {
	content?: string;
	heading?: string;
	subheading?: string;
	links?: { links: LinkProps[] };
}

// Landing pages
interface FourOhFourType {
	content: WpSimpleTextCard;
	asset: AssetProps;
}

interface LegalType {
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
interface WpDefaultPostFields {
	ID: number;
	featured_image?: {
		width: number;
		height: number;
		src: string;
	};
	permalink: string;
	post_title: string;
}

type WpCustomTaxonomyItem = {
	id: number;
	name: string;
	slug: string;
};

type WpGuestAuthor = {
	avatar: ImageProps;
	name: string;
	role: string;
	company: string;
};

type VisualTagsType = {
	custom_tags: { tag: string }[];
	location: string;
	tags: string[];
};

interface WpCustomerStory extends WpDefaultPostFields {
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

interface WpPost extends WpDefaultPostFields {
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

interface WpNewsPost extends WpDefaultPostFields {
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

type LinkProps = {
    link?: WpLinkType & {
        title?: string;
        url?: string;
        target?: string;
        link?: WpLinkType;
    };
    type?: string;
    href?: string;
    to?: string;
    target?: string;
    children?: React__default.ReactNode;
    className?: string;
    onClick?: (event: React__default.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
};
declare function Link(props: LinkProps): react_jsx_runtime.JSX.Element;
declare function LinkTypeRenderer(props: any): react_jsx_runtime.JSX.Element;

type LinkGroupProps = {
    links: LinkProps[];
    className?: string;
    noFullWidthOnMobile?: boolean;
    centered?: boolean;
};
declare function LinkGroup({ links, className, noFullWidthOnMobile, centered }: LinkGroupProps): react_jsx_runtime.JSX.Element;

interface AssetVideoProps {
    video?: {
        file?: {
            url: string;
        };
        show_controls?: boolean;
        poster?: {
            url?: string;
        };
    };
}
declare function AssetVideo({ video }: AssetVideoProps): react_jsx_runtime.JSX.Element;

interface IconProps {
    priority?: boolean;
    icon: {
        type: "image" | "rive";
        image: WpImageProps["image"];
    };
}
declare function Icon({ priority, icon }: IconProps): react_jsx_runtime.JSX.Element;

interface RivePlayerProps {
    riveFile: {
        url: string;
    };
    priority: boolean;
    isHovered?: boolean;
    runText?: boolean;
}
declare function RivePlayer({ riveFile, priority, isHovered, runText }: RivePlayerProps): react_jsx_runtime.JSX.Element;

interface HighlightedTextProps {
    tag: string;
    className?: string;
    content: string;
    disable?: boolean;
    color: string;
}
declare function HighlightedText({ tag, className, content, disable, color }: HighlightedTextProps): React__default.DOMElement<React__default.HTMLAttributes<HTMLElement>, Element>;

type TextCardProps = {
    text_card: {
        icon?: WpImageProps["image"];
        subheading?: string;
        heading?: string;
        content?: string;
        links?: LinkGroupProps["links"];
        options?: {
            section_max_width?: string;
            custom_max_width?: number;
            text_alignment?: "left" | "center" | "right";
            has_mobile_text_alignment?: boolean;
            mobile_text_alignment?: "left" | "center" | "right";
            section_alignment?: "left" | "center" | "right";
            add_icon?: boolean;
            subheading_tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
            subheading_font_size?: string;
            subheading_classes?: string;
            heading_tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
            heading_font_size?: string;
            heading_classes?: string;
            heading_max_width?: string;
            heading_highlighted_color?: string;
            content_max_width?: string;
            content_classes?: string;
            content_font_size?: string;
            custom_y_spacing?: string;
            mobile_section_alignment?: string;
        };
    };
};
declare function TextCard({ text_card: { icon, subheading, heading, content, links, options: { section_max_width, custom_max_width, text_alignment, has_mobile_text_alignment, mobile_text_alignment, add_icon, section_alignment, subheading_tag, subheading_classes, heading_tag, heading_font_size, heading_classes, heading_max_width, heading_highlighted_color, content_max_width, content_font_size, content_classes, custom_y_spacing, mobile_section_alignment, }, }, }: TextCardProps): react_jsx_runtime.JSX.Element;

declare function PillTag({ text }: {
    text: any;
}): react_jsx_runtime.JSX.Element;

type PostTagProps = {
    text: string;
    bgColor?: string;
    textColor?: string;
};
declare function PostTag({ text, bgColor, textColor }: PostTagProps): react_jsx_runtime.JSX.Element;

interface PodcastSpringProps {
    cardHovered?: boolean;
    colour?: string;
    heightFull?: boolean;
}
declare function PodcastSpring({ cardHovered, colour, heightFull }: PodcastSpringProps): react_jsx_runtime.JSX.Element;

declare function PostAsideSubscribe({ heading, embed }: {
    heading?: any;
    embed?: any;
}): react_jsx_runtime.JSX.Element;

declare function CustomLines({ lineNumber, lineDirection, className, lineClassName, initialLineWidth, initialSpacing, widthFactor, spacingFactor, }: {
    lineNumber?: number;
    lineDirection?: string;
    className?: string;
    lineClassName?: string;
    initialLineWidth?: number;
    initialSpacing?: number;
    widthFactor?: number;
    spacingFactor?: number;
}): react_jsx_runtime.JSX.Element;

declare function FooterFeaturedLinksArrow(): react_jsx_runtime.JSX.Element;
declare function CircleArrow(): react_jsx_runtime.JSX.Element;
declare function RightArrow(): react_jsx_runtime.JSX.Element;
declare function RightArrowCircle({ circleClassName, arrowClassName, disableTransitions, width, height }: {
    circleClassName?: string;
    arrowClassName?: string;
    disableTransitions?: boolean;
    width?: number;
    height?: number;
}): react_jsx_runtime.JSX.Element;
declare function MobileChevron(): react_jsx_runtime.JSX.Element;
declare function FooterCTATopLines(): react_jsx_runtime.JSX.Element;
declare function FooterCTABottomLines({ className }: {
    className: any;
}): react_jsx_runtime.JSX.Element;
declare function CTASpring(): react_jsx_runtime.JSX.Element;
declare function PlusCircle({ circleClassName, plusClassName, hideVerticalLine }: {
    circleClassName?: string;
    plusClassName?: string;
    hideVerticalLine?: boolean;
}): react_jsx_runtime.JSX.Element;
declare function MinusCircle({ circleClassName, minusClassName }: {
    circleClassName?: string;
    minusClassName?: string;
}): react_jsx_runtime.JSX.Element;
declare function LeadersGridPlusCircle(): react_jsx_runtime.JSX.Element;
declare function SliderCircleArrow({ circleClassName, arrowClassName, flip }: {
    circleClassName?: string;
    arrowClassName?: string;
    flip?: boolean;
}): react_jsx_runtime.JSX.Element;
declare function TopRightArrowCircle({ width, height }: {
    width?: string;
    height?: string;
}): react_jsx_runtime.JSX.Element;
declare function FeaturedLinkTopRightArrowCircle(): react_jsx_runtime.JSX.Element;
declare function TestimonialSliderArrow({ circleClassName, arrowClassName, circleOpacity, flip }: {
    circleClassName?: string;
    arrowClassName?: string;
    circleOpacity?: string;
    flip?: boolean;
}): react_jsx_runtime.JSX.Element;
declare function CloseIcon({ lineClassName }: {
    lineClassName?: string;
}): react_jsx_runtime.JSX.Element;
declare function ContactTopRightArrowCircle({ arrowClassName, circleClassName }: {
    arrowClassName?: string;
    circleClassName?: string;
}): react_jsx_runtime.JSX.Element;
declare function ContactItemHighlightedUpperSpring({ lineClassName }: {
    lineClassName?: string;
}): react_jsx_runtime.JSX.Element;
declare function ContactItemHighlightedUpperSpringHover({ lineClassName }: {
    lineClassName?: string;
}): react_jsx_runtime.JSX.Element;
declare function ContactItemHighlightedLowerSpring({ lineClassName }: {
    lineClassName?: string;
}): react_jsx_runtime.JSX.Element;
declare function ContactItemHighlightedLowerSpringHover(): react_jsx_runtime.JSX.Element;
declare function ContactItemUpperSpring(): react_jsx_runtime.JSX.Element;
declare function ContactItemLowerSpring(): react_jsx_runtime.JSX.Element;
declare function Xlogo({ height, width, containerClassName, logoClassName }: {
    height?: string;
    width?: string;
    containerClassName?: string;
    logoClassName?: string;
}): react_jsx_runtime.JSX.Element;
declare function LinkedinLogo({ width, height, containerClassName, logoClassName }: {
    width?: string;
    height?: string;
    containerClassName?: string;
    logoClassName?: string;
}): react_jsx_runtime.JSX.Element;
declare function FacebookLogo({ width, height, containerClassName, logoClassName }: {
    width?: string;
    height?: string;
    containerClassName?: string;
    logoClassName?: string;
}): react_jsx_runtime.JSX.Element;
declare function YoutubeLogo(): react_jsx_runtime.JSX.Element;
declare function UlItemBulletOrange(): react_jsx_runtime.JSX.Element;
declare function SearchIcon(): react_jsx_runtime.JSX.Element;
declare function InputCloseIcon(): react_jsx_runtime.JSX.Element;
declare function PlayArrow(): react_jsx_runtime.JSX.Element;
declare function ChevronDown({ width, height }: {
    width?: string;
    height?: any;
}): react_jsx_runtime.JSX.Element;
declare function NavLeftIcon({ className, circleClassName, arrowClassName }: {
    className?: string;
    circleClassName?: string;
    arrowClassName?: string;
}): react_jsx_runtime.JSX.Element;
declare function GeniusFaviconIcon(): react_jsx_runtime.JSX.Element;
declare function StockArrow(): react_jsx_runtime.JSX.Element;
declare function ContactSalesFormLines({ height, width }: {
    height?: any;
    width?: any;
}): react_jsx_runtime.JSX.Element;

declare function WpHotkey({ id }: {
    id: any;
}): any;

interface TextStrokeStackProps {
    int?: number;
    centerText: string;
    bottomText?: string;
    topText?: string;
    options?: {
        textColor?: string;
        textSize?: "70" | "64" | "88";
        bgColor?: string;
        strokeColor?: "brightGreen" | "lightPurple" | "navy" | "white" | "lightBlue";
    };
    hideBottomRow?: boolean;
    hideTopRow?: boolean;
    textClassName?: string;
}
declare function TextStrokeStack({ centerText, topText, bottomText, options, int, hideTopRow, hideBottomRow, textClassName, }: TextStrokeStackProps): react_jsx_runtime.JSX.Element;

type HeaderProps = {
    bgColor?: string;
    blockScroll?: boolean;
    addScrollProgress?: boolean;
    showPageToast?: boolean;
    /** Logo home link; use the public marketing origin when this app is not geniussports.com. */
    homeHref?: string;
};
declare function Header({ bgColor, blockScroll, addScrollProgress, showPageToast, homeHref, }: HeaderProps): react_jsx_runtime.JSX.Element;

interface FooterProps extends Partial<WpOptionsFooter> {
    hideCTA?: boolean;
    hideFeaturedLinks?: boolean;
    CTA?: any;
    featuredLinks?: any;
    bgColor?: string;
}
declare function Footer(props: FooterProps): react_jsx_runtime.JSX.Element;

declare function Banner(props: any): react_jsx_runtime.JSX.Element;

declare function MobileNav({ menu, button, showMobileNav, setShowMobileNav, selectedSubmenu, setSelectedSubmenu, hasBanner }: {
    menu?: any[];
    button: any;
    showMobileNav: any;
    setShowMobileNav: any;
    selectedSubmenu: any;
    setSelectedSubmenu: any;
    hasBanner: any;
}): react_jsx_runtime.JSX.Element;

declare function Logo(): react_jsx_runtime.JSX.Element;
declare function HeaderLogoTop(): react_jsx_runtime.JSX.Element;
declare function HeaderLogoBottom(): react_jsx_runtime.JSX.Element;

type SeoProps = {
    page: WpPage;
};
declare function Seo({ page }: SeoProps): react_jsx_runtime.JSX.Element;

declare function HeaderSpacer({ hasBanner }: {
    hasBanner: any;
}): react_jsx_runtime.JSX.Element;

interface Props {
    rootId: string;
    children: ReactNode;
    className?: string;
    style?: string;
}
declare const Portal: ({ rootId, children, className, style }: Props) => React$1.ReactPortal;

interface LightboxOverlayProps {
    children: ReactNode;
    onClick?: () => void;
    contentVerticalPosition?: "top" | "center";
    hideCloseButton?: boolean;
    disableBlur?: boolean;
    childrenContainerClassName?: string;
}
declare function LightboxOverlay({ children, onClick, contentVerticalPosition, hideCloseButton, disableBlur, childrenContainerClassName, }: LightboxOverlayProps): react_jsx_runtime.JSX.Element;

declare function ExitPopup(props: any): react_jsx_runtime.JSX.Element;

declare function ComponentRenderer({ components, pageId, sectionBG }: {
    components?: any[];
    pageId?: any;
    sectionBG: any;
}): react_jsx_runtime.JSX.Element[];

declare function LayoutRenderer({ sections, ID, page_settings }: {
    sections: any;
    ID: any;
    page_settings?: any;
}): any;

interface LandingPageProps {
    layout: string;
    four_oh_four: FourOhFourType;
    legal: LegalType;
}
declare function LandingPage({ layout, four_oh_four, legal }: LandingPageProps): react_jsx_runtime.JSX.Element;

declare function Section(props: SectionProps): react_jsx_runtime.JSX.Element;

declare const useSection: () => {
    paddingTopMap: {
        none: string;
        min: string;
        tiny: string;
        xSmall: string;
        small: string;
        medium: string;
        large: string;
        xLarge: string;
        huge: string;
        max: string;
    };
    paddingBottomMap: {
        none: string;
        min: string;
        tiny: string;
        xSmall: string;
        small: string;
        medium: string;
        large: string;
        xLarge: string;
        huge: string;
        max: string;
    };
    innerSpacingMap: {
        none: string;
        min: string;
        tiny: string;
        xSmall: string;
        small: string;
        medium: string;
        large: string;
        xLarge: string;
        huge: string;
        xHuge: string;
        max: string;
    };
    getSectionColors: (background?: string) => string;
};

declare function SiteShell({ children, homeHref, }: {
    children: React.ReactNode;
    homeHref?: string;
}): react_jsx_runtime.JSX.Element;

declare function Providers({ children, options, }: {
    children: React.ReactNode;
    options: any;
}): react_jsx_runtime.JSX.Element;

declare const MARKETING_SITE_ORIGIN = "https://www.geniussports.com";
declare function resolveMarketingNavUrl(raw: string): string;
declare function rewriteHeaderNavToMarketingSite<T extends {
    header?: unknown;
}>(options: T): T;

declare const colors: {
    readonly navy: "#0D1226";
    readonly blue: "#0000DC";
    readonly lightBlue: "#95ECFD";
    readonly brightGreen: "#E1FF67";
    readonly lightGreen: "#18C971";
    readonly green: "#047C40";
    readonly lightPurple: "#C2D1FF";
    readonly purple: "#4337A8";
    readonly lightOrange: "#FFEBAF";
    readonly orange: "#FA5D00";
    readonly lightRed: "#F76B6A";
    readonly red: "#C20000";
    readonly black: "#000000";
    readonly lightGrey: "#F6F7F9";
    readonly lavenderGrey: "#E7E7E9";
    readonly white: "#ffffff";
    readonly snow: "#FAFAFA";
};
declare const fontFamily: {
    readonly heading: "ESKlarheitKurrentTRIAL";
    readonly body: "RedHatText";
};
declare const screens: {
    readonly xxs: "400px";
    readonly xs: "480px";
    readonly sm: "640px";
    readonly md: "768px";
    readonly "960": "960px";
    readonly lg: "1024px";
    readonly xl: "1280px";
    readonly "2xl": "1420px";
    readonly "3xl": "1536px";
};
declare const spacing: {
    readonly "4.25": "1.063rem";
    readonly "7.5": "1.875rem";
    readonly "13": "3.25rem";
    readonly "15": "3.75rem";
    readonly "18": "4.5rem";
    readonly "18.875": "4.719rem";
    readonly "51": "12.75rem";
    readonly "272": "68rem";
};
type ColorName = keyof typeof colors;
type ScreenName = keyof typeof screens;

declare const GlobalContext: React$1.Context<any[]>;

export { Asset, type AssetProps, AssetVideo, Banner, Button, CTASpring, ChevronDown, CircleArrow, CloseIcon, type ColorName, ComponentRenderer, ContactItemHighlightedLowerSpring, ContactItemHighlightedLowerSpringHover, ContactItemHighlightedUpperSpring, ContactItemHighlightedUpperSpringHover, ContactItemLowerSpring, ContactItemUpperSpring, ContactSalesFormLines, ContactTopRightArrowCircle, CustomLines, ExitPopup, FacebookLogo, FeaturedLinkTopRightArrowCircle, Footer, FooterCTABottomLines, FooterCTATopLines, FooterFeaturedLinksArrow, GeniusFaviconIcon, GlobalContext, Header, HeaderLogoBottom, HeaderLogoTop, HeaderSpacer, HighlightedText, Icon, type IconProps, type ImageProps, InputCloseIcon, LandingPage, LayoutRenderer, LeadersGridPlusCircle, LightboxOverlay, Link, LinkGroup, type LinkGroupProps, type LinkProps, LinkTypeRenderer, LinkedinLogo, Logo, MARKETING_SITE_ORIGIN, MinusCircle, MobileChevron, MobileNav, NavLeftIcon, PillTag, PlayArrow, PlusCircle, PodcastSpring, Portal, PostAsideSubscribe, PostTag, Providers, RightArrow, RightArrowCircle, RivePlayer, type ScreenName, SearchIcon, Section, Seo, SiteShell, SliderCircleArrow, StockArrow, TestimonialSliderArrow, TextCard, type TextCardProps, TextLink, TextStrokeStack, TopRightArrowCircle, UlItemBulletOrange, WpHotkey, type WpImageProps, Xlogo, YoutubeLogo, colors, fontFamily, resolveMarketingNavUrl, rewriteHeaderNavToMarketingSite, screens, spacing, useSection };
