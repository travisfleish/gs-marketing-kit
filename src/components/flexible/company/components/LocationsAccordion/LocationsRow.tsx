import { PlusCircle } from "~/components/elements/Icons";
import { m, motion, LazyMotion, domMax, AnimatePresence } from "framer-motion";
import {
	//  useEffect,
	useRef,
} from "react";
import clsx from "clsx";
import OfficeRow from "./OfficeRow";

function LocationsRow({
	location,
	onClick,
	isExpanded,
	// isInView
}) {
	const { heading, subheading, offices } = location;

	const ref = useRef(null);

	// Scroll to row when expanded
	// useEffect(() => {
	// 	if (isInView && isExpanded) {
	// 		ref.current.scrollIntoView({ behavior: "smooth" });
	// 	}
	// }, [heading, isExpanded, isInView]);

	return (
		<LazyMotion features={domMax}>
			<>
				<AnimatePresence mode="popLayout">
					<motion.button
						layout
						type="button"
						aria-label="Toggle location row"
						onClick={() => {
							onClick?.();
						}}
						className="flex w-full scroll-mt-24 items-center justify-between gap-10 py-6 md:py-8"
						ref={ref}
					>
						{/* Heading & Subheading */}
						<div className="flex flex-col items-start gap-2 md:gap-3">
							<p
								className="text-32 text-left font-[450]"
								dangerouslySetInnerHTML={{
									__html: heading,
								}}
							/>

							<p
								className="text-20--extra-clamp text-left font-body text-navy/80"
								dangerouslySetInnerHTML={{
									__html: subheading,
								}}
							/>
						</div>

						{/* Icon */}
						<m.span
							animate={{
								rotate: isExpanded ? 0 : 90,
								transition: {
									duration: 0.25,
									ease: "linear",
								},
							}}
							className={clsx("h-6 w-6 flex-shrink-0 sm:h-10 sm:w-10")}
						>
							<PlusCircle
								hideVerticalLine={isExpanded}
								circleClassName={clsx("transition-transform duration-300 ease-in-out", isExpanded ? "text-blue" : "text-black")}
							/>
						</m.span>
					</motion.button>
				</AnimatePresence>

				<AnimatePresence mode="wait">
					{isExpanded && (
						<m.div
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{
								opacity: 0,
								y: 40,
							}}
							transition={{ duration: 0.25, ease: "linear" }}
							className="mx-auto flex max-w-[894px] flex-col gap-8 py-4 md:pb-12 md:pt-10"
						>
							{offices?.length > 0 && offices.map((office, index) => <OfficeRow key={`office-row-${index}`} office={office} />)}
						</m.div>
					)}
				</AnimatePresence>
			</>
		</LazyMotion>
	);
}

export default LocationsRow;
