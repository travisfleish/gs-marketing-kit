import React from "react";
import { SectionProps, WpPage } from "~/types/wp";
import LandingPage from "~/components/layouts/LandingPage";
import Section from "~/components/layouts/Section/Section";

function LayoutRenderer({ sections, ID, page_settings = null }) {
	if (!sections) return null;

	return sections?.map((section, i) => (
		<React.Fragment key={`${ID + section.acf_fc_layout + i}`}>
			{section?.acf_fc_layout === "landing_page" && <LandingPage {...section} />}
			{section?.acf_fc_layout === "section" && <Section {...(section as SectionProps)} />}
			{section?.acf_fc_layout === "reusable_block" && <LayoutRenderer sections={section.block.acf.sections} ID={section?.block?.ID} />}
		</React.Fragment>
	));
}

export default LayoutRenderer;
