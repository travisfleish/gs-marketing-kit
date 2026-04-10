import React from "react";
// elements
import Link from "next/link";
import { CircleArrow, RightArrow } from "~/components/elements/Icons";
import trackEvent from "~/utils/trackEvent";
import PillTag from "~/components/elements/PillTag";

interface InnerColumnMenuProps {
	addNewTag?: boolean;
	parentMenu: any;
	heading_link: {
		title: string;
		url: string;
		target: "_blank" | "";
	};
	inner_menu: {
		add_new_tag?: boolean;
		link: {
			title: string;
			url: string;
			target: "_blank" | "";
		};
	}[];
	setShowMobileNav?: any;
}

function InnerColumnMenu({ heading_link, inner_menu, parentMenu, addNewTag, setShowMobileNav }: InnerColumnMenuProps) {
	return (
		<menu>
			{/* header */}
			<Link
				href={heading_link?.url || "#"}
				target={heading_link?.target}
				className="group inline-flex items-end space-x-3"
				onClick={() => {
					trackEvent("menu_trackevent", {
						level_1: parentMenu.menu_item.title,
						level_2: heading_link.title,
						menu_type: "menu_header",
					});
				}}
			>
				{/* Title */}
				<span className="text-20 font-heading font-medium !leading-[1] tracking-[-0.0125em]" dangerouslySetInnerHTML={{ __html: heading_link?.title }} />

				{/* Arrow */}
				<div className="h-[1.375rem] w-[1.375rem] rotate-45 rounded-full bg-black text-white transition duration-200 group-hover:rotate-45 group-hover:bg-blue lg:rotate-0">
					<CircleArrow />
				</div>

				{/* New tag */}
				{addNewTag && <PillTag text="NEW" />}
			</Link>

			{/* Menu */}
			<div className="mt-6 flex flex-col space-y-4">
				{inner_menu?.length > 0 &&
					inner_menu?.map((item) => (
						<div key={item?.link?.title}>
							<Link
								href={item?.link?.url || "#"}
								target={item?.link?.target}
								className="group flex items-center space-x-2"
								onClick={() => {
									trackEvent("menu_trackevent", {
										level_1: parentMenu.menu_item.title,
										level_2: item.link.title,
										menu_type: "menu_header",
									});
									setShowMobileNav(false);
								}}
							>
								<span className="text-16 !leading-none opacity-[.75]" dangerouslySetInnerHTML={{ __html: item?.link?.title }} />
								<div className="h-[0.625rem] w-[0.6875rem] -translate-x-2 opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100">
									<RightArrow />
								</div>{" "}
								{item?.add_new_tag && <PillTag text="NEW" />}
							</Link>
						</div>
					))}
			</div>
		</menu>
	);
}

export default InnerColumnMenu;
