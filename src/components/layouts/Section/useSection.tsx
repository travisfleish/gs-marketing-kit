import { useCallback, useMemo } from "react";

const useSection = () => {
	const paddingTopMap = useMemo(
		() => ({
			none: "pt-0",
			min: "pt-8 md:pt-20",
			tiny: "pt-8 md:pt-24",
			xSmall: "pt-10 md:pt-[104px]",
			small: "pt-10 md:pt-28",
			medium: "pt-12 md:pt-[120px]",
			large: "pt-12 md:pt-36",
			xLarge: "pt-16 md:pt-40",
			huge: "pt-16 md:pt-40 lg:pt-44",
			max: "pt-20 md:pt-[190px]",
		}),
		[]
	);

	const paddingBottomMap = useMemo(
		() => ({
			none: "pb-0",
			min: "pb-8 md:pb-20",
			tiny: "pb-8 md:pb-24",
			xSmall: "pb-10 md:pb-[104px]",
			small: "pb-10 md:pb-28",
			medium: "pb-12 md:pb-[120px]",
			large: "pb-12 md:pb-36",
			xLarge: "pb-16 md:pb-40",
			huge: "pb-16 md:pb-40 lg:pb-44",
			max: "pb-20 md:pb-[190px]",
		}),
		[]
	);

	const innerSpacingMap = useMemo(
		() => ({
			none: "space-y-0",
			min: "space-y-8 md:space-y-8",
			tiny: "space-y-8 md:space-y-[72px]",
			xSmall: "space-y-10 md:space-y-20",
			small: "space-y-12 md:space-y-[88px]",
			medium: "space-y-12 md:space-y-24",
			large: "space-y-12 md:space-y-[104px]",
			xLarge: "space-y-12 md:space-y-[120px]",
			huge: "space-y-16 md:space-y-32",
			xHuge: "space-y-16 md:space-y-[136px]",
			max: "space-y-20 md:space-y-44",
		}),
		[]
	);

	const getSectionColors = useCallback((background = "") => {
		switch (background) {
			case "black":
				return "bg-black text-white";
			case "navy":
				return "bg-navy text-white";
			case "white":
				return "bg-white text-black";
			case "blue":
				return "bg-blue text-white";
			case "lightBlue":
				return "bg-lightBlue text-navy";
			case "lightPurple":
				return "bg-lightPurple text-navy";
			case "purple":
				return "bg-purple text-white";
			case "lightGrey":
				return "bg-lightGrey text-navy";
			case "brightGreen":
				return "bg-brightGreen text-navy";
			default:
				return `bg-${background}`;
		}
	}, []);

	const values = useMemo(
		() => ({
			paddingTopMap,
			paddingBottomMap,
			innerSpacingMap,
			getSectionColors,
		}),
		[paddingTopMap, paddingBottomMap, innerSpacingMap, getSectionColors]
	);

	return values;
};

export default useSection;
