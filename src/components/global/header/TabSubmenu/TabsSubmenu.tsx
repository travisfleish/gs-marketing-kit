import React from "react";
// elements
import { WpImageProps } from "~/components/elements/Wp";
import { m } from "framer-motion";
// blocks
import trackEvent from "~/utils/trackEvent";
import HeaderIconCard from "../HeaderElements/HeaderIconCard";
import FeaturedCustomer from "./FeaturedCustomer";

interface TabsSubmenuProps {
	parentMenu?: any;
	submenu: {
		sub_menu_item: {
			content: {
				icon: {
					type: "image" | "rive";
					image: WpImageProps["image"];
				};
				link: {
					url: string;
					title: string;
					target: "_blank" | "";
				};
				description: string;
			};
		}[];
		featured_customer_story: {
			permalink: string;
			post_title: string;
			acf: {
				media: {
					logo: WpImageProps["image"];
					thumbnail: WpImageProps["image"];
				};
				key_stats: {
					stat: string;
					caption: string;
				}[];
			};
		};
	};
}

function TabsSubmenu({ submenu, parentMenu }: TabsSubmenuProps) {
	return (
		<m.div layout className="items-start space-y-4 lg:flex lg:space-y-0 2xl:mx-[-1.5rem]">
			{/* buttons */}
			<menu className="grid gap-4 sm:grid-cols-2 lg:max-w-[49rem] lg:gap-0">
				{submenu?.sub_menu_item?.length > 0 &&
					submenu?.sub_menu_item?.map((item) => (
						// eslint-disable-next-line
						<div
							key={item?.content?.link?.title}
							onClick={() => {
								trackEvent("menu_trackevent", {
									level_1: parentMenu?.menu_item?.title,
									level_2: item?.content?.link?.title,
									menu_type: "menu_header",
								});
							}}
						>
							<HeaderIconCard item={item.content} gapLrg />
						</div>
					))}
			</menu>
			{/* case Study here */}
			<FeaturedCustomer featuredCustomer={submenu.featured_customer_story} parentMenu={parentMenu} />
		</m.div>
	);
}

export default TabsSubmenu;
