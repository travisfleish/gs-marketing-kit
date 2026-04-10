import WpImage from "~/components/elements/Wp";
import { m } from "framer-motion";

function TestimonialCard({ card, isInView }) {
	const { testimonial } = card;

	return (
		<m.div
			animate={{ opacity: isInView ? 1 : 0, transition: { duration: 0.4, ease: "easeInOut" } }}
			className="flex h-full flex-col gap-6 rounded-xl bg-navy p-4 sm:gap-14 md:p-6 960:h-auto 960:min-w-[286px] 960:rounded-b-none"
		>
			<div className="flex items-center gap-3">
				{/* Avatar */}
				{!!testimonial.image && <WpImage image={testimonial.image} className="h-16 w-16 rounded-full object-cover" />}

				<div className="flex flex-col gap-1">
					{/* Name */}
					{!!testimonial?.full_name && <p className="text-18 text-white" dangerouslySetInnerHTML={{ __html: testimonial.full_name }} />}
					{/* Role */}
					{!!testimonial?.job_role && <p className="text-15 font-body text-white/85" dangerouslySetInnerHTML={{ __html: testimonial.job_role }} />}
				</div>
			</div>

			{/* Main text */}
			{!!testimonial?.main_text && <p className="text-16 font-body text-white/90 sm:mb-10" dangerouslySetInnerHTML={{ __html: testimonial.main_text }} />}
		</m.div>
	);
}

export default TestimonialCard;
