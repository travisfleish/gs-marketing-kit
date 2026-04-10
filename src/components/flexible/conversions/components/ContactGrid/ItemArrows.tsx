import { ContactTopRightArrowCircle } from "~/components/elements/Icons";
import { m } from "framer-motion";

function ItemArrows({ isHovered, altVer }) {
	return (
		<>
			{altVer && isHovered && (
				<m.span
					initial={{ opacity: 0, x: -10, y: 10 }}
					animate={{
						opacity: isHovered ? 1 : 0,
						x: isHovered ? 0 : -10,
						y: isHovered ? 0 : 10,
						transition: {
							duration: 0.4,
							ease: "easeInOut",
						},
					}}
					className="absolute right-6 top-6 md:right-3 md:top-3 lg:right-6 lg:top-6"
				>
					<ContactTopRightArrowCircle />
				</m.span>
			)}

			{!altVer && isHovered && (
				<m.span
					initial={{ opacity: 0, x: -10, y: 10 }}
					animate={{
						opacity: isHovered ? 1 : 0,
						x: isHovered ? 0 : -10,
						y: isHovered ? 0 : 10,
						transition: {
							duration: 0.4,
							ease: "easeInOut",
						},
					}}
					className="absolute right-6 top-6 md:right-3 md:top-3 lg:right-6 lg:top-6"
				>
					<ContactTopRightArrowCircle arrowClassName="text-white" circleClassName="text-purple" />
				</m.span>
			)}
		</>
	);
}

export default ItemArrows;
