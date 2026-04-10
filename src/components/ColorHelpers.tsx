// Standardise object map names case
// Clean up repeated funcs
/* eslint-disable */

export function getHexValue(color) {
	const hexMap = {
		navy: "#0D1226",
		blue: "#0000DC",
		lightBlue: "#95ECFD",
		brightGreen: "#E1FF67",
		lightGreen: "#18C971",
		green: "#047C40",
		lightPurple: "#C2D1FF",
		purple: "#4337A8",
		lightOrange: "#FFEBAF",
		orange: "#FA5D00",
		lightRed: "#F76B6A",
		red: "#C20000",
		black: "#000",
		lightGrey: "#F6F7F9",
		white: "#ffffff",
	};

	return hexMap?.[color] || "#ffffff";
}

export function getClassValue(color) {
	const classMap = {
		navy: "bg-navy",
		blue: "bg-blue",
		lightBlue: "bg-lightBlue",
		brightGreen: "bg-brightGreen",
		lightGreen: "bg-lightGreen",
		green: "bg-green",
		lightPurple: "bg-lightPurple",
		purple: "bg-purple",
		lightOrange: "bg-lightOrange",
		orange: "bg-orange",
		lightRed: "bg-lightRed",
		red: "bg-red",
		black: "bg-black",
		lightGrey: "bg-lightGrey",
		white: "bg-white",
	};

	return classMap?.[color] || "bg-white";
}

export function getBackgroundAndTextColor(color) {
	const map = {
		white: "bg-white text-navy",
		navy: "bg-navy text-white",
		"bright-green": "bg-brightGreen text-navy", // refactor and delete
		green: "bg-green text-white",
		lightGreen: "bg-lightGreen text-navy",
		brightGreen: "bg-brightGreen text-navy",
		lightBlue: "bg-lightBlue text-navy",
		lightOrange: "bg-lightOrange text-navy",
		lightPurple: "bg-lightPurple text-navy",
		purple: "bg-purple text-white",
		blue: "bg-blue text-white",
		orange: "bg-orange text-navy",
		lightRed: "bg-lightRed text-white",
		red: "bg-lightRed text-white",
	};

	return map?.[color] || "bg-navy text-white";
}

export function getBackgroundColor(color: string): string {
	const map = {
		purple: "bg-purple",
		lightGreen: "bg-lightGreen",
		orange: "bg-orange",
		lightRed: "bg-lightRed",
		lightGrey: "bg-lightGrey",
		lightBlue: "bg-lightBlue",
		lightOrange: "bg-lightOrange",
		lightPurple: "bg-lightPurple",
		navy: "bg-navy",
		blue: "bg-blue",
		brightGreen: "bg-brightGreen",
		white: "bg-white",
		white5: "bg-white/5",
	};

	return map?.[color] || "bg-purple";
}

export function getTextColor(color: string): string {
	const map = {
		blue: "text-blue",
		"bright-green": "text-brightGreen",
		purple: "text-purple",
		lightPurple: "text-lightPurple",
		lightGrey: "text-lightGrey",
		lightBlue: "text-lightBlue",
		navy: "text-navy",
		black: "text-black",
		green: "text-green",
		lightGreen: "text-lightGreen",
		lightOrange: "text-lightOrange",
		orange: "text-orange",
		brightGreen: "text-brightGreen",
		red: "text-red",
		lightRed: "text-lightRed",
		white: "text-white",
		lavenderGrey: "text-lavenderGrey",
	};

	return map?.[color] || "text-blue";
}

export function textColorStat(color) {
	const classMap = {
		navy: "text-white",
		blue: "text-brightGreen",
		black: "text-white",
		white: "text-black",
	};

	return classMap?.[color] || "bg-white";
}

export function textOutlineColorStat(color) {
	const classMap = {
		navy: "text-navy",
		blue: "text-blue",
		black: "text-black",
		white: "text-white",
	};

	return classMap?.[color] || "bg-white";
}

export function textStrokeColorStat(color) {
	const classMap = {
		navy: "#fff",
		blue: "#E1FF67",
		black: "#fff",
		white: "#0D1226",
	};

	return classMap?.[color] || "bg-white";
}

export function sectionColor(background) {
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
		default:
			return `bg-${background}`;
	}
}
