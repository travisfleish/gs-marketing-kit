import { ImageProps } from "~/components/elements/Wp";
import { WpLinkType } from "~/types/wp";
import clsx from "clsx";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useWindowSize } from "react-use";
import LocationCard from "./LocationCard";

interface LocationGridLocation {
	heading: string;
	image: ImageProps;
	link: WpLinkType;
	text: string;
}

interface LocationsGridProps {
	content: {
		locations: LocationGridLocation[];
	};
}

function LocationsGrid(props: LocationsGridProps) {
	const { content } = props;
	const { locations } = content || {};
	const { width: windowWidth } = useWindowSize();

	const ref = useRef(null);
	const isInViewThreshold = windowWidth > 768 ? 0.5 : 0.1;
	const isInView = useInView(ref, { amount: isInViewThreshold, once: true });

	return (
		<div ref={ref} className="locations-grid relative">
			{/* Top left cards lines */}
			<div
				className={clsx(
					isInView ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0",
					"transition-[transform, opacity] origin-right duration-300 ease-linear",
					"absolute -left-20 -top-4 flex h-[267px] md:top-0"
				)}
			>
				{Array(28)
					.fill("")
					.map((_, i) => (
						<div key={`top-left-card-line-${i}`} style={{ width: `${14 - i * 0.5}px`, marginRight: `${4 + i * 0.4}px` }} className="h-full bg-purple" />
					))}
			</div>

			{/* Middle Right Cards lines */}
			<div
				className={clsx(
					isInView ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0",
					"transition-[transform, opacity] origin-left duration-300 ease-linear",
					"absolute -bottom-4 -right-20 flex h-[267px] flex-row-reverse md:bottom-0 md:top-[50%] md:-translate-y-1/2"
				)}
			>
				{Array(28)
					.fill("")
					.map((_, i) => (
						<div key={`middle-right-card-line-${i}`} style={{ width: `${10 - i * 0.5}px`, marginRight: `${8 - i * 0.01}px` }} className="h-full bg-purple" />
					))}
			</div>
			{/* Row one */}
			<div className="mb-4 flex flex-col gap-4 md:mb-6 md:flex-row md:items-end md:gap-6">
				{[...locations]?.splice(0, 2)?.map((location, index) => <LocationCard index={index} location={location} row={1} key={`location-row-one-${index}`} />)}
			</div>
			{/* Row two */}
			<div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
				{[...locations]?.splice(2, 4)?.map((location, index) => <LocationCard index={index} location={location} row={2} key={`location-row-two-${index}`} />)}
			</div>
		</div>
	);
}

export default LocationsGrid;
