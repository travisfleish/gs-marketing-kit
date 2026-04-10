/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

import React from "react";

import SubmenuAnimation from "./SubmenuAnimation";
import TabsSubmenu from "./TabSubmenu/TabsSubmenu";
import GridSubmenu from "./GridSubmenu/GridSubmenu";
import CardSubmenu from "./CardSubmenu/CardSubmenu";
import LearnSubmenu from "./LearnSubmenu/LearnSubmenu";

// handles conditional rendering of current submenu
function SubmenuHandler({ menus, selectedSubmenu = null, setShowMobileNav }) {
	return (
		<div className="container transform-gpu text-black duration-200">
			{menus?.map((menu, i) => {
				if (selectedSubmenu === i && menu?.add_submenu) {
					return (
						<React.Fragment key={i}>
							{menu?.submenu?.submenu_type === "tabsMenu" && (
								<SubmenuAnimation selectedSubmenu={selectedSubmenu} index={i}>
									<TabsSubmenu submenu={menu?.submenu?.tabs_submenu} parentMenu={menu} />
								</SubmenuAnimation>
							)}
							{menu?.submenu?.submenu_type === "gridMenu" && (
								<SubmenuAnimation selectedSubmenu={selectedSubmenu} index={i}>
									<GridSubmenu submenu={menu?.submenu?.grid_submenu} parentMenu={menu} setShowMobileNav={setShowMobileNav} />
								</SubmenuAnimation>
							)}
							{menu?.submenu?.submenu_type === "cardMenu" && (
								<SubmenuAnimation selectedSubmenu={selectedSubmenu} index={i}>
									<CardSubmenu submenu={menu?.submenu?.card_submenu} parentMenu={menu} />
								</SubmenuAnimation>
							)}
							{menu?.submenu?.submenu_type === "learnMenu" && (
								<SubmenuAnimation selectedSubmenu={selectedSubmenu} index={i}>
									<LearnSubmenu submenu={menu?.submenu?.learn_submenu} parentMenu={menu} />
								</SubmenuAnimation>
							)}
							{/* learn menu */}
						</React.Fragment>
					);
				}
				return null;
			})}
		</div>
	);
}

export default SubmenuHandler;
