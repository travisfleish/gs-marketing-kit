import React from "react";
import clsx from "clsx";
import { ComponentRenderer } from "~/components/layouts/ComponentRenderer";
import { SectionProps } from "~/types/wp";
import useSection from "./useSection";

function Section(props: SectionProps) {
	const {
		components = [],
		id = "",
		classnames = "",
		inner_spacing = "max",
		has_container = false,
		overflow = false,
		background,
		padding_top = "huge",
		padding_bottom = "huge",
		is_rounded = false,
		rounded_options = {},
	} = props;

	const { paddingTopMap, paddingBottomMap, innerSpacingMap, getSectionColors } = useSection();

	// Set section outer classes
	const outerClasses = clsx(classnames, [
		"scroll-mt-10 sm:scroll-mt-24",
		overflow ? "overflow-visible" : "overflow-hidden", // Set overflow
		getSectionColors(background?.background_color), // Set outer background
		paddingTopMap?.[padding_top],
		paddingBottomMap?.[padding_bottom],
		is_rounded && has_container ? "container" : "", // Add container to outer element if is rounded section and has_container set to true,
	]);

	// Set section inner classes
	const innerClasses = clsx([
		(!is_rounded && has_container) || (is_rounded && rounded_options?.has_inner_container) ? "container" : "", // Set if using container or not
		innerSpacingMap?.[inner_spacing],
		is_rounded ? "sm:rounded-2xl" : "", // Set it to be rounded
		is_rounded ? getSectionColors(rounded_options?.inner_background_color) : "", // Set inner background color options
		is_rounded ? `${paddingBottomMap?.[rounded_options?.inner_padding_bottom]} ${paddingTopMap?.[rounded_options?.inner_padding_top]}` : "",
	]);

	return (
		<section id={id} className={clsx("section__outer", outerClasses)}>
			<div className={clsx("section__inner", innerClasses)}>
				<ComponentRenderer components={components} sectionBG={background?.background_color} />
			</div>
		</section>
	);
}

export default Section;
