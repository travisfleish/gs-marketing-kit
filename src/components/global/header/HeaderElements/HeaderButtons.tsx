import React from "react";
// elements

import { Link } from "~/components/elements/links/Link";
import Button from "~/components/elements/buttons/Button";
import { getButtonLinkProps } from "~/utils/links";
import clsx from "clsx";

interface HeaderButtonsProps {
	isSubmenuOpen?: boolean;
	isMobile: boolean;
	bgColor: string;
	button: {
		link: {
			title: string;
			url: string;
			target: "_blank" | "";
		};
	};
}

function HeaderButtons({ isMobile = false, button, bgColor, isSubmenuOpen }: HeaderButtonsProps) {
	// const buttonColor = [""];

	let buttonBgColor = "";

	if (isSubmenuOpen) {
		buttonBgColor = "navy5";
	} else if (bgColor === "navy" || bgColor === "black" || bgColor === "purple" || bgColor === "blue") {
		// buttonColor.push("bg-white/15 hover:bg-lightBlue hover:text-blue");
		buttonBgColor = "white15";
	} else {
		// buttonColor.push("bg-navy/5 hover:bg-blue hover:text-white");
		buttonBgColor = "navy5";
	}

	const buttonProps = getButtonLinkProps({
		title: button?.link?.title,
		button: {
			background_color: buttonBgColor,
			type: "header",
		},
	});

	return (
		<div className={` items-center ${isMobile ? "mt-[6.875rem] flex flex-col space-y-3" : "hidden justify-end space-x-3 lg:flex"}`}>
			<Link href={button?.link?.url || "#"} link={button?.link} target={button?.link?.target} className={clsx("max-w-[20.9375rem]", isMobile && "w-full")}>
				<Button {...buttonProps} />
			</Link>
		</div>
	);
}

export default HeaderButtons;
