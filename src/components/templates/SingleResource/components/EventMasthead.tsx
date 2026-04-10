import clsx from "clsx";
import Link from "next/link";
import { RightArrowCircle, UlItemBulletOrange } from "~/components/elements/Icons";
import TextStrokeStack from "~/components/elements/TextStrokeStack";
import useSection from "~/components/layouts/Section/useSection";
import { WpPage } from "~/types/wp";
import { getSplitBreakText } from "~/utils/text";
import { useRef } from "react";
import { useInView } from "framer-motion";
import VisualTags from "./VisualTags";

function RightLines({ width = null, height = null }) {
	return (
		<svg width={width} height={height} viewBox="0 0 700 486" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_3550_27106)">
				<path d="M478 0L935 -1.99761e-05" stroke="#FA5D00" strokeWidth="0.49655" />
				<path d="M478 18.5807L935 18.5807" stroke="#FA5D00" strokeWidth="0.9931" />
				<path d="M478 37.1613L935 37.1612" stroke="#FA5D00" strokeWidth="1.48965" />
				<path d="M478 55.7419L935 55.7419" stroke="#FA5D00" strokeWidth="1.9862" />
				<path d="M478 74.3226L935 74.3226" stroke="#FA5D00" strokeWidth="2.48275" />
				<path d="M478 92.9032L935 92.9032" stroke="#FA5D00" strokeWidth="2.9793" />
				<path d="M478 111.484L935 111.484" stroke="#FA5D00" strokeWidth="3.47585" />
				<path d="M478 130.064L935 130.064" stroke="#FA5D00" strokeWidth="3.9724" />
				<path d="M478 148.645L935 148.645" stroke="#FA5D00" strokeWidth="4.46895" />
				<path d="M478 167.226L935 167.226" stroke="#FA5D00" strokeWidth="4.9655" />
				<path d="M478 185.806L935 185.806" stroke="#FA5D00" strokeWidth="5.46205" />
				<path d="M478 204.387L935 204.387" stroke="#FA5D00" strokeWidth="5.9586" />
				<path d="M478 222.968L935 222.968" stroke="#FA5D00" strokeWidth="6.45515" />
				<path d="M478 241.548L935 241.548" stroke="#FA5D00" strokeWidth="6.9517" />
				<path d="M478 260.129L935 260.129" stroke="#FA5D00" strokeWidth="7.44825" />
				<path d="M478 278.71L935 278.71" stroke="#FA5D00" strokeWidth="7.9448" />
				<path d="M478 297.29L935 297.29" stroke="#FA5D00" strokeWidth="8.44135" />
				<path d="M478 315.871L935 315.871" stroke="#FA5D00" strokeWidth="8.93789" />
				<path d="M478 334.452L935 334.452" stroke="#FA5D00" strokeWidth="9.43444" />
				<path d="M478 353.032L935 353.032" stroke="#FA5D00" strokeWidth="9.93099" />
				<path d="M478 371.613L935 371.613" stroke="#FA5D00" strokeWidth="10.4275" />
				<path d="M478 390.194L935 390.194" stroke="#FA5D00" strokeWidth="10.9241" />
				<path d="M478 408.774L935 408.774" stroke="#FA5D00" strokeWidth="11.4206" />
				<path d="M478 427.355L935 427.355" stroke="#FA5D00" strokeWidth="11.9172" />
				<path d="M478 445.936L935 445.936" stroke="#FA5D00" strokeWidth="12.4137" />
				<path d="M478 464.516L935 464.516" stroke="#FA5D00" strokeWidth="12.9103" />
				<path d="M478 483.097L935 483.097" stroke="#FA5D00" strokeWidth="13.4068" />
			</g>
			<g clipPath="url(#clip1_3550_27106)">
				<path d="M0 204L547 204" stroke="#FA5D00" strokeWidth="0.49655" />
				<path d="M0 222.581L547 222.581" stroke="#FA5D00" strokeWidth="0.9931" />
				<path d="M0 241.161L547 241.161" stroke="#FA5D00" strokeWidth="1.48965" />
				<path d="M0 259.742L547 259.742" stroke="#FA5D00" strokeWidth="1.9862" />
				<path d="M0 278.323L547 278.323" stroke="#FA5D00" strokeWidth="2.48275" />
				<path d="M0 296.903L547 296.903" stroke="#FA5D00" strokeWidth="2.9793" />
				<path d="M0 315.484L547 315.484" stroke="#FA5D00" strokeWidth="3.47585" />
				<path d="M0 334.064L547 334.064" stroke="#FA5D00" strokeWidth="3.9724" />
				<path d="M0 352.645L547 352.645" stroke="#FA5D00" strokeWidth="4.46895" />
				<path d="M0 371.226L547 371.226" stroke="#FA5D00" strokeWidth="4.9655" />
				<path d="M0 389.806L547 389.806" stroke="#FA5D00" strokeWidth="5.46205" />
				<path d="M0 408.387L547 408.387" stroke="#FA5D00" strokeWidth="5.9586" />
				<path d="M0 426.968L547 426.968" stroke="#FA5D00" strokeWidth="6.45515" />
				<path d="M0 445.548L547 445.548" stroke="#FA5D00" strokeWidth="6.9517" />
				<path d="M0 464.129L547 464.129" stroke="#FA5D00" strokeWidth="7.44825" />
				<path d="M0 482.71L547 482.71" stroke="#FA5D00" strokeWidth="7.9448" />
			</g>
			<defs>
				<clipPath id="clip0_3550_27106">
					<rect width="222" height="486" fill="white" transform="translate(478)" />
				</clipPath>
				<clipPath id="clip1_3550_27106">
					<rect width="478" height="282" fill="white" transform="translate(0 204)" />
				</clipPath>
			</defs>
		</svg>
	);
}

function EventMasthead(props: WpPage) {
	const { inner_page, event, visual_tags } = props;
	const { masthead } = inner_page;
	const { address, date, time } = event;

	const { paddingBottomMap } = useSection();

	const ref = useRef();
	const inView = useInView(ref, { amount: 0.7, once: true });

	return (
		<div ref={ref} className="event-masthead relative bg-lightOrange">
			{/* Right Lines */}
			<div
				className={clsx(
					inView ? "scale-x-[100%]" : "scale-x-0",
					"linear absolute bottom-0 right-0 w-[90%] origin-right transition-transform duration-300 md:block md:w-[54%]"
				)}
			>
				<RightLines width="100%" />
			</div>

			{/* Back button */}
			<div className="container relative hidden md:block">
				<Link className="group flex w-fit justify-start gap-4 py-6 md:py-12" href="/content-hub/">
					<div className="rotate-180">
						<RightArrowCircle circleClassName="text-navy group-hover:text-blue" />
					</div>
					Take me back
				</Link>
			</div>

			<div className="container relative">
				<div className={clsx(paddingBottomMap?.tiny, "flex flex-col items-center gap-16 pt-6 md:flex-row md:gap-20 md:pt-0 lg:gap-28")}>
					{/* Content */}
					<div className="flex w-full max-w-[543px] flex-col items-start">
						{/* Tags */}
						<div className="mb-6 hidden flex-wrap items-center justify-start gap-6 md:flex">
							{/* Tag */}
							<span className="text-15 font-body text-navy/80">Event</span>
							{/* <span className="text-15 font-body text-navy/80">In-Person</span> */}

							{/* Visual tags */}
							<VisualTags visualTags={visual_tags} className="text-15 font-body text-navy/80" />
						</div>

						{/* Title */}
						<h3
							className="text-navy"
							dangerouslySetInnerHTML={{
								__html: getSplitBreakText({
									text: masthead?.heading,
								}),
							}}
						/>

						{/* Address */}
						<div className="my-6 flex items-start justify-start gap-4 md:my-10 md:items-center">
							<div className="mt-[.3rem] md:mt-0">
								<UlItemBulletOrange />
							</div>
							<p dangerouslySetInnerHTML={{ __html: address }} className="text-20 font-normal text-navy" />
						</div>

						{/* Date and time */}
						<div className="flex items-center justify-start gap-8">
							{/* Date */}
							<div className="flex flex-col items-center gap-2 md:gap-6">
								<TextStrokeStack
									centerText={date?.day}
									options={{
										textColor: "navy",
										strokeColor: "navy",
										bgColor: "lightOrange",
										textSize: "64",
									}}
								/>

								<span
									className="text-20 is-stat"
									dangerouslySetInnerHTML={{
										__html: date?.month,
									}}
								/>
							</div>

							{/* Start time */}
							<div className="flex flex-col items-center gap-2 md:gap-6">
								<TextStrokeStack
									centerText={time?.start_time}
									options={{
										textColor: "navy",
										strokeColor: "navy",
										bgColor: "lightOrange",
										textSize: "64",
									}}
								/>

								<span
									className="text-20 is-stat"
									dangerouslySetInnerHTML={{
										__html: time?.start_time_label,
									}}
								/>
							</div>

							<span className="-ml-6 mt-[-15%] text-[64px]">-</span>

							{/* End time */}
							<div className="-ml-6 flex flex-col items-center gap-2 md:gap-6">
								<TextStrokeStack
									centerText={time?.end_time}
									options={{
										textColor: "navy",
										strokeColor: "navy",
										bgColor: "lightOrange",
										textSize: "64",
									}}
								/>

								<span
									className="text-20 is-stat"
									dangerouslySetInnerHTML={{
										__html: time?.end_time_label,
									}}
								/>
							</div>
						</div>
					</div>

					{/* Form */}
					{/* <div className="flex aspect-[519/509] w-full max-w-[519px] items-center justify-center overflow-hidden rounded-lg bg-lightGrey">
						Salesforce form iFrame
					</div> */}
					{event?.event_form_source && (
						<div className="flex w-full max-w-[519px] items-center justify-center overflow-hidden rounded-lg bg-lightGrey p-5 lg:p-6">
							<iframe title="webinar-subscribe" src={event?.event_form_source} width="100%" height="700" style={{ border: "0" }} />
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default EventMasthead;
