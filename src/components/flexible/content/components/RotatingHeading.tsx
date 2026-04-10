import { useState, useEffect, useRef } from "react";
import { m, AnimatePresence, LayoutGroup, LazyMotion, domAnimation } from "framer-motion";
import { usePageVisibility } from "~/hooks/usePageVisibility";
import clsx from "clsx";
import { getTextColor } from "~/components/ColorHelpers";
import LinkGroup, { LinkGroupProps } from "~/components/elements/links/LinkGroup";
import { useWindowSize } from "react-use";

const ROTATING_INTERVAL = 4000;

const rotatingTextAnimation = {
	initial: {
		// y: "60%",
		opacity: 0,
	},
	animate: {
		// y: 0,
		opacity: 1,
		transition: {
			duration: 0.4,
			delay: 0,
			opacity: { duration: 0.6, delay: 0.1 },
		},
	},
	exit: {
		// y: "-100%",
		opacity: 0,
		transition: {
			opacity: {
				duration: 0.3,
			},
			duration: 0.4,
		},
	},
};

export interface RotatingHeadingProps {
	subheading?: string;
	links?: LinkGroupProps["links"];
	prepend_text?: string;
	append_text?: string;
	rotating_text_values: {
		text: string;
	}[];
	tag_type?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	rotating_text_style: "standalone" | "inline";
	textClassNames?: string;
	text_size?: string;
	rotating_text_color: "blue" | "bright-green";
	max_width?: string;
}

function RotatingHeading(props: RotatingHeadingProps) {
	const {
		subheading,
		links,
		prepend_text,
		rotating_text_values,
		append_text,
		tag_type = "h2",
		rotating_text_style,
		text_size = "default",
		textClassNames = "",
		rotating_text_color = "blue",
		max_width = "",
	} = props;
	const [activeIndex, setActiveIndex] = useState(0);
	const { width: windowWidth } = useWindowSize();

	const interval = useRef(null);
	const { isVisible } = usePageVisibility();

	useEffect(() => {
		interval.current = setInterval(() => {
			if (!isVisible) return;

			// eslint-disable-next-line
			setActiveIndex((prev) => (prev + 1) % rotating_text_values?.length);
		}, ROTATING_INTERVAL);

		return () => {
			clearInterval(interval.current);
		};
	}, [interval, isVisible, rotating_text_values?.length]);

	const prependText = prepend_text ? prepend_text.split(" ") : [];
	const appendText = append_text ? append_text.split(" ") : [];
	const TagType = tag_type || "h2";

	const isMobile = windowWidth < 768;
	const textSize = text_size === "default" || isMobile ? "" : `text-${text_size}`;

	return (
		<div className="rotating-heading">
			<div className="flex flex-col">
				{/* Subheading */}
				{subheading && <p className="text-15 mx-auto mb-4 font-[450] opacity-80" dangerouslySetInnerHTML={{ __html: subheading }} />}

				{/* Rotating heading */}
				<LazyMotion features={domAnimation}>
					<TagType
						className={clsx("text-h2 mx-auto text-center !leading-[1.1] !tracking-[-0.02em]", textSize)}
						style={max_width ? { maxWidth: max_width } : {}}
					>
						<LayoutGroup key={`${prepend_text}-${rotating_text_values?.[0].text}-${append_text}`}>
							{/* Prepend text */}
							{prependText?.length > 0 &&
								prependText?.map((word, i) => (
									<m.span
										layout
										key={word}
										className={clsx("z-[20]", rotating_text_style === "standalone" && "mx-auto", rotating_text_style === "inline" && "inline-block")}
									>
										<m.span layout style={{ display: "inline-block", willChange: "transform" }} className={clsx(textClassNames)}>
											{`${word}\u00A0`}
										</m.span>
									</m.span>
								))}

							{prependText?.length > 0 && <br />}

							{/* Rotating text */}
							<m.div
								className={clsx(
									"z-[10] w-fit",
									rotating_text_style === "standalone" && "mx-auto",
									rotating_text_style === "inline" && "mx-auto flex justify-center md:inline-block"
								)}
							>
								{/* Can maybe remove */}
								<m.span
									className="inline-block"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{
										duration: 0.4,
										delay: 0.5,
										opacity: { duration: 0.6 },
										skewX: { type: "spring", bounce: 0.4, delay: 0.7 },
									}}
								>
									<AnimatePresence mode="wait" initial={false}>
										<m.span
											variants={rotatingTextAnimation}
											initial="initial"
											animate="animate"
											exit="exit"
											layout
											className={clsx("inline-block", getTextColor(rotating_text_color), textClassNames)}
											key={activeIndex}
										>
											{rotating_text_values?.[activeIndex]?.text}
										</m.span>
									</AnimatePresence>
								</m.span>
							</m.div>

							{/* Append text */}
							{appendText?.length > 0 &&
								appendText?.map((word, i) => (
									<m.span
										layout
										key={word}
										className={clsx("z-[20]", rotating_text_style === "standalone" && "mx-auto", rotating_text_style === "inline" && "inline-block")}
									>
										<m.span layout style={{ display: "inline-block", willChange: "transform" }} className={clsx(textClassNames)}>
											{`\u00A0${word}`}
										</m.span>
									</m.span>
								))}
						</LayoutGroup>
					</TagType>
				</LazyMotion>

				{/* Links */}
				{links?.length > 0 && links[0]?.link?.link?.url?.length > 0 && <LinkGroup centered links={links} className="mt-8 md:mt-12" />}
			</div>
		</div>
	);
}

export default RotatingHeading;
