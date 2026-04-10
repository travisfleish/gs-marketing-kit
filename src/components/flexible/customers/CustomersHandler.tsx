import React from "react";
import dynamic from "next/dynamic";

// Components
const Quote = dynamic(() => import("./components/Quote"));
const CustomersSlideOut = dynamic(() => import("./components/CustomersSlideOut"));
const CustomerGrid = dynamic(() => import("./components/CustomerGrid/CustomerGrid"));
const BlogIndex = dynamic(() => import("../blog/components/BlogIndex/BlogIndex"));
interface CustomersHandlerProps {
	components: {
		acf_fc_layout: string;
	}[];
}

function CustomersHandler({ components }: CustomersHandlerProps) {
	// console.log(components);
	const layoutComponents = {
		quote: Quote,
		customers_slide_out: CustomersSlideOut,
		customer_grid: CustomerGrid,
		customer_stories_index: BlogIndex,
	};

	return components?.map((layout, index) => {
		const { acf_fc_layout: layoutName, ...rest } = layout;
		const LayoutComponent = layoutComponents[layoutName];

		const extraProps = {
			...(layoutName === "customer_stories_index" && {
				hideAside: true,
				hidePostShare: true,
				hideTagFilters: true,
				colNumber: 3,
				topFiltersTaxonomyTermAccessor: "customer_stories_categories",
				postCategoriesAccessor: "customer_stories_categories",
				allLinkURL: "/customer-stories/",
				imageAccessor: "acf.media.thumbnail",
				hideCTAs: true,
				showCustomerLogos: true,
				paginationBasePath: "customer-stories",
			}), // Custom props for customer stories index
		};

		return <React.Fragment key={index}>{LayoutComponent && <LayoutComponent key={index} {...rest} {...extraProps} />}</React.Fragment>;
	});
}

export default CustomersHandler;
