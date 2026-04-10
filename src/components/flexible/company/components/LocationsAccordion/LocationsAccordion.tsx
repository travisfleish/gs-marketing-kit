import { ImageProps } from "~/components/elements/Wp";
import { useRef, useState } from "react";
// import { useInView } from "framer-motion";
import { HorizontalBars } from "~/components/landing/Legal/components/LegalMasthead";
import { WpLinkType } from "~/types/wp";
import LocationsRow from "./LocationsRow";

interface LocationsAccordionOffice {
	description: string;
	heading: string;
	image: ImageProps;
	subheading: string;
	link: WpLinkType;
}

interface LocationsAccordionLocation {
	heading: string;
	subheading: string;
	offices: LocationsAccordionOffice[];
}

interface LocationsAccordionProps {
	content: {
		locations: LocationsAccordionLocation[];
	};
}

function LocationsAccordion(props: LocationsAccordionProps) {
	const [activeIndex, setActiveIndex] = useState(0);

	const ref = useRef(null);
	// const isInView = useInView(ref, { amount: 0.1 });

	const { content } = props;
	const { locations } = content;

	return (
		<div className="locations-accordion" ref={ref}>
			<div className="container--extra-small container">
				<HorizontalBars className="" barsClassName="bg-lightGrey" marginInitial={14} marginFactor={0.4} />

				<div className="flex flex-col divide-y divide-lightGrey border-y border-lightGrey">
					{locations?.length > 0 &&
						locations.map((location, index) => (
							<LocationsRow
								key={`location-row-${index}`}
								location={location}
								onClick={() => {
									if (activeIndex === index) {
										setActiveIndex(-1);
									} else {
										setActiveIndex(index);
									}
								}}
								isExpanded={activeIndex === index}
								// isInView={isInView}
							/>
						))}
				</div>
			</div>
		</div>
	);
}

export default LocationsAccordion;
