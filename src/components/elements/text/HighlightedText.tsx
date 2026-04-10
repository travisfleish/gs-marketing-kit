import React from "react";
import { getHighlightedText, getSplitBreakText } from "~/utils/text";

interface HighlightedTextProps {
	tag: string;
	className?: string;
	content: string;
	disable?: boolean;
	color: string;
}

function HighlightedText({ tag, className, content, disable, color }: HighlightedTextProps) {
	const TagType = tag || "h2";

	// const contentWithBr = content.replace(/<>/g, '<span class="br"></span>');
	// const htmlContent = contentWithBr.replace(/\|([^*]+?)\|/g, noHighlight ? `` : `<span class="opacity-50">$1</span>`);
	// Apply breaks at <>
	const splitContent = getSplitBreakText({ text: content });
	// Highlight text between | |
	const highlightedText = getHighlightedText({ content: splitContent, disable, color });

	const elementProps: React.HTMLAttributes<HTMLElement> = {
		className: `${className} relative z-10`,
		dangerouslySetInnerHTML: { __html: highlightedText },
	};

	return React.createElement(TagType, elementProps);
}

export default HighlightedText;
