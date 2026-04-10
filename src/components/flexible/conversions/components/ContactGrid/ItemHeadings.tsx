import clsx from "clsx";
import { getSplitBreakText } from "~/utils/text";
import { motion } from "framer-motion";

function ItemHeadings({ subheading, heading, altVer }) {
	return (
		<>
			{/* Subheading */}
			{!!subheading && (
				<span
					className={clsx(
						"text-15 relative text-left transition-colors duration-300 ease-linear",
						altVer ? "text-white/80" : "text-navy/80 group-hover:text-white/80"
					)}
					dangerouslySetInnerHTML={{
						__html: subheading,
					}}
				/>
			)}

			{/* Heading */}
			{!!heading && (
				<motion.p
					layout="position"
					transition={{ duration: 0.25, ease: "linear" }}
					className={clsx(
						"text-h5 relative text-left font-bold transition-colors duration-300 ease-linear",
						altVer ? "text-white" : "text-navy group-hover:text-white"
					)}
					dangerouslySetInnerHTML={{
						__html: getSplitBreakText({
							text: heading,
						}),
					}}
				/>
			)}
		</>
	);
}

export default ItemHeadings;
