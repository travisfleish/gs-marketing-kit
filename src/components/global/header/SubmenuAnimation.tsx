/* eslint-disable  react/destructuring-assignment */
import React from "react";
// elements
import clsx from "clsx";
import { m } from "framer-motion";

interface SubmenuAnimationProps {
	selectedSubmenu: number;
	index: number;
	children: React.ReactNode;
}

function SubmenuAnimation({ index, selectedSubmenu, children }: SubmenuAnimationProps) {
	return (
		<m.div
			key={index}
			className={clsx(
				"relative w-full transition-all duration-300",
				selectedSubmenu === index ? "opacity-100" : "pointer-events-none opacity-0",
				selectedSubmenu === index || selectedSubmenu === null ? "transform-none" : selectedSubmenu! > index ? "-translate-x-16" : "translate-x-16"
			)}
			aria-hidden={selectedSubmenu !== index}
		>
			{children}
		</m.div>
	);
}

export default SubmenuAnimation;
