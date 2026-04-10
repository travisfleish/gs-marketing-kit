/* eslint-disable no-shadow */

import React, { useState, useEffect, useMemo } from "react";
// elements
import { CircleArrow, RightArrowCircle } from "~/components/elements/Icons";
import { Link } from "~/components/elements/links/Link";
import JobFilters from "./JobFilters";
import DepartmentGroup from "./DepartmentGroup";
// helpers
import FilterJobs, { GroupJobsByDepartment, GetVisibleJobs, FilterJobsByCountryAndCity } from "./JobListingHelpers";
import CountryAndCityFilters from "./CountryAndCityFilters";

interface JobRolesProps {
	content: {
		heading: string;
		filter_type: "normal" | "country_and_city";
		filter_departments_condition: "include" | "exclude";
		departments_to_filter: {
			department_title: string;
			show_in_select?: boolean;
			not_results_text?: string;
			see_results_button_link?: string;
			see_results_button_text?: string;
			see_results_button_target: "yes" | "no";
		}[];
	};
}

function JobRoles(props: JobRolesProps) {
	const { content } = props;
	const { heading, filter_type, filter_departments_condition, departments_to_filter } = content || {};

	// all roles
	const [jobs, setJobs] = useState(null);
	const [listedJobs, setListedJobs] = useState(null);
	// departments
	const [departments, setDepartments] = useState([]);
	const [activeDepartment, setActiveDepartment] = useState("All");

	// filtered wp departments
	const [filteredDepartments, setFilteredDepartments] = useState(null);

	// locations
	const [locations, setLocations] = useState([]);
	const [activeLocation, setActiveLocation] = useState("All");
	// country and city
	const [activeCountry, setActiveCountry] = useState("All");
	const [activeCity, setActiveCity] = useState("All");

	const handleChangeLocations = (filteredJobs) => {
		const allJobsGrouped = filteredJobs?.map(({ jobs }) => jobs);
		const allJobs = allJobsGrouped?.reduce((acc, cv) => (acc ? [...acc, ...cv] : cv), []);
		const allLocations = allJobs?.map(({ location: { name } }) => name);
		setLocations(allLocations);
	};

	useEffect(() => {
		const fetchDepartmentsAndLocations = async () => {
			const url = `https://boards-api.greenhouse.io/v1/boards/geniussports/jobs?content=true`;

			try {
				const response = await fetch(url);
				const data = await response.json();

				if (!data.jobs) {
					throw new Error("No jobs data found");
				}

				const departmentsSet = new Set();
				const filterCondition = filter_departments_condition;
				const isInclude = filterCondition === "include";
				const isExclude = filterCondition === "exclude";

				const filteredDepartments = departments_to_filter?.reduce((acc, current) => {
					acc[current?.department_title] = current;
					return acc;
				}, []);

				setFilteredDepartments(filteredDepartments);

				const filteredDepartmentsAreEmpty = departments_to_filter?.length < 1;

				const filteredJobs = data?.jobs?.filter((job) => {
					let addJob = false;

					job.departments.forEach((department) => {
						const filteredDepartment = filteredDepartments ? filteredDepartments[department.name] : null;
						const departmentIsFiltered = !!filteredDepartment;

						if (isInclude && (departmentIsFiltered || filteredDepartmentsAreEmpty)) {
							addJob = true;
							departmentsSet.add(department.name);
						}

						if (isExclude && (!departmentIsFiltered || filteredDepartmentsAreEmpty)) {
							departmentsSet.add(department.name);
							addJob = true;
						}

						if (isExclude && departmentIsFiltered && filteredDepartment?.show_in_select) {
							departmentsSet.add(department.name);
						}
					});

					return addJob;
				});

				setJobs(filteredJobs);
				setDepartments(Array.from(departmentsSet));
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchDepartmentsAndLocations();
	}, []);

	const departmentNotResultsData = useMemo(() => {
		if (!filteredDepartments || !filteredDepartments[activeDepartment]) {
			return null;
		}

		const departmentFilteredData = filteredDepartments[activeDepartment];
		departmentFilteredData.not_results_text = departmentFilteredData?.not_results_text || "Your query didn't return any results.";

		return departmentFilteredData;
	}, [filteredDepartments, activeDepartment]);

	// Use the useEffect hook to apply filtering and grouping
	useEffect(() => {
		if (filter_type !== "normal") {
			return;
		}

		// Apply filtering
		const filteredJobs = FilterJobs(jobs, activeDepartment, activeLocation);

		// Group the filtered jobs by department
		const groupedFilteredJobs = GroupJobsByDepartment(filteredJobs);

		// Set filtered and grouped jobs in JobsByDepartment
		setListedJobs(groupedFilteredJobs);

		if (activeLocation === "All") {
			const locationNames = filteredJobs?.map(({ location: { name } }) => name);
			const uniqueLocations = Array.from(new Set(locationNames));
			setLocations(uniqueLocations);
		}
	}, [filter_type, jobs, activeDepartment, activeLocation]);

	// Use the useEffect hook to apply filtering and grouping
	useEffect(() => {
		if (filter_type !== "country_and_city") {
			return;
		}

		// Apply filtering
		const filteredJobs = FilterJobsByCountryAndCity({
			jobs,
			department: activeDepartment,
			country: activeCountry,
			city: activeCity,
		});

		// Group the filtered jobs by department
		const groupedFilteredJobs = GroupJobsByDepartment(filteredJobs);

		// Set filtered and grouped jobs in JobsByDepartment
		setListedJobs(groupedFilteredJobs);

		// Set locations from filtered grouped jobs
		if (activeCountry === "All" && activeCity === "All") {
			handleChangeLocations(groupedFilteredJobs);
		}
	}, [filter_type, jobs, activeDepartment, activeCountry, activeCity]);

	// load more
	const totalJobs = listedJobs?.reduce((acc, group) => acc + (group.jobs?.length || 0), 0);

	const [visibleJobs, setVisibleJobs] = useState(10);

	const loadMoreJobs = () => {
		setVisibleJobs((prevVisibleJobs) => prevVisibleJobs + 10);
	};

	const visibleJobGroups = listedJobs && GetVisibleJobs(listedJobs, visibleJobs);

	return (
		<div className="job roles mx-auto max-w-[66.375rem]">
			<div className="container">
				<div className="mb-12 flex w-full flex-col items-center sm:mb-20 md:mb-[120px]">
					{/* Heading */}
					{!!heading && <span className="text-h2 mx-auto mb-12 text-center md:mb-16" dangerouslySetInnerHTML={{ __html: heading }} />}

					{/* Department, location dropdowns */}
					{filter_type === "normal" && (
						<JobFilters
							activeDepartment={activeDepartment}
							setActiveDepartment={setActiveDepartment}
							activeLocation={activeLocation}
							setActiveLocation={setActiveLocation}
							departments={departments}
							locations={locations}
						/>
					)}

					{filter_type === "country_and_city" && (
						<CountryAndCityFilters
							activeDepartment={activeDepartment}
							setActiveDepartment={setActiveDepartment}
							activeCountry={activeCountry}
							setActiveCountry={setActiveCountry}
							activeCity={activeCity}
							setActiveCity={setActiveCity}
							departments={departments}
							locations={locations}
						/>
					)}
				</div>

				{/* Job Listings */}
				<div className="flex flex-col space-y-10 md:space-y-12 lg:space-y-16">
					{visibleJobGroups?.length > 0 ? (
						visibleJobGroups?.map((group, index) => <DepartmentGroup key={index} group={group} />)
					) : (
						<div className="inline-block w-auto text-left">
							{/* Heading */}
							<h3 className="text-15 mb-6 mr-2 text-navy/60 md:mb-12">
								<span dangerouslySetInnerHTML={{ __html: departmentNotResultsData?.department_title }} />
							</h3>

							<p className="mb-4" dangerouslySetInnerHTML={{ __html: departmentNotResultsData?.not_results_text }} />

							{departmentNotResultsData?.see_results_button_link && (
								<Link href={departmentNotResultsData?.see_results_button_link || "/"} className="flex items-center gap-[14px] font-bold text-inherit">
									<div className="h-6 w-6 rounded-full bg-navy text-white transition-transform duration-300 group-hover:rotate-[90deg]">
										<RightArrowCircle circleClassName="text-navy group-hover:text-blue" />
									</div>
									<span dangerouslySetInnerHTML={{ __html: departmentNotResultsData?.see_results_button_text }} />
								</Link>
							)}
						</div>
					)}
					{visibleJobs < totalJobs && (
						<div className="flex items-center justify-center">
							<button
								type="button"
								aria-label="Load more open roles"
								onClick={loadMoreJobs}
								className="text-17 group mt-4 inline-flex items-center space-x-3 p-2 font-semibold text-navy"
							>
								<div className="h-6 w-6 rounded-full bg-navy text-white transition-transform duration-300 group-hover:rotate-[135deg]">
									<CircleArrow />
								</div>
								<span dangerouslySetInnerHTML={{ __html: "Load more" }} />
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default JobRoles;
