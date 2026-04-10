/* eslint-disable  arrow-body-style */

const FilterJobs = (roles, selectedDepartment, selectedLocation) => {
	return roles?.filter((job) => {
		const departmentMatches = selectedDepartment === "All" || job.departments[0]?.name === selectedDepartment;
		const locationMatches = selectedLocation === "All" || job.location.name === selectedLocation;
		return departmentMatches && locationMatches;
	});
};

export default FilterJobs;

export const GroupJobsByDepartment = (jobs) => {
	const groupedJobs = {};

	jobs?.forEach((job) => {
		const departmentName = job.departments[0]?.name || "Other"; // Use 'Other' if department name is missing
		const departmentId = job.departments[0]?.id || null;

		if (!groupedJobs[departmentName]) {
			groupedJobs[departmentName] = {
				title: departmentName,
				id: departmentId,
				jobs: [],
			};
		}

		groupedJobs[departmentName].jobs.push(job);
	});

	// Convert the object to an array for mapping in the render
	return Object.values(groupedJobs);
};

export const GetVisibleJobs = (listedJobs, visibleJobs) => {
	const jobsToShow = [];
	let jobsCount = 0;

	listedJobs.forEach((group) => {
		const remainingJobs = visibleJobs - jobsCount;
		if (remainingJobs <= 0) return;
		const groupJobsToShow = group.jobs.slice(0, remainingJobs);
		jobsToShow.push({ ...group, jobs: groupJobsToShow });
		jobsCount += groupJobsToShow.length;
	});

	return jobsToShow;
};

interface FilterJobsByCountryAndCityInterface {
	jobs: {
		departments: { name: string }[];
		location: { name: string };
		title: string;
	}[];
	department: string;
	country: string;
	city: string;
}

export const FilterJobsByCountryAndCity = ({ jobs, department, country, city }: FilterJobsByCountryAndCityInterface) => {
	return jobs?.filter((job) => {
		const departmentMatches = department === "All" || job.departments[0]?.name === department;
		const countryMatches = country === "All" || job.location.name?.indexOf(country) >= 0;
		const cityMatches = city === "All" || job.location.name?.indexOf(city) >= 0;

		return departmentMatches && countryMatches && cityMatches;
	});
};
