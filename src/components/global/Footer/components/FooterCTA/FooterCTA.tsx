import clsx from "clsx";
import { useInView, m } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { getHexValue } from "~/components/ColorHelpers";
import LinkGroup from "~/components/elements/links/LinkGroup";
import { getSplitBreakText } from "~/utils/text";
import { FooterCTALinesDesktop, FooterCTALinesMobile } from "./components/Lines";

const bgColorTransitionMap = {
	"blue-to-bright-green": {
		initial: "blue",
		animated: "brightGreen",
	},
	"navy-to-light-blue": {
		initial: "navy",
		animated: "lightBlue",
	},
};

function FooterCTA({ CTA }) {
	const ctaRef = useRef(null);
	const isCTAInView = useInView(ctaRef, { amount: 0.8, once: true });
	const [dynamicLinks, setDynamicLinks] = useState([]);

	useEffect(() => {
		const links = CTA?.links?.links?.map((link) => ({
			link: {
				...link?.link,
				button: {
					...link?.link?.button,
					background_color: isCTAInView ? "navy" : link?.link?.button?.background_color,
				},
			},
		}));

		setDynamicLinks(links);
	}, [CTA?.links?.links, isCTAInView]);

	return (
		<m.div
			ref={ctaRef}
			animate={{
				backgroundColor: isCTAInView
					? getHexValue(bgColorTransitionMap[CTA?.background_color_transition]?.animated)
					: getHexValue(bgColorTransitionMap[CTA?.background_color_transition]?.initial),
				transition: {
					duration: 1,
					ease: "easeInOut",
				},
			}}
			className={clsx("footer__cta relative flex flex-col overflow-hidden rounded-none pt-18 sm:pb-72 md:rounded-xl md:px-20 md:py-18.875")}
		>
			{/* Lines Desktop */}
			<div className="absolute right-0 top-0 hidden h-full sm:block">
				<FooterCTALinesDesktop height="100%" isInView={isCTAInView} />
			</div>

			{/* Heading */}
			<h2
				className={clsx(
					"text-72 relative mx-auto max-w-[70%] px-6 text-center font-heading transition-colors duration-[800ms] ease-linear sm:max-w-[80%] md:mx-0 md:text-left xl:max-w-[50%]",
					isCTAInView ? "text-navy" : "text-white"
				)}
				dangerouslySetInnerHTML={{
					__html: getSplitBreakText({
						text: CTA?.heading || "",
					}),
				}}
			/>

			{/* Text */}
			<p
				className={clsx(
					"text-20 relative mt-5 px-6 text-center font-body !leading-[1.5] transition-colors duration-[800ms] ease-linear md:text-left",
					isCTAInView ? "text-navy" : "text-white"
				)}
				dangerouslySetInnerHTML={{
					__html: getSplitBreakText({
						text: CTA?.text,
					}),
				}}
			/>

			{/* Links */}
			<div className="relative mt-8 px-6 md:mt-14">
				<LinkGroup noFullWidthOnMobile links={dynamicLinks} />
			</div>

			{/* Lines mobile */}
			<div className="mt-12 block w-full sm:hidden">
				<FooterCTALinesMobile width="100%" isInView={isCTAInView} />
			</div>
		</m.div>
	);
}

export default FooterCTA;
