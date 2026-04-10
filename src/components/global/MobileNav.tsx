import React, { memo, useEffect } from "react";
// elements
import Link from "next/link";
import { m, LazyMotion, domAnimation, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { MobileChevron } from "../elements/Icons";
// blocks
import MobileSubmenuHandler from "./header/Mobile/MobileSubmenuHandler";
import HeaderButtons from "./header/HeaderElements/HeaderButtons";

export default function MobileNav({ menu = [], button, showMobileNav, setShowMobileNav, selectedSubmenu, setSelectedSubmenu, hasBanner }) {
	const transitionSettings = {
		duration: 0.2,
		ease: "easeInOut",
	};

	const slide = {
		initial: {
			translateY: "-100%",
			transition: transitionSettings,
		},
		animate: {
			translateY: 0,
			transition: transitionSettings,
		},
		exit: {
			translateY: "-100%",
			transition: transitionSettings,
		},
	};

	useEffect(() => {
		document.body.style.overflow = showMobileNav ? "hidden" : "auto";
	}, [showMobileNav]);

	return (
		<LazyMotion features={domAnimation}>
			<AnimatePresence>
				{showMobileNav ? (
					<m.div
						key="mobile-nav"
						variants={slide}
						initial="initial"
						animate="animate"
						exit="exit"
						className="fixed inset-0 z-40 h-full overflow-y-auto bg-white text-navy lg:hidden"
					>
						<div className={clsx("container flex flex-col justify-between", hasBanner ? "pt-[125px]" : "pt-[100px]")}>
							{/* main nav */}
							<div>
								<menu className="grid divide-y divide-lightGrey border-t border-lightGrey">
									{Array.isArray(menu)
										? menu?.map((item, index) => (
												<m.div
													key={`top-level-${index}`}
													initial={{ opacity: 0, x: 20 }}
													animate={{
														x: 0,
														opacity: 1,
													}}
													transition={{
														duration: 0.3,
														ease: "easeInOut",
														delay: index * 0.1,
													}}
												>
													<MemoizedMobileNavItem
														setShowMobileNav={setShowMobileNav}
														item={item}
														selectedSubmenu={selectedSubmenu}
														setSelectedSubmenu={setSelectedSubmenu}
														index={index}
													/>
												</m.div>
											))
										: null}
								</menu>
							</div>
							{/* buttons */}
							<HeaderButtons isMobile button={button} bgColor="" />
						</div>
					</m.div>
				) : null}
			</AnimatePresence>
		</LazyMotion>
	);
}

function MobileNavItem({ item, setShowMobileNav, selectedSubmenu, setSelectedSubmenu, index }) {
	const handleClick = () => {
		setShowMobileNav(false);
	};

	// if submenu return button
	if (item?.add_submenu) {
		return (
			<>
				<button
					className="flex w-full items-center justify-between py-6 text-[20px]"
					type="button"
					aria-label={`Open ${item?.menu_item?.title} menu`}
					onClick={() => setSelectedSubmenu(selectedSubmenu === index ? -1 : index)}
				>
					<span dangerouslySetInnerHTML={{ __html: item?.menu_item?.title }} />
					<div
						className={`h-[1.125rem] w-[1.375rem] shrink-0 transition-transform duration-500 ${selectedSubmenu === index ? "rotate-180 text-blue" : "text-navy"}`}
					>
						<MobileChevron />
					</div>
				</button>
				<AnimatePresence mode="wait">
					{selectedSubmenu === index && (
						<m.div
							initial={{ opacity: 0, height: "0" }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: "0" }}
							transition={{ duration: 0.2, delay: 0.1, ease: "easeInOut" }}
						>
							<MobileSubmenuHandler menu={item.submenu} parentMenu={item} setShowMobileNav={setShowMobileNav} />
						</m.div>
					)}
				</AnimatePresence>
			</>
		);
	}
	// else return link
	return (
		<Link href={item?.menu_item?.url} target={item?.menu_item?.target} onClick={handleClick} className="flex items-center justify-between py-6 text-[20px]">
			<span dangerouslySetInnerHTML={{ __html: item?.menu_item?.title }} />
		</Link>
	);
}

const MemoizedMobileNavItem = memo(MobileNavItem);
