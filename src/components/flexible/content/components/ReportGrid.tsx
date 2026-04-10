import React from "react";
// elements
import Link from "next/link";
import WpImage, { WpImageProps } from "~/components/elements/Wp";
import { CircleArrow } from "~/components/elements/Icons";

interface ReportGridProps {
	featured_report: {
		thumbnail: WpImageProps["image"];
		date: string;
		link?: {
			title: string;
			url?: string;
			target: "_blank" | "";
		};
	};
	reports: {
		link?: {
			title: string;
			url?: string;
			target: "_blank" | "";
		};
	}[];
}

function ReportGrid({ featured_report, reports }: ReportGridProps) {
	return (
		<div className="grid grid-cols-2 gap-x-3 md:grid-cols-12 md:gap-x-6">
			{/* featured report */}
			<Link
				href={featured_report?.link?.url}
				target={featured_report?.link?.target}
				className="group relative col-span-2 space-y-6 overflow-hidden rounded-lg bg-lightBlue p-6 sm:flex sm:space-x-8 sm:space-y-0 sm:pb-0 md:col-span-8 md:px-8 md:pt-8 lg:space-x-[3.75rem] xl:row-span-2"
			>
				<div className="flex max-w-[24rem] flex-col sm:h-full sm:pb-8 sm:pt-6">
					<span className="text-15 mb-auto text-blue" dangerouslySetInnerHTML={{ __html: featured_report?.date }} />
					<h3 className="text-h3 my-3 md:my-6" dangerouslySetInnerHTML={{ __html: featured_report?.link?.title }} />
					<div className="absolute right-6 top-6 mt-auto h-6 w-6 rounded-full bg-blue text-white transition-colors duration-300 group-hover:bg-white group-hover:text-blue sm:relative sm:right-0 sm:top-0">
						<CircleArrow />
					</div>
				</div>
				{/* thumbnail */}
				<div className="transform-translate relative hidden aspect-[295/420] w-full max-w-[18.625rem] overflow-hidden rounded-md duration-500 group-hover:-translate-y-3 sm:block">
					<WpImage image={featured_report?.thumbnail} fill className="h-full w-full object-cover object-top" />
				</div>
			</Link>
			{/* all reports */}
			{reports?.map((item, index) => (
				<Link key={index} href={item?.link?.url} target={item?.link?.target} className="group block border-b border-navy/5 py-4 md:col-span-4 md:p-8">
					<div className="mt-auto h-6 w-6 rounded-full bg-white text-blue transition-colors duration-300 group-hover:bg-blue group-hover:text-white">
						<CircleArrow />
					</div>
					<h3 className="text-h6 is-report mt-6 md:mt-10 lg:mt-[3.25rem]" dangerouslySetInnerHTML={{ __html: item?.link?.title }} />
				</Link>
			))}
		</div>
	);
}

export default ReportGrid;
