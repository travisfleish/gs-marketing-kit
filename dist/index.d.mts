import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import React__default from 'react';
import { L as LinkProps, W as WpImageProps, a as WpOptionsFooter } from './Link-mWKhQbm-.mjs';
export { A as AssetProps, I as ImageProps, b as Link, c as LinkTypeRenderer } from './Link-mWKhQbm-.mjs';

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

type LinkGroupProps = {
    links: LinkProps[];
    className?: string;
    noFullWidthOnMobile?: boolean;
    centered?: boolean;
};

interface IconProps {
    priority?: boolean;
    icon: {
        type: "image" | "rive";
        image: WpImageProps["image"];
    };
}

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

type HeaderProps = {
    bgColor?: string;
    blockScroll?: boolean;
    addScrollProgress?: boolean;
    showPageToast?: boolean;
};
declare function Header({ bgColor, blockScroll, addScrollProgress, showPageToast, }: HeaderProps): react_jsx_runtime.JSX.Element;

interface FooterProps extends Partial<WpOptionsFooter> {
    hideCTA?: boolean;
    hideFeaturedLinks?: boolean;
    CTA?: any;
    featuredLinks?: any;
    bgColor?: string;
}
declare function Footer(props: FooterProps): react_jsx_runtime.JSX.Element;

declare function HeaderLogoTop(): react_jsx_runtime.JSX.Element;
declare function HeaderLogoBottom(): react_jsx_runtime.JSX.Element;

declare function ComponentRenderer({ components, pageId, sectionBG }: {
    components?: any[];
    pageId?: any;
    sectionBG: any;
}): react_jsx_runtime.JSX.Element[];

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

declare const GlobalContext: React.Context<any[]>;

export { Button, CTASpring, ChevronDown, CircleArrow, CloseIcon, type ColorName, ComponentRenderer, ContactItemHighlightedLowerSpring, ContactItemHighlightedLowerSpringHover, ContactItemHighlightedUpperSpring, ContactItemHighlightedUpperSpringHover, ContactItemLowerSpring, ContactItemUpperSpring, ContactSalesFormLines, ContactTopRightArrowCircle, FacebookLogo, FeaturedLinkTopRightArrowCircle, Footer, FooterCTABottomLines, FooterCTATopLines, FooterFeaturedLinksArrow, GeniusFaviconIcon, GlobalContext, Header, HeaderLogoBottom, HeaderLogoTop, type IconProps, InputCloseIcon, LeadersGridPlusCircle, type LinkGroupProps, LinkProps, LinkedinLogo, MinusCircle, MobileChevron, NavLeftIcon, PlayArrow, PlusCircle, RightArrow, RightArrowCircle, type ScreenName, SearchIcon, SliderCircleArrow, StockArrow, TestimonialSliderArrow, type TextCardProps, TopRightArrowCircle, UlItemBulletOrange, WpImageProps, Xlogo, YoutubeLogo, colors, fontFamily, screens, spacing };
