import React from "react";
// element
import Link from "next/link";
import { m } from "framer-motion";
import clsx from "clsx";
import cmsUrlToNextHref from "~/utils/cmsUrlToNextHref";

interface MenuItemProps {
	openDesktopMenu;
	hoverMenuDesktop;
	isScrolled?: boolean;
	selectedSubmenu: number;
	int: number;
	item?: {
		menu_item: {
			title: string;
			url: string;
			target: "_blank" | "";
		};
		add_submenu: boolean;
	};
}

// top menu link
function MenuItem({ openDesktopMenu, hoverMenuDesktop, item, int, selectedSubmenu, isScrolled }: MenuItemProps) {
	if (item.add_submenu) {
		return (
			<button type="button" aria-label={`Open ${item.menu_item.title} submenu`} onMouseEnter={() => openDesktopMenu(int)}>
				<InnerItem item={item} int={int} selectedSubmenu={selectedSubmenu} isScrolled={isScrolled} />
			</button>
		);
	}
	return (
		<Link href={cmsUrlToNextHref(item.menu_item.url)} target={item.menu_item.target} onMouseEnter={() => hoverMenuDesktop(int)}>
			<InnerItem item={item} int={int} selectedSubmenu={selectedSubmenu} isScrolled={isScrolled} />
		</Link>
	);
}

function InnerItem({ item, int, selectedSubmenu, isScrolled }) {
	return (
		<m.span
			initial={{
				padding: "2.5rem 0",
			}}
			animate={{
				padding: isScrolled ? "1.25rem 0" : "2.5rem 0",
				transition: {
					type: "spring",
					stiffness: 180,
					damping: 22,
				},
			}}
			className={clsx("main-menu-item relative flex")}
		>
			<span
				style={{
					transform: "translateZ(0)",
				}}
				dangerouslySetInnerHTML={{ __html: item.menu_item.title }}
			/>
			{selectedSubmenu === int ? (
				<m.div
					transition={{
						type: "spring",
						stiffness: 180,
						damping: 22,
					}}
					className="absolute inset-x-0 bottom-0 h-[0.1875rem] w-full bg-blue"
					layoutId="activeNav"
				/>
			) : null}
		</m.span>
	);
}

export default MenuItem;
