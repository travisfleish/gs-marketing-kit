/* eslint-disable */

export const getLinkTarget = (target: string) => (target === "_blank" ? "_blank" : "_self");

export const getTextLinkProps = ({ title, url, className }) => ({
	link: {
		title,
		url: url || "/",
		target: "",
	},
	type: "text",
	text_link: {
		background_color: "navy",
	},
	className,
});

type GetButtonLinkPropsType = {
	title: string;
	url?: string;
	className?: string;
	button: {
		background_color?: "navy" | "white" | "lightGrey" | "white-alt" | "white15" | "navy5" | string;
		type: "solid" | "slim" | "default" | "outline" | "header" | string;
	};
};

export const getButtonLinkProps = ({ title, url, className, button = { background_color: "navy", type: "default" } }: GetButtonLinkPropsType) => ({
	link: {
		title,
		url: url || "/",
		target: "",
	},
	type: "button",
	button,
	className,
});
