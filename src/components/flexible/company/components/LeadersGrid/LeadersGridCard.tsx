// TODO : Remove links

import clsx from "clsx";
import Link from "next/link";
// import { LeadersGridPlusCircle } from "~/components/elements/Icons";
import WpImage from "~/components/elements/Wp";
import { getLinkTarget } from "~/utils/links";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { WpTeamMemberPost } from "~/types/wp";

interface LeadersGridCardProps {
	team_member: WpTeamMemberPost;
	isFirstItem: boolean;
	isLastItem: boolean;
}

function LeftLines({ width = null, height = null }) {
	return (
		<svg width={width} height={height} viewBox="0 0 89 342" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M88.5 0.5V341.5" stroke="#C2D1FF" strokeWidth="0.5" />
			<path d="M69.7903 0.5V341.5" stroke="#C2D1FF" />
			<path d="M51.0807 0.5V341.5" stroke="#C2D1FF" strokeWidth="1.5" />
			<path d="M32.371 0.5V341.5" stroke="#C2D1FF" strokeWidth="2" />
			<path d="M13.6613 0.5V341.5" stroke="#C2D1FF" strokeWidth="2.5" />
		</svg>
	);
}

function RightLines({ width = null, height = null }) {
	return (
		<svg width={width} height={height} viewBox="0 0 86 342" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M0.5 0.5V341.5" stroke="#C2D1FF" strokeWidth="0.5" />
			<path d="M19.2097 0.5V341.5" stroke="#C2D1FF" />
			<path d="M37.9194 0.5V341.5" stroke="#C2D1FF" strokeWidth="1.5" />
			<path d="M56.629 0.5V341.5" stroke="#C2D1FF" strokeWidth="2" />
			<path d="M75.3387 0.5V341.5" stroke="#C2D1FF" strokeWidth="2.5" />
		</svg>
	);
}

function LeadersGridCard({ team_member, isFirstItem, isLastItem }: LeadersGridCardProps) {
	const {
		acf: {
			preview: { full_name, role, image },
		},
	} = team_member || {};

	const ref = useRef(null);
	const isInView = useInView(ref, { amount: 0.7, once: true });

	return (
		<div ref={ref} key={team_member?.ID} className="group relative block aspect-[293/371] w-full max-w-[293px] bg-white/5">
			{/* Left lines for first card */}
			{isFirstItem && (
				<div
					className={clsx(
						isInView ? "scale-x-100" : "scale-x-0",
						"hidden origin-right transition-transform duration-300 ease-linear md:block",
						"leaders-grid__row-one__lines absolute -left-[35%] top-[50%] flex h-[95%] -translate-y-1/2 gap-4"
					)}
				>
					<LeftLines height="100%" />
				</div>
			)}

			{/* Right lines for last card */}
			{isLastItem && (
				<div
					className={clsx(
						isInView ? "scale-x-100" : "scale-x-0",
						"hidden origin-left transition-transform duration-300 ease-linear md:block",
						"leaders-grid__row-one__lines absolute -right-[35%] top-[50%] flex h-[95%] -translate-y-1/2 flex-row-reverse gap-4"
					)}
				>
					<RightLines height="100%" />
				</div>
			)}

			{/* Image */}
			<div className="relative h-full w-full overflow-hidden rounded-lg bg-purple">
				{image?.url && (
					<WpImage image={image} fill className="relative object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-105" />
				)}
			</div>

			{/* Dark Overlay */}
			<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

			<div className="absolute bottom-0 left-0 z-10 flex w-full items-center justify-between px-4 py-3">
				{/* Full name & role */}
				<div className="flex flex-col">
					{/* Full name */}
					{!!full_name && (
						<p
							className="text-18 font-medium text-white"
							dangerouslySetInnerHTML={{
								__html: full_name,
							}}
						/>
					)}

					{/* Role */}
					{!!role && (
						<p
							className="text-16 font-body text-white/50"
							dangerouslySetInnerHTML={{
								__html: role,
							}}
						/>
					)}
				</div>

				{/* Plus */}
				{/* <span className={clsx("transition-transform duration-200 ease-in-out group-hover:rotate-90 group-hover:scale-110")}>
					<LeadersGridPlusCircle />
				</span> */}
			</div>
		</div>
	);
}

export default LeadersGridCard;
