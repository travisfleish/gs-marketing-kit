import { useRef, useState } from "react";
import { HorizontalBars } from "~/components/landing/Legal/components/LegalMasthead";
import FAQAccordionItem from "./FAQAccordionItem";

interface FAQsAccordionProps {
	questions: { heading: string; content: string }[];
}

function FAQsAccordion(props: FAQsAccordionProps) {
	const ref = useRef(null);
	const { questions } = props;
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div className="questions-accordion" ref={ref}>
			<div className="container--extra-small container">
				<HorizontalBars className="" barsClassName="bg-lightGrey" marginInitial={10} marginFactor={0.4} />

				<div className="flex flex-col divide-y divide-lightGrey border-y border-lightGrey">
					{questions?.length > 0 &&
						questions.map((question, index) => (
							<FAQAccordionItem
								key={`question-row-${index}`}
								question={question}
								onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
								isExpanded={activeIndex === index}
							/>
						))}
				</div>
			</div>
		</div>
	);
}

export default FAQsAccordion;
