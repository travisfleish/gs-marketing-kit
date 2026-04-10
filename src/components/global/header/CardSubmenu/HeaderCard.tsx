import React, { useEffect, useState } from "react";
// elements
import Link from "next/link";
import cmsUrlToNextHref from "~/utils/cmsUrlToNextHref";
import Asset, { AssetProps } from "~/components/elements/media/Asset";
import { CircleArrow, GeniusFaviconIcon, StockArrow } from "~/components/elements/Icons";
import trackEvent from "~/utils/trackEvent";

interface HeaderCardProps {
	card;
	parentMenu: any;
}

function HeaderCard({ card, parentMenu }: HeaderCardProps) {
	const [investorsData, setInvestorsData] = useState(null);

	const cardBackground = [""];
	const arrowColor = [""];

	if (card.background === "white") {
		cardBackground.push("bg-blue lg:bg-white text-white lg:text-navy hover:bg-blue hover:text-white");
		arrowColor.push("bg-white text-blue");
	} else {
		cardBackground.push("bg-navy text-white  lg:bg-lightBlue lg:text-navy hover:bg-navy hover:text-white");
		arrowColor.push("bg-purple text-white");
	}

	const bars = Array.from({ length: 30 }, (_, i) => i + 1);

	// Fetch investors data if shown
	useEffect(() => {
		const fetchInvestorsData = async () => {
			const response = await fetch("https://investors.geniussports.com/feed/StockQuote.svc/GetFullStockQuoteList?exchange=NYSE&symbol=GENI&pageSize=1");

			if (!response.ok) {
				throw new Error("Failed to fetch investor data");
			} else {
				const data = await response.json();
				setInvestorsData(data);
			}
		};

		if (card?.show_investor_data) {
			fetchInvestorsData();
		}
	}, [card?.show_investor_data]);

	return (
		<Link
			href={cmsUrlToNextHref(card?.link?.url || "#")}
			target={card?.link?.target}
			className={`group relative block h-full overflow-hidden rounded-lg p-6 transition-colors duration-300 ${cardBackground.join(" ")}`}
			onClick={() => {
				if (!parentMenu) return;
				trackEvent("menu_trackevent", {
					level_1: parentMenu.menu_item.title,
					level_2: card?.link?.title,
					menu_type: "menu_header",
				});
			}}
		>
			<div className="relative z-10 flex h-full flex-col">
				<div
					className={`absolute right-0 z-10 h-5 w-5 rounded-full transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[1] lg:rotate-45 lg:scale-0 ${arrowColor.join(" ")}`}
				>
					<CircleArrow />
				</div>
				{/* links content */}
				<span className="text-20 mb-2 font-heading font-medium tracking-[-0.0125em]" dangerouslySetInnerHTML={{ __html: card?.link?.title }} />
				<p
					className="text-15 mb-6 max-w-[18.125rem] font-body !leading-[1.4] tracking-[-0.009375em] opacity-80 lg:mb-[3.375rem]"
					dangerouslySetInnerHTML={{ __html: card.description }}
				/>
				{/* media / api */}
				{!card.show_investor_data && (
					<div className="mt-auto overflow-hidden rounded-md">
						<Asset {...card.media} />
					</div>
				)}
				{card.show_investor_data && (
					<div className="mt-auto flex flex-col rounded-md bg-white p-4 text-navy">
						<div className="mb-8 flex items-center space-x-2 md:mb-10">
							<div className="flex h-6 w-6 items-center justify-center rounded-[0.125rem] bg-navy p-[.2rem] text-white">
								<GeniusFaviconIcon />
							</div>
							<div className="text-9 flex items-center space-x-2 rounded-[.35rem] bg-lightGrey p-[0.2rem] pl-[0.625rem] font-semibold">
								<span className="opacity-80" dangerouslySetInnerHTML={{ __html: investorsData?.GetFullStockQuoteListResult[0]?.Exchange }} />
								<span
									className="rounded-[.25rem] bg-white px-2 py-1"
									dangerouslySetInnerHTML={{ __html: investorsData?.GetFullStockQuoteListResult[0]?.Symbol }}
								/>
							</div>
						</div>
						<div className="flex items-end space-x-3">
							{!!investorsData?.GetFullStockQuoteListResult[0]?.TradePrice?.toFixed(2) && (
								<span
									className="text-40 !leading-none"
									dangerouslySetInnerHTML={{ __html: `$${investorsData?.GetFullStockQuoteListResult[0]?.TradePrice?.toFixed(2)}` }}
								/>
							)}
							<div
								className={`inline-flex items-center space-x-2 rounded-full bg-lightGrey px-[0.375rem] py-[0.35rem] ${investorsData?.GetFullStockQuoteListResult[0]?.PercChange > 0 ? "text-lightGreen" : "text-lightRed"}`}
							>
								<span
									className="text-12 font-body font-bold !leading-none"
									dangerouslySetInnerHTML={{ __html: `${investorsData?.GetFullStockQuoteListResult[0]?.PercChange}%` }}
								/>
								<div className={`h-[.6rem] w-[.8rem] shrink-0 ${investorsData?.GetFullStockQuoteListResult[0]?.PercChange > 0 ? "" : "rotate-180"}`}>
									<StockArrow />
								</div>
							</div>
						</div>
						<span
							className="text-11 mt-2 inline-block font-body font-medium opacity-40 md:mt-3"
							dangerouslySetInnerHTML={{ __html: investorsData?.GetFullStockQuoteListResult[0]?.TradeDate }}
						/>
					</div>
				)}
			</div>
			{/* try and make this systemic */}
			{/* hover effect */}
			{/* bg white */}
			{card.background === "white" && (
				<div className="absolute inset-0 flex origin-bottom flex-col justify-end transition-transform duration-300 group-hover:scale-y-100 lg:scale-y-0">
					{bars.slice(0, 10).map((index) => (
						<div key={index} className="w-full bg-lightBlue" style={{ height: `${2 + 1 * index}px`, marginBottom: `${10 - 1 * index}px` }} />
					))}
					<div className="h-10 w-full bg-lightBlue" />
				</div>
			)}
			{card.background !== "white" && (
				<>
					<div className="absolute bottom-0 left-0 flex h-[62%] w-1/2 origin-bottom flex-col justify-end transition-transform duration-300 group-hover:scale-y-100 lg:scale-y-0">
						{bars.map((index) => (
							<div
								key={`header-card-bars-first-set-${index}`}
								className="w-full bg-purple"
								style={{ height: `${0 + 0.2 * index}px`, marginTop: `${8 - 0.2 * index}px` }}
							/>
						))}
					</div>
					<div className="absolute bottom-0 right-0 flex h-[62%] w-1/2 origin-bottom translate-y-[36%] flex-col justify-end transition-transform duration-300 group-hover:scale-y-100 lg:scale-y-0">
						{bars.map((index) => (
							<div
								key={`header-card-bars-second-set-${index}`}
								className="w-full bg-purple"
								style={{ height: `${0 + 0.2 * index}px`, marginTop: `${8 - 0.2 * index}px` }}
							/>
						))}
					</div>
				</>
			)}
		</Link>
	);
}
export default HeaderCard;
