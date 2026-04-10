import WpImage from "~/components/elements/Wp";
import clsx from "clsx";
import LocationsGridContent from "./LocationsGridContent";

const containerClassName = "flex flex-col items-start justify-end rounded-xl bg-navy text-white";

const rowOnecontainerClassNameMap = {
	0: "md:aspect-[375/228] md:aspect-[713/406] min-h-[300px] md:min-h-fit w-full md:max-w-[713px]",
	1: "md:aspect-[285/261] md:aspect-[543/465] min-h-[300px] md:min-h-fit w-full md:max-w-[543px]",
};

const rowTwocontainerClassNameMap = {
	0: "md:aspect-[216/212] md:aspect-[411/359] min-h-[300px] md:min-h-fit w-full md:max-w-[411px]",
	1: "md:aspect-[215/280] md:aspect-[411/474] min-h-[300px] md:min-h-fit w-full md:max-w-[411px]",
	2: "md:aspect-[216/172] md:aspect-[411/292] min-h-[300px] md:min-h-fit w-full md:max-w-[411px]",
};

function LocationCard({ index, location, row }) {
	return (
		<div
			className={clsx(
				row === 1 && rowOnecontainerClassNameMap?.[index],
				row === 2 && rowTwocontainerClassNameMap?.[index],
				containerClassName,
				"relative overflow-hidden"
			)}
		>
			{/* Image */}
			{!!location?.image?.url && <WpImage image={location?.image} className="absolute inset-0 h-full w-full rounded-lg object-cover object-center" />}

			{/* Overlay */}
			<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

			{/* Content */}
			<LocationsGridContent location={location} />
		</div>
	);
}

export default LocationCard;
