import { ImageProps } from "~/components/elements/Wp";
import { WpLinkType } from "~/types/wp";

export interface ContactGridItem {
	type: "link" | "modalForm";
	link?: WpLinkType;
	subheading: string;
	heading: string;
	form?: {
		form_embed: string;
		heading: string;
		terms_and_conditions: string;
		form_success: {
			image: ImageProps;
			heading: string;
			text: string;
		};
	};
}
