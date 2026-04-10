// Split further into components
// Update responsive design

import React from "react";
import { WpOptionsFooter } from "~/types/wp";
import Link from "next/link";
import { getLinkTarget } from "~/utils/links";
import { LazyMotion, domAnimation } from "framer-motion";
import clsx from "clsx";
import { trackFooterMenuItemClick } from "~/utils/trackEvent";
import { getBackgroundAndTextColor } from "~/components/ColorHelpers";
import WpImage from "../../elements/Wp";
import FeaturedLink from "./components/FeaturedLink";
import FooterCTA from "./components/FooterCTA/FooterCTA";

interface FooterProps extends Partial<WpOptionsFooter> {
	hideCTA?: boolean;
	hideFeaturedLinks?: boolean;
	CTA?: any;
	featuredLinks?: any;
	bgColor?: string;
}

export default function Footer(props: FooterProps) {
	// console.log("Footer props:", props);

	const { columns, social, terms, hideCTA = false, hideFeaturedLinks = false, CTA = {}, featuredLinks = [], bgColor } = props;

	/* <pre>{JSON.stringify(context.options, null, 4)}</pre> */

	const footerBgTextColor = getBackgroundAndTextColor(bgColor);

	return (
		<LazyMotion features={domAnimation}>
			<div className={clsx("footer font-heading pb-8 md:pb-16", footerBgTextColor)}>
				{/* Footer CTA */}
				{!hideCTA && (
					<div className={clsx("container--1376px container--no-mobile-padding container", "pb-18 pt-6 md:pb-24")}>
						<FooterCTA CTA={CTA} />
					</div>
				)}

				<div className="container">
					{/* Featured Links */}
					{!hideFeaturedLinks && (
						<div className="footer__featured-links grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
							{featuredLinks?.items?.length > 0 &&
								featuredLinks?.items?.map((link, index) => <FeaturedLink key={`footer-featured-link-${index}`} link={link} footer />)}
						</div>
					)}

					<div className="flex flex-col pt-18 md:flex-row md:py-24 lg:pb-51">
						{/* Menu */}
						<menu className="grid w-full max-w-272 grid-cols-2 gap-x-6 gap-y-20 md:grid-cols-3 md:gap-12 lg:grid-cols-4">
							{/* Columns */}
							{columns?.length > 0 &&
								columns?.map((col, i) => (
									// Col
									<div key={`footer-menu-col-${i}`}>
										{/* Heading */}
										<h3
											className={clsx("text-14 mb-6 md:mb-10", bgColor === "navy" && "text-white/70", bgColor === "white" && "text-navy/70")}
											dangerouslySetInnerHTML={{
												__html: col.heading,
											}}
										/>

										{/* Links */}
										<div className="flex flex-col gap-5">
											{col?.links?.length > 0 &&
												col?.links?.map((link, index) => (
													<Link
														key={`footer-menu-link-${index}`}
														href={link?.link?.url || ""}
														target={link?.link?.target ? "_blank" : "_self"}
														dangerouslySetInnerHTML={{ __html: link?.link?.title || "" }}
														className={clsx(
															bgColor === "navy" && "text-white hover:text-brightGreen",
															bgColor === "white" && "text-navy hover:text-blue",
															"text-17 transition-colors duration-300 ease-in-out "
														)}
														onClick={() => {
															trackFooterMenuItemClick(link?.link?.title);
														}}
													/>
												))}
										</div>
									</div>
								))}
						</menu>

						{/* Social */}
						<div className="footer__social flex items-start justify-center space-x-1 py-18 sm:py-13 md:justify-start md:py-0">
							{social?.links?.length > 0 &&
								social?.links?.map((link, index) => (
									<Link
										key={`footer-social-link-${index}`}
										href={link?.link?.url}
										target={getLinkTarget(link?.link?.target)}
										className={clsx(
											"group h-8 w-8 rounded-sm transition-colors duration-300 ease-in-out",
											bgColor === "navy" && "bg-white/5 hover:bg-white/20",
											bgColor === "white" && "bg-lightGrey hover:bg-navy"
										)}
										onClick={() => {
											trackFooterMenuItemClick(link?.link?.title);
										}}
									>
										<WpImage
											image={link?.image}
											className={clsx(
												"h-full w-full object-contain transition-[filter] duration-1000 ease-in-out", // Transition filter not working
												bgColor === "navy" && "invert",
												bgColor === "white" && "group-hover:invert"
											)}
										/>
									</Link>
								))}
						</div>
					</div>

					{/* Terms */}
					<div
						className={clsx(
							"footer__terms text-15--clamp flex flex-col-reverse items-center justify-between gap-y-14 sm:gap-y-8 lg:flex-row lg:gap-y-3",
							bgColor === "navy" && "text-white/70",
							bgColor === "white" && "text-navy/70"
						)}
					>
						{/* Content */}
						<p className="max-w-44 text-center sm:max-w-full sm:text-left">
							&copy; {new Date().getFullYear()} {terms?.content}
						</p>

						{/* Links */}
						<div className="grid grid-cols-3 flex-wrap justify-center gap-x-6 gap-y-2 sm:flex sm:justify-start md:gap-10">
							{terms?.links?.length > 0 &&
								terms?.links?.map((link, index) => (
									<Link
										className={clsx(
											"transition-colors duration-300 ease-in-out",
											bgColor === "navy" && "hover:text-brightGreen",
											bgColor === "white" && "hover:text-blue"
										)}
										key={`footer-terms-link-${index}`}
										href={link?.link?.url || "#"}
										target={getLinkTarget(link?.link?.target)}
										dangerouslySetInnerHTML={{ __html: link?.link?.title || "" }}
										onClick={() => {
											trackFooterMenuItemClick(link?.link?.title);
										}}
									/>
								))}
						</div>
					</div>
				</div>
			</div>
		</LazyMotion>
	);
}
