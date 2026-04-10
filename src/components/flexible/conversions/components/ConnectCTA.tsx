// TODO : Setup input focus block classes in utils
// TODO : Rename
// TODO : Setup proper form

import clsx from "clsx";
import Link from "next/link";
import WpImage, { ImageProps } from "~/components/elements/Wp";
import { WpFile, WpLinkType } from "~/types/wp";
import { getSplitBreakText } from "~/utils/text";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { getBackgroundColor, getTextColor } from "~/components/ColorHelpers";
import Button from "~/components/elements/buttons/Button";
import { getButtonLinkProps } from "~/utils/links";

interface ConnectCTALink {
	image: ImageProps;
	link: WpLinkType;
}

interface ConnectCTAProps {
	content: {
		heading: string;
		links: ConnectCTALink[];
		form: {
			success_text: string;
			form_embed: string;
		};
		file: {
			file: WpFile;
			button_text: string;
		};
	};
	options: {
		background_color?: string;
		text_color?: string;
		layout: "subscribe" | "links" | "fileDownload";
	};
}

function InputRightArrow() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
			<path
				d="M6.03354 1.0332L11.0004 6.00003M11.0004 6.00003L6.03354 10.9669M11.0004 6.00003L0.482422 6.00003"
				stroke="white"
				strokeWidth="1.38462"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function ConnectCTA(props: ConnectCTAProps) {
	const { content, options } = props;
	const { layout, background_color, text_color } = options || {};
	const { heading, links, form } = content || {};
	const { success_text = "Thanks for subscribing." } = form || {};

	const ref = useRef(null);
	const isInView = useInView(ref, { amount: 0.7, once: true });

	const [formSubmitted, setFormSubmitted] = useState(false);

	const buttonProps = getButtonLinkProps({
		title: content?.file?.button_text,
		button: {
			background_color: "white-alt",
			type: "default",
		},
	});

	return (
		<div ref={ref} className="connect-cta">
			<div className="flex h-full w-full justify-stretch">
				{/* Banner */}
				<div
					className={clsx(
						"flex flex-1 flex-col items-center justify-between gap-6 rounded-l-lg px-6 py-6 sm:py-8 sm:pl-12 sm:pr-10 md:flex-row",
						getBackgroundColor(background_color),
						getTextColor(text_color || "white")
					)}
				>
					{/* Heading */}
					{!!heading && (
						<span
							className="text-h5"
							dangerouslySetInnerHTML={{
								__html: getSplitBreakText({
									text: heading,
								}),
							}}
						/>
					)}

					{/* File download */}
					{layout === "fileDownload" && (
						<a
							download
							href={content?.file?.file?.url}
							// className=""
							// dangerouslySetInnerHTML={{ __html: content?.file?.button_text }}
						>
							<Button {...buttonProps} />
						</a>
					)}

					{/* Links */}
					{layout === "links" && (
						<div className="flex gap-x-2">
							{links?.length > 0 &&
								links?.map((link, index) => {
									const { image } = link;

									return (
										<Link
											key={`link-${index}`}
											target={link?.link?.target || "_self"}
											href={link?.link?.url}
											className="h-10 w-10 rounded-full bg-white p-[1px] transition-opacity duration-300 ease-in-out hover:opacity-80"
										>
											<WpImage image={image} className="h-full w-full" />
										</Link>
									);
								})}
						</div>
					)}

					{/* Subscribe form */}
					{layout === "subscribe" && (
						<div className="w-full md:max-w-[366px]">
							<div dangerouslySetInnerHTML={{ __html: form?.form_embed }} />
							{/* {formSubmitted ? (
								<p
									className="text-24 font-body"
									dangerouslySetInnerHTML={{
										__html: success_text,
									}}
								/>
							) : (
								<form className="w-full">
									<div className="relative w-full">
										<input
											onKeyDown={(e) => {
												if (e.key === "Enter") {
													setFormSubmitted(true);
												}
											}}
											type="text"
											placeholder="Enter email address"
											className="w-full rounded-md border-white/15 bg-white/15 py-3 pl-[20px] pr-10 text-white placeholder-white/60 focus:border-transparent focus:outline-none focus:ring-0"
										/>

										<span className="absolute right-[20px] top-[50%] translate-y-[-50%] transform">
											<InputRightArrow />
										</span>
									</div>
								</form>
							)} */}
						</div>
					)}
				</div>

				{/* Lines */}
				<div
					className={clsx(
						isInView ? "scale-x-100" : "scale-x-0",
						"origin-left transition-transform duration-300 ease-linear",
						"leaders-grid__row-one__lines flex"
					)}
				>
					{Array(3)
						.fill("")
						.map((_, i) => (
							<div
								key={`line-${i}`}
								style={{ width: `${8 - i * 2.4}px`, marginLeft: `${4 + i * 1.4}px` }}
								className={clsx("h-full", getBackgroundColor(background_color))}
							/>
						))}
				</div>
			</div>
		</div>
	);
}

export default ConnectCTA;
