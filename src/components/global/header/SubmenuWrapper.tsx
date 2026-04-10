import React from "react";
// elements
import { m } from "framer-motion";

// handles animation of main submenu
interface SubmenuWrapperProps {
	children;
}

// animation variants
const wrapperVariants = {
	visible: {
		opacity: 1,
		transition: {
			when: "beforeChildren",
			type: "easeInOut",
			duration: 0.3,
		},
	},
	hidden: {
		opacity: 0,
		transition: {
			when: "afterChildren",
			type: "easeInOut",
			duration: 0.3,
		},
	},
};

export const barVariants = {
	visible: {
		y: "0",
		transition: {
			type: "spring",
			stiffness: 180,
			damping: 22,
		},
	},
	hidden: {
		y: "-100%",
		transition: {
			type: "spring",
			stiffness: 180,
			damping: 22,
		},
	},
};

function SubmenuWrapper({ children }: SubmenuWrapperProps) {
	// const bar = [0, 1, 2, 3, 4];
	// const barVolume = 10;

	return (
		<m.div
			layout
			initial="hidden"
			animate="visible"
			exit="hidden"
			variants={wrapperVariants}
			className="borer-black/5 absolute inset-x-0 top-[100%] !mx-0 origin-top border-t bg-white md:py-8 lg:py-12"
		>
			{children}
			{/* bar */}
			{/* <m.div initial="hidden" animate="visible" variants={barVariants} className="absolute inset-x-0 top-[100%]">
				{bar.map((item) => (
					<div key={item} className="w-full bg-white" style={{ height: barVolume - item * 2, marginTop: 4 + 0.2 * item }} />
				))}
			</m.div> */}
		</m.div>
	);
}

export default SubmenuWrapper;
