import clsx from "clsx";
// import { AnimatePresence, LazyMotion, domAnimation, motion, m } from "framer-motion";
import {
	ContactItemHighlightedLowerSpring,
	// ContactItemHighlightedLowerSpringHover,
	ContactItemHighlightedUpperSpring,
	// ContactItemHighlightedUpperSpringHover,
	ContactItemLowerSpring,
	ContactItemUpperSpring,
} from "~/components/elements/Icons";

function AnimatedLines({ isHovered, highlight }) {
	return (
		<>
			{highlight && (
				<div className="absolute right-0 top-0 flex w-full max-w-[348px] flex-col items-end">
					<span
						className={clsx(
							"flex h-full w-full flex-col items-end",
							isHovered ? "scale-x-0" : "scale-x-75 md:scale-x-100",
							"h-full origin-right transition-transform duration-300 ease-linear"
						)}
					>
						{/* <span className="aspect-[348/112] w-full max-w-[348px]">
									<ContactItemHighlightedUpperSpringHover />
								</span>
								<span className="aspect-[113/248] w-full max-w-[113px]">
									<ContactItemHighlightedLowerSpringHover />
								</span> */}
						<span className="aspect-[334/113] w-full max-w-[334px]">
							<ContactItemHighlightedUpperSpring />
						</span>
						<span className="-mt-[1px] aspect-[204/248] w-full max-w-[204px]">
							<ContactItemHighlightedLowerSpring />
						</span>
					</span>
				</div>
			)}

			{!highlight && (
				<div className="absolute right-0 top-0 flex h-full w-full max-w-[194px]">
					<span
						className={clsx(
							isHovered ? "scale-x-75 md:scale-x-100" : "scale-x-0",
							"flex h-full w-full origin-right flex-col items-end justify-end transition-transform duration-300 ease-linear"
						)}
					>
						<span className="aspect-[91/129] w-full max-w-[91px]">
							<ContactItemUpperSpring />
						</span>
						<span className="aspect-[194/55] w-full max-w-[194px]">
							<ContactItemLowerSpring />
						</span>
					</span>
				</div>
			)}
		</>
	);
}

export default AnimatedLines;
