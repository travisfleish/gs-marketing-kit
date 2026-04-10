import React from "react";
// component groups
import ContentHandler from "../flexible/content/ContentHandler";
import MediaHandler from "../flexible/media/MediaHandler";
import CustomersHandler from "../flexible/customers/CustomersHandler";
import BlogHandler from "../flexible/blog/BlogHandler";
import ConversionsHandler from "../flexible/conversions/ConversionsHandler";
import CompanyHandler from "../flexible/company/CompanyHandler";
import MastheadsHandler from "../flexible/mastheads/MastheadsHandler";
import PodcastHandler from "../flexible/podcast/PodcastHandler";

export function ComponentRenderer({ components = [], pageId = null, sectionBG }) {
	const layoutComponentsMap = {
		content: ContentHandler,
		media: MediaHandler,
		customers: CustomersHandler,
		learn_blog: BlogHandler,
		conversions: ConversionsHandler,
		company: CompanyHandler,
		mastheads: MastheadsHandler,
		podcast: PodcastHandler,
	};

	return components?.map((layout, i) => {
		// console.log(layout);
		const { acf_fc_layout: layoutName, ...rest } = layout;
		const LayoutComponent = layoutComponentsMap?.[layoutName];

		return (
			<React.Fragment key={pageId + layoutName + i}>
				{LayoutComponent && (
					<LayoutComponent
						key={pageId + layoutName + i}
						sectionBG={sectionBG}
						{...rest}
						// postListing={postListing}
						// hasContainer={hasContainer}
					/>
				)}
			</React.Fragment>
		);
	});
}

export default ComponentRenderer;
