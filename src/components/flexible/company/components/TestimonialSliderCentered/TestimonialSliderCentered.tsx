import { useState } from "react";
import { ImageProps } from "~/components/elements/Wp";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import TestimonialSliderNavButtons from "./TestimonialSliderNavButtons";
import TestimonialCard from "./TestimonialCard";

interface TestimonialSliderCenteredTestimonial {
	main_text: string;
	author: {
		image: ImageProps;
		full_name: string;
		department: string;
		job_role: string;
	};
}

interface TestimonialSliderCenteredProps {
	content: {
		testimonials: TestimonialSliderCenteredTestimonial[];
	};
}

const lineAnimation = {
	hiddenLeft: {
		opacity: 0,
		x: "100%",
	},
	hiddenRight: {
		opacity: 0,
		x: "-100%",
	},
	visible: {
		opacity: 1,
		x: 0,
	},
	exitLeft: {
		opacity: 0,
		x: "100%",
	},
	exitRight: {
		opacity: 0,
		x: "-100%",
	},
};

function TestimonialSliderCentered(props: TestimonialSliderCenteredProps) {
	const { content } = props;
	const { testimonials } = content || {};

	const [activeSlideIndex, setActiveSlideIndex] = useState(0);
	const [direction, setDirection] = useState<"left" | "right">("right");

	return (
		<div className="testimonial-slider-centered ">
			<div className="flex flex-col items-center justify-center">
				{/* Card */}
				<div className="relative">
					{/* Left Lines Image */}
					<div className="absolute -left-[55%] top-[50%] flex w-full -translate-y-1/2 justify-start">
						<motion.div
							key={activeSlideIndex}
							variants={lineAnimation}
							initial={direction === "left" ? "hiddenLeft" : "hiddenRight"}
							animate="visible"
							exit={direction === "left" ? "exitLeft" : "exitRight"}
							className="aspect-[576/349] w-full max-w-[576px]"
							transition={{
								duration: 0.25,
								ease: "easeInOut",
							}}
						>
							<Image
								src="/images/testimonial-slider-lines-left.png"
								layout="fill"
								objectFit="contain"
								objectPosition="left"
								className=""
								alt="testimonial-slider-left-lines"
							/>
						</motion.div>
					</div>

					{/* Right Lines Image */}
					<div className="absolute -right-[55%] top-[50%] flex w-full -translate-y-1/2 justify-end">
						<motion.div
							key={activeSlideIndex}
							variants={lineAnimation}
							initial={direction === "left" ? "hiddenLeft" : "hiddenRight"}
							animate="visible"
							exit={direction === "left" ? "exitLeft" : "exitRight"}
							className="aspect-[576/349] w-full max-w-[576px]"
							transition={{
								duration: 0.6,
								ease: "easeInOut",
							}}
						>
							<Image
								src="/images/testimonial-slider-lines-right.png"
								layout="fill"
								objectFit="contain"
								objectPosition="right"
								className=""
								alt="testimonial-slider-right-lines"
							/>
						</motion.div>
					</div>

					{/* Left lines */}
					{/* <div
						className={clsx(
							"border border-blue",
							// isInView ? "scale-x-100" : "scale-x-0",
							"origin-right transition-transform duration-300 ease-linear",
							"leaders-grid__row-one__lines absolute -left-[59%] top-[50%] flex h-[90%] -translate-y-1/2"
						)}
					>
						{Array(24)
							.fill("")
							.map((_, i) => (
								<div style={{ width: `${10 - i * 0.6}px`, marginRight: `${10 + i * 0.6}px` }} className="h-full bg-lightPurple" />
							))}
					</div> */}

					{/* Right lines */}
					{/* <div
						className={clsx(
							"border border-blue",
							// isInView ? "scale-x-100" : "scale-x-0",
							"origin-right transition-transform duration-300 ease-linear",
							"leaders-grid__row-one__lines absolute -right-[52.5%] top-[50%] flex h-[90%] -translate-y-1/2 flex-row-reverse"
						)}
					>
						{Array(24)
							.fill("")
							.map((_, i) => (
								<div style={{ width: `${10 - i * 0.6}px`, marginRight: `${10 + i * 0.6}px` }} className="h-full bg-lightPurple" />
							))}
					</div> */}

					<AnimatePresence initial={false} mode="wait">
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.4, ease: "easeInOut" }}
							exit={{ opacity: 0 }}
							className="flex w-full items-center justify-center"
							key={activeSlideIndex}
						>
							<TestimonialCard testimonial={testimonials[activeSlideIndex]} />
						</motion.div>
					</AnimatePresence>
				</div>

				{/* Navigation buttons */}
				<TestimonialSliderNavButtons
					activeSlideIndex={activeSlideIndex}
					onPrevClick={() => {
						setActiveSlideIndex((prev) => {
							const newIndex = prev === 0 ? testimonials.length - 1 : prev - 1;

							if (newIndex < prev) {
								setDirection("left");
							} else {
								setDirection("right");
							}

							return newIndex;
						});
					}}
					onNextClick={() => {
						setActiveSlideIndex((prev) => {
							const newIndex = prev === testimonials.length - 1 ? 0 : prev + 1;

							if (newIndex > prev) {
								setDirection("right");
							} else {
								setDirection("left");
							}

							return newIndex;
						});
					}}
				/>
			</div>
		</div>
	);
}

export default TestimonialSliderCentered;
