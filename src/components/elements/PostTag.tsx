import clsx from "clsx";
import { getBackgroundColor, getTextColor } from "../ColorHelpers";

type PostTagProps = { text: string; bgColor?: string; textColor?: string };

function PostTag({ text, bgColor = "lightGrey", textColor = "navy" }: PostTagProps) {
	return (
		<span
			className={clsx("text-15 rounded px-[10px] py-1 font-body font-medium", getTextColor(textColor), getBackgroundColor(bgColor))}
			dangerouslySetInnerHTML={{ __html: text }}
		/>
	);
}

export default PostTag;
