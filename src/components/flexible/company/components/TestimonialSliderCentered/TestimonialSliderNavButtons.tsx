import { m, LazyMotion, domAnimation } from "framer-motion";
import { useEffect } from "react";
import { usePageVisibility } from "~/hooks/usePageVisibility";

function ArrowWithProgressRing({ className = "" }) {
	return (
		<svg width="53" height="54" className={className} viewBox="0 0 53 54" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect x="45.8008" y="8.15967" width="38.4" height="38.4" rx="19.2" transform="rotate(90 45.8008 8.15967)" fill="white" />
			<path
				d="M26.9895 21.7109L32.9497 27.6711M32.9497 27.6711L26.9895 33.6313M32.9497 27.6711H20.3281"
				stroke="#0D1226"
				strokeWidth="1.66154"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

const INTERVAL = 6000;

function TestimonialSliderNavButtons({ onPrevClick, onNextClick, activeSlideIndex }) {
	const { isVisible } = usePageVisibility();

	// Go to next testimonial every interval
	useEffect(() => {
		const interval = setInterval(() => {
			if (!isVisible) return;
			onNextClick?.();
		}, INTERVAL);

		return () => {
			clearInterval(interval);
		};
	}, [isVisible, onNextClick]);

	return (
		<LazyMotion features={domAnimation}>
			<div className="mt-12 flex items-center justify-start gap-4 md:mt-20">
				{/* Prev */}
				<button
					className="cursor-pointer"
					type="button"
					aria-label="Previous slide"
					onClick={() => {
						onPrevClick?.();
					}}
				>
					{/* <TestimonialSliderArrow /> */}
					<ArrowWithProgressRing className="rotate-180" />
				</button>

				{/* Next */}
				<button className="relative block cursor-pointer overflow-hidden" type="button" aria-label="Next slide" onClick={() => onNextClick?.()}>
					{/* Animated conic white bg to simulate progress ring */}
					<m.div
						key={activeSlideIndex}
						initial={{
							background: "conic-gradient(#FFFFFF 0%, #FFFFFF 0%, transparent 0%, transparent 100%)",
						}}
						animate={{
							background: isVisible
								? "conic-gradient(#FFFFFF 0%, #FFFFFF 100%, transparent 100%)"
								: "conic-gradient(#FFFFFF 0%, #FFFFFF 0%, transparent 0%, transparent 100%)",
						}}
						transition={{ duration: INTERVAL / 1000, repeat: Infinity, ease: "linear" }}
						className="absolute inset-0 rounded-full"
					/>

					<div className="relative z-10">
						{/* Purple border to add to progress ring effect */}
						<div className="absolute left-[50%] top-[50%] h-12 w-12 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-[6px] border-purple" />

						{/* Inner arrow */}
						<ArrowWithProgressRing />
					</div>
				</button>
			</div>
		</LazyMotion>
	);
}

export default TestimonialSliderNavButtons;
