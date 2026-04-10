import Asset from "~/components/elements/media/Asset";

function FeauturedSectionFullWidth({ featuredSection }) {
	return (
		<div className="text-16 flex items-start justify-between gap-6 rounded-lg bg-lightGrey p-2 md:mt-10 md:gap-10 md:pl-5">
			<div className="w-full border md:max-w-[40%]">
				{/* Heading */}
				{!!featuredSection?.heading && (
					<p
						className="mb-3 border font-medium text-navy"
						dangerouslySetInnerHTML={{
							__html: featuredSection.heading,
						}}
					/>
				)}

				{/* Content */}
				{!!featuredSection?.content && (
					<p
						className="font-body text-navy/80"
						dangerouslySetInnerHTML={{
							__html: featuredSection.content,
						}}
					/>
				)}
			</div>

			{/* Asset */}
			{!!featuredSection?.asset && (
				<div className="relative aspect-[1/1] w-full max-w-[172px] overflow-hidden rounded-[4px] md:aspect-[172/111]">
					<Asset {...featuredSection?.asset} fill className="object-left md:object-cover" />
				</div>
			)}
		</div>
	);
}

export default FeauturedSectionFullWidth;
