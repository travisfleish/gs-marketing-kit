import clsx from "clsx";
import GridItem from "./GridItem";
import { ThreeColLinesMastheadItem } from "./types";

interface ThreeColLinesMastheadProps {
	content: {
		items: ThreeColLinesMastheadItem[];
	};
}

function ThreeColLinesMasthead(props: ThreeColLinesMastheadProps) {
	const { content } = props;
	const gradientClasses = "absolute top-0 z-10 h-full w-[30%] from-navy via-transparent to-transparent block sm:hidden";

	return (
		<div className="three-col-lines-masthead">
			<div className="relative grid grid-cols-3 items-start gap-3 sm:gap-6">
				{/* Mobile gradients */}
				<div className={clsx(gradientClasses, "left-0 bg-gradient-to-r")} />
				<div className={clsx(gradientClasses, "right-0 bg-gradient-to-l")} />

				{content?.items?.map((item, index) => <GridItem key={`item-${index}`} item={item} index={index} />)}
			</div>
		</div>
	);
}

export default ThreeColLinesMasthead;
