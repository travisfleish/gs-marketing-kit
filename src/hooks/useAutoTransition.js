import { useEffect } from "react";
import { useInView } from "framer-motion";
import { usePageVisibility } from "./usePageVisibility";
// check this works

const useAutoTransition = ({ ref, max, interval, active, setter, controls = null }) => {
	const isVisible = usePageVisibility();
	const isInView = useInView(ref, { once: false, amount: 0.4 });

	useEffect(() => {
		const updateNumber = () => {
			setter((prevNumber) => (prevNumber + 1) % max);
		};

		let timeout;

		if (isInView && isVisible) {
			timeout = setTimeout(updateNumber, interval);

			// if framer animation needs resumed
			if (controls) {
				controls.start({
					transform: "translateX(0)",
					transition: { duration: interval / 1000, ease: "linear" },
				});
			}
		}
		// if framer animation needs paused
		else if (controls) {
			controls.stop();
		}

		return () => clearTimeout(timeout);
	}, [isInView, isVisible, active]);
};

export default useAutoTransition;
