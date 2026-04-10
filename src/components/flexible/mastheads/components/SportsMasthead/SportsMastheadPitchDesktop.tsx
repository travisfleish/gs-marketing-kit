import React from "react";

// motion
import { m } from "framer-motion";

interface SportsMastheadPitchDesktopProps {
	flip?: boolean;
}

function SportsMastheadPitchDesktop({ flip = false }: SportsMastheadPitchDesktopProps) {
	const draw = {
		hidden: { pathLength: 0 },
		visible: (i) => {
			const delay = flip ? 0 : 0.2 + i * 0.5;
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
		<div className="h-full" style={{ transform: flip ? "" : "rotate(180deg)" }}>
			<m.svg width="100%" height="100%" viewBox="0 0 625 743" fill="none" xmlns="http://www.w3.org/2000/svg" initial="hidden" animate="visible">
				<m.rect
					x="481.801"
					y="509.93"
					width="333.712"
					height="277.003"
					transform="rotate(-180 481.801 509.93)"
					stroke="#F3F3F4"
					strokeWidth="2.18112"
					variants={draw}
					custom={flip ? 2 : 1}
				/>
				<m.path
					d="M481.799 267.434C495.404 267.434 508.876 270.114 521.446 275.32C534.016 280.527 545.437 288.158 555.057 297.779C564.678 307.399 572.309 318.82 577.516 331.39C582.722 343.96 585.402 357.432 585.402 371.037C585.402 384.643 582.722 398.115 577.516 410.685C572.309 423.254 564.678 434.675 555.057 444.296C545.437 453.916 534.016 461.548 521.446 466.754C508.876 471.961 495.404 474.641 481.799 474.641"
					stroke="#F3F3F4"
					strokeWidth="2.18112"
					variants={draw}
					custom={flip ? 2 : 1}
				/>
				<m.path
					d="M1.90936 740L1.90936 741.091L2.99994 741.091L253.5 741.091C457.619 741.091 623.091 575.619 623.091 371.5C623.091 167.381 457.619 1.90941 253.5 1.90939L3 1.90937L1.90943 1.90937L1.90943 2.99995L1.90936 740Z"
					stroke="#F3F3F4"
					strokeWidth="2.18112"
					variants={draw}
					custom={flip ? 2 : 1}
				/>
			</m.svg>
		</div>
	);
}

export default SportsMastheadPitchDesktop;
