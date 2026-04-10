import React from "react";
// elements
import WpImage, { WpImageProps } from "~/components/elements/Wp";
import Marquee from "react-fast-marquee";

interface LogoMarqueeProps {
	logos_large?: boolean;
	logos: {
		logo: WpImageProps["image"];
	}[];
	sectionBG: string;
}

interface LogoProps {
	logosLarge: boolean;
	logo: WpImageProps["image"];
}

function LogoMarquee({ logos_large, logos, sectionBG }: LogoMarqueeProps) {
	const maskColor = [""];

	if (sectionBG === "white") {
		maskColor.push("from-white");
	} else if (sectionBG === "navy") {
		maskColor.push("from-navy");
	} else if (sectionBG === "blue") {
		maskColor.push("from-blue");
	} else {
		maskColor.push("from-black");
	}

	return (
		<div className="relative ml-[-1.25rem] w-[calc(100%+2.5rem)] md:ml-0 md:w-full">
			<Marquee className="relative z-10" speed={35}>
				{logos?.map((item) => <MarqueeLogo key={`1${item?.logo?.url}`} logo={item?.logo} logosLarge={logos_large} />)}
				{logos?.map((item) => <MarqueeLogo key={`2${item?.logo?.url}`} logo={item?.logo} logosLarge={logos_large} />)}
				{logos?.map((item) => <MarqueeLogo key={`3${item?.logo?.url}`} logo={item?.logo} logosLarge={logos_large} />)}
			</Marquee>
			{/* masks */}
			<div className="absolute inset-0 z-[12] flex justify-between">
				<div className={`h-full w-[10%] bg-gradient-to-r lg:w-[5%] ${maskColor.join(" ")}`} />
				<div className={`h-full w-[10%] bg-gradient-to-l lg:w-[5%] ${maskColor.join(" ")}`} />
			</div>
		</div>
	);
}

function MarqueeLogo({ logo, logosLarge = false }: LogoProps) {
	return (
		<div
			className={`mr-12 flex max-w-[5rem] items-center  justify-center sm:mr-20 lg:mr-[7.5rem] lg:max-w-[7rem] ${logosLarge ? "h-8 md:h-10 lg:h-[2.8125rem]" : "h-5 lg:h-8"}`}
		>
			<WpImage image={logo} className="h-full w-auto object-contain" />
		</div>
	);
}

export default LogoMarquee;
