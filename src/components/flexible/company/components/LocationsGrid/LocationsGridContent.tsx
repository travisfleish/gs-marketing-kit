function LocationsGridContent({ location }) {
	const { heading, text } = location;

	return (
		<div className="relative">
			{/* Heading & Text */}
			<div className="p-6">
				{/* Heading */}
				{!!heading && <h6 dangerouslySetInnerHTML={{ __html: heading }} />}
				{/* Text */}
				{!!text && <p dangerouslySetInnerHTML={{ __html: text }} className="text-18 font-body" />}
			</div>
		</div>
	);
}

export default LocationsGridContent;
