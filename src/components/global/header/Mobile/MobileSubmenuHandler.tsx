import React from "react";
// blocks
import TabsSubmenu from "../TabSubmenu/TabsSubmenu";
import GridSubmenu from "../GridSubmenu/GridSubmenu";
import CardSubmenu from "../CardSubmenu/CardSubmenu";
import LearnSubmenu from "../LearnSubmenu/LearnSubmenu";

function MobileSubmenuHandler({ menu, parentMenu, setShowMobileNav }) {
	return (
		<div className="pb-8 pt-4 md:pb-10">
			{menu?.submenu_type === "tabsMenu" && <TabsSubmenu submenu={menu?.tabs_submenu} parentMenu={parentMenu} />}
			{menu?.submenu_type === "gridMenu" && <GridSubmenu submenu={menu?.grid_submenu} parentMenu={parentMenu} setShowMobileNav={setShowMobileNav} />}
			{menu?.submenu_type === "cardMenu" && <CardSubmenu submenu={menu?.card_submenu} parentMenu={parentMenu} />}
			{menu?.submenu_type === "learnMenu" && <LearnSubmenu submenu={menu?.learn_submenu} parentMenu={parentMenu} />}
		</div>
	);
}

export default MobileSubmenuHandler;
