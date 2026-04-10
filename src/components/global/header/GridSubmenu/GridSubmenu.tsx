import React from "react";
// elements
// blocks
import { m } from "framer-motion";
import InnerColumnMenu from "./InnerColumnMenu";

import CardMenu from "./CardMenu";

interface GridSubmenuProps {
	submenu: any;
	parentMenu?: any;
	setShowMobileNav: any;
}

function GridSubmenu({ submenu, parentMenu, setShowMobileNav }: GridSubmenuProps) {
	return (
		<m.div layout className="grid gap-y-[2.25rem] md:grid-cols-2 md:gap-x-6">
			{/* grid menus */}
			<div className="grid gap-y-[3.25rem] sm:grid-cols-2 sm:gap-x-12">
				{submenu?.grid_items?.length > 0 &&
					submenu.grid_items?.map((group) => (
						<div key={group.heading_link?.title}>
							<InnerColumnMenu
								heading_link={group.heading_link}
								addNewTag={group.add_new_tag}
								inner_menu={group.inner_menu}
								parentMenu={parentMenu}
								setShowMobileNav={setShowMobileNav}
							/>
						</div>
					))}
			</div>
			{/* card menu */}
			<CardMenu card={submenu.card} parentMenu={parentMenu} />
		</m.div>
	);
}

export default GridSubmenu;
