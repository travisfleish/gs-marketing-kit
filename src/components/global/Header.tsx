// TODO : HeaderMenus bg and text color based on dynamic header color

import React, { useState, useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { Squash as Hamburger } from "hamburger-react"; // Pick your hamburger style
import { GlobalContext } from "~/utils/context";
import trackEvent from "~/utils/trackEvent";
import { WpOptions } from "~/types/wp";
// elements
import { m, LazyMotion, domAnimation, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// blocks
import clsx from "clsx";
import ScrollHeader from "./header/ScrollHeader";
import HeaderLogo from "./header/HeaderElements/HeaderLogo";
import HeaderMenu from "./header/HeaderElements/HeaderMenu";
import HeaderButtons from "./header/HeaderElements/HeaderButtons";
// submenu
import SubmenuWrapper from "./header/SubmenuWrapper";
import SubmenuHandler from "./header/SubmenuHandler";
import { getBackgroundAndTextColor, getHexValue } from "../ColorHelpers";
import ScrollProgress from "../templates/SingleResource/components/ScrollProgress";
import HeaderSpacer from "./HeaderSpacer";
import Banner from "./Banner";

const MobileNav = dynamic(() => import("~/components/global/MobileNav"));

type HeaderProps = {
	bgColor?: string;
	blockScroll?: boolean;
	addScrollProgress?: boolean;
	showPageToast?: boolean;
	/** Logo home link; use the public marketing origin when this app is not geniussports.com. */
	homeHref?: string;
};

export default function Header({
	bgColor = "white",
	blockScroll,
	addScrollProgress,
	showPageToast,
	homeHref,
}: HeaderProps) {
	// header data
	const [context] = useContext(GlobalContext);
	const pathname = usePathname();
	const { header = [] } = (context?.options as WpOptions) || ({} as WpOptions);

	// mobile menu state
	const [showMobileNav, setShowMobileNav] = useState(false);

	// header scroll state
	const [isScrolled, setIsScrolled] = useState(false);

	// submenu state
	const [showDesktopMenu, setShowDesktopMenu] = useState(false);
	const [selectedSubmenu, setSelectedSubmenu] = useState(-1);
	const [hoveredMenuItem, setHoveredMenuItem] = useState(-1);

	// set menu
	const openDesktopMenu = (index) => {
		setSelectedSubmenu(index !== null ? index : -1);
		setShowDesktopMenu(index !== null);
		setHoveredMenuItem(index !== null ? index : -1);
	};

	const hoverMenuDesktop = (index) => {
		setShowDesktopMenu(null);
		setHoveredMenuItem(index !== null ? index : -1);
	};

	// close menu
	const closeDesktopMenu = () => {
		setSelectedSubmenu(-1);
		setHoveredMenuItem(-1);
		setShowDesktopMenu(false);
	};

	// close mobile menu
	const closeMobileMenu = () => {
		setShowMobileNav(false);
	};

	// close menu on route change (App Router: pathname changes re-run this effect)
	useEffect(() => {
		closeDesktopMenu();
		closeMobileMenu();
	}, [pathname]);

	const selectedColor = isScrolled ? "white" : bgColor;
	const headerBgTextColor = getBackgroundAndTextColor(selectedColor);

	const actualMenu = selectedSubmenu > -1 ? header?.menu[selectedSubmenu] : null;

	const hasBanner = Boolean(context?.options?.header?.toast_bar.show_toast_bar_on_all_pages) || showPageToast;

	// Event for tracking subnav menu hovers
	/* if (selectedSubmenu > -1 && actualMenu?.menu_item?.title) {
		trackEvent("menu_trackevent", {
			level_1: actualMenu.menu_item.title,
			level_2: null,
			menu_type: "menu_header",
		});
	} */

	return (
		<LazyMotion features={domAnimation}>
			<div className="font-heading">
			<HeaderSpacer hasBanner={hasBanner} />
			<ScrollHeader
				blockScroll={blockScroll}
				setIsScrolled={setIsScrolled}
				showMobileNav={showMobileNav}
				showDesktopMenu={showDesktopMenu}
				bgColor={showDesktopMenu || showMobileNav ? "#FFFFFF" : getHexValue(selectedColor)}
				className={clsx(
					"fixed inset-x-0 top-0 z-50 w-full py-2 md:py-3 lg:py-0",
					hasBanner && "!pt-0",
					(showDesktopMenu || showMobileNav) && "!text-navy",
					headerBgTextColor
				)}
			>
				{hasBanner && <Banner {...context?.options?.header?.toast_bar} />}

				<div className="container h-full" onMouseLeave={() => closeDesktopMenu()}>
					<div className="flex h-full items-center justify-between space-x-4 lg:space-x-12 xl:space-x-16">
						{/* logo */}
						<HeaderLogo bgColor={selectedColor} isScrolled={isScrolled} homeHref={homeHref} />

						{/* header nav */}
						<HeaderMenu
							menu={header?.menu}
							selectedSubmenu={hoveredMenuItem}
							openDesktopMenu={openDesktopMenu}
							hoverMenuDesktop={hoverMenuDesktop}
							isScrolled={isScrolled}
						/>
						{/* buttons */}
						<HeaderButtons isSubmenuOpen={showDesktopMenu} isMobile={false} button={header?.button} bgColor={selectedColor} />
						{/* submenus */}
						<AnimatePresence>
							{showDesktopMenu && (
								<SubmenuWrapper>
									<SubmenuHandler menus={header.menu} selectedSubmenu={selectedSubmenu} setShowMobileNav={setShowMobileNav} />
								</SubmenuWrapper>
							)}
						</AnimatePresence>
						{/* hamburger */}
						<div className="lg:hidden">
							<div
								className="-mr-[15px] lg:hidden"
								onClick={() => setShowMobileNav(!showMobileNav)}
								onKeyUp={({ key }) => {
									if (key === "Enter") {
										setShowMobileNav(!showMobileNav);
									}
								}}
								role="button"
								tabIndex={0}
							>
								<Hamburger
									size={18}
									toggled={showMobileNav}
									label={`${showMobileNav ? "Hide menu" : "Show menu"}`}
									aria-expanded={showMobileNav}
									aria-controls="menu"
								/>
							</div>
						</div>
					</div>
				</div>

				{addScrollProgress && !showMobileNav && (
					<div className="absolute bottom-0 left-0 w-full translate-y-[-100%]">
						<ScrollProgress />
					</div>
				)}
			</ScrollHeader>

			{/* Mobile Nav */}
			<MobileNav
				showMobileNav={showMobileNav}
				menu={header.menu}
				button={header?.button}
				setShowMobileNav={setShowMobileNav}
				selectedSubmenu={selectedSubmenu}
				setSelectedSubmenu={setSelectedSubmenu}
				hasBanner={hasBanner}
			/>
			{/* page mask */}
			<AnimatePresence>
				{showDesktopMenu && <m.div initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[30] bg-black" />}
			</AnimatePresence>
			</div>
		</LazyMotion>
	);
}
