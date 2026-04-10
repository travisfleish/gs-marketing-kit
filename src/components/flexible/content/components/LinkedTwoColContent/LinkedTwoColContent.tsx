// Clean up [px] vals

import clsx from "clsx";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { GlobalContext } from "~/utils/context";
import ContentSection from "./components/ContentSection";
import { ContentSectionType } from "./types";
import { LinkedTwoColContext } from "./context";
import NavigationDesktop from "./components/NavigationDesktop";
// import NavigationMobile from "./components/NavigationMobile";

export type LinkedTwoColContentThemeColor = "purple" | "lightGreen" | "orange" | "lightRed" | "blue" | "brightGreen";

interface LinkedTwoColContentProps {
	content: {
		heading: string;
		sections: ContentSectionType[];
	};
	options: {
		theme_color: LinkedTwoColContentThemeColor;
		y_spacing: "small" | "medium";
		hide_navigation: boolean;
	};
}

const ySpacingMap = {
	medium: "gap-10 sm:gap-16 md:gap-y-20 lg:gap-y-44",
	small: "gap-10 sm:gap-16 md:gap-y-12 lg:gap-y-16",
};

function LinkedTwoColContent(props: LinkedTwoColContentProps) {
	const { content, options } = props;
	const { y_spacing = "medium" } = options;
	const { heading, sections } = content;
	const { theme_color = "purple" } = options;
	const { hide_navigation } = options;

	const [context, setContext] = useContext(GlobalContext) as any;
	const [localContext, setLocalContext] = useState({ themeColor: theme_color });

	const containerRef = useRef(null);
	const markerRef = useRef(null);
	const isMarkerInView = useInView(markerRef, { amount: 0.2 });
	const isContainerInView = useInView(containerRef, { amount: 0.1 });

	const [activeSection, setActiveSection] = useState<string>(sections?.[0]?.section_heading);

	useEffect(() => {
		if ((isMarkerInView || !isContainerInView) && context?.blockHeader) {
			setContext((prev) => ({ ...prev, blockHeader: false }));
		}
	}, [context?.blockHeader, isContainerInView, isMarkerInView, setContext]);

	const onInViewHandler = useCallback(
		(section) => {
			setActiveSection(section?.section_heading);

			// Block header behaviour when sections come into view
			if (!context?.blockHeader) {
				setContext((prev) => ({ ...prev, blockHeader: true }));
			}
		},
		[context?.blockHeader, setContext]
	);

	return (
		<LinkedTwoColContext.Provider value={[localContext, setLocalContext]}>
			<div ref={containerRef} className="linked-two-col-content relative">
				{/* Marker to enable header again */}
				<div ref={markerRef} className="absolute -top-[50px] left-0 h-[50px] w-screen" />

				{/* Navigation Desktop */}
				{!hide_navigation && <NavigationDesktop heading={heading} sections={sections} activeSection={activeSection} themeColor={theme_color} />}

				{/* Navigation mobile */}
				{/* <NavigationMobile heading={heading} sections={sections} themeColor={theme_color} /> */}

				{/* Sections */}
				<div className="container mt-[72px]">
					{/* Section */}
					<div className={clsx("flex flex-col", ySpacingMap?.[y_spacing])}>
						{sections?.length > 0 &&
							sections?.map((section) => (
								<ContentSection
									onInView={() => {
										onInViewHandler(section);
									}}
									key={section.section_heading}
									section={section}
								/>
							))}
					</div>
				</div>
			</div>
		</LinkedTwoColContext.Provider>
	);
}

export default LinkedTwoColContent;
