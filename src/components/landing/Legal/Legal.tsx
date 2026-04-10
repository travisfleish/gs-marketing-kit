// TODO : Split into components more
// TODO : Responsive design
// TODO : Indicators animation
// TODO : Masthead lines

import { LegalType } from "~/types/wp";
import LegalMasthead from "./components/LegalMasthead";
import LegalMain from "./components/LegalMain";

function Legal(props: LegalType) {
	const { masthead, content } = props;

	return (
		<div className="legal">
			<LegalMasthead masthead={masthead} />
			<LegalMain content={content} />
		</div>
	);
}

export default Legal;
