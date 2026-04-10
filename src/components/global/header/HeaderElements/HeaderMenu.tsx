import React from "react";
// elements
import clsx from "clsx";
import { m } from "framer-motion";
import MenuItem from "./MenuItem";

interface HeaderMenuProps {
	openDesktopMenu;
	hoverMenuDesktop;
	isScrolled?: boolean;
	selectedSubmenu: number;
	menu: {
		menu_item: {
			title: string;
			url: string;
			target: "_blank" | "";
		};
		add_submenu: boolean;
	}[];
}

function HeaderMenu({ openDesktopMenu, hoverMenuDesktop, menu, selectedSubmenu, isScrolled }: HeaderMenuProps) {
	return (
		<m.div
			animate={{
				transition: {
					delay: 0.2,
					type: "spring",
					stiffness: 180,
					damping: 22,
				},
			}}
			className={clsx("!mr-auto hidden flex-col justify-end lg:flex")}
		>
			<nav className="flex items-end lg:space-x-6 xl:space-x-8">
				{menu?.map((item, l) => (
					<MenuItem
						openDesktopMenu={openDesktopMenu}
						hoverMenuDesktop={hoverMenuDesktop}
						isScrolled={isScrolled}
						item={item}
						int={l}
						selectedSubmenu={selectedSubmenu}
						key={item.menu_item.title}
					/>
				))}
			</nav>
		</m.div>
	);
}

export default HeaderMenu;
