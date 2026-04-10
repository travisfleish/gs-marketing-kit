import React from "react";

// motion
import { m } from "framer-motion";

function SportsMastheadPitchMob() {
	const draw = {
		hidden: { pathLength: 0 },
		visible: (i) => {
			const delay = 0 + i * 0.5;
			return {
				pathLength: 1,
				opacity: 1,
				transition: {
					pathLength: { delay, type: "easeOut", duration: 2.6 },
				},
			};
		},
	};
	return (
		<div className="-mx-8 mt-12 w-[calc(100%+4rem)]">
			<m.svg width="100%" height="100%" viewBox="0 0 743 625" fill="none" xmlns="http://www.w3.org/2000/svg" initial="hidden" animate="visible">
				<m.rect
					x="509.93"
					y="143.199"
					width="333.712"
					height="277.003"
					transform="rotate(90 509.93 143.199)"
					stroke="#F3F3F4"
					strokeWidth="2.18112"
					variants={draw}
					custom={1}
				/>
				<m.path
					d="M267.434 143.201C267.434 129.596 270.114 116.124 275.32 103.554C280.527 90.9844 288.158 79.5632 297.779 69.9428C307.399 60.3223 318.82 52.6909 331.39 47.4844C343.96 42.2778 357.432 39.5981 371.037 39.5981C384.643 39.5981 398.115 42.2778 410.685 47.4844C423.254 52.691 434.675 60.3223 444.296 69.9428C453.916 79.5632 461.548 90.9844 466.754 103.554C471.961 116.124 474.641 129.596 474.641 143.201"
					stroke="#F3F3F4"
					strokeWidth="2.18112"
					variants={draw}
					custom={1}
				/>
				<m.path
					d="M740 623.091L741.091 623.091L741.091 622L741.091 371.5C741.091 167.381 575.619 1.90943 371.5 1.90942C167.381 1.90941 1.90942 167.381 1.90941 371.5L1.9094 622L1.9094 623.091L2.99997 623.091L740 623.091Z"
					stroke="#F3F3F4"
					strokeWidth="2.18112"
					variants={draw}
					custom={1}
				/>
			</m.svg>
		</div>
	);
}

export default SportsMastheadPitchMob;
