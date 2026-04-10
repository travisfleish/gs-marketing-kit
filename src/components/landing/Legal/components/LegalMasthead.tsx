import { barVariants } from "~/components/global/header/SubmenuWrapper";
import { LegalType } from "~/types/wp";
import { LazyMotion, domAnimation, m, useInView } from "framer-motion";
import clsx from "clsx";
import { useRef } from "react";

interface HorizontalBarsProps {
	className?: string;
	barsClassName?: string;
	bars?: number[];
	barVolume?: number;
	marginInitial?: number;
	marginFactor?: number;
	heightFactor?: number;
	blockAnimation?: boolean;
}

export function HorizontalBars({
	className,
	barsClassName,
	bars = [0, 1, 2, 3, 4],
	barVolume = 10,
	marginInitial = 4,
	heightFactor = 2,
	marginFactor = 0.2,
	blockAnimation = false,
}: HorizontalBarsProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { amount: 0.7, once: true });

	return (
		<LazyMotion features={domAnimation}>
			<m.div ref={ref} initial="hidden" animate={isInView ? "visible" : "hidden"} {...(!blockAnimation && { variants: barVariants })} className={className}>
				{bars?.map((item) => (
					<div
						key={item}
						className={clsx("w-full", barsClassName)}
						style={{ height: barVolume - item * heightFactor, marginTop: marginInitial + marginFactor * item }}
					/>
				))}
			</m.div>
		</LazyMotion>
	);
}

function LegalMasthead({ masthead }: { masthead: LegalType["masthead"] }) {
	return (
		<div className="flex flex-col bg-white">
			<div className="legal__masthead bg-blue">
				<div className="container">
					<div className="sm:py-30 py-20 text-white md:py-32">
						{/* Heading */}
						<h1 className="mb-5 tracking-[-0.0em] md:mb-7" dangerouslySetInnerHTML={{ __html: masthead.heading }} />
						{/* Last updated */}
						<p className="text-18 text-white/80">{`Last updated: ${masthead?.last_updated}`}</p>
					</div>
				</div>
			</div>
			{/* <HorizontalBars className="" barsClassName="bg-blue" /> */}
		</div>
	);
}

export default LegalMasthead;
