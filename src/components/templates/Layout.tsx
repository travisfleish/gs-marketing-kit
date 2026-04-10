import React from "react";
import Header from "~/components/global/Header";
import Seo from "~/components/global/Seo";
import Footer from "~/components/global/Footer/Footer";
import WpHotkey from "~/components/elements/WpHotkey";
import PasswordProtect from "~/components/global/PasswordProtect";
import { WpOptions, WpPage } from "~/types/wp";
import ExitPopup from "~/components/global/ExitPopup/ExitPopup";
import { sectionColor } from "../ColorHelpers";

type LayoutProps = {
	data: {
		page: WpPage;
		options: WpOptions;
	};
	children: React.ReactNode;
	headerColorOverride?: string;
	footerColorOverride?: string;
	blockHeaderScroll?: boolean;
	addScrollProgress?: boolean;
};

function Layout({ data, children, headerColorOverride, footerColorOverride, blockHeaderScroll, addScrollProgress }: LayoutProps) {
	const { page, options } = data;

	const { footer_cta, footer_featured_links } = page;

	// console.log("Layout.page:", page);

	const header = page?.page_settings?.header;
	const footer = page?.page_settings?.footer;
	const pageFooterCTAHasHeading = !!footer_cta?.heading;
	const pageFooterCTAHasText = !!footer_cta?.text;

	// Allow CTA page settings to override global settings if heading or text is set on it
	const overrideGlobalFooterCTA = pageFooterCTAHasHeading || pageFooterCTAHasText;

	const ctaData = overrideGlobalFooterCTA ? footer_cta : options?.footer?.global_cta?.footer_cta;
	// Allow featured links page settings to override global settings if they exist
	const featuredLinksData = footer_featured_links || options?.footer?.global_featured_links?.footer_featured_links;

	// Header
	const headerSettings = data?.page?.page_settings?.header;
	let headerColor = "";

	// Footer
	const footerSettings = data?.page?.page_settings?.footer;

	if (headerSettings?.color === "match-first-section") {
		headerColor = data?.page?.sections?.[0]?.background?.background_color || "white";
	} else {
		headerColor = headerSettings?.color || "white";
	}

	const showPageToast = headerSettings?.show_toast_bar;

	const showPopupOnPage = headerSettings?.show_popup_page;
	return (
		<PasswordProtect password={page?.post_password}>
			<Seo page={data?.page} />
			<ExitPopup exit_popup={options?.header?.exit_popup} showPopupOnPage={showPopupOnPage} />
			<div className={sectionColor(headerColorOverride || headerColor)}>
				{!header?.hide && (
					<Header
						bgColor={headerColorOverride || headerColor}
						addScrollProgress={addScrollProgress}
						blockScroll={blockHeaderScroll}
						showPageToast={showPageToast}
					/>
				)}
				<main>{children}</main>
				{!footer?.hide_all && (
					<Footer
						bgColor={footerColorOverride || footerSettings?.color}
						{...options?.footer}
						CTA={ctaData}
						featuredLinks={featuredLinksData}
						hideCTA={footer?.hide_cta}
						hideFeaturedLinks={footer?.hide_featured_links}
					/>
				)}
			</div>
			<WpHotkey id={page?.ID} />
		</PasswordProtect>
	);
}

export default Layout;
