// Components
import dynamic from "next/dynamic";

import { Fragment } from "react";

const StackedCards = dynamic(() => import("./components/StackedCards/StackedCards"));
const ContentAnimatedBottomCards = dynamic(() => import("./components/ContentAnimatedBottomCards/ContentAnimatedBottomCards"));
const LeadersGrid = dynamic(() => import("./components/LeadersGrid/LeadersGrid"));
const RolesOfTheWeek = dynamic(() => import("./components/RolesOfTheWeek/RolesOfTheWeek"));
const ValuesThreeCol = dynamic(() => import("./components/ValuesThreeCol/ValuesThreeCol"));
const ValuesGrid = dynamic(() => import("./components/ValuesGrid/ValuesGrid"));
const LocationsGrid = dynamic(() => import("./components/LocationsGrid/LocationsGrid"));
const TestimonialSliderCentered = dynamic(() => import("./components/TestimonialSliderCentered/TestimonialSliderCentered"));
const JobRoles = dynamic(() => import("./components/JobRoles/JobRoles"));
const LocationsAccordion = dynamic(() => import("./components/LocationsAccordion/LocationsAccordion"));
const FAQsAccordion = dynamic(() => import("./components/FAQsAccordion/FAQsAccordion"));

interface CompanyHandlerProps {
	components: {
		acf_fc_layout: string;
	}[];
}

function CompanyHandler({ components }: CompanyHandlerProps) {
	// console.log(components);
	const layoutComponents = {
		stacked_cards: StackedCards,
		leaders_grid: LeadersGrid,
		content_animated_bottom_cards: ContentAnimatedBottomCards,
		roles_of_the_week: RolesOfTheWeek,
		values_three_col: ValuesThreeCol,
		values_grid: ValuesGrid,
		locations_grid: LocationsGrid,
		testimonial_slider_centered: TestimonialSliderCentered,
		job_roles: JobRoles,
		locations_accordion: LocationsAccordion,
		faqs_accordion: FAQsAccordion,
	};

	return components?.map((layout, index) => {
		const { acf_fc_layout: layoutName, ...rest } = layout;
		const LayoutComponent = layoutComponents[layoutName];

		return <Fragment key={`company-component-${index}`}>{LayoutComponent && <LayoutComponent key={index} {...rest} />}</Fragment>;
	});
}

export default CompanyHandler;
