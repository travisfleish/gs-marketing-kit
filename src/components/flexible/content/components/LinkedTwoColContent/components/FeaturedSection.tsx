import Asset from "~/components/elements/media/Asset";

function FeauturedSection({ featuredSection }) {
	return (
		<div className="text-16 flex items-center justify-between gap-x-3 rounded-lg bg-lightGrey p-3 sm:mt-8 sm:flex-row md:gap-6 md:pl-5">
			<div className="w-2/3 md:w-full md:max-w-[40%] xl:max-w-[100%]">
				{/* Heading */}
				{!!featuredSection?.heading && (
					<p
						className="text-16 mb-1 font-medium text-navy sm:mb-3"
						dangerouslySetInnerHTML={{
							__html: featuredSection.heading,
						}}
					/>
				)}

				{/* Content */}
				{!!featuredSection?.content && (
					<p
						className="text-15 is-smaller font-body text-navy/80"
						dangerouslySetInnerHTML={{
							__html: featuredSection.content,
						}}
					/>
				)}
			</div>

			{/* Asset */}
			{!!featuredSection?.asset && (
				<div className="relative aspect-[172/111] w-1/3 overflow-hidden rounded-[4px] sm:w-full sm:max-w-[222px] xl:max-w-[172px]">
					<Asset {...featuredSection?.asset} fill />
				</div>
			)}
		</div>
	);
}

export default FeauturedSection;
