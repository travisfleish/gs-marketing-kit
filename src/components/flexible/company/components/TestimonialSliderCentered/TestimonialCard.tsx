import WpImage from "~/components/elements/Wp";

function TestimonialCard({ testimonial }) {
	const { main_text, author } = testimonial || {};

	return (
		<div className="testimonial-slider-centered__card relative flex w-full max-w-[684px] flex-col items-start justify-between rounded-lg bg-lightPurple p-8 text-navy md:min-h-[400px] md:p-12">
			{/* Main Text */}
			{!!main_text && <p className="text-22 mb-12 text-center !tracking-[-0.04375em] md:text-left" dangerouslySetInnerHTML={{ __html: main_text }} />}

			{/* Author info */}
			<div className="flex items-center justify-start gap-4">
				{/* Avatar */}
				{!!author && <WpImage className="h-16 w-16 rounded-full object-cover" image={author.image} />}

				<div className="!tracking-[-0.04375em]">
					{/* Full Name */}
					{!!author?.full_name && (
						<p
							className="text-18 font-medium"
							dangerouslySetInnerHTML={{
								__html: author.full_name,
							}}
						/>
					)}

					<div className="flex font-body">
						<p>
							{/* Job role */}
							{author?.job_role} {author?.department ? ", " : ""}
							{/* Department */}
							<span
								className="font-medium"
								dangerouslySetInnerHTML={{
									__html: author.department,
								}}
							/>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TestimonialCard;
