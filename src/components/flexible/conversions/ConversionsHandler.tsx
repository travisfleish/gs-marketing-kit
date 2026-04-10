import React from "react";
import dynamic from "next/dynamic";
// components
import ContactSalesForm from "./components/ContactSalesForm";

const GetStartedCTA = dynamic(() => import("./components/GetStartedCTA"));
const ConnectCTA = dynamic(() => import("./components/ConnectCTA"), { ssr: false });
const ContactGrid = dynamic(() => import("./components/ContactGrid/ContactGrid"));

interface ConversionsHandlerProps {
	components: {
		acf_fc_layout: string;
	}[];
	sectionBG: string;
}

function ConversionsHandler({ components, sectionBG }: ConversionsHandlerProps) {
	// console.log(components);
	const layoutComponents = {
		get_started_cta: GetStartedCTA,
		contact_sales_form: ContactSalesForm,
		connect_cta: ConnectCTA,
		contact_grid: ContactGrid,
	};
	return components?.map((layout, index) => {
		const { acf_fc_layout: layoutName, ...rest } = layout;
		const LayoutComponent = layoutComponents[layoutName];

		// console.log(layoutName);

		return <React.Fragment key={index}>{LayoutComponent && <LayoutComponent key={index} {...rest} sectionBG={sectionBG} />}</React.Fragment>;
	});
}

export default ConversionsHandler;
