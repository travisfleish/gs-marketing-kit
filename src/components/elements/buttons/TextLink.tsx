import { ReactNode } from "react";
import { RightArrowCircle } from "../Icons";

type TextLinkProps = {
	link?: {
		title: string;
		url: string;
	};
	text_link: {
		background_color: "navy" | "white";
	};
	className?: string;
	children?: ReactNode;
	// underlineColour?: "black" | "white";
};

function TextLink({ className = "", link, children, text_link }: TextLinkProps) {
	const circleClassMap = {
		navy: "text-navy group-hover:text-blue",
		white: "text-white group-hover:text-lightBlue",
	};

	const arrowClassMap = {
		navy: "text-white",
		white: "text-navy",
	};

	return (
		<div className={`text-16--clamp group inline-flex cursor-pointer select-none items-center leading-tight ${className}`}>
			{(link?.title || children) && (
				<div className="flex items-center gap-[14px] font-bold text-inherit">
					<RightArrowCircle circleClassName={circleClassMap?.[text_link?.background_color]} arrowClassName={arrowClassMap?.[text_link?.background_color]} />
					{/* Title */}
					{link?.title && <span style={{ maxWidth: "calc(100% - 40px)" }} dangerouslySetInnerHTML={{ __html: link?.title }} />}

					{/* Children */}
					{!link?.title && children && children}
					{/* <div className={`mt-1 h-[2px] w-full rounded bg-black group-hover:bg-orange bg-${underlineColour} transition-colors duration-300 ease-in-out`} /> */}
				</div>
			)}
		</div>
	);
}

export default TextLink;
