import React, { useEffect, useState } from "react";
import { getBackgroundAndTextColor } from "~/components/ColorHelpers";
import TextCard from "~/components/elements/text/TextCard";
import WpImage from "~/components/elements/Wp";

function isDateBetween(currentDate, startDate, endDate) {
	return currentDate >= startDate && currentDate <= endDate;
}

export default function ExitPopup(props) {
	const {
		exit_popup: { id, image, theme_colours, form, show_popup = false, text_card, schedule_banner, start_date, end_date, show_popup_all_pages },
		showPopupOnPage,
	} = props;

	const [showPopup, setShowPopup] = useState(false);
	const isPopupDateBetween = schedule_banner ? isDateBetween(new Date(), new Date(start_date), new Date(end_date)) : false;

	useEffect(() => {
		const handleMouseMove = (event) => {
			if (!event.relatedTarget || event.relatedTarget.nodeName === "HTML") {
				setShowPopup(true);
			}
		};

		window.addEventListener("mouseout", handleMouseMove);

		return () => window.removeEventListener("mouseout", handleMouseMove);
	}, []);

	// showPopupOnPage means show for page only.

	if (show_popup === false || showPopup === false) return null;
	if (schedule_banner && !isPopupDateBetween) return null;
	// if (show_popup_all_pages === false && showPopupOnPage === false) return null; // if both are off, do nothing
	if (show_popup === true && show_popup_all_pages === false && (showPopupOnPage === false || showPopupOnPage === undefined)) return null; // if both are off, do nothing

	const theme = theme_colours === "none" ? "white" : theme_colours;
	const backgroundTheme = getBackgroundAndTextColor(theme);

	return (
		<>
			<div id={id || "exit-popup"} className="exit-popup">
				{showPopup && (
					<div className="absolute inset-0 z-[999] h-full w-full bg-black bg-opacity-50">
						<div className="exit-popup-inner z-0 h-auto min-h-[450px] w-full max-w-[846px] overflow-hidden rounded-xl bg-white">
							<div className={backgroundTheme}>
								<div className="flex h-full flex-col justify-between lg:flex-row">
									<div className="mx-auto w-[80%] md:w-[50%] lg:mx-0">
										{!!form && (
											<div className="relative z-10 mx-auto  aspect-[10/12] max-w-[32.5rem] overflow-scroll rounded-md bg-lightGrey px-6 py-7 md:mr-0 md:rounded-[.75rem]">
												<div className="h-full w-full rounded-md md:rounded-[.75rem]" dangerouslySetInnerHTML={{ __html: form }} />
											</div>
										)}

										<div className="h-full w-full">{!form && <WpImage image={image} className="h-full w-full object-cover" />}</div>
									</div>
									<div className="flex-1 p-6 md:pb-14 md:pl-14 md:pr-5 md:pt-5">
										<div className="absolute right-6 top-6 flex justify-end md:relative">
											<button type="button" onClick={() => setShowPopup(false)} className="transition-colors duration-300 hover:opacity-50">
												<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
													<path
														d="M7.93942 9L2.09473 3.1553L3.15538 2.09464L9.00007 7.93928L14.8447 2.09464L15.9054 3.1553L10.0607 9L15.9054 14.8446L14.8447 15.9053L9.00007 10.0607L3.15538 15.9053L2.09473 14.8446L7.93942 9Z"
														fill="#0D1226"
													/>
												</svg>
											</button>
										</div>
										<div className="flex h-full flex-col items-center justify-center md:pr-9">
											<TextCard text_card={text_card} />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div
							className="absolute inset-0 z-[-1] h-full w-full"
							onClick={() => setShowPopup(false)}
							onKeyDown={() => setShowPopup(false)}
							role="button"
							tabIndex={0}
						/>
					</div>
				)}
			</div>
			<style>{`
				body{
					overflow: hidden !important;
				}
			`}</style>
		</>
	);
}
