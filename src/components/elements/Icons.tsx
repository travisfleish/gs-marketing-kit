/* eslint-disable */
import { LazyMotion, domAnimation, m } from "framer-motion";
import clsx from "clsx";
import { useState } from "react";

export function FooterFeaturedLinksArrow() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
			<path d="M3.95144 4.19309L11.0225 4.19309M11.0225 4.19309L11.0225 11.2642M11.0225 4.19309L3.53553 11.6801" stroke="#0D1226" strokeLinejoin="round" />
		</svg>
	);
}

export function CircleArrow() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 20 20" fill="none">
			<path d="M7.82912 7.55857L12.4409 7.55857M12.4409 7.55857L12.4409 12.1704M12.4409 7.55857L7.55786 12.4417" stroke="currentColor" strokeLinejoin="round" />
		</svg>
	);
}

export function RightArrow() {
	return (
		<svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M5.58819 1L10.5882 6M10.5882 6L5.58819 11M10.5882 6L0 6" stroke="currentColor" strokeLinejoin="round" />
		</svg>
	);
}

export function RightArrowCircle({ circleClassName = "text-navy", arrowClassName = "text-white", disableTransitions = false, width = 27, height = 26 }) {
	return (
		<svg width={width} height={height} viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_1817_13290)">
				<rect x="0.802734" width="26" height="26" rx="13" fill="currentColor" className={clsx("transition-colors duration-300 ease-in-out", circleClassName)} />
				{/* Arrows */}
				{disableTransitions ? (
					<path
						className={clsx(arrowClassName)}
						d="M13.4081 9.41211L16.9952 12.9993M16.9952 12.9993L13.4081 16.5864M16.9952 12.9993H9.39893"
						stroke="currentColor"
						strokeLinejoin="round"
					/>
				) : (
					<>
						<path
							className={clsx("translate-x-0 transition-transform duration-200 group-hover:translate-x-[100%]", arrowClassName)}
							d="M13.4081 9.41211L16.9952 12.9993M16.9952 12.9993L13.4081 16.5864M16.9952 12.9993H9.39893"
							stroke="currentColor"
							strokeLinejoin="round"
						/>{" "}
						<path
							className={clsx("translate-x-[-100%] transition-transform duration-200 group-hover:translate-x-0", arrowClassName)}
							d="M13.4081 9.41211L16.9952 12.9993M16.9952 12.9993L13.4081 16.5864M16.9952 12.9993H9.39893"
							stroke="currentColor"
							strokeLinejoin="round"
						/>
					</>
				)}
			</g>
			<defs>
				{/* Background color */}
				{/* <clipPath id="clip0_1817_13290">
					<rect x="0.802734" width="26" height="26" rx="13" fill="currentColor" className={clsx("transition-colors duration-300 ease-in-out")} />
				</clipPath> */}
			</defs>
		</svg>
	);
}

export function MobileChevron() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 22 18" fill="none">
			<path d="M2.68689 4.89706L11 13.1029L19.313 4.89706" stroke="currentColor" strokeWidth="2" />
		</svg>
	);
}

export function FooterCTATopLines() {
	return (
		<svg width="351" height="251" viewBox="0 0 351 251" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M0.677246 0.5V250.5" stroke="white" strokeWidth="0.5" />
			<path d="M19.3869 0.5V250.5" stroke="white" />
			<path d="M38.0966 0.5V250.5" stroke="white" strokeWidth="1.5" />
			<path d="M56.8063 0.5V250.5" stroke="white" strokeWidth="2" />
			<path d="M75.5159 0.5V250.5" stroke="white" strokeWidth="2.5" />
			<path d="M94.2256 0.5V250.5" stroke="white" strokeWidth="3" />
			<path d="M112.935 0.5V250.5" stroke="white" strokeWidth="3.5" />
			<path d="M131.645 0.5V250.5" stroke="white" strokeWidth="4" />
			<path d="M150.355 0.5V250.5" stroke="white" strokeWidth="4.5" />
			<path d="M169.064 0.5V250.5" stroke="white" strokeWidth="5" />
			<path d="M187.774 0.5V250.5" stroke="white" strokeWidth="5.5" />
			<path d="M206.484 0.5V250.5" stroke="white" strokeWidth="6" />
			<path d="M225.193 0.5V250.5" stroke="white" strokeWidth="6.5" />
			<path d="M243.903 0.5V250.5" stroke="white" strokeWidth="7" />
			<path d="M262.613 0.5V250.5" stroke="white" strokeWidth="7.5" />
			<path d="M281.322 0.5V250.5" stroke="white" strokeWidth="8" />
			<path d="M300.032 0.5V250.5" stroke="white" strokeWidth="8.5" />
			<path d="M318.742 0.5V250.5" stroke="white" strokeWidth="9" />
			<path d="M337.451 0.5V250.5" stroke="white" strokeWidth="9.5" />
		</svg>
	);
}

export function FooterCTABottomLines({ className }) {
	return (
		<svg className={className} width="508" height="251" viewBox="0 0 508 251" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M494.452 0.5V250.5" stroke="white" strokeWidth="3" />
			<path d="M475.742 0.5V250.5" stroke="white" strokeWidth="3.5" />
			<path d="M457.032 0.5V250.5" stroke="white" strokeWidth="4" />
			<path d="M438.323 0.5V250.5" stroke="white" strokeWidth="4.5" />
			<path d="M419.613 0.5V250.5" stroke="white" strokeWidth="5" />
			<path d="M400.903 0.5V250.5" stroke="white" strokeWidth="5.5" />
			<path d="M382.194 0.5V250.5" stroke="white" strokeWidth="6" />
			<path d="M363.484 0.5V250.5" stroke="white" strokeWidth="6.5" />
			<path d="M344.774 0.5V250.5" stroke="white" strokeWidth="7" />
			<path d="M326.065 0.5V250.5" stroke="white" strokeWidth="7.5" />
			<path d="M307.355 0.5V250.5" stroke="white" strokeWidth="8" />
			<path d="M288.645 0.5V250.5" stroke="white" strokeWidth="8.5" />
			<path d="M269.935 0.5V250.5" stroke="white" strokeWidth="9" />
			<path d="M251.226 0.5V250.5" stroke="white" strokeWidth="9.5" />
			<path d="M232.516 0.5V250.5" stroke="white" strokeWidth="10" />
			<path d="M213.806 0.5V250.5" stroke="white" strokeWidth="10.5" />
			<path d="M195.097 0.5V250.5" stroke="white" strokeWidth="11" />
			<path d="M176.387 0.5V250.5" stroke="white" strokeWidth="11.5" />
			<path d="M157.677 0.5V250.5" stroke="white" strokeWidth="12" />
			<path d="M138.968 0.5V250.5" stroke="white" strokeWidth="12.5" />
			<path d="M120.258 0.5V250.5" stroke="white" strokeWidth="13" />
			<path d="M101.548 0.5V250.5" stroke="white" strokeWidth="13.5" />
			<path d="M82.8386 0.5V250.5" stroke="white" strokeWidth="14" />
			<path d="M64.129 0.5V250.5" stroke="white" strokeWidth="14.5" />
			<path d="M45.4193 0.5V250.5" stroke="white" strokeWidth="15" />
			<path d="M26.7097 0.5V250.5" stroke="white" strokeWidth="15.5" />
			<path d="M8 0.5V250.5" stroke="white" strokeWidth="16" />
		</svg>
	);
}

export function CTASpring() {
	return (
		<svg width="100%" height="100%" viewBox="0 0 292 257" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="285.46" height="255.885" transform="matrix(1 0 0 -1 0.664062 256.337)" fill="white" />
			<path d="M0.664062 256.337V0.45165" stroke="#0000DC" strokeWidth="0.32387" />
			<path d="M9.87305 256.337V0.45165" stroke="#0000DC" strokeWidth="0.647741" />
			<path d="M19.0801 256.337V0.45165" stroke="#0000DC" strokeWidth="0.971611" />
			<path d="M28.2891 256.337V0.45165" stroke="#0000DC" strokeWidth="1.29548" />
			<path d="M37.498 256.337V0.45165" stroke="#0000DC" strokeWidth="1.61935" />
			<path d="M46.7051 256.337V0.45165" stroke="#0000DC" strokeWidth="1.94322" />
			<path d="M55.9141 256.337V0.45165" stroke="#0000DC" strokeWidth="2.26709" />
			<path d="M65.123 256.337V0.45165" stroke="#0000DC" strokeWidth="2.59096" />
			<path d="M74.3301 256.337V0.45165" stroke="#0000DC" strokeWidth="2.91483" />
			<path d="M83.5391 256.337V0.45165" stroke="#0000DC" strokeWidth="3.2387" />
			<path d="M92.748 256.337V0.45165" stroke="#0000DC" strokeWidth="3.56257" />
			<path d="M101.957 256.337V0.45165" stroke="#0000DC" strokeWidth="3.88644" />
			<path d="M111.164 256.337V0.45165" stroke="#0000DC" strokeWidth="4.21031" />
			<path d="M120.373 256.337V0.45165" stroke="#0000DC" strokeWidth="4.53418" />
			<path d="M129.582 256.337V0.45165" stroke="#0000DC" strokeWidth="4.85806" />
			<path d="M138.789 256.337V0.45165" stroke="#0000DC" strokeWidth="5.18193" />
			<path d="M147.998 256.337V0.45165" stroke="#0000DC" strokeWidth="5.5058" />
			<path d="M157.207 256.337V0.45165" stroke="#0000DC" strokeWidth="5.82967" />
			<path d="M166.414 256.337V0.45165" stroke="#0000DC" strokeWidth="6.15354" />
			<path d="M175.623 256.337V0.45165" stroke="#0000DC" strokeWidth="6.47741" />
			<path d="M184.832 256.337V0.45165" stroke="#0000DC" strokeWidth="6.80128" />
			<path d="M194.039 256.337V0.45165" stroke="#0000DC" strokeWidth="7.12515" />
			<path d="M203.248 256.337V0.45165" stroke="#0000DC" strokeWidth="7.44902" />
			<path d="M212.457 256.337V0.45165" stroke="#0000DC" strokeWidth="7.77289" />
			<path d="M221.664 256.337V0.45165" stroke="#0000DC" strokeWidth="8.09676" />
			<path d="M230.873 256.337V0.45165" stroke="#0000DC" strokeWidth="8.42063" />
			<path d="M240.082 256.337V0.45165" stroke="#0000DC" strokeWidth="8.7445" />
			<path d="M249.291 256.337V0.45165" stroke="#0000DC" strokeWidth="9.06837" />
			<path d="M258.498 256.337V0.451649" stroke="#0000DC" strokeWidth="9.39224" />
			<path d="M267.707 256.337V0.45165" stroke="#0000DC" strokeWidth="9.71611" />
			<path d="M276.916 256.337V0.451649" stroke="#0000DC" strokeWidth="10.04" />
			<path d="M286.123 256.337V0.45165" stroke="#0000DC" strokeWidth="10.3639" />
		</svg>
	);
}

export function PlusCircle({ circleClassName = "text-blue", plusClassName = "text-white", hideVerticalLine = false }) {
	return (
		<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="24" height="24" rx="12" fill="currentColor" className={circleClassName} />
			<m.path
				animate={{
					opacity: hideVerticalLine ? 0 : 1,
					transition: {
						duration: 0.2,
						ease: "linear",
					},
				}}
				d="M12.0264 6.96777V17.0867"
				stroke="currentColor"
				className={plusClassName}
				strokeWidth="1.08"
				strokeLinecap="round"
			/>
			<path d="M17.0859 12.0264L6.96702 12.0264" stroke="currentColor" className={plusClassName} strokeWidth="1.08" strokeLinecap="round" />
		</svg>
	);
}

export function MinusCircle({ circleClassName = "text-lightGrey", minusClassName = "text-navy" }) {
	return (
		<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="24" height="24" rx="12" fill="currentColor" className={circleClassName} />
			<path d="M17.0859 12.0273L6.96702 12.0273" stroke="currentColor" className={minusClassName} strokeWidth="1.08" strokeLinecap="round" />
			<path d="M17.0859 12.0273L6.96702 12.0273" stroke="currentColor" className={minusClassName} strokeWidth="1.08" strokeLinecap="round" />
		</svg>
	);
}

export function LeadersGridPlusCircle() {
	return (
		<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect x="28" width="28" height="28" rx="14" transform="rotate(90 28 0)" fill="#0000DC" />
			<path d="M14 8.4834L14 19.5166" stroke="#95ECFD" strokeWidth="1.5" strokeLinecap="round" />
			<path d="M19.5156 14L8.48242 14" stroke="#95ECFD" strokeWidth="1.5" strokeLinecap="round" />
		</svg>
	);
}

export function SliderCircleArrow({ circleClassName = "text-white", arrowClassName = "text-navy", flip = false }) {
	return (
		<svg
			className={clsx(flip && "hover rotate-180 transform", "group")}
			xmlns="http://www.w3.org/2000/svg"
			width="32"
			height="33"
			viewBox="0 0 32 33"
			fill="none"
		>
			<rect
				width="32"
				height="32"
				rx="16"
				transform="matrix(-1 8.74228e-08 8.74228e-08 1 32 0.5)"
				fill="currentColor"
				className={clsx(circleClassName, "opacity-50 group-hover:opacity-100", "transition-[colors, opacity] duration-300 ease-in-out")}
			/>
			<path
				className={clsx(arrowClassName, "transition-colors duration-300 ease-in-out")}
				d="M15.9684 11.5L11.0016 16.4668M11.0016 16.4668L15.9684 21.4337M11.0016 16.4668L21.5195 16.4668"
				stroke="currentColor"
				strokeWidth="1.38462"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export function TopRightArrowCircle({ width = "24", height = "24" }) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
			<rect width="24" height="24" rx="12" fill="white" />
			<path
				d="M9.99963 9.72595L14.6824 9.72595M14.6824 9.72595L14.6824 14.4087M14.6824 9.72595L9.7242 14.6842"
				stroke="#0D1226"
				strokeWidth="0.923077"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export function FeaturedLinkTopRightArrowCircle() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
			<rect width="20" height="20" rx="10" fill="white" />
			<path d="M7.82925 7.55857L12.4411 7.55857M12.4411 7.55857L12.4411 12.1704M12.4411 7.55857L7.55799 12.4417" stroke="#0D1226" strokeLinejoin="round" />
		</svg>
	);
}

export function TestimonialSliderArrow({ circleClassName = "text-white", arrowClassName = "text-white", circleOpacity = "0.1", flip = false }) {
	return (
		<svg className={clsx(flip && "rotate-180 transform")} xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
			<rect
				width="38.4"
				height="38.4"
				rx="19.2"
				transform="matrix(-1 8.74228e-08 8.74228e-08 1 38.3984 0.159668)"
				fill="currentColor"
				className={circleClassName}
				fillOpacity={circleOpacity}
			/>
			<path
				d="M19.159 13.3599L13.1988 19.3201M13.1988 19.3201L19.159 25.2803M13.1988 19.3201L25.8203 19.3201"
				stroke="currentColor"
				className={arrowClassName}
				strokeWidth="1.66154"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export function CloseIcon({ lineClassName = "text-navy" }) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
			<path
				d="M18.9961 19.0059L4.9946 5.00436"
				stroke="currentColor"
				className={lineClassName}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M4.99609 19.0059L18.9976 5.00436"
				stroke="currentColor"
				className={lineClassName}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export function ContactTopRightArrowCircle({ arrowClassName = "text-navy", circleClassName = "text-white" }) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
			<rect width="32" height="32" rx="16" fill="currentColor" className={circleClassName} />
			<path
				d="M12.5258 12.0938L19.9047 12.0938M19.9047 12.0938L19.9047 19.4727M19.9047 12.0938L12.0918 19.9067"
				stroke="currentColor"
				className={arrowClassName}
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export function ContactItemHighlightedUpperSpring({ lineClassName = "text-white" }) {
	return (
		<svg width="100%" height="100%" viewBox="0 0 334 113" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1 -205L1 112.792" stroke="currentColor" className={lineClassName} strokeWidth="0.49655" />
			<path d="M19.582 -205L19.582 112.792" stroke="currentColor" className={lineClassName} strokeWidth="0.9931" />
			<path d="M38.1602 -205L38.1602 112.792" stroke="currentColor" className={lineClassName} strokeWidth="1.48965" />
			<path d="M56.7422 -205L56.7422 112.792" stroke="currentColor" className={lineClassName} strokeWidth="1.9862" />
			<path d="M75.3242 -205L75.3242 112.792" stroke="currentColor" className={lineClassName} strokeWidth="2.48275" />
			<path d="M93.9023 -205L93.9023 112.792" stroke="currentColor" className={lineClassName} strokeWidth="2.9793" />
			<path d="M112.484 -205L112.484 112.792" stroke="currentColor" className={lineClassName} strokeWidth="3.47585" />
			<path d="M131.066 -205L131.066 112.792" stroke="currentColor" className={lineClassName} strokeWidth="3.9724" />
			<path d="M149.645 -205L149.645 112.792" stroke="currentColor" className={lineClassName} strokeWidth="4.46895" />
			<path d="M168.227 -205L168.227 112.792" stroke="currentColor" className={lineClassName} strokeWidth="4.9655" />
			<path d="M186.805 -205L186.805 112.792" stroke="currentColor" className={lineClassName} strokeWidth="5.46205" />
			<path d="M205.387 -205L205.387 112.792" stroke="currentColor" className={lineClassName} strokeWidth="5.9586" />
			<path d="M223.969 -205L223.969 112.792" stroke="currentColor" className={lineClassName} strokeWidth="6.45515" />
			<path d="M242.547 -205L242.547 112.792" stroke="currentColor" className={lineClassName} strokeWidth="6.9517" />
			<path d="M261.129 -205L261.129 112.792" stroke="currentColor" className={lineClassName} strokeWidth="7.44825" />
			<path d="M279.711 -205L279.711 112.792" stroke="currentColor" className={lineClassName} strokeWidth="7.9448" />
			<path d="M298.289 -205L298.289 112.792" stroke="currentColor" className={lineClassName} strokeWidth="8.44135" />
			<path d="M316.871 -205L316.871 112.792" stroke="currentColor" className={lineClassName} strokeWidth="8.93789" />
			<path d="M335.453 -205L335.453 112.792" stroke="currentColor" className={lineClassName} strokeWidth="9.43444" />
		</svg>
	);
}

export function ContactItemHighlightedUpperSpringHover({ lineClassName = "text-white" }) {
	return (
		<svg width="100%" height="100%" viewBox="0 0 348 112" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1 -206L1 112" stroke="currentColor" className={lineClassName} strokeWidth="0.49655" />
			<path d="M16.6445 -206L16.6445 112" stroke="currentColor" className={lineClassName} strokeWidth="0.9931" />
			<path d="M32.2891 -206L32.2891 112" stroke="currentColor" className={lineClassName} strokeWidth="1.48965" />
			<path d="M47.9336 -206L47.9336 112" stroke="currentColor" className={lineClassName} strokeWidth="1.9862" />
			<path d="M63.582 -206L63.582 112" stroke="currentColor" className={lineClassName} strokeWidth="2.48275" />
			<path d="M79.2266 -206L79.2266 112" stroke="currentColor" className={lineClassName} strokeWidth="2.9793" />
			<path d="M94.8711 -206L94.8711 112" stroke="currentColor" className={lineClassName} strokeWidth="3.47585" />
			<path d="M110.516 -206L110.516 112" stroke="currentColor" className={lineClassName} strokeWidth="3.9724" />
			<path d="M126.16 -206L126.16 112" stroke="currentColor" className={lineClassName} strokeWidth="4.46895" />
			<path d="M141.805 -206L141.805 112" stroke="currentColor" className={lineClassName} strokeWidth="4.9655" />
			<path d="M157.453 -206L157.453 112" stroke="currentColor" className={lineClassName} strokeWidth="5.46205" />
			<path d="M173.098 -206L173.098 112" stroke="currentColor" className={lineClassName} strokeWidth="5.9586" />
			<path d="M188.742 -206L188.742 112" stroke="currentColor" className={lineClassName} strokeWidth="6.45515" />
			<path d="M204.387 -206L204.387 112" stroke="currentColor" className={lineClassName} strokeWidth="6.9517" />
			<path d="M220.031 -206L220.031 112" stroke="currentColor" className={lineClassName} strokeWidth="7.44825" />
			<path d="M235.676 -206L235.676 112" stroke="currentColor" className={lineClassName} strokeWidth="7.9448" />
			<path d="M251.324 -206L251.324 112" stroke="currentColor" className={lineClassName} strokeWidth="8.44135" />
			<path d="M266.969 -206L266.969 112" stroke="currentColor" className={lineClassName} strokeWidth="8.93789" />
			<path d="M282.613 -206L282.613 112" stroke="currentColor" className={lineClassName} strokeWidth="9.43444" />
			<path d="M298.258 -206L298.258 112" stroke="currentColor" className={lineClassName} strokeWidth="9.93099" />
			<path d="M313.902 -206L313.902 112" stroke="currentColor" className={lineClassName} strokeWidth="10.4275" />
			<path d="M329.547 -206L329.547 112" stroke="currentColor" className={lineClassName} strokeWidth="10.9241" />
			<path d="M345.195 -206L345.195 112" stroke="currentColor" className={lineClassName} strokeWidth="11.4206" />
		</svg>
	);
}

export function ContactItemHighlightedLowerSpring({ lineClassName = "text-white" }) {
	return (
		// <svg width="204" height="248" viewBox="0 0 204 248" fill="none" xmlns="http://www.w3.org/2000/svg">
		<svg width="100%" height="100%" viewBox="0 0 204 248" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1 0L1 250" stroke="currentColor" className={lineClassName} strokeWidth="0.49655" />
			<path d="M19.582 0L19.582 250" stroke="currentColor" className={lineClassName} strokeWidth="0.9931" />
			<path d="M38.1602 0L38.1602 250" stroke="currentColor" className={lineClassName} strokeWidth="1.48965" />
			<path d="M56.7422 0L56.7422 250" stroke="currentColor" className={lineClassName} strokeWidth="1.9862" />
			<path d="M75.3242 0L75.3242 250" stroke="currentColor" className={lineClassName} strokeWidth="2.48275" />
			<path d="M93.9023 0L93.9023 250" stroke="currentColor" className={lineClassName} strokeWidth="2.9793" />
			<path d="M112.484 0L112.484 250" stroke="currentColor" className={lineClassName} strokeWidth="3.47585" />
			<path d="M131.066 0L131.066 250" stroke="currentColor" className={lineClassName} strokeWidth="3.9724" />
			<path d="M149.645 0L149.645 250" stroke="currentColor" className={lineClassName} strokeWidth="4.46895" />
			<path d="M168.227 0L168.227 250" stroke="currentColor" className={lineClassName} strokeWidth="4.9655" />
			<path d="M186.805 0L186.805 250" stroke="currentColor" className={lineClassName} strokeWidth="5.46205" />
			<path d="M205.387 0L205.387 250" stroke="currentColor" className={lineClassName} strokeWidth="5.9586" />
		</svg>
	);
}

export function ContactItemHighlightedLowerSpringHover() {
	return (
		<svg width="100%" height="100%" viewBox="0 0 113 248" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1 0L1 250" stroke="#FFFFFF" strokeWidth="0.49655" />
			<path d="M16.6445 0L16.6445 250" stroke="#FFFFFF" strokeWidth="0.9931" />
			<path d="M32.2891 0L32.2891 250" stroke="#FFFFFF" strokeWidth="1.48965" />
			<path d="M47.9336 0L47.9336 250" stroke="#FFFFFF" strokeWidth="1.9862" />
			<path d="M63.582 0L63.582 250" stroke="#FFFFFF" strokeWidth="2.48275" />
			<path d="M79.2266 0L79.2266 250" stroke="#FFFFFF" strokeWidth="2.9793" />
			<path d="M94.8711 0L94.8711 250" stroke="#FFFFFF" strokeWidth="3.47585" />
			<path d="M110.516 0L110.516 250" stroke="#FFFFFF" strokeWidth="3.9724" />
		</svg>
	);
}

export function ContactItemUpperSpring() {
	return (
		<svg width="100%" height="100%" viewBox="0 0 91 129" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1 0L1 318" stroke="#4337A8" strokeWidth="0.49655" />
			<path d="M15.7422 0L15.7422 318" stroke="#4337A8" strokeWidth="0.9931" />
			<path d="M30.4844 0L30.4844 318" stroke="#4337A8" strokeWidth="1.48965" />
			<path d="M45.2266 0L45.2266 318" stroke="#4337A8" strokeWidth="1.9862" />
			<path d="M59.9688 0L59.9688 318" stroke="#4337A8" strokeWidth="2.48275" />
			<path d="M74.7109 0L74.7109 318" stroke="#4337A8" strokeWidth="2.9793" />
			<path d="M89.4531 0L89.4531 318" stroke="#4337A8" strokeWidth="3.47585" />
		</svg>
	);
}

export function ContactItemLowerSpring() {
	return (
		<svg width="100%" height="100%" viewBox="0 0 194 55" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1 0L1 318" stroke="#4337A8" strokeWidth="0.49655" />
			<path d="M15.7422 0L15.7422 318" stroke="#4337A8" strokeWidth="0.9931" />
			<path d="M30.4844 0L30.4844 318" stroke="#4337A8" strokeWidth="1.48965" />
			<path d="M45.2266 0L45.2266 318" stroke="#4337A8" strokeWidth="1.9862" />
			<path d="M59.9688 0L59.9688 318" stroke="#4337A8" strokeWidth="2.48275" />
			<path d="M74.7109 0L74.7109 318" stroke="#4337A8" strokeWidth="2.9793" />
			<path d="M89.4531 0L89.4531 318" stroke="#4337A8" strokeWidth="3.47585" />
			<path d="M104.195 0L104.195 318" stroke="#4337A8" strokeWidth="3.9724" />
			<path d="M118.934 0L118.934 318" stroke="#4337A8" strokeWidth="4.46895" />
			<path d="M133.676 0L133.676 318" stroke="#4337A8" strokeWidth="4.9655" />
			<path d="M148.418 0L148.418 318" stroke="#4337A8" strokeWidth="5.46205" />
			<path d="M163.16 0L163.16 318" stroke="#4337A8" strokeWidth="5.9586" />
			<path d="M177.902 0L177.902 318" stroke="#4337A8" strokeWidth="6.45515" />
			<path d="M192.645 0L192.645 318" stroke="#4337A8" strokeWidth="6.9517" />
		</svg>
	);
}

export function Xlogo({ height = "32", width = "32", containerClassName = "text-lightGrey", logoClassName = "text-navy" }) {
	const colorTransitionClasses = "transition-colors duration-300 ease-in-out";

	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 32" fill="none">
			<rect width={width} height={height} rx="2" fill="currentColor" className={clsx(colorTransitionClasses, containerClassName)} />
			<path
				d="M17.1086 15.1092L21.4477 10.1699H20.4199L16.6506 14.4578L13.6424 10.1699H10.1719L14.7219 16.6545L10.1719 21.8335H11.1997L15.1776 17.3044L18.3552 21.8335H21.8257M11.5707 10.929H13.1498L20.4191 21.1117H18.8396"
				fill="currentColor"
				className={clsx(logoClassName, colorTransitionClasses)}
			/>
		</svg>
	);
}
export function LinkedinLogo({ width = "32", height = "32", containerClassName = "text-lightGrey", logoClassName = "text-navy" }) {
	const colorTransitionClasses = "transition-colors duration-300 ease-in-out";

	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 32" fill="none">
			<rect width={width} height={height} rx="2" fill="currentColor" className={clsx(colorTransitionClasses, containerClassName)} />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M10.6289 21.3754H13.1656V12.9346H10.6289V21.3754Z"
				fill="currentColor"
				className={clsx(logoClassName, colorTransitionClasses)}
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M22.4657 16.6764V21.3754H19.9823V16.9375C19.9823 15.8062 19.5818 15.1101 18.7006 15.1101C18.1302 15.104 17.6176 15.4869 17.4189 16.0673C17.3476 16.29 17.3204 16.5276 17.3388 16.7634V21.3754H14.8555V13.1956H17.3388V14.3269C17.805 13.4619 18.6598 12.932 19.5818 12.9346C21.1839 12.9346 22.4657 14.1529 22.4657 16.6764Z"
				fill="currentColor"
				className={clsx(logoClassName, colorTransitionClasses)}
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M11.9331 9.56328C11.2817 9.49163 10.7006 10.0082 10.6347 10.7153C10.6311 10.7515 10.6296 10.7869 10.6289 10.8231C10.6296 11.5216 11.1513 12.0861 11.7932 12.0846C11.8157 12.0846 11.8382 12.0846 11.8606 12.083C12.512 12.1538 13.0931 11.6389 13.159 10.931C13.1619 10.8948 13.1641 10.8594 13.1648 10.8231C13.188 10.1491 12.704 9.58375 12.0845 9.55777C12.0338 9.55619 11.9831 9.55777 11.9331 9.56328Z"
				fill="currentColor"
				className={clsx(logoClassName, colorTransitionClasses)}
			/>
		</svg>
	);
}

export function FacebookLogo({ width = "32", height = "32", containerClassName = "text-lightGrey", logoClassName = "text-navy" }) {
	const colorTransitionClasses = "transition-colors duration-300 ease-in-out";

	return (
		<svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width={width} height={height} rx="2" fill="currentColor" className={clsx(colorTransitionClasses, containerClassName)} />
			<g clipPath="url(#clip0_807_19270)">
				<path
					d="M13.3525 16.2486H14.5802V21.6639C14.5802 21.7708 14.6611 21.8574 14.7609 21.8574H16.8425C16.9423 21.8574 17.0231 21.7708 17.0231 21.6639V16.2741H18.4345C18.5262 16.2741 18.6034 16.2004 18.6139 16.1027L18.8283 14.1091C18.8342 14.0542 18.8179 13.9993 18.7837 13.9581C18.7494 13.9169 18.7003 13.8934 18.6489 13.8934H17.0232V12.6437C17.0232 12.2669 17.2125 12.0759 17.5859 12.0759C17.6392 12.0759 18.6489 12.0759 18.6489 12.0759C18.7486 12.0759 18.8295 11.9892 18.8295 11.8824V10.0524C18.8295 9.94549 18.7486 9.85885 18.6489 9.85885H17.184C17.1737 9.85831 17.1507 9.85742 17.1169 9.85742C16.8627 9.85742 15.9793 9.91088 15.2814 10.5988C14.5082 11.361 14.6157 12.2737 14.6414 12.432V13.8933H13.3525C13.2527 13.8933 13.1719 13.98 13.1719 14.0869V16.055C13.1719 16.162 13.2527 16.2486 13.3525 16.2486Z"
					fill="currentColor"
					className={clsx(logoClassName, colorTransitionClasses)}
				/>
			</g>
			<defs>
				<clipPath id="clip0_807_19270">
					<rect width="11.2" height="12" fill="white" transform="translate(10.4004 9.85742)" />
				</clipPath>
			</defs>
		</svg>
	);
}

export function YoutubeLogo() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
			<rect width="32" height="32" rx="2" fill="#F6F7F9" />
			<path
				d="M21.1861 9.3418H10.8137C8.77864 9.3418 7.12891 11.0915 7.12891 13.2499V18.7492C7.12891 20.9076 8.77864 22.6573 10.8137 22.6573H21.1861C23.2212 22.6573 24.8709 20.9076 24.8709 18.7492V13.2499C24.8709 11.0915 23.2212 9.3418 21.1861 9.3418ZM18.6941 16.2671L13.8426 18.7212C13.7133 18.7866 13.564 18.6866 13.564 18.5348V13.4732C13.564 13.3191 13.7173 13.2193 13.8468 13.2889L18.6983 15.8964C18.8426 15.9739 18.8401 16.1933 18.6941 16.2671Z"
				fill="#0D1226"
			/>
		</svg>
	);
}

export function UlItemBulletOrange() {
	return (
		<svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_1367_47698)">
				<rect y="0.700012" width="1" height="12" fill="#FA5D00" />
				<rect x="3" y="0.700012" width="2" height="12" fill="#FA5D00" />
				<rect x="7" y="0.700012" width="3" height="12" fill="#FA5D00" />
				<rect x="12" y="0.700012" width="4" height="12" fill="#FA5D00" />
			</g>
			<defs>
				<clipPath id="clip0_1367_47698">
					<rect width="16" height="12" fill="white" transform="translate(0 0.700012)" />
				</clipPath>
			</defs>
		</svg>
	);
}

export function SearchIcon() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
			<g opacity="0.6" clipPath="url(#clip0_736_20885)">
				<path
					d="M7.5 12C10.2614 12 12.5 9.76142 12.5 7C12.5 4.23858 10.2614 2 7.5 2C4.73858 2 2.5 4.23858 2.5 7C2.5 9.76142 4.73858 12 7.5 12Z"
					stroke="#0D1226"
					strokeWidth="1.2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path d="M11.0352 10.5352L14.4995 13.9995" stroke="#0D1226" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
			</g>
			<defs>
				<clipPath id="clip0_736_20885">
					<rect width="16" height="16" fill="white" transform="translate(0.5)" />
				</clipPath>
			</defs>
		</svg>
	);
}

export function InputCloseIcon() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
			<path d="M12.9746 13.1748L0.599609 0.799805" stroke="#0D1226" strokeWidth="1.2" />
		</svg>
	);
}

export function PlayArrow() {
	return (
		<svg width="100%" height="100%" viewBox="0 0 21 27" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M21 13.125C14.2917 17.5 0.7 26.25 0 26.25V0L21 13.125Z" fill="white" />
		</svg>
	);
}

export function ChevronDown({ width = "20", height = null }) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20" fill="none">
			<path d="M9.99857 10.9761L14.1234 6.85132L15.3019 8.02983L9.99857 13.3332L4.69531 8.02983L5.87382 6.85132L9.99857 10.9761Z" fill="#0D1226" />
		</svg>
	);
}

export function NavLeftIcon({ className = "", circleClassName = "text-white", arrowClassName = "text-navy" }) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<LazyMotion features={domAnimation}>
			<svg
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				className={clsx(className, "group")}
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="33"
				viewBox="0 0 32 33"
				fill="none"
			>
				{isHovered ? (
					<m.rect
						transform="rotate(90 32 0.5)"
						x="32"
						y="0.5"
						width="32"
						height="32"
						rx="16"
						fill="currentColor"
						className={clsx(circleClassName, "opacity-50 group-hover:opacity-100", "transition-[colors, opacity] duration-300 ease-in-out")}
					/>
				) : (
					<rect
						x="-0.5"
						y="0.5"
						width="31"
						height="31"
						rx="15.5"
						transform="matrix(-1 8.74228e-08 8.74228e-08 1 31 0.5)"
						stroke="#0D1226"
						strokeOpacity="0.1"
					/>
				)}

				<m.path
					d="M15.9684 11.5L11.0016 16.4668M11.0016 16.4668L15.9684 21.4337M11.0016 16.4668L21.5195 16.4668"
					stroke="currentColor"
					className={clsx(arrowClassName, "transtion-colors duration-300 ease-in-out")}
					strokeWidth="1.38462"
					strokeLinejoin="round"
				/>
			</svg>
		</LazyMotion>
	);
}

export function GeniusFaviconIcon() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 18 18" fill="none">
			<g clipPath="url(#clip0_4429_25758)">
				<path
					d="M37.4037 5.41063C37.2907 5.28652 37.2219 5.12829 37.2081 4.96073C37.1944 4.79318 37.2365 4.62579 37.3278 4.4848C37.4185 4.34056 37.5554 4.23153 37.716 4.17558C37.8766 4.11962 38.0514 4.12008 38.2117 4.17686C38.3656 4.25166 38.4905 4.37549 38.5668 4.52902C38.6432 4.68254 38.6667 4.85711 38.6337 5.02545C38.5962 5.19096 38.5033 5.33858 38.3705 5.44372C38.2376 5.54885 38.0729 5.60514 37.9037 5.60322C37.7497 5.64234 37.5577 5.52598 37.4037 5.41063ZM26.0275 7.18405H23.2987L21.9918 8.49406H24.6816C24.5388 8.93745 24.2544 9.32128 23.8723 9.58619C23.4902 9.8511 23.0317 9.98232 22.5677 9.95954C22.1042 9.94407 21.6583 9.77761 21.2975 9.48533C20.9367 9.19306 20.6806 8.79087 20.5679 8.33959C20.4563 7.88731 20.4979 7.41067 20.686 6.98467C20.874 6.55868 21.198 6.2075 21.6068 5.98639C22.0107 5.76312 22.4755 5.6763 22.9325 5.73881C23.3894 5.80133 23.8141 6.00984 24.1436 6.33345L25.0666 5.40863C24.4786 4.8236 23.7003 4.47043 22.8741 4.4137C22.0478 4.35697 21.2288 4.60048 20.5669 5.09968C19.9006 5.58879 19.4326 6.30266 19.2489 7.11014C19.0652 7.91762 19.1781 8.76447 19.5669 9.49512C19.9554 10.2244 20.5924 10.7893 21.3615 11.0866C22.1306 11.384 22.9807 11.3941 23.7567 11.1151C25.4095 10.5363 26.3705 8.84012 26.0245 7.18205M30.9442 13.39C30.9442 13.9297 30.5212 14.3149 29.9442 14.3149H28.9833V15.5878H28.5223V12.4662H29.9442C30.5212 12.4281 30.9442 12.8133 30.9442 13.392M30.4442 13.392C30.4442 13.0831 30.2142 12.8524 29.8682 12.8524H28.9453V13.8926H29.8682C30.2142 13.8926 30.4442 13.7 30.4442 13.391M37.2858 11.1933H38.5927V6.18701H37.2858V11.1933ZM9.41961 7.7227L6.91977 10.2304H11.3015C11.0761 10.6311 10.7536 10.9682 10.3638 11.2107C9.97406 11.4532 9.52962 11.5932 9.07163 11.6176C8.61265 11.6361 8.15705 11.5316 7.75175 11.3147C7.34645 11.0979 7.00611 10.7765 6.76579 10.3838L4.88291 12.2736C5.49237 13.0335 6.30008 13.6088 7.21615 13.9356C8.13221 14.2623 9.12069 14.3276 10.0716 14.1243C11.0222 13.9095 11.8955 13.436 12.5953 12.7558C13.2951 12.0755 13.7944 11.2149 14.0383 10.2685H14.5763C14.2965 11.4937 13.6293 12.5952 12.6741 13.4087C11.719 14.2223 10.5272 14.7041 9.27662 14.7823C8.02284 14.8576 6.77916 14.5172 5.73727 13.8136C4.69537 13.1099 3.91309 12.082 3.511 10.8884C3.10464 9.69468 3.09882 8.40038 3.4944 7.20304C3.88998 6.0057 4.66524 4.97108 5.70185 4.2571C6.73583 3.54484 7.97136 3.18637 9.22472 3.23498C10.4781 3.2836 11.6823 3.7367 12.6584 4.52693L14.3883 2.75351C11.4675 0.208725 7.12376 0.0161356 4.01096 2.36733C2.50462 3.50087 1.43115 5.11813 0.96951 6.94947C0.507876 8.7808 0.685979 10.7155 1.47413 12.4311C2.2574 14.1507 3.6025 15.5506 5.28684 16.3989C6.97118 17.2473 8.8938 17.4934 10.7365 17.0964C14.5423 16.2869 17.2361 12.8935 17.2361 8.99961C17.2361 8.57531 17.1981 8.15101 17.1591 7.72671L9.41961 7.7227ZM26.7185 13.7762L26.2185 13.699C25.8335 13.6217 25.6805 13.5064 25.6805 13.2747C25.6805 13.0049 25.9495 12.8123 26.3725 12.8123C26.741 12.8164 27.0958 12.9531 27.3724 13.1974L27.6414 12.8514C27.2764 12.5746 26.831 12.4255 26.3735 12.4271C25.6815 12.4271 25.2206 12.7741 25.2206 13.3138C25.2206 13.7762 25.4895 14.046 26.0655 14.1233L26.5655 14.2005C27.0264 14.2777 27.1804 14.4322 27.1804 14.702C27.1804 15.01 26.8724 15.2036 26.4115 15.2036C26.2068 15.2021 26.0048 15.1566 25.8192 15.07C25.6336 14.9835 25.4687 14.858 25.3355 14.702L25.0666 15.0481C25.4233 15.4083 25.9054 15.6158 26.4115 15.6269C27.1414 15.6269 27.6414 15.2417 27.6414 14.6629C27.6804 14.1614 27.3724 13.8916 26.7195 13.7762M8.96164 6.33446C9.466 6.33858 9.95894 6.48567 10.3835 6.75875L12.2284 4.9081C11.3807 4.21808 10.3379 3.81323 9.24799 3.75094C8.15805 3.68864 7.07621 3.97207 6.15582 4.56103C5.23553 5.1504 4.52208 6.01379 4.11541 7.03024C3.70873 8.0467 3.62921 9.1653 3.88797 10.2294H6.65579C6.43504 9.8265 6.32248 9.37298 6.32914 8.91332C6.3358 8.45365 6.46146 8.00361 6.69379 7.60735C6.93663 7.22289 7.27115 6.90519 7.6671 6.68295C8.06305 6.46071 8.50796 6.34094 8.96164 6.33446ZM42.8234 13.7762L42.3234 13.699C41.9384 13.6217 41.7845 13.5064 41.7845 13.2747C41.7845 13.0049 42.0534 12.8123 42.4764 12.8123C42.8449 12.8165 43.1997 12.9532 43.4763 13.1974L43.7453 12.8514C43.3801 12.5744 42.9343 12.4253 42.4764 12.4271C41.7845 12.4271 41.3235 12.7741 41.3235 13.3138C41.3235 13.7762 41.5925 14.046 42.1694 14.1233L42.6694 14.2005C43.1304 14.2777 43.2844 14.4322 43.2844 14.702C43.2844 15.01 42.9764 15.2036 42.5154 15.2036C42.3106 15.202 42.1085 15.1564 41.9228 15.0699C41.737 14.9834 41.5719 14.8579 41.4385 14.702L41.1695 15.0481C41.5267 15.4083 42.009 15.6157 42.5154 15.6269C43.2454 15.6269 43.7453 15.2417 43.7453 14.6629C43.7453 14.1614 43.4763 13.8916 42.8224 13.7762M38.2107 12.8514H39.2866V15.5496H39.7476V12.8514H40.8235V12.4271H38.2107V12.8514ZM42.6694 9.68972C42.5469 9.83718 42.4046 9.96681 42.2464 10.0749C42.051 10.1536 41.842 10.1928 41.6315 10.1902C41.3513 10.195 41.0786 10.0993 40.8625 9.92042C40.7637 9.81974 40.6883 9.69836 40.6418 9.56499C40.5953 9.43163 40.5788 9.28958 40.5935 9.14906V6.25923H39.2866V9.34366C39.283 9.86965 39.4748 10.3781 39.8246 10.77C40.0112 10.9566 40.2331 11.1039 40.4773 11.2031C40.7215 11.3024 40.983 11.3516 41.2465 11.3478C41.5073 11.3502 41.7668 11.3112 42.0154 11.2324C42.2604 11.1571 42.4844 11.0251 42.6694 10.8473V11.2324H43.9753V6.2171H42.6694V9.68972ZM30.2922 9.80507L31.1382 10.5764C30.5744 11.0423 29.8687 11.3007 29.1383 11.3087C28.7839 11.3041 28.4329 11.239 28.1004 11.1161C27.7848 10.9963 27.4972 10.8126 27.2554 10.5764C27.0207 10.3394 26.8258 10.0656 26.6785 9.76595C26.5371 9.45125 26.4714 9.1077 26.4865 8.76288C26.4908 8.41976 26.5558 8.08014 26.6785 7.75981C26.7985 7.45447 26.9819 7.17821 27.2164 6.94934C27.4444 6.71429 27.7194 6.53037 28.0234 6.40969C28.3374 6.26882 28.6796 6.20289 29.0233 6.2171C29.3527 6.22162 29.6784 6.2869 29.9842 6.40969C30.2921 6.52182 30.5598 6.72329 30.7532 6.98846C30.9777 7.23273 31.1481 7.52194 31.2532 7.83705C31.3764 8.18365 31.4413 8.54839 31.4451 8.91635V9.26341H27.7174C27.7997 9.56659 27.9745 9.83633 28.2174 10.0348C28.4679 10.2326 28.7834 10.3289 29.1013 10.3046C29.3116 10.3034 29.52 10.264 29.7163 10.1882C29.9172 10.0739 30.1097 9.94517 30.2922 9.80306M27.7554 8.22223H30.1772C30.099 7.93784 29.9386 7.68305 29.7163 7.48999C29.5243 7.2964 29.2163 7.21916 28.9473 7.21916C28.6783 7.21916 28.3703 7.2964 28.1784 7.48999C27.9718 7.68955 27.8253 7.94325 27.7554 8.22223ZM48.396 8.72376C48.0829 8.45436 47.6924 8.29204 47.2811 8.26034L46.3202 8.10688C46.1282 8.10688 45.9742 8.02964 45.7822 7.9524C45.7322 7.91852 45.6918 7.87229 45.6648 7.81818C45.6379 7.76406 45.6252 7.70389 45.6282 7.64346C45.6276 7.56905 45.6493 7.49617 45.6905 7.43428C45.7317 7.37239 45.7904 7.32435 45.8592 7.2964C46.0299 7.18583 46.2362 7.14458 46.4361 7.18105C46.6964 7.18152 46.9551 7.22038 47.2041 7.2964C47.4764 7.3726 47.7356 7.4896 47.973 7.64346L48.588 6.79587C48.2737 6.60299 47.9382 6.44747 47.5881 6.33245C47.2401 6.22531 46.877 6.17617 46.5131 6.18701C45.8982 6.18701 45.3602 6.34047 45.0132 6.6113C44.8305 6.74124 44.6823 6.91418 44.5817 7.11495C44.4811 7.31572 44.4312 7.53818 44.4363 7.76282C44.4363 8.10989 44.5513 8.49506 44.8202 8.72677C45.1337 8.99607 45.5246 9.15805 45.9362 9.18919L46.8971 9.34366C47.0615 9.35342 47.2205 9.40634 47.3581 9.49713C47.408 9.53108 47.4483 9.57732 47.4753 9.63142C47.5023 9.68552 47.5149 9.74566 47.5121 9.80607C47.5054 9.88845 47.4769 9.96755 47.4296 10.0352C47.3824 10.1029 47.318 10.1568 47.2431 10.1913C47.0281 10.2975 46.7908 10.3504 46.5511 10.3457C46.2864 10.3545 46.0232 10.3017 45.7822 10.1913C45.489 10.0735 45.206 9.93162 44.9362 9.76695L44.2833 10.6547C44.5784 10.8895 44.9189 11.0603 45.2832 11.1562C45.6957 11.277 46.1225 11.3418 46.5521 11.3488C46.8505 11.3481 47.1476 11.309 47.4361 11.2324C47.6843 11.1561 47.9182 11.0388 48.128 10.8854C48.3209 10.7433 48.4786 10.5587 48.589 10.3457C48.6981 10.1453 48.7272 9.95305 48.743 9.69072C48.7555 9.48347 48.7645 9.33038 48.7035 9.16053C48.6425 8.99069 48.5366 8.84073 48.397 8.72677M34.5979 14.0089C34.5975 14.3306 34.5024 14.6451 34.3245 14.9127C34.1466 15.1804 33.8939 15.3894 33.598 15.5135C33.3029 15.6418 32.976 15.6774 32.6603 15.6154C32.3447 15.5534 32.0552 15.3969 31.8301 15.1665C31.6004 14.9407 31.4444 14.6503 31.3826 14.3336C31.3208 14.017 31.3562 13.6891 31.4841 13.393C31.6037 13.0933 31.811 12.8369 32.0788 12.6578C32.3466 12.4787 32.6622 12.3854 32.984 12.39C33.4142 12.3849 33.8288 12.5512 34.137 12.8524C34.2859 13.0056 34.4033 13.1869 34.4824 13.3856C34.5615 13.5844 34.6007 13.7969 34.5979 14.0109M34.137 14.0109C34.137 13.394 33.599 12.8925 32.984 12.8925C32.3691 12.8925 31.8691 13.4322 31.8691 14.049C31.8704 14.1988 31.9014 14.3468 31.9602 14.4844C32.0191 14.622 32.1047 14.7465 32.212 14.8506C32.3193 14.9547 32.4462 15.0363 32.5853 15.0907C32.7243 15.1451 32.8728 15.1712 33.022 15.1675C33.1737 15.1716 33.3245 15.1427 33.464 15.0828C33.6034 15.0229 33.7283 14.9334 33.83 14.8204C34.0316 14.5998 34.1415 14.3102 34.137 14.0109ZM35.2899 11.1963H36.5968V8.07077C36.6358 7.53112 36.4048 7.02958 36.0588 6.6444C35.8723 6.45764 35.6504 6.31022 35.4062 6.21082C35.162 6.11142 34.9004 6.06205 34.6369 6.06563C34.3763 6.06645 34.1172 6.10565 33.868 6.18199C33.6319 6.25876 33.4109 6.3762 33.215 6.52905V6.14287H31.9081V11.1582H33.215V7.68559C33.337 7.53735 33.4794 7.40731 33.638 7.29941C33.8208 7.22417 34.0164 7.18501 34.214 7.18405C34.4941 7.17931 34.7668 7.27498 34.9829 7.45388C35.0842 7.55278 35.1612 7.67394 35.2079 7.80779C35.2546 7.94165 35.2696 8.08455 35.2519 8.22524V11.1943L35.2899 11.1963ZM37.0588 14.2055L37.7497 15.5547H37.2498L36.5958 14.2828H35.7119V15.5547H35.2509V12.4281H36.6728C37.2878 12.4281 37.7107 12.8133 37.7107 13.3529C37.718 13.5486 37.6566 13.7407 37.5373 13.8957C37.418 14.0508 37.2483 14.159 37.0578 14.2015M36.6348 13.8926C36.9808 13.8926 37.2498 13.7 37.2498 13.391C37.2498 13.0821 37.0188 12.8895 36.6348 12.8895H35.7119V13.9307H36.6368L36.6348 13.8926Z"
					fill="white"
				/>
			</g>
			<defs>
				<clipPath id="clip0_4429_25758">
					<rect width="16.5634" height="16.5634" fill="currentColor" transform="translate(0.718262 0.71814)" />
				</clipPath>
			</defs>
		</svg>
	);
}

export function StockArrow() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 7 9" fill="none">
			<path d="M2.74146 8.22998L2.74145 1.92578L3.65843 1.92578L3.65843 8.22998L2.74146 8.22998Z" fill="currentColor" />
			<path d="M6.4 3.96963L5.73108 4.63855L3.2 2.10701L0.668922 4.63855L-2.92395e-08 3.96963L3.20001 0.770075L6.4 3.96963Z" fill="currentColor" />
		</svg>
	);
}

export function ContactSalesFormLines({ height = null, width = null }) {
	return (
		<svg width={width} height={height} viewBox="0 0 772 719" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M718 719L718 203" stroke="#95ECFD" strokeWidth="0.464655" />
			<path d="M695.098 719L695.098 203" stroke="#95ECFD" strokeWidth="0.92931" />
			<path d="M672.195 719L672.195 203" stroke="#95ECFD" strokeWidth="1.39397" />
			<path d="M649.289 719L649.289 203" stroke="#95ECFD" strokeWidth="1.85862" />
			<path d="M626.387 719L626.387 203" stroke="#95ECFD" strokeWidth="2.32328" />
			<path d="M603.484 719L603.484 203" stroke="#95ECFD" strokeWidth="2.78793" />
			<path d="M580.582 719L580.582 203" stroke="#95ECFD" strokeWidth="3.25259" />
			<path d="M557.676 719L557.676 203" stroke="#95ECFD" strokeWidth="3.71724" />
			<path d="M534.773 719L534.774 203" stroke="#95ECFD" strokeWidth="4.1819" />
			<path d="M511.871 719L511.871 203" stroke="#95ECFD" strokeWidth="4.64655" />
			<path d="M488.969 719L488.969 203" stroke="#95ECFD" strokeWidth="5.11121" />
			<path d="M466.066 719L466.067 203" stroke="#95ECFD" strokeWidth="5.57586" />
			<path d="M443.16 719L443.16 203" stroke="#95ECFD" strokeWidth="6.04052" />
			<path d="M420.258 719L420.258 203" stroke="#95ECFD" strokeWidth="6.50517" />
			<path d="M397.355 719L397.356 203" stroke="#95ECFD" strokeWidth="6.96983" />
			<path d="M374.453 719L374.453 203" stroke="#95ECFD" strokeWidth="7.43448" />
			<path d="M351.547 719L351.547 203" stroke="#95ECFD" strokeWidth="7.89914" />
			<path d="M328.645 719L328.645 203" stroke="#95ECFD" strokeWidth="8.36379" />
			<path d="M305.742 719L305.742 203" stroke="#95ECFD" strokeWidth="8.82845" />
			<path d="M282.84 719L282.84 203" stroke="#95ECFD" strokeWidth="9.2931" />
			<path d="M259.934 719L259.934 203" stroke="#95ECFD" strokeWidth="9.75776" />
			<path d="M237.031 719L237.031 203" stroke="#95ECFD" strokeWidth="10.2224" />
			<path d="M214.129 719L214.129 203" stroke="#95ECFD" strokeWidth="10.6871" />
			<path d="M191.227 719L191.227 203" stroke="#95ECFD" strokeWidth="11.1517" />
			<path d="M168.324 719L168.324 203" stroke="#95ECFD" strokeWidth="11.6164" />
			<path d="M145.418 719L145.418 203" stroke="#95ECFD" strokeWidth="12.081" />
			<path d="M122.516 719L122.516 203" stroke="#95ECFD" strokeWidth="12.5457" />
			<path d="M99.6133 719L99.6134 203" stroke="#95ECFD" strokeWidth="13.0103" />
			<path d="M76.7109 719L76.7111 203" stroke="#95ECFD" strokeWidth="13.475" />
			<path d="M53.8047 719L53.8048 203" stroke="#95ECFD" strokeWidth="13.9397" />
			<path d="M30.9023 719L30.9025 203" stroke="#95ECFD" strokeWidth="14.4043" />
			<path d="M8 719L8.00011 203" stroke="#95ECFD" strokeWidth="14.869" />
			<path d="M54 447L53.9999 0.000369608" stroke="#95ECFD" strokeWidth="0.464655" />
			<path d="M76.9023 447L76.9022 0.000369608" stroke="#95ECFD" strokeWidth="0.92931" />
			<path d="M99.8047 447L99.8046 0.000369608" stroke="#95ECFD" strokeWidth="1.39397" />
			<path d="M122.711 447L122.711 0.000369608" stroke="#95ECFD" strokeWidth="1.85862" />
			<path d="M145.613 447L145.613 0.000369608" stroke="#95ECFD" strokeWidth="2.32328" />
			<path d="M168.516 447L168.516 0.000369608" stroke="#95ECFD" strokeWidth="2.78793" />
			<path d="M191.418 447L191.418 0.000247538" stroke="#95ECFD" strokeWidth="3.25259" />
			<path d="M214.324 447L214.324 0.000247538" stroke="#95ECFD" strokeWidth="3.71724" />
			<path d="M237.227 447L237.226 0.000247538" stroke="#95ECFD" strokeWidth="4.1819" />
			<path d="M260.129 447L260.129 0.000247538" stroke="#95ECFD" strokeWidth="4.64655" />
			<path d="M283.031 447L283.031 0.000247538" stroke="#95ECFD" strokeWidth="5.11121" />
			<path d="M305.934 447L305.933 0.000247538" stroke="#95ECFD" strokeWidth="5.57586" />
			<path d="M328.84 447L328.84 0.000247538" stroke="#95ECFD" strokeWidth="6.04052" />
			<path d="M351.742 447L351.742 0.000247538" stroke="#95ECFD" strokeWidth="6.50517" />
			<path d="M374.645 447L374.644 0.000247538" stroke="#95ECFD" strokeWidth="6.96983" />
			<path d="M397.547 447L397.547 0.000247538" stroke="#95ECFD" strokeWidth="7.43448" />
			<path d="M420.453 447L420.453 0.000125468" stroke="#95ECFD" strokeWidth="7.89914" />
			<path d="M443.355 447L443.355 0.000125468" stroke="#95ECFD" strokeWidth="8.36379" />
			<path d="M466.258 447L466.258 0.000125468" stroke="#95ECFD" strokeWidth="8.82845" />
			<path d="M489.16 447L489.16 0.000125468" stroke="#95ECFD" strokeWidth="9.2931" />
			<path d="M512.066 447L512.066 0.000125468" stroke="#95ECFD" strokeWidth="9.75776" />
			<path d="M534.969 447L534.969 0.000125468" stroke="#95ECFD" strokeWidth="10.2224" />
			<path d="M557.871 447L557.871 0.000125468" stroke="#95ECFD" strokeWidth="10.6871" />
			<path d="M580.773 447L580.773 0.000125468" stroke="#95ECFD" strokeWidth="11.1517" />
			<path d="M603.676 447L603.676 0.000125468" stroke="#95ECFD" strokeWidth="11.6164" />
			<path d="M626.582 447L626.582 0.000125468" stroke="#95ECFD" strokeWidth="12.081" />
			<path d="M649.484 447L649.484 3.39746e-06" stroke="#95ECFD" strokeWidth="12.5457" />
			<path d="M672.387 447L672.387 3.39746e-06" stroke="#95ECFD" strokeWidth="13.0103" />
			<path d="M695.289 447L695.289 3.39746e-06" stroke="#95ECFD" strokeWidth="13.475" />
			<path d="M718.195 447L718.195 3.39746e-06" stroke="#95ECFD" strokeWidth="13.9397" />
			<path d="M741.098 447L741.098 3.39746e-06" stroke="#95ECFD" strokeWidth="14.4043" />
			<path d="M764 447L764 3.39746e-06" stroke="#95ECFD" strokeWidth="14.869" />
		</svg>
	);
}
