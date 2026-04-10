import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { LegalType } from "~/types/wp";
import parseSlug from "~/utils/parseSlug";

interface MainSectionProps {
	section: LegalType["content"][0]["section"];
	onSectionInView?: () => void;
	onSectionNotInView?: () => void;
}

function MainSection({ section, onSectionInView, onSectionNotInView }: MainSectionProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { amount: 0.5 });

	useEffect(() => {
		if (isInView) {
			onSectionInView?.();
		} else {
			onSectionNotInView?.();
		}
	}, [isInView, onSectionInView, onSectionNotInView]);

	return (
		<section id={parseSlug(section.heading)} className="legal-main-section flex scroll-mt-32 flex-col gap-4 md:scroll-mt-20">
			{/* Heading */}
			<h2
				ref={ref}
				className="text-36 font-medium"
				dangerouslySetInnerHTML={{
					__html: section.heading,
				}}
			/>

			{/* Content */}
			<div
				className="text-18 prose font-body text-[#0d1226cc]"
				dangerouslySetInnerHTML={{
					__html: section.content,
				}}
			/>
		</section>
	);
}

export default MainSection;
