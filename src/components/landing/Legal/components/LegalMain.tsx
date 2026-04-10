import { useLayoutEffect, useRef, useState } from "react";
import { LegalType } from "~/types/wp";

// import { debounce } from "lodash";
import MainSection from "./MainSection";
import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";

function LegalMain({ content }: { content: LegalType["content"] }) {
	const [activeSections, setActiveSections] = useState<string[]>([]);
	const [mostTopSection, setMostTopSection] = useState<string | null>(content?.[0]?.section?.heading);
	const [lastMostTopSection, setLastMostTopSection] = useState<string | null>(null);

	const containerRef = useRef(null);

	// Set top most section based on all sections in view
	useLayoutEffect(() => {
		const originalSections = content?.map(({ section }) => section.heading);

		const topSection = activeSections?.reduce((acc, curr) => {
			if (originalSections.indexOf(curr) < originalSections.indexOf(acc)) {
				return curr;
			}
			return acc;
		}, activeSections[0]);

		setMostTopSection(topSection);

		if (activeSections?.length > 0) {
			// Set last most top section when any section is is in view
			setLastMostTopSection(topSection);
		} else {
			// If no section is in view, set most top section to last in history
			setMostTopSection(lastMostTopSection);
		}
	}, [activeSections, content, lastMostTopSection]);

	const onMainSectionInViewHandler = (section) => {
		// debounce(() => {
		setActiveSections((prev) => {
			if (!prev.includes(section.heading)) {
				return [...prev, section.heading];
			}
			return prev;
		});
		// }, 100);
	};

	const onMainSectionNotInViewHandler = (section) => {
		setActiveSections((prev) => {
			if (prev.includes(section.heading)) {
				return prev.filter((heading) => heading !== section.heading);
			}
			return prev;
		});
	};

	return (
		<div ref={containerRef} className="legal-main relative bg-white pb-12 text-navy md:py-[120px]">
			<div className="container">
				<div className="flex flex-col items-start gap-6 md:flex-row">
					{/* Nav mobile */}

					<NavMobile content={content} />

					{/* Nav desktop */}
					<NavDesktop
						content={content}
						activeSection={mostTopSection}
						// onItemClick={(sectionHeading) => setActiveSection(sectionHeading)}
					/>

					{/* Main Content */}
					<div className="relative flex flex-col gap-10 md:gap-20">
						{content?.length > 0 &&
							content?.map(({ section }) => (
								<MainSection
									section={section}
									key={section.heading}
									onSectionInView={() => onMainSectionInViewHandler(section)}
									onSectionNotInView={() => onMainSectionNotInViewHandler(section)}
								/>
							))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default LegalMain;
