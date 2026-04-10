import React from "react";
// elements
import Link from "next/link";
import WpImage, { WpImageProps } from "~/components/elements/Wp";
import { CircleArrow } from "~/components/elements/Icons";
import trackEvent from "~/utils/trackEvent";

interface FeaturedCustomerProps {
	parentMenu: any;
	featuredCustomer: {
		permalink: string;
		post_title: string;
		acf: {
			media: {
				logo: WpImageProps["image"];
				thumbnail: WpImageProps["image"];
			};
			key_stats: {
				stat: string;
				caption: string;
			}[];
		};
	};
}

function FeaturedCustomer({ featuredCustomer, parentMenu }: FeaturedCustomerProps) {
	const bars = Array.from({ length: 17 }, (_, i) => i + 1);
	return (
		<div className="ml-auto w-full space-y-4 lg:max-w-[29.5rem] lg:space-y-6">
			{/* link card */}
			<Link
				href={featuredCustomer.permalink}
				className="group relative flex overflow-hidden rounded-[0.375rem] bg-green p-4 lg:p-5"
				onClick={() => {
					trackEvent("menu_trackevent", {
						level_1: parentMenu.menu_item.title,
						level_2: featuredCustomer.post_title,
						menu_type: "menu_header",
					});
				}}
			>
				{/* content */}
				<div className="relative z-10 flex h-full min-h-[9.5625rem] flex-col lg:min-h-[14rem]">
					{/* logo */}
					<div className="mb-12 flex h-8 w-[5rem] items-center">
						<WpImage image={featuredCustomer.acf.media.logo} className="h-full w-full object-contain object-left" />
					</div>
					<span
						className="text-20 mt-auto inline-flex font-heading font-medium tracking-[-0.0125em] text-white"
						dangerouslySetInnerHTML={{ __html: featuredCustomer.post_title }}
					/>
					{/* arrow */}
					<div className="absolute right-0 top-0 h-5 w-5 rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[1] lg:rotate-45 lg:scale-0">
						<CircleArrow />
					</div>
				</div>
				{/* mask */}
				<div className="absolute inset-0 z-[5] bg-gradient-to-t from-black" />
				{/* thumbnail */}
				<WpImage image={featuredCustomer.acf.media.thumbnail} fill className="z-0 h-full w-full object-cover" />
			</Link>
			{/* stat card */}
			{featuredCustomer?.acf?.key_stats?.length > 0 && (
				<div className="relative rounded-l-[0.375rem] bg-brightGreen text-black">
					{/* content */}
					<div className="relative z-10 flex items-center space-x-6 p-6 py-3 lg:max-w-[18rem]">
						<div className="text-header-stat relative py-2 font-heading font-[450] lg:py-4">
							<span
								className="relative z-10 inline-block bg-brightGreen font-heading font-[450]"
								dangerouslySetInnerHTML={{ __html: featuredCustomer.acf.key_stats[0].stat }}
							/>
							<span
								className="stat-stroke absolute left-0 top-0 text-brightGreen"
								dangerouslySetInnerHTML={{ __html: featuredCustomer.acf.key_stats[0].stat }}
							/>
							<span
								className="stat-stroke absolute bottom-0 left-0 text-brightGreen"
								dangerouslySetInnerHTML={{ __html: featuredCustomer.acf.key_stats[0].stat }}
							/>
						</div>
						<span
							className="text-18 line-clamp-2 inline-block font-heading font-[450]"
							dangerouslySetInnerHTML={{ __html: featuredCustomer.acf.key_stats[0].caption }}
						/>
					</div>
					{/* bars */}
					<div className="absolute inset-y-0 right-0 flex h-full flex-row-reverse justify-start lg:w-1/3">
						{bars.map((index) => (
							<div
								key={`featured-customer-bar-${index}`}
								className="h-full shrink-0 bg-white"
								style={{ width: `${8 - index * 0.4}px`, marginLeft: `${1.5 + 0.4 * index}px` }}
							/>
						))}
					</div>
				</div>
			)}
		</div>
	);
}

export default FeaturedCustomer;
