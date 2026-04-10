import { useMotionValueEvent, useScroll, m, useMotionValue, useSpring, useMotionTemplate, LazyMotion, domAnimation } from "framer-motion";
import { ReactNode, useContext } from "react";
import { GlobalContext } from "~/utils/context";

type ScrollHeaderProps = {
	showDesktopMenu;
	showMobileNav;
	className?: string;
	children: ReactNode;
	setIsScrolled: (value: boolean) => void;
	blockScroll?: boolean;
	bgColor?: string;
};

function ScrollHeader({ className = "", setIsScrolled, children, blockScroll = false, showDesktopMenu, showMobileNav, bgColor }: ScrollHeaderProps) {
	const [context] = useContext(GlobalContext) as any;

	const { blockHeader } = context;

	const yMotionValue = useMotionValue(0);
	const ySpring = useSpring(yMotionValue, {
		damping: 24,
		stiffness: 150,
	});

	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", (latest) => {
		const prev = scrollY.getPrevious();

		const scrollOffset = 2;
		const scrollDifference = latest - prev;

		if (showDesktopMenu || showMobileNav) {
			yMotionValue.set(0);
		} else if (blockHeader || (latest > 100 && latest > prev)) {
			yMotionValue.set(-100);
		} else if (latest > 120 && scrollDifference < -scrollOffset) {
			yMotionValue.set(0);
		} else {
			yMotionValue.set(0);
		}

		if (latest > 250) {
			setIsScrolled(true);
		} else setIsScrolled(false);
	});

	const yTemplate = useMotionTemplate`translateY(${ySpring}%)`;

	return (
		<LazyMotion features={domAnimation}>
			<m.header
				animate={{
					backgroundColor: bgColor,
					transition: {
						type: "easeInOut",
						duration: bgColor === "#FFFFFF" ? 0.3 : 0.2,
					},
				}}
				style={{
					transform: blockScroll ? "translateY(0%)" : yTemplate,
				}}
				className={className}
			>
				{children}
			</m.header>
		</LazyMotion>
	);
}

export default ScrollHeader;
