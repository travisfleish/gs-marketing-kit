import React from "react";
// elements
import Link from "next/link";
import { LazyMotion, m, AnimatePresence, domAnimation } from "framer-motion";
import { HeaderLogoTop, HeaderLogoBottom } from "../../Logo";

interface HeaderLogoProps {
	bgColor?: string;
	isScrolled?: boolean;
}

function HeaderLogo({ bgColor, isScrolled }: HeaderLogoProps) {
	const logoColor = [""];
	if (bgColor === "white" || bgColor === "brightGreen" || bgColor === "lightOrange" || bgColor === "lightBlue") {
		logoColor.push("text-blue");
	}

	const ease = [0.68, -0.2, 0.15, 0.98];
	return (
		<LazyMotion features={domAnimation}>
			<div className={`w-10 cursor-pointer lg:w-16 ${logoColor.join(" ")}`}>
				<Link href="/" aria-label="Back to Home">
					<HeaderLogoTop />
					<AnimatePresence initial={false}>
						{!isScrolled && (
							<m.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{
									duration: 0.4,
									ease,
								}}
							>
								<HeaderLogoBottom />
							</m.div>
						)}
					</AnimatePresence>
				</Link>
			</div>
		</LazyMotion>
	);
}

export default HeaderLogo;
