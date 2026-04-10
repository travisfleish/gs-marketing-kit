/* eslint-disable */

import { useEffect, useState } from "react";

export const usePageVisibility = () => {
	const [isVisible, setIsVisible] = useState(typeof window !== "undefined" ? !window.document.hidden : false);
	const onVisibilityChange = () => setIsVisible(!window.document.hidden);

	useEffect(() => {
		document.addEventListener("visibilitychange", onVisibilityChange, false);

		return () => {
			document.removeEventListener("visibilitychange", onVisibilityChange);
		};
	});

	return { isVisible };
};
