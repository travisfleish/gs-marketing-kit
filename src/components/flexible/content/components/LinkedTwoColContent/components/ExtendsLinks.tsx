import clsx from "clsx";

import { Link } from "~/components/elements/links/Link";
import { RightArrowCircle } from "~/components/elements/Icons";
import { getLinkTarget } from "~/utils/links";
import PillTag from "~/components/elements/PillTag";

function RightLines({ width = null, height = null }) {
	return (
		<svg width={width} height={height} viewBox="0 0 29 48" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M4 0V48" stroke="#F6F7F9" strokeWidth="8" />
			<path d="M12 0V48" stroke="#F6F7F9" strokeWidth="6" />
			<path d="M20 0V48" stroke="#F6F7F9" strokeWidth="4" />
			<path d="M28 0V48" stroke="#F6F7F9" strokeWidth="2" />
		</svg>
	);
}

function ExtendsLinks({ links, sectionHasBgColor }) {
	return (
		links?.length > 0 &&
		links?.map((link, index) => (
			<div
				key={`extends-link-${index}`}
				className={clsx("linear group flex h-full items-stretch transition-transform duration-[400ms]", sectionHasBgColor && "hover:translate-x-4")}
			>
				{/* Link */}
				<Link
					className={clsx(
						"text-16 relative flex items-start py-3 font-medium",
						!sectionHasBgColor &&
							"linear transition-[transform, colors] duration-[400ms] group-hover:rounded-l-lg group-hover:bg-lightGrey group-hover:pl-4 group-hover:pr-6"
					)}
					target={getLinkTarget(link?.link?.target)}
					href={link?.link?.url}
					key={index}
				>
					<div className="flex-shrink-0">
						<RightArrowCircle disableTransitions width={22} height={22} />
					</div>

					<span
						className="ml-[14px]"
						dangerouslySetInnerHTML={{
							__html: link?.link?.title,
						}}
					/>

					{/* New tag */}
					{link?.show_new_tag && <PillTag text="NEW" />}
				</Link>

				{/* Extended Area */}
				{!sectionHasBgColor && (
					<div className="transition-[transform, opacity] -translate-x-2 opacity-0 duration-200 group-hover:translate-x-0 group-hover:opacity-100">
						<RightLines height="100%" />
					</div>
				)}
			</div>
		))
	);
}

export default ExtendsLinks;
