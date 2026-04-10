/* eslint-disable */

import { getTextColor } from "~/components/ColorHelpers";

interface SplitBreakTextProps {
	text: string;
	breakAtAll?: boolean;
	disable?: boolean;
}

export const getSplitBreakText = ({ text, breakAtAll, disable = false }: SplitBreakTextProps) => {
	if (disable) return text.replace(/<>/g, "");

	return text?.replace(/<>/g, `<span class="br ${breakAtAll ? "br--break-at-all" : ""}"></span>`);
};

export const getHighlightedText = ({ content, disable = false, color }) => {
	const highlightColor = getTextColor(color);
	return content?.replace(/\|([^*]+?)\|/g, disable ? `` : `<span class="${highlightColor}">$1</span>`);
};

export const getCapitalisedString = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
