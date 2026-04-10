import React from "react";
// elements
// block
import { m } from "framer-motion";
import HeaderCard from "./HeaderCard";
import HeaderIconCard from "../HeaderElements/HeaderIconCard";

interface CardSubmenuProps {
	parentMenu?: any;
	submenu: {
		first_card: any;
		last_card: any;
		inner_menu: {
			menu_items: any[];
		};
	};
}

function CardSubmenu({ submenu, parentMenu }: CardSubmenuProps) {
	return (
		// console.log(submenu);
		<m.div layout className="grid gap-y-4 md:grid-cols-3 md:gap-x-6">
			{/* card one */}
			<div>
				<HeaderCard card={submenu.first_card} parentMenu={parentMenu} />
			</div>
			{/* icon menu */}
			<div className="flex flex-col space-y-4 lg:space-y-0">
				{submenu?.inner_menu?.menu_items?.length > 0 &&
					submenu?.inner_menu?.menu_items?.map((item) => <HeaderIconCard item={item} key={item.link?.title} parentMenu={parentMenu} gapLrg />)}
			</div>
			{/* card two */}
			<div>
				<HeaderCard card={submenu.last_card} parentMenu={parentMenu} />
			</div>
		</m.div>
	);
}

export default CardSubmenu;
