import WpImage from "~/components/elements/Wp";
import { m } from "framer-motion";

function ValuesGridCard({ value }) {
	const { image, heading: valueHeading, text, link, link_target } = value;

	const hoverBgStyle = link ? "hover:[background-color:rgb(229,229,229)] transition-colors duration-300 ease-in-out p-4" : null;

	return (
		<m.a
			href={link}
			target={link ? link_target : undefined}
			variants={valuesGridCardAnim}
			className={`flex flex-col items-start rounded-xl bg-lightGrey p-6 ${hoverBgStyle}`}
		>
			{/* Image */}
			{!!image?.url && <WpImage image={image} className="mb-[30px] h-12 w-12 object-contain" />}

			{/* Heading */}
			{!!valueHeading && <h6 dangerouslySetInnerHTML={{ __html: valueHeading }} className="mb-4 font-medium" />}

			{/* Text */}
			{!!text && <p dangerouslySetInnerHTML={{ __html: text }} className="text-18 max-w-[97.5%] font-body text-navy/80" />}
		</m.a>
	);
}

const valuesGridCardAnim = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0, transition: { duration: 0.4, type: "spring", stiffness: 120, damping: 20, restDelta: 0.001 } },
};

export default ValuesGridCard;
