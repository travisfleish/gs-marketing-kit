import LinkGroup from "~/components/elements/links/LinkGroup";

function DefaultLinks({ links }) {
	const parseLinks = (items) => {
		const parsed = items?.map((link) => ({
			link: {
				link: link?.link,
				text_link: {
					background_color: "navy", // May need to update for theming
				},
				type: "text",
			},
		}));

		return parsed;
	};

	return <LinkGroup links={parseLinks(links)} />;
}

export default DefaultLinks;
