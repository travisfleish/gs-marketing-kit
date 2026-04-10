import { ImageProps } from "~/components/elements/Wp";
import { WpFile, WpLinkType, WpPost } from "~/types/wp";

export interface FeaturedItem {
	layout: "post" | "page" | "file";
	post: WpPost[];
	page: {
		link: WpLinkType;
		image: ImageProps;
		tag: string;
		heading: string;
	};
	file: {
		file: WpFile;
		image: ImageProps;
		tag: string;
		heading: string;
	};
}
