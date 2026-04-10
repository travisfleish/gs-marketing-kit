import React, { useRef } from "react";
// elements
import Link from "next/link";
import Logo from "~/components/global/Logo";
import { ImageProps } from "~/components/elements/Wp";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import TextStrokeStack from "~/components/elements/TextStrokeStack";
import clsx from "clsx";
import { ContactSalesFormLines } from "~/components/elements/Icons";

interface ContactSalesFormProps {
	content: {
		heading: string;
		description: string;
		stats: {
			stat: string;
			old_stat?: string;
			caption: string;
		}[];
	};
	form: {
		form_embed: string;
		terms_and_conditions?: string;
		form_success?: {
			image: ImageProps;
			heading: string;
			text: string;
		};
	};
}

function ContactSalesForm(props: ContactSalesFormProps) {
	const { content, form } = props;

	const ref = useRef(null);
	const isInView = useInView(ref, { amount: 0.6, once: true });

	return (
		<LazyMotion features={domAnimation}>
			<div ref={ref} className="relative grid gap-y-8 md:grid-cols-2 md:gap-x-20">
				{/* Lines */}
				<div
					className={clsx(
						"absolute -right-32 -top-10 hidden w-[60%] origin-right transition-transform duration-300 ease-in-out md:block",
						isInView ? "scale-x-100" : "scale-x-0"
					)}
				>
					<ContactSalesFormLines width="100%" />
				</div>

				{/* content */}
				<div className="space-y-8 lg:space-y-20">
					{/* Logo */}
					<Link href="/" className="block w-16 cursor-pointer text-inherit">
						<Logo />
					</Link>

					{/* Heading & content */}
					<div className="max-w-[26.25rem] space-y-6 md:space-y-8">
						{/* Heading */}
						<h1 className="max-w-[23.375rem] !font-[450] !tracking-[-0.02em]" dangerouslySetInnerHTML={{ __html: content?.heading }} />

						{/* Content */}
						<p className="text-18 font-body !leading-[1.45] opacity-90" dangerouslySetInnerHTML={{ __html: content?.description }} />
					</div>

					{/* Stats */}
					<div className="hidden grid-cols-2 gap-x-3 gap-y-6 md:grid md:grid-cols-3 md:gap-8 960:-ml-4 xl:-ml-8">
						{content?.stats?.map((item, l) => (
							<div key={l} className="flex flex-col items-center space-y-4 text-center lg:space-y-6">
								<div>
									<TextStrokeStack
										centerText={item.stat}
										topText={item?.old_stat || item.stat}
										bottomText={item?.old_stat || item.stat}
										int={l}
										options={{
											textColor: "lightBlue",
											strokeColor: "lightBlue",
											bgColor: "blue",
											textSize: "64",
										}}
									/>
								</div>
								<p
									className="text-16 max-w-[8.625rem] font-heading !font-normal !leading-[1.3] text-lightBlue opacity-60"
									dangerouslySetInnerHTML={{ __html: item?.caption }}
								/>
							</div>
						))}
					</div>
				</div>

				{/* Form */}
				<div className="relative">
					<div className="mx-auto flex min-h-[555px] w-full max-w-[32.5rem] items-center justify-center rounded-lg bg-white px-6 py-7">
						<div className="form-embed-wrapper w-full" dangerouslySetInnerHTML={{ __html: form?.form_embed }} />
					</div>
				</div>

				{/* Stats mobile */}
				<div className="grid grid-cols-2 gap-x-3 gap-y-6 md:hidden md:grid-cols-3 md:gap-8">
					{content?.stats?.map((item, l) => (
						<div key={l} className={`flex flex-col items-center space-y-4 text-center lg:space-y-6 ${(l + 1) % 3 === 0 ? "col-span-2 md:col-span-1" : ""}`}>
							<div>
								<TextStrokeStack
									centerText={item.stat}
									topText={item?.old_stat || item.stat}
									bottomText={item?.old_stat || item.stat}
									int={l}
									options={{
										textColor: "lightBlue",
										strokeColor: "lightBlue",
										bgColor: "blue",
										textSize: "64",
									}}
								/>
							</div>
							<p
								className="text-16 max-w-[8.625rem] font-heading !font-normal !leading-[1.3] text-lightBlue opacity-60"
								dangerouslySetInnerHTML={{ __html: item?.caption }}
							/>
						</div>
					))}
				</div>
			</div>
		</LazyMotion>
	);
}

export default ContactSalesForm;
