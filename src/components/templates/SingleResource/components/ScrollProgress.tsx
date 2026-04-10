import React, { useEffect, useState } from "react";

import { useScroll, LazyMotion, m, domAnimation, useTransform, useMotionValueEvent } from "framer-motion";

function ScrollProgressEnd() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="34" height="3" viewBox="0 0 34 3" fill="none">
			<path d="M33 0V84" stroke="#0000DC" strokeWidth="0.5" />
			<path d="M28.5801 0V84" stroke="#0000DC" />
			<path d="M24.1621 0V84" stroke="#0000DC" strokeWidth="1.5" />
			<path d="M19.7422 0V84" stroke="#0000DC" strokeWidth="2" />
			<path d="M15.3223 0V84" stroke="#0000DC" strokeWidth="2.5" />
			<path d="M10.9023 0V84" stroke="#0000DC" strokeWidth="3" />
			<path d="M6.48438 0V84" stroke="#0000DC" strokeWidth="3.5" />
			<path d="M2.06445 0V84" stroke="#0000DC" strokeWidth="4" />
		</svg>
	);
}

function ScrollProgress() {
	const { scrollYProgress } = useScroll();
	const [showScrollProgressEnd, setShowScrollProgressEnd] = useState(false);

	// const prog = useTransform(scrollYProgress, [0, 0.8], ["-100%", "0%"]);
	// const scaleX = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
	const width = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		if (latest > 0) {
			setShowScrollProgressEnd(true);
		} else {
			setShowScrollProgressEnd(false);
		}
	});

	return (
		<LazyMotion features={domAnimation}>
			<div className="scroll-progress-bar absolute inset-x-0 bottom-0 z-[9999] h-[3px] origin-left">
				<div className="flex h-full">
					<m.div className="h-full w-full bg-blue" style={{ width }} />
					{showScrollProgressEnd && <ScrollProgressEnd />}
				</div>
			</div>
		</LazyMotion>
	);
}

export default ScrollProgress;
