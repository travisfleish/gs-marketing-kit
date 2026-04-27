"use client";

import React, { useContext, useEffect, useState } from "react";
import {
  Asset,
  AssetVideo,
  Banner,
  Button,
  CTASpring,
  ChevronDown,
  CircleArrow,
  CloseIcon,
  ComponentRenderer,
  ContactItemHighlightedLowerSpring,
  ContactItemHighlightedLowerSpringHover,
  ContactItemHighlightedUpperSpring,
  ContactItemHighlightedUpperSpringHover,
  ContactItemLowerSpring,
  ContactItemUpperSpring,
  ContactSalesFormLines,
  ContactTopRightArrowCircle,
  CustomLines,
  FacebookLogo,
  FeaturedLinkTopRightArrowCircle,
  Footer,
  FooterCTABottomLines,
  FooterCTATopLines,
  FooterFeaturedLinksArrow,
  GeniusFaviconIcon,
  GlobalContext,
  HeaderLogoBottom,
  HeaderLogoTop,
  HeaderSpacer,
  HighlightedText,
  Icon,
  InputCloseIcon,
  LayoutRenderer,
  LeadersGridPlusCircle,
  LightboxOverlay,
  Link,
  LinkGroup,
  LinkTypeRenderer,
  LinkedinLogo,
  Logo,
  MinusCircle,
  MobileChevron,
  MobileNav,
  NavLeftIcon,
  PillTag,
  PlayArrow,
  PlusCircle,
  PodcastSpring,
  Portal,
  PostAsideSubscribe,
  PostTag,
  RightArrow,
  RightArrowCircle,
  SearchIcon,
  Section,
  SliderCircleArrow,
  StockArrow,
  TestimonialSliderArrow,
  TextCard,
  TextLink,
  TextStrokeStack,
  TopRightArrowCircle,
  UlItemBulletOrange,
  WpHotkey,
  Xlogo,
  YoutubeLogo,
  useSection,
} from "@genius-sports/gs-brand-kit";

const DEMO_IMG =
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80";

function Note({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-15 max-w-prose text-navy/75 border-l-4 border-blue pl-4">
      {children}
    </p>
  );
}

function GlobalContextSnippet() {
  const ctx = useContext(GlobalContext);
  return (
    <div className="space-y-3">
      <Note>
        This app wraps content in{" "}
        <code className="text-14">GlobalContext.Provider</code> (via the local
        test Providers). The hook-shaped tuple is active:{" "}
        <code className="text-14">
          {Array.isArray(ctx) ? "context OK" : "missing"}
        </code>
        .
      </Note>
      <pre className="text-14 overflow-x-auto rounded bg-lavenderGrey/50 p-4 text-navy">
        {`<GlobalContext.Provider value={[state, setState]}>
  <Header />
  …
</GlobalContext.Provider>`}
      </pre>
    </div>
  );
}

function UseSectionDemo() {
  const { paddingTopMap, getSectionColors } = useSection();
  return (
    <div className="space-y-2">
      <p className="text-15 text-navy/80">
        Hook returns spacing maps and helpers. Sample:{" "}
        <code className="text-14">paddingTopMap.medium</code> ={" "}
        <code className="text-14">{paddingTopMap.medium}</code>
      </p>
      <p className="text-15 text-navy/80">
        <code className="text-14">getSectionColors(&quot;navy&quot;)</code> →{" "}
        <code className="text-14">{getSectionColors("navy")}</code>
      </p>
    </div>
  );
}

function MobileNavDemo() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [selectedSubmenu, setSelectedSubmenu] = useState(-1);
  return (
    <div className="space-y-4">
      <button
        type="button"
        className="text-16 rounded bg-navy px-4 py-2 text-white"
        onClick={() => setShowMobileNav(true)}
      >
        Open MobileNav preview
      </button>
      <MobileNav
        menu={[]}
        button={<span className="text-14 text-navy/60">(menu trigger)</span>}
        showMobileNav={showMobileNav}
        setShowMobileNav={setShowMobileNav}
        selectedSubmenu={selectedSubmenu}
        setSelectedSubmenu={setSelectedSubmenu}
        hasBanner={false}
      />
    </div>
  );
}

function PortalDemo() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div className="space-y-3">
      <p className="text-14 text-navy/70">
        The mount node lives <strong>inside this card</strong> so portaled UI does
        not use a fixed corner of the window (which overlapped other sections).
      </p>
      <div className="rounded-lg border border-dashed border-lavenderGrey bg-white p-4">
        <div
          id="catalog-portal-root"
          className="min-h-[2.5rem] rounded border border-lavenderGrey bg-snow p-3 text-14 text-navy"
        />
        {mounted ? (
          <Portal rootId="catalog-portal-root" className="text-14 text-navy">
            <span>Portaled to #catalog-portal-root</span>
          </Portal>
        ) : (
          <p className="text-12 text-navy/50">
            Portal attaches after client hydration.
          </p>
        )}
      </div>
    </div>
  );
}

function LightboxDemo() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {!open ? (
        <button
          type="button"
          className="text-16 text-blue underline"
          onClick={() => setOpen(true)}
        >
          Open LightboxOverlay
        </button>
      ) : (
        <LightboxOverlay onClick={() => setOpen(false)}>
          <div className="max-w-md rounded-lg bg-white p-8 text-navy shadow-xl">
            <p className="text-18 font-medium">Overlay content</p>
            <p className="text-15 mt-2 text-navy/70">
              Click the backdrop to close.
            </p>
          </div>
        </LightboxOverlay>
      )}
    </div>
  );
}

export function CatalogComponentDemo({ componentId }: { componentId: string }) {
  switch (componentId) {
    case "asset":
      return (
        <div className="relative h-64 w-full max-w-xl overflow-hidden rounded-lg bg-lavenderGrey">
          <Asset
            type="image"
            image={{
              url: DEMO_IMG,
              width: 1200,
              height: 800,
              alt: "Catalog demo",
            }}
            animation={{ animation: { url: "" } }}
            ratio="16/9"
            priority={false}
            fill
            className="object-cover"
          />
        </div>
      );
    case "asset-video":
      return (
        <div className="max-w-lg">
          <AssetVideo
            video={{
              file: {
                url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
              },
              show_controls: true,
            }}
          />
        </div>
      );
    case "banner":
      return (
        <Banner
          show_toast_bar
          link={{
            url: "https://www.geniussports.com",
            title: "Example announcement — catalog demo",
          }}
          background_colours="navy"
          text_colours="white"
        />
      );
    case "button":
      return (
        <div className="flex flex-wrap gap-4">
          <Button
            button={{
              type: "default",
              background_color: "navy",
              size: "medium",
            }}
            link={{ title: "Primary", url: "https://www.geniussports.com" }}
          />
          <Button
            button={{
              type: "outline",
              background_color: "navy",
              size: "small",
            }}
            link={{ title: "Outline", url: "https://www.geniussports.com" }}
          />
        </div>
      );
    case "ctaspring":
      return <CTASpring />;
    case "chevron-down":
      return <ChevronDown width="24" height="24" />;
    case "circle-arrow":
      return <CircleArrow />;
    case "close-icon":
      return <CloseIcon />;
    case "component-renderer":
      return (
        <div className="space-y-2">
          <ComponentRenderer components={[]} pageId="demo" sectionBG={{}} />
          <Note>
            Empty <code className="text-14">components</code> renders nothing;
            real pages pass CMS flexible layouts.
          </Note>
        </div>
      );
    case "contact-item-highlighted-lower-spring":
      return <ContactItemHighlightedLowerSpring />;
    case "contact-item-highlighted-lower-spring-hover":
      return <ContactItemHighlightedLowerSpringHover />;
    case "contact-item-highlighted-upper-spring":
      return <ContactItemHighlightedUpperSpring />;
    case "contact-item-highlighted-upper-spring-hover":
      return <ContactItemHighlightedUpperSpringHover />;
    case "contact-item-lower-spring":
      return <ContactItemLowerSpring />;
    case "contact-item-upper-spring":
      return <ContactItemUpperSpring />;
    case "contact-sales-form-lines":
      return <ContactSalesFormLines height={80} width={200} />;
    case "contact-top-right-arrow-circle":
      return <ContactTopRightArrowCircle />;
    case "custom-lines":
      return (
        <div className="h-24 w-full max-w-md">
          <CustomLines
            lineNumber={4}
            lineDirection="horizontal"
            className="h-full w-full"
            initialLineWidth={40}
            initialSpacing={12}
          />
        </div>
      );
    case "exit-popup":
      return (
        <Note>
          <code className="text-14">ExitPopup</code> attaches a window
          mouse-out listener and expects rich CMS props. Omitted here to avoid
          side effects in the catalog viewer.
        </Note>
      );
    case "facebook-logo":
      return <FacebookLogo width="32" height="32" />;
    case "featured-link-top-right-arrow-circle":
      return <FeaturedLinkTopRightArrowCircle />;
    case "footer":
      return (
        <div className="overflow-hidden rounded-lg border border-lavenderGrey">
          <Footer
            hideCTA
            hideFeaturedLinks
            columns={[]}
            social={{ links: [] }}
            terms={{ content: "", links: [] }}
            bgColor="lightGrey"
          />
        </div>
      );
    case "footer-ctabottom-lines":
      return <FooterCTABottomLines className="w-64 text-navy" />;
    case "footer-ctatop-lines":
      return <FooterCTATopLines />;
    case "footer-featured-links-arrow":
      return <FooterFeaturedLinksArrow />;
    case "genius-favicon-icon":
      return <GeniusFaviconIcon />;
    case "global-context":
      return <GlobalContextSnippet />;
    case "header":
      return (
        <Note>
          The real <code className="text-14">Header</code> is{" "}
          <code className="text-14">position:fixed</code> and is meant for the
          site shell. Rendering it inside this long catalog would pin navigation
          over every section, so the live preview lives in{" "}
          <code className="text-14">test-app-header</code> (CMS-backed menu).
          This SPA still provides the same <code className="text-14">Providers</code>{" "}
          + context shape the header expects.
        </Note>
      );
    case "header-logo-bottom":
      return <HeaderLogoBottom />;
    case "header-logo-top":
      return <HeaderLogoTop />;
    case "header-spacer":
      return (
        <div className="space-y-2">
          <HeaderSpacer hasBanner={false} />
          <p className="text-14 text-navy/60">
            Invisible spacer matching header + optional banner height.
          </p>
        </div>
      );
    case "highlighted-text":
      return (
        <HighlightedText
          tag="span"
          className="text-h5"
          content="Highlighted phrase"
          color="brightGreen"
        />
      );
    case "icon":
      return (
        <div className="relative h-40 w-40 max-w-full overflow-hidden rounded-lg border border-lavenderGrey bg-white">
          <Icon
            priority={false}
            icon={{
              type: "image",
              image: {
                url: DEMO_IMG,
                width: 96,
                height: 96,
                alt: "Icon",
              },
            }}
          />
        </div>
      );
    case "input-close-icon":
      return <InputCloseIcon />;
    case "landing-page":
      return (
        <Note>
          <code className="text-14">LandingPage</code> switches on{" "}
          <code className="text-14">layout</code> (404 vs legal). Provide full
          CMS-shaped props in a real route; not rendered here.
        </Note>
      );
    case "layout-renderer":
      return (
        <div>
          <LayoutRenderer sections={[]} ID="catalog-demo" />
          <div className="mt-4">
            <Note>Empty sections yield no output.</Note>
          </div>
        </div>
      );
    case "leaders-grid-plus-circle":
      return <LeadersGridPlusCircle />;
    case "lightbox-overlay":
      return <LightboxDemo />;
    case "link":
      return (
        <Link href="https://www.geniussports.com" className="text-18 text-blue underline">
          Genius Sports (styled link)
        </Link>
      );
    case "link-group":
      return (
        <LinkGroup
          links={[
            {
              link: {
                title: "Home",
                url: "https://www.geniussports.com",
              },
            },
            {
              link: {
                title: "Contact",
                url: "https://www.geniussports.com/contact/",
              },
            },
          ]}
        />
      );
    case "link-type-renderer":
      return (
        <LinkTypeRenderer
          link={{
            title: "Typed link",
            url: "https://www.geniussports.com",
          }}
        />
      );
    case "linkedin-logo":
      return <LinkedinLogo width="32" height="32" />;
    case "logo":
      return <Logo />;
    case "minus-circle":
      return <MinusCircle />;
    case "mobile-chevron":
      return <MobileChevron />;
    case "mobile-nav":
      return <MobileNavDemo />;
    case "nav-left-icon":
      return <NavLeftIcon />;
    case "pill-tag":
      return <PillTag text="Spotlight" />;
    case "play-arrow":
      return <PlayArrow />;
    case "plus-circle":
      return <PlusCircle />;
    case "podcast-spring":
      return <PodcastSpring colour="navy" />;
    case "portal":
      return <PortalDemo />;
    case "post-aside-subscribe":
      return (
        <Note>
          Expects CMS <code className="text-14">heading</code> and{" "}
          <code className="text-14">embed</code>. Embed the real block next to
          articles in production.
        </Note>
      );
    case "post-tag":
      return <PostTag text="Insights" bgColor="lightBlue" textColor="navy" />;
    case "providers":
      return (
        <div className="space-y-3">
          <Note>
            This SPA already wraps the tree with a local{" "}
            <code className="text-14">Providers</code> that mirrors{" "}
            <code className="text-14">BrandKitProviders</code> from the kit.
          </Note>
          <pre className="text-14 overflow-x-auto rounded bg-lavenderGrey/50 p-4 text-navy">
            {`<BrandKitProviders options={wpOptions}>
  <SiteShell>...</SiteShell>
</BrandKitProviders>`}
          </pre>
        </div>
      );
    case "right-arrow":
      return <RightArrow />;
    case "right-arrow-circle":
      return <RightArrowCircle />;
    case "rive-player":
      return (
        <Note>
          Pass a hosted <code className="text-14">.riv</code> URL via{" "}
          <code className="text-14">riveFile</code> (see catalog props).
        </Note>
      );
    case "search-icon":
      return <SearchIcon />;
    case "section":
      return (
        <div className="overflow-hidden rounded-lg">
          <Section
            components={[]}
            has_container
            background={{ background_color: "snow" }}
            id="catalog-section-demo"
          />
          <p className="text-14 mt-2 text-navy/60">
            Empty <code className="text-14">components</code> — layout shell
            only.
          </p>
        </div>
      );
    case "seo":
      return (
        <Note>
          <code className="text-14">Seo</code> expects a full{" "}
          <code className="text-14">WpPage</code>; use in page templates with CMS
          data.
        </Note>
      );
    case "site-shell":
      return (
        <Note>
          <code className="text-14">SiteShell</code> composes{" "}
          <code className="text-14">Header</code>,{" "}
          <code className="text-14">main</code>, and{" "}
          <code className="text-14">Footer</code> from context. This catalog page
          lists those pieces separately so they are not duplicated.
        </Note>
      );
    case "slider-circle-arrow":
      return <SliderCircleArrow />;
    case "stock-arrow":
      return <StockArrow />;
    case "testimonial-slider-arrow":
      return <TestimonialSliderArrow />;
    case "text-card":
      return (
        <TextCard
          text_card={{
            subheading: "Subheading",
            heading: "Text card heading",
            content: "Supporting body copy for the catalog demo.",
            links: [
              {
                link: {
                  title: "Learn more",
                  url: "https://www.geniussports.com",
                },
              },
            ],
            options: {
              text_alignment: "left",
              heading_tag: "h3",
              subheading_tag: "h6",
            },
          }}
        />
      );
    case "text-link":
      return (
        <TextLink
          text_link={{ background_color: "navy" }}
          link={{ title: "Text link CTA", url: "https://www.geniussports.com" }}
        />
      );
    case "text-stroke-stack":
      return (
        <TextStrokeStack
          centerText="24"
          topText="Data"
          bottomText="Products"
          options={{
            strokeColor: "brightGreen",
            textSize: "64",
            bgColor: "#F6F7F9",
          }}
        />
      );
    case "top-right-arrow-circle":
      return <TopRightArrowCircle width="48" height="48" />;
    case "ul-item-bullet-orange":
      return (
        <ul className="flex items-start gap-3">
          <li className="flex gap-2">
            <UlItemBulletOrange />
            <span className="text-16 text-navy">List item with brand bullet</span>
          </li>
        </ul>
      );
    case "wp-hotkey":
      return (
        <div className="space-y-2">
          <WpHotkey id="0" />
          <Note>
            Registers a dev shortcut (no visible output). Requires{" "}
            <code className="text-14">NEXT_PUBLIC_WORDPRESS_BASE_URL</code> for
            the admin URL.
          </Note>
        </div>
      );
    case "xlogo":
      return <Xlogo width="28" height="28" />;
    case "youtube-logo":
      return <YoutubeLogo />;
    case "use-section":
      return <UseSectionDemo />;
    default:
      return (
        <p className="text-15 text-red">
          No demo wired for <code className="text-14">{componentId}</code>.
        </p>
      );
  }
}
