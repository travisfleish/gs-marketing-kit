import { useRef, useEffect, ReactNode } from "react";
import { createPortal } from "react-dom";

interface Props {
	rootId: string;
	children: ReactNode;
	className?: string;
	style?: string;
}

const Portal = ({ rootId, children, className = "", style = "" }: Props) => {
	// Portal target
	const target = useRef(document.getElementById(rootId));

	// Clean up empty portal nodes
	useEffect(
		() => () => {
			window.requestAnimationFrame(() => {
				if (target.current.childNodes.length === 0) {
					target.current.remove();
					target.current = null;
				}
			});
		},
		[rootId]
	);

	// Create portal node if it doesn't exist
	if (!target.current) {
		target.current = document.createElement("div");
		target.current.setAttribute("class", className);
		target.current.setAttribute("id", rootId);
		target.current.setAttribute("style", style);
		document.body.appendChild(target.current);
	}

	// @ts-ignore
	return createPortal(children, target.current);
};

export default Portal;
