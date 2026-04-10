import { ImageProps } from "~/components/elements/Wp";
import { FlexibleContent, WpPost } from "./wp";

export type LoginFormData = {
	username: string;
	password: string;
	remember: boolean;
};

export type ClientReport = WpPost & {
	id: number;
	title: string;
	content: string;
	date: string;
	modified: string;
	slug: string;
	status: string;
	thumbnail: ImageProps;
	sections: FlexibleContent[];
};

export type ClientReportMeta = {
	pagination: {
		total: number;
		count: number;
		per_page: number;
		current_page: number;
		total_pages: number;
	};
};
