import { ImageProps } from "~/components/elements/Wp";
import { getSplitBreakText } from "~/utils/text";
import { LazyMotion, domAnimation, m, useInView } from "framer-motion";
import { useRef } from "react";
import { useWindowSize } from "react-use";
import ValuesGridCard from "./ValuesGridCard";

interface ValuesGridValue {
	image: ImageProps;
	heading: string;
	text: string;
	link: string;
	link_target: "_blank" | "_self";
}

interface ValuesGridProps {
	content: {
		heading?: string;
		values: ValuesGridValue[];
	};
}

function ValuesGrid(props: ValuesGridProps) {
	const { content } = props;
	const { heading, values } = content || {};
	const ref = useRef(null);
	const { width: windowWidth } = useWindowSize();
	const amountThreshold = windowWidth > 640 ? 0.4 : 0.1;
	const isInView = useInView(ref, { once: true, amount: amountThreshold });

	return (
		<LazyMotion features={domAnimation}>
			<div ref={ref} className="values-grid">
				<div className="container--extra-small container">
					{/* Heading */}
					{!!heading && (
						<span
							className="text-h2 mx-auto mb-16 block text-center md:mb-24"
							dangerouslySetInnerHTML={{
								__html: getSplitBreakText({
									text: heading,
									breakAtAll: true,
								}),
							}}
						/>
					)}

					{/* Values grid */}
					{values?.length > 0 && (
						<m.div
							variants={valuesGridAnim}
							initial="initial"
							animate={isInView ? "animate" : "initial"}
							className="grid gap-[25px] sm:grid-cols-2 lg:grid-cols-3"
						>
							{values?.map((value, index) => <ValuesGridCard key={`value-${index}`} value={value} />)}
						</m.div>
					)}
				</div>
			</div>
		</LazyMotion>
	);
}

const valuesGridAnim = {
	initial: {
		y: 20,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.2,
			ease: "easeOut",
			when: "beforeChildren",
			staggerChildren: 0.15,
		},
	},
};

export default ValuesGrid;
