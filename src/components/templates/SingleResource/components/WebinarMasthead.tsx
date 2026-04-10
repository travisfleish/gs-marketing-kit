// TODO : Update watch webinar link when inner page is setup
import type { WpPage } from "~/types/wp";

import Link from "next/link";
import clsx from "clsx";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { RightArrowCircle } from "~/components/elements/Icons";
import Asset from "~/components/elements/media/Asset";
import Button from "~/components/elements/buttons/Button";
import useSection from "~/components/layouts/Section/useSection";
import formatDate from "~/utils/formatDate";
import { getSplitBreakText } from "~/utils/text";
import { getButtonLinkProps } from "~/utils/links";
import ProfileCard from "./ProfileCard";
import VisualTags from "./VisualTags";

function RightLines({ width = null, height = null }) {
	return (
		<svg width={width} height={height} viewBox="0 0 442 892" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_3550_26967)">
				<path d="M0 473L0 930" stroke="#4337A8" strokeWidth="0.49655" />
				<path d="M18.5801 473L18.5801 930" stroke="#4337A8" strokeWidth="0.9931" />
				<path d="M37.1621 473L37.1621 930" stroke="#4337A8" strokeWidth="1.48965" />
				<path d="M55.7422 473L55.7422 930" stroke="#4337A8" strokeWidth="1.9862" />
				<path d="M74.3223 473L74.3223 930" stroke="#4337A8" strokeWidth="2.48275" />
				<path d="M92.9023 473L92.9023 930" stroke="#4337A8" strokeWidth="2.9793" />
				<path d="M111.484 473L111.484 930" stroke="#4337A8" strokeWidth="3.47585" />
				<path d="M130.064 473L130.064 930" stroke="#4337A8" strokeWidth="3.9724" />
				<path d="M148.645 473L148.645 930" stroke="#4337A8" strokeWidth="4.46895" />
				<path d="M167.227 473L167.227 930" stroke="#4337A8" strokeWidth="4.9655" />
				<path d="M185.807 473L185.807 930" stroke="#4337A8" strokeWidth="5.46205" />
				<path d="M204.387 473L204.387 930" stroke="#4337A8" strokeWidth="5.9586" />
				<path d="M222.967 473L222.967 930" stroke="#4337A8" strokeWidth="6.45515" />
				<path d="M241.549 473L241.549 930" stroke="#4337A8" strokeWidth="6.9517" />
				<path d="M260.129 473L260.129 930" stroke="#4337A8" strokeWidth="7.44825" />
				<path d="M278.709 473L278.709 930" stroke="#4337A8" strokeWidth="7.9448" />
				<path d="M297.291 473L297.291 930" stroke="#4337A8" strokeWidth="8.44135" />
				<path d="M315.871 473L315.871 930" stroke="#4337A8" strokeWidth="8.93789" />
				<path d="M334.451 473L334.451 930" stroke="#4337A8" strokeWidth="9.43444" />
				<path d="M353.033 473L353.033 930" stroke="#4337A8" strokeWidth="9.93099" />
				<path d="M371.613 473L371.613 930" stroke="#4337A8" strokeWidth="10.4275" />
				<path d="M390.193 473L390.193 930" stroke="#4337A8" strokeWidth="10.9241" />
				<path d="M408.773 473L408.773 930" stroke="#4337A8" strokeWidth="11.4206" />
				<path d="M427.355 473L427.355 930" stroke="#4337A8" strokeWidth="11.9172" />
				<path d="M445.936 473L445.936 930" stroke="#4337A8" strokeWidth="12.4137" />
			</g>
			<g clipPath="url(#clip1_3550_26967)">
				<path d="M204 -5L204 542" stroke="#4337A8" strokeWidth="0.49655" />
				<path d="M222.58 -5L222.58 542" stroke="#4337A8" strokeWidth="0.9931" />
				<path d="M241.162 -5L241.162 542" stroke="#4337A8" strokeWidth="1.48965" />
				<path d="M259.742 -5L259.742 542" stroke="#4337A8" strokeWidth="1.9862" />
				<path d="M278.322 -5L278.322 542" stroke="#4337A8" strokeWidth="2.48275" />
				<path d="M296.902 -5L296.902 542" stroke="#4337A8" strokeWidth="2.9793" />
				<path d="M315.484 -5L315.484 542" stroke="#4337A8" strokeWidth="3.47585" />
				<path d="M334.064 -5L334.064 542" stroke="#4337A8" strokeWidth="3.9724" />
				<path d="M352.645 -5L352.645 542" stroke="#4337A8" strokeWidth="4.46895" />
				<path d="M371.227 -5L371.227 542" stroke="#4337A8" strokeWidth="4.9655" />
				<path d="M389.807 -5L389.807 542" stroke="#4337A8" strokeWidth="5.46205" />
				<path d="M408.387 -5L408.387 542" stroke="#4337A8" strokeWidth="5.9586" />
				<path d="M426.967 -5L426.967 542" stroke="#4337A8" strokeWidth="6.45515" />
			</g>
			<defs>
				<clipPath id="clip0_3550_26967">
					<rect width="442" height="419" fill="white" transform="translate(0 473)" />
				</clipPath>
				<clipPath id="clip1_3550_26967">
					<rect width="238" height="542" fill="white" transform="translate(204)" />
				</clipPath>
			</defs>
		</svg>
	);
}

function WebinarMasthead(props: WpPage) {
	const { post_date, inner_page, webinar, visual_tags } = props;
	const { masthead } = inner_page;
	const { asset } = masthead;

	const buttonProps = getButtonLinkProps({
		title: "Watch webinar",
		button: {
			background_color: "white",
			type: "default",
		},
	});

	const { paddingBottomMap } = useSection();

	const isOnDemand = visual_tags?.tags?.includes("On-demand");

	const ref = useRef();
	const inView = useInView(ref, { amount: 0.7, once: true });

	return (
		<div ref={ref} className="webinar-masthead relative overflow-hidden bg-navy">
			{/* Right lines */}
			<div
				className={clsx(
					inView ? "scale-x-[100%]" : "scale-x-0",
					"linear absolute right-0 top-0 hidden h-full origin-right transition-transform duration-300 md:block"
				)}
			>
				<RightLines height="100%" />
			</div>

			{/* Back button */}
			<div className="container relative hidden md:block">
				<Link className="group flex w-fit justify-start gap-4 py-6 text-white md:py-12" href="/content-hub/">
					<div className="rotate-180">
						<RightArrowCircle circleClassName="text-white group-hover:text-lightBlue" arrowClassName="text-navy" />
					</div>
					Take me back
				</Link>
			</div>

			<div className="container relative">
				<div className="mb-16 flex flex-col items-start gap-16 md:flex-row md:items-center md:gap-20 lg:gap-28">
					{/* Content */}
					<div className="flex w-full max-w-[543px] flex-col items-start pt-6 md:pt-0">
						{/* Tag and date */}
						<div className="mb-6 hidden flex-wrap items-center justify-start gap-6 md:flex">
							{/* Tag */}
							<span className="text-15 font-body text-white/80">Webinar</span>

							{/* Date */}
							{!isOnDemand && <span className="text-15 font-normal text-white/80">{formatDate(post_date)}</span>}

							{/* Visual tags */}
							<VisualTags visualTags={visual_tags} className="text-15 font-body text-white/80" />
						</div>

						{/* Title */}
						<h3
							className="mb-12 text-white"
							dangerouslySetInnerHTML={{
								__html: getSplitBreakText({
									text: masthead?.heading,
								}),
							}}
						/>

						{/* Button */}
						<Link href="#webinar-aside" role="button">
							<Button {...buttonProps} />
						</Link>
					</div>

					{/* Asset */}
					<div className="aspect-[628/353] w-full max-w-[628px] overflow-hidden rounded-lg">
						<Asset {...asset} className="h-full w-full object-cover object-center" />
					</div>
				</div>

				{/* Profile cards */}
				<div className={clsx(paddingBottomMap?.small, "relative")}>
					<p className="text-15 mb-8 font-body font-normal text-white">Hosts</p>

					<div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
						{webinar?.hosts?.cards?.length > 0 && webinar?.hosts?.cards?.map((card, index) => <ProfileCard key={`card-${index}`} card={card} />)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default WebinarMasthead;
