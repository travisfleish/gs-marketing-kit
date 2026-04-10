import { useEffect, ReactNode } from "react";
import clsx from "clsx";
// import { useMeasure } from "react-use";
import { CloseIcon } from "../elements/Icons";

interface LightboxOverlayProps {
	children: ReactNode;
	onClick?: () => void;
	contentVerticalPosition?: "top" | "center";
	hideCloseButton?: boolean;
	disableBlur?: boolean;
	childrenContainerClassName?: string;
}

function LightboxOverlay({
	children,
	onClick = () => {},
	contentVerticalPosition = "top",
	hideCloseButton = false,
	disableBlur = false,
	childrenContainerClassName = "",
}: LightboxOverlayProps) {
	// const [ref, { height }] = useMeasure() as any;

	// Split into custom hook/component
	useEffect(() => {
		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = "unset";
		};
	}, []);

	// Close on escape key down
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				onClick?.();
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [onClick]);

	const itemVerticalPositionMap = {
		top: "items-start",
		center: "items-center",
	};

	return (
		<div
			className={`lightbox-overlay fixed inset-0 left-0 top-0 flex min-h-[100dvh] justify-center overflow-y-auto p-[15px] ${
				itemVerticalPositionMap[contentVerticalPosition as keyof typeof itemVerticalPositionMap]
			}`}
			style={{
				// top: window.scrollY || 0,
				zIndex: 9999,
				// height: height + 15 || "100dvh"
			}}
		>
			{/* Close button */}
			{!hideCloseButton && (
				<button
					type="button"
					className="absolute right-4 top-4 z-10 text-white"
					onClick={() => {
						onClick?.();
					}}
				>
					<CloseIcon />
				</button>
			)}

			{/* Black overlay */}
			<button
				type="button"
				aria-label="Close"
				className={clsx("absolute left-0 top-0 h-full w-full bg-black/40 bg-opacity-90", !disableBlur && "backdrop-blur-sm")}
				onClick={() => {
					onClick?.();
				}}
			/>
			<div
				// ref={ref}
				className={clsx(childrenContainerClassName, "max-h-[80dvh] overflow-auto md:max-h-[95dvh]")}
			>
				{children}
			</div>
		</div>
	);
}

export default LightboxOverlay;
