import React, { useEffect, useState } from "react";

interface CountryAndCityFiltersProps {
	activeDepartment: string;
	setActiveDepartment;
	activeCity: string;
	setActiveCity;
	activeCountry: string;
	setActiveCountry;
	departments: string[];
	locations: string[];
}

function CountryAndCityFilters(props: CountryAndCityFiltersProps) {
	const [countries, setCountries] = useState({});
	const [cities, setCities] = useState([]);

	let selectClassNames = "text-16 bg-snow block w-full rounded-lg border-none py-4 pl-5 pr-4 font-body";
	selectClassNames += " font-normal focus:outline-none focus:ring-0 md:max-w-[331px]";

	const handleOnChangeDepartment = (value) => {
		props?.setActiveCountry("All");
		props?.setActiveCity("All");
		props?.setActiveDepartment(value);
	};

	const handleOnChangeCountry = (value) => {
		setCities(countries[value]);
		props?.setActiveCountry(value);
		props?.setActiveCity("All");
	};

	useEffect(() => {
		const countriesList: { [x: string]: string[] } = {};

		props?.locations?.forEach((location) => {
			const isRemote = location?.indexOf("Remote") >= 0;
			const locationArray = location.split(isRemote ? "-" : ",");
			const country = locationArray[locationArray.length - 1]?.trim();
			const city = location?.replace(`, ${country}`, "")?.replace(`- ${country}`, "")?.trim();

			if (countriesList[country]) {
				countriesList[country]?.push(city);
			} else {
				countriesList[country] = [city];
			}

			const countryCities = new Set(countriesList[country]);
			countriesList[country] = Array.from(countryCities);
		});

		setCities([]);
		setCountries(countriesList);
	}, [props?.locations]);

	return (
		<div className="flex w-full justify-center gap-3">
			<select className={selectClassNames} value={props?.activeDepartment} onChange={(e) => handleOnChangeDepartment(e.target.value)}>
				<option value="All">Department</option>
				{props?.departments?.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>

			<select className={selectClassNames} value={props?.activeCountry} onChange={(e) => handleOnChangeCountry(e.target.value)}>
				<option value="All">Country</option>
				{Object.keys(countries)?.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>

			<select className={selectClassNames} value={props?.activeCity} onChange={(e) => props?.setActiveCity(e.target.value)}>
				<option value="All">City</option>
				{cities?.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	);
}

export default CountryAndCityFilters;
