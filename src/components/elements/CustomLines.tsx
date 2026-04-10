// When using with lineDirection vertical width will be based on container width
// When using with lineDirection horizontal height will be based on container height

import clsx from "clsx";

// TODO : update for custom array prop of custom widths for non correlated lines
function CustomLines({
	lineNumber = 3,
	lineDirection = "horizontal",
	className = "",
	lineClassName = "",
	initialLineWidth = 8,
	initialSpacing = 4,
	widthFactor = 0.4,
	spacingFactor = 0.7,
}) {
	return (
		<div className={clsx("flex h-full w-full", className, lineDirection === "horizontal" && "flex-row", lineDirection === "vertical" && "flex-col")}>
			{Array(lineNumber)
				.fill("")
				.map((_, index) => (
					<div
						key={`custom-line-${index}`}
						style={{
							...(lineDirection === "horizontal" && { width: initialLineWidth / (1 + index * widthFactor), height: "100%" }),
							...(lineDirection === "vertical" && { height: initialLineWidth / (1 + index * widthFactor), width: "100%" }),
							...(lineDirection === "horizontal" && { marginRight: initialSpacing * (1 + index * spacingFactor) }),
							...(lineDirection === "vertical" && { marginBottom: initialSpacing * (1 + index * spacingFactor) }),
						}}
						className={`bg-lightGrey ${lineClassName}`}
					/>
				))}
		</div>
	);
}

export default CustomLines;
