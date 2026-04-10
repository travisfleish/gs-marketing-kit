import React from "react";

interface JobFiltersProps {
	activeDepartment: string;
	setActiveDepartment;
	activeLocation: string;
	setActiveLocation;
	departments: string[];
	locations: string[];
}

function JobFilters({ activeDepartment = "All", setActiveDepartment, activeLocation = "All", setActiveLocation, departments, locations }: JobFiltersProps) {
	const selectClassNames =
		"text-16 bg-snow block w-full rounded-lg border-none py-4 pl-5 pr-4 font-body font-normal focus:outline-none focus:ring-0 md:max-w-[331px]";
	return (
		<div className="flex w-full justify-center gap-3">
			<select
				className={selectClassNames}
				value={activeDepartment}
				onChange={(e) => {
					setActiveDepartment(e.target.value);
					setActiveLocation("All");
				}}
			>
				<option value="All">Department</option>
				{departments?.length > 0 &&
					departments?.map((department) => (
						<option key={department} value={department}>
							{department}
						</option>
					))}
			</select>

			<select className={selectClassNames} value={activeLocation} onChange={(e) => setActiveLocation(e.target.value)}>
				<option value="All">Location</option>
				{locations?.length > 0 &&
					locations?.map((location) => (
						<option key={location} value={location}>
							{location}
						</option>
					))}
			</select>
		</div>
	);
}

export default JobFilters;
