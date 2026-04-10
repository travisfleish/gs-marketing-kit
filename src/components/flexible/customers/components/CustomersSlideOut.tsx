import React, { createRef, useRef, useState } from "react";
// elements
import Link from "next/link";
import WpImage, { WpImageProps } from "~/components/elements/Wp";
import { CircleArrow } from "~/components/elements/Icons";
import { LazyMotion, m, domMax, useIsomorphicLayoutEffect } from "framer-motion";
// hooks
import useWindowSize from "~/hooks/useWindowSize";
// helpers
import { getClassValue } from "~/components/ColorHelpers";

interface CustomersSlideOutProps {
	customers: {
		featured_image: {
			src: string;
			alt: string;
			height: number;
			width: number;
		};
		ID: string;
		permalink: string;
		post_title: string;
		acf: {
			media: {
				logo: WpImageProps["image"];
				thumbnail: WpImageProps["image"];
			};
			customer_colour: string;
		};
		products: {
			id: string;
			name: string;
		}[];
	}[];
}

function CustomersSlideOut({ customers }: CustomersSlideOutProps) {
	const [activeCustomer, setActiveCustomer] = useState(0);

	const ease = [0.68, -0.2, 0.15, 0.98];

	const initial = {
		opacity: 0,
		transform: "translateX(3rem)",
	};

	const animate = {
		opacity: 1,
		transform: "translateX(0rem)",
	};

	const scaleAnimate = {
		opacity: 1,
		transform: "scaleX(1)",
	};

	const scaleExit = {
		opacity: 0,
		transform: "scaleX(0)",
	};

	const bars = Array.from({ length: 20 }, (_, i) => i + 1);

	const { width: windowWidth } = useWindowSize();

	const isMobile = windowWidth < 768;

	const updateCustomer = (l) => {
		setActiveCustomer(l);
	};

	const [tallestCardHeight, setTallestCardHeight] = useState(0);
	const cardRefs = useRef([]) as any;
	// Initialize cardRefs with refs for each card
	cardRefs.current = customers?.map((_: any, i: string | number) => cardRefs.current[i] || createRef());

	// Calculate the tallest card height
	useIsomorphicLayoutEffect(() => {
		const tallestHeight = cardRefs.current.reduce((maxHeight: number, cardRef: any) => Math.max(maxHeight, cardRef.current.offsetHeight), 0);

		setTallestCardHeight(tallestHeight);
	}, []);

	return (
		<LazyMotion features={domMax}>
			<m.div
				layout
				className={`flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 ${customers?.length === 1 ? "justify-center" : ""}`}
				style={{ height: tallestCardHeight > 0 && !isMobile ? `${tallestCardHeight}px` : "auto" }}
			>
				{customers?.map((customer, i) => {
					// is active
					const isActive = isMobile ? true : activeCustomer === i;
					// set inactive flex basis
					const basis = [""];

					if (i === 0) {
						basis.push("md:basis-[7%] lg:basis-[5%]");
					} else if (i === 1) {
						basis.push("md:basis-[6.875%] lg:basis-[4.375%]");
					} else if (i === 2) {
						basis.push("md:basis-[6.25%] lg:basis-[3.75%]");
					} else {
						basis.push("md:basis-[5%] lg:basis-[2.5%]");
					}

					return (
						<m.div
							ref={cardRefs.current[i]}
							layout
							key={customer.ID}
							className={`overflow-hidden ${isActive ? "shrink-0 md:basis-[75%] lg:basis-[85.625%]" : `shrink ${basis.join(" ")}`}`}
							onMouseEnter={() => (isMobile ? undefined : updateCustomer(i))}
						>
							<Link
								href={customer.permalink}
								className={`group grid h-full overflow-hidden rounded-[.25rem] bg-lightGrey pt-8 lg:grid-cols-9 lg:rounded-[.125rem] lg:py-16 ${isActive ? "lg:gap-x-5" : "pointer-events-none"}`}
							>
								{isActive && (
									<>
										{/* content */}
										<div className="mb-4 space-y-6 px-5 md:px-8 lg:col-span-5 lg:mb-0 lg:space-y-8 lg:pl-16">
											{/* logo */}
											<m.div
												className="relative flex h-10 w-[7rem] items-center md:h-12"
												initial={initial}
												animate={animate}
												transition={{
													duration: 0.8,
													ease,
													delay: 0.1,
												}}
											>
												<WpImage image={customer?.acf?.media?.logo} fill className="h-full w-full object-contain object-left" />
											</m.div>
											<m.span
												className="text-h5 block max-w-[25.375rem] !font-[450] !leading-[1.2]"
												initial={initial}
												animate={animate}
												transition={{
													duration: 0.8,
													ease,
													delay: 0.2,
												}}
												dangerouslySetInnerHTML={{ __html: customer.post_title }}
											/>
											<m.span
												className="text-16 inline-flex items-center space-x-3"
												initial={initial}
												animate={animate}
												transition={{
													duration: 0.8,
													ease,
													delay: 0.3,
												}}
											>
												<div className="z-10 h-[1.375rem] w-[1.375rem] rotate-45 rounded-full bg-black text-white transition-colors duration-200 group-hover:bg-blue">
													<CircleArrow />
												</div>
												<span className="font-semibold" dangerouslySetInnerHTML={{ __html: "Read full story" }} />
											</m.span>
											{/* products used */}
											{customer?.products?.length > 0 && (
												<m.div
													className="!mt-8 space-y-2 lg:!mt-24 lg:flex lg:items-center lg:space-x-3 lg:space-y-0 xl:space-x-10"
													initial={initial}
													animate={animate}
													transition={{
														duration: 0.8,
														ease,
														delay: 0.4,
													}}
												>
													<span className="text-16 font-body tracking-[-0.01em] opacity-60" dangerouslySetInnerHTML={{ __html: "Products used" }} />
													{customer?.products?.slice(0)?.map((item) => (
														<div key={item.id} className="flex space-x-3 xl:items-center">
															<div className="relative mt-[.3rem] flex h-3 w-4 justify-between space-x-[0.125rem] xl:mt-0">
																<div className={`h-full w-[0.0625rem] ${getClassValue(customer?.acf?.customer_colour)}`} />
																<div className={`h-full w-[0.125rem] ${getClassValue(customer?.acf?.customer_colour)}`} />
																<div className={`h-full w-[0.1875rem] ${getClassValue(customer?.acf?.customer_colour)}`} />
																<div className={`h-full w-[.25rem] ${getClassValue(customer?.acf?.customer_colour)}`} />
															</div>
															<span className="text-16 font-heading font-medium tracking-[0.01em]" dangerouslySetInnerHTML={{ __html: item.name }} />
														</div>
													))}
												</m.div>
											)}
										</div>
										{/* thumbnail */}
										<div className="relative p-5 pt-6 md:p-8 lg:col-span-4 lg:p-0">
											<m.div
												className="relative z-10 aspect-[205/136] w-full max-w-[32rem] overflow-hidden rounded-[0.375rem] lg:max-w-[25.625rem]"
												initial={initial}
												animate={animate}
												transition={{
													duration: 0.8,
													ease,
													delay: 0.1,
												}}
											>
												<WpImage
													image={{
														url: customer?.featured_image?.src,
														alt: customer?.featured_image?.alt,
														height: customer?.featured_image?.height,
														width: customer?.featured_image?.width,
													}}
													// image={customer?.acf?.media?.thumbnail}
													fill
													className="h-full w-full object-cover"
												/>
											</m.div>
											{/* background */}
											<div className="absolute inset-y-0 right-0 w-2/3 lg:inset-y-[-4rem]">
												<m.div
													className="flex h-[55%] w-full origin-left justify-between"
													initial={scaleExit}
													animate={scaleAnimate}
													transition={{
														duration: 0.8,
														ease,
														delay: 0.4,
													}}
												>
													{bars?.map((index) => (
														<div key={index} className={`h-full ${getClassValue(customer?.acf?.customer_colour)}`} style={{ width: `${13 - index * 0.4}px` }} />
													))}
												</m.div>
												<m.div
													className="ml-auto mt-auto flex h-[45%] w-1/3 origin-right justify-between"
													initial={scaleExit}
													animate={scaleAnimate}
													transition={{
														duration: 0.8,
														ease,
														delay: 0.5,
													}}
												>
													{bars
														?.slice(0, 8)
														?.map((index) => (
															<div
																key={index}
																className={`h-full ${getClassValue(customer?.acf?.customer_colour)}`}
																style={{ width: `${0.4 + index * 0.4}px` }}
															/>
														))}
												</m.div>
											</div>
										</div>
									</>
								)}
							</Link>
						</m.div>
					);
				})}
			</m.div>
		</LazyMotion>
	);
}

export default CustomersSlideOut;
