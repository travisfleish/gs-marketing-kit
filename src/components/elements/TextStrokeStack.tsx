import clsx from "clsx";
import { LazyMotion, m, domAnimation } from "framer-motion";
import { getBackgroundColor, getTextColor } from "../ColorHelpers";

interface TextStrokeStackProps {
	int?: number;
	centerText: string;
	bottomText?: string;
	topText?: string;
	options?: {
		textColor?: string;
		textSize?: "70" | "64" | "88";
		bgColor?: string;
		strokeColor?: "brightGreen" | "lightPurple" | "navy" | "white" | "lightBlue";
	};
	hideBottomRow?: boolean;
	hideTopRow?: boolean;
	textClassName?: string;
}

function TextStrokeStack({
	centerText,
	topText,
	bottomText,
	options,
	int = 0,
	hideTopRow = false,
	hideBottomRow = false,
	textClassName,
}: TextStrokeStackProps) {
	const bgColor = getBackgroundColor(options?.bgColor || "blue");
	const otherItemsTextColor = getTextColor(options?.bgColor || "blue");
	const centerTextColor = getTextColor(options?.textColor || "brightGreen");

	const textSizeClassMap = {
		"70": "text-70",
		"64": "text-64 is-stat",
		"88": "text-88",
	};

	const textStrokeMap = {
		brightGreen: "text-stroke-stack__item--stroke-brightGreen",
		lightPurple: "text-stroke-stack__item--stroke-lightPurple",
		white: "text-stroke-stack__item--stroke-white",
		navy: "text-stroke-stack__item--stroke-navy",
		lightBlue: "text-stroke-stack__item--stroke-lightBlue",
	};

	const itemClasses = `${textSizeClassMap?.[options?.textSize || "70"]} leading-[1]`;
	const ease = [0.68, -0.2, 0.15, 0.98];

	return (
		<LazyMotion features={domAnimation}>
			<div className="text-stroke-stack relative flex flex-col overflow-hidden py-[0px]">
				{/* Upper */}
				{!hideTopRow && (
					<m.p
						initial={{ y: 15, scale: 0.9 }}
						whileInView={{ y: 0, scale: 1 }}
						viewport={{ once: true }}
						transition={{
							duration: 0.8,
							ease,
							delay: 0.2 * (int + 1),
						}}
						className={clsx(textClassName, textStrokeMap?.[options?.strokeColor || "brightGreen"], "-mb-12", otherItemsTextColor, itemClasses)}
					>
						{topText || centerText}
					</m.p>
				)}

				{/* Center */}
				<p className={clsx(textClassName, itemClasses, bgColor, centerTextColor, "text-stroke-stack__item z-10 px-[.2rem]")}>{centerText}</p>

				{/* Bottom */}
				{!hideBottomRow && (
					<m.p
						initial={{ y: -15, scale: 0.9 }}
						whileInView={{ y: 0, scale: 1 }}
						viewport={{ once: true }}
						transition={{
							duration: 0.8,
							ease,
							delay: 0.2 * (int + 1),
						}}
						className={clsx(textClassName, textStrokeMap?.[options?.strokeColor || "brightGreen"], "-mt-12", otherItemsTextColor, itemClasses)}
					>
						{bottomText || centerText}
					</m.p>
				)}
			</div>
		</LazyMotion>
	);
}

export default TextStrokeStack;
