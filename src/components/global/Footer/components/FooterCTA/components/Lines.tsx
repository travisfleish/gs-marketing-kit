import { LazyMotion, domAnimation, m } from "framer-motion";

export function FooterCTALinesDesktop({ height = null, width = null, isInView = false }) {
	return (
		<LazyMotion features={domAnimation}>
			<svg
				style={{
					transformBox: "fill-box",
				}}
				width={width}
				height={height}
				viewBox="0 0 508 501"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				{/* Top lines */}
				<g clipPath="url(#clip0_3855_28126)">
					<m.g
						style={{
							transformBox: "fill-box",
						}}
						initial={{ scaleX: 0 }}
						animate={{
							rotateY: 360,
							scaleX: isInView ? 1 : 0,
							transition: {
								duration: 0.6,
								ease: "easeInOut",
							},
							transformOrigin: "right",
						}}
					>
						<path d="M157.677 0.5V250.5" stroke="white" strokeWidth="0.5" />
						<path d="M176.387 0.5V250.5" stroke="white" />
						<path d="M195.097 0.5V250.5" stroke="white" strokeWidth="1.5" />
						<path d="M213.806 0.5V250.5" stroke="white" strokeWidth="2" />
						<path d="M232.516 0.5V250.5" stroke="white" strokeWidth="2.5" />
						<path d="M251.226 0.5V250.5" stroke="white" strokeWidth="3" />
						<path d="M269.935 0.5V250.5" stroke="white" strokeWidth="3.5" />
						<path d="M288.645 0.5V250.5" stroke="white" strokeWidth="4" />
						<path d="M307.355 0.5V250.5" stroke="white" strokeWidth="4.5" />
						<path d="M326.064 0.5V250.5" stroke="white" strokeWidth="5" />
						<path d="M344.774 0.5V250.5" stroke="white" strokeWidth="5.5" />
						<path d="M363.484 0.5V250.5" stroke="white" strokeWidth="6" />
						<path d="M382.193 0.5V250.5" stroke="white" strokeWidth="6.5" />
						<path d="M400.903 0.5V250.5" stroke="white" strokeWidth="7" />
						<path d="M419.613 0.5V250.5" stroke="white" strokeWidth="7.5" />
						<path d="M438.322 0.5V250.5" stroke="white" strokeWidth="8" />
						<path d="M457.032 0.5V250.5" stroke="white" strokeWidth="8.5" />
						<path d="M475.742 0.5V250.5" stroke="white" strokeWidth="9" />
						<path d="M494.451 0.5V250.5" stroke="white" strokeWidth="9.5" />
					</m.g>

					{/* Bottom lines */}
					<m.g
						style={{
							transformBox: "fill-box",
						}}
						initial={{ scaleX: 0 }}
						animate={{
							scaleX: isInView ? 1 : 0,
							transition: {
								duration: 0.6,
								ease: "easeInOut",
							},
							transformOrigin: "left",
						}}
					>
						<path d="M494.452 250.5V500.5" stroke="white" strokeWidth="3" />
						<path d="M475.742 250.5V500.5" stroke="white" strokeWidth="3.5" />
						<path d="M457.032 250.5V500.5" stroke="white" strokeWidth="4" />
						<path d="M438.323 250.5V500.5" stroke="white" strokeWidth="4.5" />
						<path d="M419.613 250.5V500.5" stroke="white" strokeWidth="5" />
						<path d="M400.903 250.5V500.5" stroke="white" strokeWidth="5.5" />
						<path d="M382.194 250.5V500.5" stroke="white" strokeWidth="6" />
						<path d="M363.484 250.5V500.5" stroke="white" strokeWidth="6.5" />
						<path d="M344.774 250.5V500.5" stroke="white" strokeWidth="7" />
						<path d="M326.064 250.5V500.5" stroke="white" strokeWidth="7.5" />
						<path d="M307.355 250.5V500.5" stroke="white" strokeWidth="8" />
						<path d="M288.645 250.5V500.5" stroke="white" strokeWidth="8.5" />
						<path d="M269.936 250.5V500.5" stroke="white" strokeWidth="9" />
						<path d="M251.226 250.5V500.5" stroke="white" strokeWidth="9.5" />
						<path d="M232.516 250.5V500.5" stroke="white" strokeWidth="10" />
						<path d="M213.806 250.5V500.5" stroke="white" strokeWidth="10.5" />
						<path d="M195.097 250.5V500.5" stroke="white" strokeWidth="11" />
						<path d="M176.387 250.5V500.5" stroke="white" strokeWidth="11.5" />
						<path d="M157.677 250.5V500.5" stroke="white" strokeWidth="12" />
						<path d="M138.968 250.5V500.5" stroke="white" strokeWidth="12.5" />
						<path d="M120.258 250.5V500.5" stroke="white" strokeWidth="13" />
						<path d="M101.548 250.5V500.5" stroke="white" strokeWidth="13.5" />
						<path d="M82.8386 250.5V500.5" stroke="white" strokeWidth="14" />
						<path d="M64.1289 250.5V500.5" stroke="white" strokeWidth="14.5" />
						<path d="M45.4194 250.5V500.5" stroke="white" strokeWidth="15" />
						<path d="M26.7097 250.5V500.5" stroke="white" strokeWidth="15.5" />
						<path d="M8 250.5V500.5" stroke="white" strokeWidth="16" />
					</m.g>
				</g>
				<defs>
					<clipPath id="clip0_3855_28126">
						<rect width="508" height="501" fill="white" />
					</clipPath>
				</defs>
			</svg>
		</LazyMotion>
	);
}

export function FooterCTALinesMobile({ width = null, height = null, isInView = false }) {
	return (
		<LazyMotion features={domAnimation}>
			<svg width={width} height={height} viewBox="0 0 375 182" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g clipPath="url(#clip0_3855_28194)">
					{/* Bottom lines */}
					<m.g
						style={{
							transformBox: "fill-box",
						}}
						initial={{ scaleX: 0 }}
						animate={{
							scaleX: isInView ? 1 : 0,
							transition: {
								duration: 0.6,
								ease: "easeInOut",
							},
							transformOrigin: "left",
						}}
					>
						<path d="M367.371 137.118V273.118" stroke="white" strokeWidth="1.875" />
						<path d="M353.339 137.118V273.118" stroke="white" strokeWidth="2.25" />
						<path d="M339.306 137.118V273.118" stroke="white" strokeWidth="2.625" />
						<path d="M325.274 137.118V273.118" stroke="white" strokeWidth="3" />
						<path d="M311.242 137.118V273.118" stroke="white" strokeWidth="3.375" />
						<path d="M297.21 137.118V273.118" stroke="white" strokeWidth="3.75" />
						<path d="M283.177 137.118V273.118" stroke="white" strokeWidth="4.125" />
						<path d="M269.145 137.118V273.118" stroke="white" strokeWidth="4.5" />
						<path d="M255.113 137.118V273.118" stroke="white" strokeWidth="4.875" />
						<path d="M241.081 137.118V273.118" stroke="white" strokeWidth="5.25" />
						<path d="M227.048 137.118V273.118" stroke="white" strokeWidth="5.625" />
						<path d="M213.016 137.118V273.118" stroke="white" strokeWidth="6" />
						<path d="M198.984 137.118V273.118" stroke="white" strokeWidth="6.375" />
						<path d="M184.952 137.118V273.118" stroke="white" strokeWidth="6.75" />
						<path d="M170.919 137.118V273.118" stroke="white" strokeWidth="7.125" />
						<path d="M156.887 137.118V273.118" stroke="white" strokeWidth="7.5" />
						<path d="M142.855 137.118V273.118" stroke="white" strokeWidth="7.875" />
						<path d="M128.823 137.118V273.118" stroke="white" strokeWidth="8.25" />
						<path d="M114.79 137.118V273.118" stroke="white" strokeWidth="8.625" />
						<path d="M100.758 137.118V273.118" stroke="white" strokeWidth="9" />
						<path d="M86.7258 137.118V273.118" stroke="white" strokeWidth="9.375" />
						<path d="M72.6936 137.118V273.118" stroke="white" strokeWidth="9.75" />
						<path d="M58.6613 137.118V273.118" stroke="white" strokeWidth="10.125" />
						<path d="M44.629 137.118V273.118" stroke="white" strokeWidth="10.5" />
						<path d="M30.5968 137.118V273.118" stroke="white" strokeWidth="10.875" />
						<path d="M16.5645 137.118V273.118" stroke="white" strokeWidth="11.25" />
						<path d="M2.53223 137.118V273.118" stroke="white" strokeWidth="11.625" />
					</m.g>
					{/* Top Lines */}
					<m.g
						style={{
							transformBox: "fill-box",
						}}
						initial={{ scaleX: 0 }}
						animate={{
							rotateY: 360,
							scaleX: isInView ? 1 : 0,
							transition: {
								duration: 0.6,
								ease: "easeInOut",
							},
							transformOrigin: "right",
						}}
					>
						<path d="M59 0.118164V137.118" stroke="white" strokeWidth="0.375" />
						<path d="M73.0322 0.118164V137.118" stroke="white" strokeWidth="0.75" />
						<path d="M87.0646 0.118164V137.118" stroke="white" strokeWidth="1.125" />
						<path d="M101.097 0.118164V137.118" stroke="white" strokeWidth="1.5" />
						<path d="M115.129 0.118164V137.118" stroke="white" strokeWidth="1.875" />
						<path d="M129.161 0.118164V137.118" stroke="white" strokeWidth="2.25" />
						<path d="M143.194 0.118164V137.118" stroke="white" strokeWidth="2.625" />
						<path d="M157.226 0.118164V137.118" stroke="white" strokeWidth="3" />
						<path d="M171.258 0.118164V137.118" stroke="white" strokeWidth="3.375" />
						<path d="M185.29 0.118164V137.118" stroke="white" strokeWidth="3.75" />
						<path d="M199.323 0.118164V137.118" stroke="white" strokeWidth="4.125" />
						<path d="M213.355 0.118164V137.118" stroke="white" strokeWidth="4.5" />
						<path d="M227.387 0.118164V137.118" stroke="white" strokeWidth="4.875" />
						<path d="M241.419 0.118164V137.118" stroke="white" strokeWidth="5.25" />
						<path d="M255.452 0.118164V137.118" stroke="white" strokeWidth="5.625" />
						<path d="M269.484 0.118164V137.118" stroke="white" strokeWidth="6" />
						<path d="M283.516 0.118164V137.118" stroke="white" strokeWidth="6.375" />
						<path d="M297.548 0.118164V137.118" stroke="white" strokeWidth="6.75" />
						<path d="M311.581 0.118164V137.118" stroke="white" strokeWidth="7.125" />
						<path d="M325.613 0.118164V137.118" stroke="white" strokeWidth="7.5" />
						<path d="M339.645 0.118164V137.118" stroke="white" strokeWidth="7.875" />
						<path d="M353.677 0.118164V137.118" stroke="white" strokeWidth="8.25" />
						<path d="M367.71 0.118164V137.118" stroke="white" strokeWidth="8.625" />
					</m.g>
				</g>
				<defs>
					<clipPath id="clip0_3855_28194">
						<rect width="375" height="182" fill="white" />
					</clipPath>
				</defs>
			</svg>
		</LazyMotion>
	);
}
