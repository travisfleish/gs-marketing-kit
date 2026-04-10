import React from "react";
// elements
import Link from "next/link";
import { RightArrowCircle } from "~/components/elements/Icons";
import trackEvent from "~/utils/trackEvent";

interface DepartmentGroupProps {
	group: {
		title: string;
		jobs?: {
			title?: string;
			id?: string;
			absolute_url?: string;
			location?: {
				name?: string;
			};
		}[];
	};
}
function DepartmentGroup({ group }: DepartmentGroupProps) {
	return (
		<div className="">
			{/* Heading */}
			<h3 className="text-15 mb-6 mr-2 text-navy/60 md:mb-12">
				<span dangerouslySetInnerHTML={{ __html: group?.title }} />
				<span className="ml-2 text-navy" dangerouslySetInnerHTML={{ __html: group?.jobs?.length }} />
			</h3>

			<div className="flex flex-col divide-y-2 divide-lightGrey border-y border-lightGrey">
				{group?.jobs?.map((job) => (
					<Link
						key={job.id}
						className="group relative grid py-4 md:grid-cols-7 md:gap-x-6 md:py-8"
						href={`/careers/job/${job.id}`}
						// href={job.absolute_url}
						target="_blank"
						rel="noopener noreferrer"
						onClick={() => {
							trackEvent("job_trackevent", {
								job_name: job?.title,
								city_name: job?.location?.name,
								exit_click: `/careers/job/${job.id}`,
							});
						}}
					>
						{!!job?.title && (
							<h4
								className="text-22 mb-2 w-[80%] font-medium !leading-[1.2] transition-transform duration-300 ease-in-out group-hover:translate-x-2 md:col-span-4 md:group-hover:translate-x-4"
								dangerouslySetInnerHTML={{ __html: job.title }}
							/>
						)}

						{!!job?.location?.name && (
							<p className="text-16 font-body font-normal text-navy/60 md:col-span-2" dangerouslySetInnerHTML={{ __html: job?.location?.name }} />
						)}
						<div className="flex items-center justify-end">
							<div className="absolute right-0 top-4 transition-transform duration-300 ease-in-out group-hover:-translate-x-2 md:relative md:top-auto md:group-hover:-translate-x-4">
								<RightArrowCircle circleClassName="text-navy group-hover:text-blue" />
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}

export default DepartmentGroup;
