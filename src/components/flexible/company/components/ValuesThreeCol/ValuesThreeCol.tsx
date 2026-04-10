import ValuesThreeColCard from "./ValuesThreeColCard";

interface ValuesThreeColValue {
	heading: string;
	text_list: {
		text: string;
	}[];
}

interface ValuesThreeColProps {
	content: {
		values: ValuesThreeColValue[];
	};
}

function ValuesThreeCol(props: ValuesThreeColProps) {
	const { content } = props;

	return (
		<div className="values-three-col">
			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{content?.values?.length > 0 && content.values.map((value, index) => <ValuesThreeColCard key={`value-${index}`} value={value} index={index} />)}
			</div>
		</div>
	);
}

export default ValuesThreeCol;
