---

# Genius Sports Brand Kit — Cursor Reference Catalog

This file is auto-generated. Do not edit manually. Run `npm run catalog` to regenerate.

## How to use this file
When building any UI, read this file first. Use only the classes, tokens, and components listed here. Never invent custom values for typography, color, spacing, or buttons.

## Typography

Use these classes for all text. Never use raw Tailwind font-size classes like text-xl or text-5xl.

| Class | Size | Use for |
|---|---|---|
| .text-h1 | ~72px fluid · leading 1.08 · tracking -0.03em | Page hero headings (h1) |
| .text-h2 | ~56px fluid · leading 1.10 · tracking -0.035em | Major section headings (h2) |
| .text-h3 | ~46px fluid · leading 1.10 · tracking -0.02875em | Subsection headings (h3) |
| .text-h4 | ~40px fluid · leading 1.10 · tracking -0.05em | Card or feature titles (h4) |
| .text-h5 | ~32px fluid · leading 1.10 · tracking -0.035em | Small section headings (h5) |
| .text-h6 | ~28px fluid · leading 1.40 · tracking -0.035em | Labels and minor headings (h6) |
| .text-h7 | ~22px fluid · leading 1.40 · tracking -0.0275em | Eyebrows and compact display lines |
| .text-88 | ~88px fluid · leading 1.08 · tracking 0em | Extra-large display numerals or hero stats |
| .text-80 | ~80px fluid · leading 1.08 · tracking -0.1em | Oversized display type and key metrics |
| .text-72 | ~72px fluid · leading 1.2 · tracking -0.03em | Large display headlines |
| .text-70 | ~70px fluid · leading 1.1 · tracking -0.07em | Prominent stats and hero figures |
| .text-64 | ~64px fluid · leading 1.1 · tracking -0.07em | Display stats and emphasis numbers |
| .text-header-stat | ~48px fluid · leading 1.1 · tracking — | Header or masthead statistics |
| .text-40 | ~40px fluid · leading 1.4 · tracking -0.0375em | Large body or small display lines |
| .text-40-s | ~40px fluid · leading 1.4 · tracking -0.0375em | 40px scale with tighter mobile ramp |
| .text-36 | ~36px fluid · leading 1.1 · tracking -0.045em | Lead paragraphs and prominent subheads |
| .text-32 | ~32px fluid · leading 1.4 · tracking -0.0375em | Intro copy and emphasized body |
| .text-30 | ~30px fluid · leading 1.4 · tracking -0.0375em | Supporting lead text |
| .text-24 | ~24px fluid · leading 1.4 · tracking -0.03em | Card titles and UI emphasis |
| .text-22 | ~22px fluid · leading 1.5 · tracking -0.01375em | Subheadings and navigation labels |
| .text-20 | ~20px fluid · leading 1.45 · tracking -0.0125em | Large body and card descriptions |
| .text-20--extra-clamp | ~20px fluid · leading 1.45 · tracking -0.0125em | 20px with alternate fluid ramp |
| .text-18 | ~18px fluid · leading 1.45 · tracking -0.01125em | Default long-form body text |
| .text-17 | ~17px fluid · leading 1.2 · tracking -0.010625em | Compact UI body and captions |
| .text-16 | ~16px fluid · leading 1.35 · tracking -0.01em | Secondary body and dense UI |
| .text-16--clamp | ~16px fluid · leading 1.35 · tracking -0.01em | 16px with alternate fluid ramp |
| .text-15 | ~15px fluid · leading 1.45 · tracking -0.009375em | Metadata, labels, and fine print |
| .text-15--clamp | ~15px fluid · leading 1.45 · tracking -0.009375em | 15px with alternate fluid ramp |
| .text-14 | ~14px fluid · leading 1.3 · tracking -0.009375em | Small labels, footnotes, and legal |
| .prose | Body ~18px in paragraphs (via `@extend`); `space-y-6 font-body` | Long-form article and CMS HTML (headings, lists, links); paragraphs use text-18 scale |

## Colors

Never hardcode hex values. Always use the Tailwind token class.

| Token | Hex | Tailwind class | Use for |
|---|---|---|---|
| navy | #0D1226 | bg-navy / text-navy | Primary dark background, headlines, and default text on light UI |
| blue | #0000DC | bg-blue / text-blue | Primary interactive blue and links accent |
| lightBlue | #95ECFD | bg-lightBlue / text-lightBlue | Bright accent and highlights on dark backgrounds |
| brightGreen | #E1FF67 | bg-brightGreen / text-brightGreen | High-contrast accent and success highlights |
| lightGreen | #18C971 | bg-lightGreen / text-lightGreen | Positive and growth accents |
| green | #047C40 | bg-green / text-green | Primary green for success and sports-positive states |
| lightPurple | #C2D1FF | bg-lightPurple / text-lightPurple | Soft purple surfaces and secondary accents |
| purple | #4337A8 | bg-purple / text-purple | Deep purple for emphasis and secondary brand |
| lightOrange | #FFEBAF | bg-lightOrange / text-lightOrange | Warm light surfaces and soft highlights |
| orange | #FA5D00 | bg-orange / text-orange | Primary orange accent and CTAs |
| lightRed | #F76B6A | bg-lightRed / text-lightRed | Soft error or warning surfaces |
| red | #C20000 | bg-red / text-red | Error, alert, and destructive emphasis |
| black | #000000 | bg-black / text-black | True black fills and maximum contrast |
| lightGrey | #F6F7F9 | bg-lightGrey / text-lightGrey | Page and section backgrounds |
| lavenderGrey | #E7E7E9 | bg-lavenderGrey / text-lavenderGrey | Subtle borders and dividers |
| white | #ffffff | bg-white / text-white | Primary light surfaces and inverse text on dark |
| snow | #FAFAFA | bg-snow / text-snow | Off-white backgrounds and subtle cards |

## Breakpoints

Always design mobile-first. Add responsive prefixes to scale up.

| Token | Width | Tailwind prefix |
|---|---|---|
| xxs | 400px | xxs: |
| xs | 480px | xs: |
| sm | 640px | sm: |
| md | 768px | md: |
| 960 | 960px | 960: |
| lg | 1024px | lg: |
| xl | 1280px | xl: |
| 2xl | 1420px | 2xl: |
| 3xl | 1536px | 3xl: |

## Container

Use `.container` and modifiers for horizontal layout; prefer tokens for semantic width names.

| Class / token | Max width | Usage |
|---|---|---|
| .container | 1280px (max-width: 80rem) | Default centered content; `mx-auto`, `px-5`, `md:px-6` |
| .container--no-mobile-padding | (inherits default max) | Edge-to-edge on small screens; `md:px-6` restores padding |
| .container.header-container | 1376px (max-width: 86rem) | Header bar width; `lg:px-8` |
| .inner-container | (padding only) | Nested horizontal padding: `px-6 md:px-10 lg:px-[4.5rem]` |
| .container--676px | 676px | Narrow reading column (e.g. legal or forms) |
| .container--736px | 736px | Medium-narrow article or card column |
| .container--846px | 846px | Single-column content width |
| .container--1014px | 1014px | Medium content band |
| .container--1062px | 1062px | Medium-wide content band |
| .container--1292px | 1292px | Wide layouts under full default container |
| .container--1376px | 1376px | Wide marketing sections (matches header max) |
| .container--extra-small | 1110px | Slightly narrower than default for dense grids |
| .container--small | 1171px | Compact wide layouts |
| .container--large | 1368px | Extra-wide content without full bleed |
| .container--extra-large | 1920px | Maximum width for full-bleed style sections |

**Semantic widths** ([src/tokens/containers.ts](src/tokens/containers.ts)):

| Name | Width | Notes |
|---|---|---|
| narrow | 1110px | Named width in tokens (containerWidthsPx) |
| default | 1280px | Named width in tokens (containerWidthsPx) |
| wide | 1376px | Named width in tokens (containerWidthsPx) |


## Spacing

Standard spacing patterns to use consistently across all pages.

| Pattern | Classes | Use for |
|---|---|---|
| Section padding | py-16 md:py-24 | Between major page sections |
| Card gap | gap-6 md:gap-8 | Between cards in a grid |
| Card inner | p-6 md:p-8 | Inside card containers |
| Heading to body | mb-4 md:mb-6 | Between a heading and paragraph |
| Body to CTA | mt-6 md:mt-8 lg:mt-10 | Between body text and a button |


## Components

For each component, use the exact import path shown. Never build these from scratch.

### Asset
Import: `import { Asset } from "@genius-sports/gs-brand-kit"`
Use for: Composable UI from the brand kit

Props:
```ts
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
```

Usage: `<Asset /* see Props */ />`

### AssetVideo
Import: `import { AssetVideo } from "@genius-sports/gs-brand-kit"`
Use for: Composable UI from the brand kit

Props:
```ts
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
```

Usage: `<AssetVideo /* see Props */ />`

### Banner
Import: `import { Banner } from "@genius-sports/gs-brand-kit"`
Use for: Composable UI from the brand kit

Props:
```ts
any
```

Usage: `<Banner /* see Props */ />`

### Button
Import: `import { Button } from "@genius-sports/gs-brand-kit"`
Use for: All CTAs and primary actions

Props:
```ts
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
```

Usage: `<Button button={{ type: "default", background_color: "navy" }} />`

### CTASpring
Import: `import { CTASpring } from "@genius-sports/gs-brand-kit"`
Use for: Brand SVG / UI glyph; use inside headers, footers, or composed UI

Props:
```ts
(no props)
```

Usage: `<CTASpring />`

### ChevronDown
Import: `import { ChevronDown } from "@genius-sports/gs-brand-kit"`
Use for: Brand SVG / UI glyph; use inside headers, footers, or composed UI

Props:
```ts
{ width?: string; height?: any; }
```

Usage: `<ChevronDown width="12" height="12" />`

### CircleArrow
Import: `import { CircleArrow } from "@genius-sports/gs-brand-kit"`
Use for: Brand SVG / UI glyph; use inside headers, footers, or composed UI

Props:
```ts
(no props)
```

Usage: `<CircleArrow />`

### CloseIcon
Import: `import { CloseIcon } from "@genius-sports/gs-brand-kit"`
Use for: Brand SVG / UI glyph; use inside headers, footers, or composed UI

Props:
```ts
{ lineClassName?: string; }
```

Usage: `<CloseIcon /* see Props */ />`

### ComponentRenderer
Import: `import { ComponentRenderer } from "@genius-sports/gs-brand-kit"`
Use for: Renders CMS-driven section components

Props:
```ts
{ components?: any[]; pageId?: any; sectionBG: any; }
```

Usage: `<ComponentRenderer sectionBG={bg} components={sections} />`

### ContactItemHighlightedLowerSpring
Import: `import { ContactItemHighlightedLowerSpring } from "@genius-sports/gs-brand-kit"`
Use for: Brand SVG / UI glyph; use inside headers, footers, or composed UI

Props:
```ts
{ lineClassName?: string; }
```

Usage: `<ContactItemHighlightedLowerSpring /* see Props */ />`

### ContactItemHighlightedLowerSpringHover
Import: `import { ContactItemHighlightedLowerSpringHover } from "@genius-sports/gs-brand-kit"`
Use for: Brand SVG / UI glyph; use inside headers, footers, or composed UI

Props:
```ts
(no props)
```

Usage: `<ContactItemHighlightedLowerSpringHover />`

### ContactItemHighlightedUpperSpring
Import: `import { ContactItemHighlightedUpperSpring } from "@genius-sports/gs-brand-kit"`
Use for: Brand SVG / UI glyph; use inside headers, footers, or composed UI

Props:
```ts
{ lineClassName?: string; }
```

Usage: `<ContactItemHighlightedUpperSpring /* see Props */ />`

### ContactItemHighlightedUpperSpringHover
Import: `import { ContactItemHighlightedUpperSpringHover } from "@genius-sports/gs-brand-kit"`
Use for: Brand SVG / UI glyph; use inside headers, footers, or composed UI

Props:
```ts
{ lineClassName?: string; }
```

Usage: `<ContactItemHighlightedUpperSpringHover /* see Props */ />`

### ContactItemLowerSpring
Import: `import { ContactItemLowerSpring } from "@genius-sports/gs-brand-kit"`
Use for: Brand SVG / UI glyph; use inside headers, footers, or composed UI

Props:
```ts
(no props)
```

Usage: `<ContactItemLowerSpring />`

### ContactItemUpperSpring
Import: `import { ContactItemUpperSpring } from "@genius-sports/gs-brand-kit"`
Use for: Brand SVG / UI glyph; use inside headers, footers, or composed UI

Props:
```ts
(no props)
```

Usage: `<ContactItemUpperSpring />`

### ContactSalesFormLines
Import: `import { ContactSalesFormLines } from "@genius-sports/gs-brand-kit"`
Use for: Brand SVG / UI glyph; use inside headers, footers, or composed UI

Props:
```ts
{ height?: any; width?: any; }
```

Usage: `<ContactSalesFormLines /* see Props */ />`

### ContactTopRightArrowCircle
Import: `import { ContactTopRightArrowCircle } from "@genius-sports/gs-brand-kit"`
Use for: Brand SVG / UI glyph; use inside headers, footers, or composed UI

Props:
```ts
{ arrowClassName?: string; circleClassName?: string; }
```

Usage: `<ContactTopRightArrowCircle /* see Props */ />`

### CustomLines
Import: `import { CustomLines } from "@genius-sports/gs-brand-kit"`
Use for: Brand SVG / UI glyph; use inside headers, footers, or composed UI

Props:
```ts
{ lineNumber?: number; lineDirection?: string; className?: string; lineClassName?: string; initialLineWidth?: number; initialSpacing?: number; widthFactor?: number; spacingFactor?: number; }
```

Usage: `<CustomLines /* see Props */ />`

### ExitPopup
Import: `import { ExitPopup } from "@genius-sports/gs-brand-kit"`
Use for: Composable UI from the brand kit

Props:
```ts
any
```

Usage: `<ExitPopup /* see Props */ />`

### FacebookLogo
Import: `import { FacebookLogo } from "@genius-sports/gs-brand-kit"`
Use for: Brand SVG / UI glyph; use inside headers, footers, or composed UI

Props:
```ts
{ width?: string; height?: string; containerClassName?: string; logoClassName?: string; }
```

Usage: `<FacebookLogo /* see Props */ />`

### FeaturedLinkTopRightArrowCircle
Import: `import { FeaturedLinkTopRightArrowCircle } from "@genius-sports/gs-brand-kit"`
Use for: Brand SVG / UI glyph; use inside headers, footers, or composed UI

Props:
```ts
(no props)
```

Usage: `<FeaturedLinkTopRightArrowCircle />`

### Footer
Import: `import { Footer } from "@genius-sports/gs-brand-kit"`
Use for: Site footer with columns, social, and legal

Props:
```ts
interface FooterProps extends Partial<WpOptionsFooter> {
    hideCTA?: boolean;
    hideFeaturedLinks?: boolean;
    CTA?: any;
    featuredLinks?: any;
    bgColor?: string;
}
```

Usage: `<Footer {...footerData} />`

### FooterCTABottomLines
Import: `import { FooterCTABottomLines } from "@genius-sports/gs-brand-kit"`
Use for: Brand SVG / UI glyph; use inside headers, footers, or composed UI

Props:
```ts
{ className: any; }
```

Usage: `<FooterCTABottomLines /* see Props */ />`

### FooterCTATopLines
Import: `import { FooterCTATopLines } from "@genius-sports/gs-brand-kit"`
Use for: Brand SVG / UI glyph; use inside headers, footers, or composed UI

Props:
```ts
(no props)
```

Usage: `<FooterCTATopLines />`

### FooterFeaturedLinksArrow
Import: `import { FooterFeaturedLinksArrow } from "@genius-sports/gs-brand-kit"`
Use for: Brand SVG / UI glyph; use inside headers, footers, or composed UI

Props:
```ts
(no props)
```

Usage: `<FooterFeaturedLinksArrow />`

### GeniusFaviconIcon
Import: `import { GeniusFaviconIcon } from "@genius-sports/gs-brand-kit"`
Use for: Brand SVG / UI glyph; use inside headers, footers, or composed UI

Props:
```ts
(no props)
```

Usage: `<GeniusFaviconIcon />`

### GlobalContext
Import: `import { GlobalContext } from "@genius-sports/gs-brand-kit"`
Use for: React context for global shell data (use with providers)

Props:
```ts
Context<any[]>
```

Usage: `<GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>`

### Header
Import: `import { Header } from "@genius-sports/gs-brand-kit"`
Use for: Global site header and navigation

Props:
```ts
type HeaderProps = {
    bgColor?: string;
    blockScroll?: boolean;
    addScrollProgress?: boolean;
    showPageToast?: boolean;
    /** Logo home link; use the public marketing origin when this app is not geniussports.com. */
    homeHref?: string;
};
```

Usage: `<Header homeHref="https://www.geniussports.com" />`

### HeaderLogoBottom
Import: `import { HeaderLogoBottom } from "@genius-sports/gs-brand-kit"`
Use for: Composable UI from the brand kit

Props:
```ts
(no props)
```

Usage: `<HeaderLogoBottom />`

### HeaderLogoTop
Import: `import { HeaderLogoTop } from "@genius-sports/gs-brand-kit"`
Use for: Composable UI from the brand kit

Props:
```ts
(no props)
```

Usage: `<HeaderLogoTop />`

### HeaderSpacer
Import: `import { HeaderSpacer } from "@genius-sports/gs-brand-kit"`
Use for: Composable UI from the brand kit

Props:
```ts
{ hasBanner: any; }
```

Usage: `<HeaderSpacer /* see Props */ />`

### HighlightedText
Import: `import { HighlightedText } from "@genius-sports/gs-brand-kit"`
Use for: Composable UI from the brand kit

Props:
```ts
interface HighlightedTextProps {
    tag: string;
    className?: string;
    content: string;
    disable?: boolean;
    color: string;
}
```

Usage: `<HighlightedText /* see Props */ />`

### Icon
Import: `import { Icon } from "@genius-sports/gs-brand-kit"`
Use for: Brand SVG / UI glyph; use inside headers, footers, or composed UI

Props:
```ts
interface IconProps {
    priority?: boolean;
    icon: {
        type: "image" | "rive";
        image: WpImageProps["image"];
    };
}
```

Usage: `<Icon /* see Props */ />`

### InputCloseIcon
Import: `import { InputCloseIcon } from "@genius-sports/gs-brand-kit"`
Use for: Brand SVG / UI glyph; use inside headers, footers, or composed UI

Props:
```ts
(no props)
```

Usage: `<InputCloseIcon />`

### LandingPage
Import: `import { LandingPage } from "@genius-sports/gs-brand-kit"`
Use for: Composable UI from the brand kit

Props:
```ts
interface LandingPageProps {
    layout: string;
    four_oh_four: FourOhFourType;
    legal: LegalType;
}
```

Usage: `<LandingPage /* see Props */ />`

### LayoutRenderer
Import: `import { LayoutRenderer } from "@genius-sports/gs-brand-kit"`
Use for: Composable UI from the brand kit

Props:
```ts
{ sections: any; ID: any; page_settings?: any; }
```

Usage: `<LayoutRenderer /* see Props */ />`

### LeadersGridPlusCircle
Import: `import { LeadersGridPlusCircle } from "@genius-sports/gs-brand-kit"`
Use for: Brand SVG / UI glyph; use inside headers, footers, or composed UI

Props:
```ts
(no props)
```

Usage: `<LeadersGridPlusCircle />`

### LightboxOverlay
Import: `import { LightboxOverlay } from "@genius-sports/gs-brand-kit"`
Use for: Composable UI from the brand kit

Props:
```ts
interface LightboxOverlayProps {
    children: ReactNode;
    onClick?: () => void;
    contentVerticalPosition?: "top" | "center";
    hideCloseButton?: boolean;
    disableBlur?: boolean;
    childrenContainerClassName?: string;
}
```

Usage: `<LightboxOverlay /* see Props */ />`

### Link
Import: `import { Link } from "@genius-sports/gs-brand-kit"`
Use for: Internal and external navigation with brand styling

Props:
```ts
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
```

Usage: `<Link href="/path">Label</Link>`

### LinkGroup
Import: `import { LinkGroup } from "@genius-sports/gs-brand-kit"`
Use for: Composable UI from the brand kit

Props:
```ts
type LinkGroupProps = {
    links: LinkProps[];
    className?: string;
    noFullWidthOnMobile?: boolean;
    centered?: boolean;
};
```

Usage: `<LinkGroup /* see Props */ />`

### LinkTypeRenderer
Import: `import { LinkTypeRenderer } from "@genius-sports/gs-brand-kit"`
Use for: Resolves CMS link types to Link components

Props:
```ts
any
```

Usage: `<LinkTypeRenderer link={link} />`

### LinkedinLogo
Import: `import { LinkedinLogo } from "@genius-sports/gs-brand-kit"`
Use for: Brand SVG / UI glyph; use inside headers, footers, or composed UI

Props:
```ts
{ width?: string; height?: string; containerClassName?: string; logoClassName?: string; }
```

Usage: `<LinkedinLogo /* see Props */ />`

### Logo
Import: `import { Logo } from "@genius-sports/gs-brand-kit"`
Use for: Brand SVG / UI glyph; use inside headers, footers, or composed UI

Props:
```ts
(no props)
```

Usage: `<Logo />`

### MinusCircle
Import: `import { MinusCircle } from "@genius-sports/gs-brand-kit"`
Use for: Brand SVG / UI glyph; use inside headers, footers, or composed UI

Props:
```ts
{ circleClassName?: string; minusClassName?: string; }
```

Usage: `<MinusCircle /* see Props */ />`

### MobileChevron
Import: `import { MobileChevron } from "@genius-sports/gs-brand-kit"`
Use for: Brand SVG / UI glyph; use inside headers, footers, or composed UI

Props:
```ts
(no props)
```

Usage: `<MobileChevron />`

### MobileNav
Import: `import { MobileNav } from "@genius-sports/gs-brand-kit"`
Use for: Composable UI from the brand kit

Props:
```ts
{ menu?: any[]; button: any; showMobileNav: any; setShowMobileNav: any; selectedSubmenu: any; setSelectedSubmenu: any; hasBanner: any; }
```

Usage: `<MobileNav /* see Props */ />`

### NavLeftIcon
Import: `import { NavLeftIcon } from "@genius-sports/gs-brand-kit"`
Use for: Brand SVG / UI glyph; use inside headers, footers, or composed UI

Props:
```ts
{ className?: string; circleClassName?: string; arrowClassName?: string; }
```

Usage: `<NavLeftIcon /* see Props */ />`

### PillTag
Import: `import { PillTag } from "@genius-sports/gs-brand-kit"`
Use for: Composable UI from the brand kit

Props:
```ts
{ text: any; }
```

Usage: `<PillTag /* see Props */ />`

### PlayArrow
Import: `import { PlayArrow } from "@genius-sports/gs-brand-kit"`
Use for: Brand SVG / UI glyph; use inside headers, footers, or composed UI

Props:
```ts
(no props)
```

Usage: `<PlayArrow />`

### PlusCircle
Import: `import { PlusCircle } from "@genius-sports/gs-brand-kit"`
Use for: Brand SVG / UI glyph; use inside headers, footers, or composed UI

Props:
```ts
{ circleClassName?: string; plusClassName?: string; hideVerticalLine?: boolean; }
```

Usage: `<PlusCircle /* see Props */ />`

### PodcastSpring
Import: `import { PodcastSpring } from "@genius-sports/gs-brand-kit"`
Use for: Brand SVG / UI glyph; use inside headers, footers, or composed UI

Props:
```ts
interface PodcastSpringProps {
    cardHovered?: boolean;
    colour?: string;
    heightFull?: boolean;
}
```

Usage: `<PodcastSpring /* see Props */ />`

### Portal
Import: `import { Portal } from "@genius-sports/gs-brand-kit"`
Use for: Composable UI from the brand kit

Props:
```ts
({ rootId, children, className, style }: Props) => ReactPortal
```

Usage: `<Portal /* see Props */ />`

### PostAsideSubscribe
Import: `import { PostAsideSubscribe } from "@genius-sports/gs-brand-kit"`
Use for: Composable UI from the brand kit

Props:
```ts
{ heading?: any; embed?: any; }
```

Usage: `<PostAsideSubscribe /* see Props */ />`

### PostTag
Import: `import { PostTag } from "@genius-sports/gs-brand-kit"`
Use for: Composable UI from the brand kit

Props:
```ts
type PostTagProps = {
    text: string;
    bgColor?: string;
    textColor?: string;
};
```

Usage: `<PostTag /* see Props */ />`

### Providers
Import: `import { Providers } from "@genius-sports/gs-brand-kit"`
Use for: Wraps app with brand kit context providers

Props:
```ts
{ children: ReactNode; options: any; }
```

Usage: `<Providers options={options}>{children}</Providers>`

### RightArrow
Import: `import { RightArrow } from "@genius-sports/gs-brand-kit"`
Use for: Brand SVG / UI glyph; use inside headers, footers, or composed UI

Props:
```ts
(no props)
```

Usage: `<RightArrow />`

### RightArrowCircle
Import: `import { RightArrowCircle } from "@genius-sports/gs-brand-kit"`
Use for: Brand SVG / UI glyph; use inside headers, footers, or composed UI

Props:
```ts
{ circleClassName?: string; arrowClassName?: string; disableTransitions?: boolean; width?: number; height?: number; }
```

Usage: `<RightArrowCircle /* see Props */ />`

### RivePlayer
Import: `import { RivePlayer } from "@genius-sports/gs-brand-kit"`
Use for: Composable UI from the brand kit

Props:
```ts
interface RivePlayerProps {
    riveFile: {
        url: string;
    };
    priority: boolean;
    isHovered?: boolean;
    runText?: boolean;
}
```

Usage: `<RivePlayer /* see Props */ />`

### SearchIcon
Import: `import { SearchIcon } from "@genius-sports/gs-brand-kit"`
Use for: Brand SVG / UI glyph; use inside headers, footers, or composed UI

Props:
```ts
(no props)
```

Usage: `<SearchIcon />`

### Section
Import: `import { Section } from "@genius-sports/gs-brand-kit"`
Use for: Composable UI from the brand kit

Props:
```ts
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
```

Usage: `<Section /* see Props */ />`

### Seo
Import: `import { Seo } from "@genius-sports/gs-brand-kit"`
Use for: Composable UI from the brand kit

Props:
```ts
type SeoProps = {
    page: WpPage;
};
```

Usage: `<Seo /* see Props */ />`

### SiteShell
Import: `import { SiteShell } from "@genius-sports/gs-brand-kit"`
Use for: Wraps page content with header/footer wiring

Props:
```ts
{ children: ReactNode; homeHref?: string; }
```

Usage: `<SiteShell homeHref="https://www.geniussports.com">{children}</SiteShell>`

### SliderCircleArrow
Import: `import { SliderCircleArrow } from "@genius-sports/gs-brand-kit"`
Use for: Brand SVG / UI glyph; use inside headers, footers, or composed UI

Props:
```ts
{ circleClassName?: string; arrowClassName?: string; flip?: boolean; }
```

Usage: `<SliderCircleArrow /* see Props */ />`

### StockArrow
Import: `import { StockArrow } from "@genius-sports/gs-brand-kit"`
Use for: Brand SVG / UI glyph; use inside headers, footers, or composed UI

Props:
```ts
(no props)
```

Usage: `<StockArrow />`

### TestimonialSliderArrow
Import: `import { TestimonialSliderArrow } from "@genius-sports/gs-brand-kit"`
Use for: Brand SVG / UI glyph; use inside headers, footers, or composed UI

Props:
```ts
{ circleClassName?: string; arrowClassName?: string; circleOpacity?: string; flip?: boolean; }
```

Usage: `<TestimonialSliderArrow /* see Props */ />`

### TextCard
Import: `import { TextCard } from "@genius-sports/gs-brand-kit"`
Use for: Composable UI from the brand kit

Props:
```ts
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
```

Usage: `<TextCard /* see Props */ />`

### TextLink
Import: `import { TextLink } from "@genius-sports/gs-brand-kit"`
Use for: Composable UI from the brand kit

Props:
```ts
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
```

Usage: `<TextLink /* see Props */ />`

### TextStrokeStack
Import: `import { TextStrokeStack } from "@genius-sports/gs-brand-kit"`
Use for: Composable UI from the brand kit

Props:
```ts
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
```

Usage: `<TextStrokeStack /* see Props */ />`

### TopRightArrowCircle
Import: `import { TopRightArrowCircle } from "@genius-sports/gs-brand-kit"`
Use for: Brand SVG / UI glyph; use inside headers, footers, or composed UI

Props:
```ts
{ width?: string; height?: string; }
```

Usage: `<TopRightArrowCircle /* see Props */ />`

### UlItemBulletOrange
Import: `import { UlItemBulletOrange } from "@genius-sports/gs-brand-kit"`
Use for: Composable UI from the brand kit

Props:
```ts
(no props)
```

Usage: `<UlItemBulletOrange />`

### WpHotkey
Import: `import { WpHotkey } from "@genius-sports/gs-brand-kit"`
Use for: Composable UI from the brand kit

Props:
```ts
{ id: any; }
```

Usage: `<WpHotkey /* see Props */ />`

### Xlogo
Import: `import { Xlogo } from "@genius-sports/gs-brand-kit"`
Use for: Composable UI from the brand kit

Props:
```ts
{ height?: string; width?: string; containerClassName?: string; logoClassName?: string; }
```

Usage: `<Xlogo /* see Props */ />`

### YoutubeLogo
Import: `import { YoutubeLogo } from "@genius-sports/gs-brand-kit"`
Use for: Brand SVG / UI glyph; use inside headers, footers, or composed UI

Props:
```ts
(no props)
```

Usage: `<YoutubeLogo />`

### useSection
Import: `import { useSection } from "@genius-sports/gs-brand-kit"`
Use for: Composable UI from the brand kit

Props:
```ts
() => { paddingTopMap: { none: string; min: string; tiny: string; xSmall: string; small: string; medium: string; large: string; xLarge: string; huge: string; max: string; }; paddingBottomMap: { none: string; min: string; tiny: string; xSmall: string; small: string; medium: string; large: string; xLarge: string; huge: string; max: string; }; innerSpacingMap: { none: string; min: string; tiny: string; xSmall: string; small: string; medium: string; large: string; xLarge: string; huge: string; xHuge: string; max: string; }; getSectionColors: (background?: string) => string; }
```

Usage: `<useSection /* see Props */ />`

