import Link from "next/link";
import { RightArrowCircle } from "~/components/elements/Icons";
import WpImage from "~/components/elements/Wp";

function OfficeRow({ office }) {
	const { description, heading: officeHeading, image, subheading: officeSubheading } = office;

	return (
		<Link href={office?.link?.url || "/"} target="_blank" className="group flex flex-col justify-start sm:flex-row">
			{/* Image */}
			{!!image && (
				<div className="mb-3 mr-8 aspect-[218/138] w-full max-w-[100%] overflow-hidden rounded sm:mb-0 sm:max-w-[218px] md:mr-16">
					<WpImage className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" image={image} />
				</div>
			)}

			<div className="flex flex-col gap-4 lg:flex-row lg:gap-16">
				<div className="flex flex-col items-start gap-4 lg:max-w-[40%]">
					{/* Heading */}
					{!!officeHeading && (
						<div className="flex items-center gap-3 transition-transform duration-300 lg:-translate-x-8 lg:group-hover:translate-x-0">
							<span className="transition-transform duration-300 lg:scale-0 lg:group-hover:scale-[1]">
								<RightArrowCircle height={22} width={22} />
							</span>
							<h6 dangerouslySetInnerHTML={{ __html: officeHeading }} className="text-22" />
						</div>
					)}

					{/* Subheading */}
					{!!officeSubheading && <p dangerouslySetInnerHTML={{ __html: officeSubheading }} className="text-18 font-body font-medium text-navy/60" />}
				</div>

				{/* Description */}
				{!!description && <p dangerouslySetInnerHTML={{ __html: description }} className="text-18 font-body text-navy/60 sm:max-w-[326px]" />}
			</div>
		</Link>
	);
}

export default OfficeRow;
