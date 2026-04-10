import clsx from "clsx";
import { useRef } from "react";
import { PlusCircle } from "~/components/elements/Icons";
import { m, motion, LazyMotion, domMax, AnimatePresence } from "framer-motion";

import styles from "./FAQsAccordion.module.scss";

function FAQAccordionItem({ question, onClick, isExpanded }) {
	const ref = useRef(null);
	const { heading, content } = question;

	return (
		<LazyMotion features={domMax}>
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
						<p className="text-2xl text-xl font-[450]" dangerouslySetInnerHTML={{ __html: heading }} />
					</div>

					{/* Icon */}
					<m.span
						animate={{
							rotate: isExpanded ? 0 : 90,
							transition: { duration: 0.25, ease: "linear" },
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
						exit={{ opacity: 0, y: 40 }}
						transition={{ duration: 0.25, ease: "linear" }}
						className={`mx-auto flex w-full flex-col gap-8 py-4 text-left md:pb-12 md:pt-10 ${styles.content}`}
						dangerouslySetInnerHTML={{ __html: content }}
					/>
				)}
			</AnimatePresence>
		</LazyMotion>
	);
}

export default FAQAccordionItem;
