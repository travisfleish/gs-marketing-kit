import Link from "next/link";
import clsx from "clsx";
import { getTextColor, getHexValue, getBackgroundColor } from "../ColorHelpers";

function isDateBetween(currentDate, startDate, endDate) {
	return currentDate >= startDate && currentDate <= endDate;
}

export default function Banner(props) {
	const { link, background_colours, text_colours, show_toast_bar = false, schedule_toast_bar = false, start_date, end_date } = props;
	const isBannerDateBetween = schedule_toast_bar ? isDateBetween(new Date(), new Date(start_date), new Date(end_date)) : false;

	if (!link?.url) return null;
	if (!show_toast_bar) return null;
	if (schedule_toast_bar && !isBannerDateBetween) return null;

	const bannerBGColor = getBackgroundColor(background_colours);
	const bannerTextColor = getTextColor(text_colours);

	const svgTextColor = getTextColor(background_colours);
	const svgBGColor = getHexValue(text_colours);

	return (
		<Link
			href={link?.url}
			className={clsx(
				"text-16 bannerPencil group mb-2 flex items-center justify-center px-5 py-1.5 font-heading md:mb-0 md:py-[11px]",
				bannerBGColor,
				bannerTextColor
			)}
		>
			<div className="relative">
				<svg
					width="26"
					height="26"
					viewBox="0 0 26 26"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className={clsx("absolute -left-10 top-0 z-10 h-6 w-6 scale-0 rounded-full transition-transform duration-200 group-hover:scale-100", svgTextColor)}
				>
					<g clipPath="url(#clip0_5489_553)">
						<rect width="26" height="26" rx="13" fill={svgBGColor} />
						<path d="M12.6053 9.41211L16.1925 12.9993M16.1925 12.9993L12.6053 16.5864M16.1925 12.9993H8.59619" stroke="currentColor" strokeLinejoin="round" />
					</g>
				</svg>

				<span className={clsx("text-16 mt-[1px] inline-block", bannerTextColor)} dangerouslySetInnerHTML={{ __html: link?.title }} />
			</div>
		</Link>
	);
}
