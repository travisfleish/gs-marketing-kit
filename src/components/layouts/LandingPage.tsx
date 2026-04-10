import { FourOhFourType, LegalType } from "~/types/wp";
import FourOhFour from "../landing/FourOhFour";
import Legal from "../landing/Legal/Legal";

interface LandingPageProps {
	layout: string;
	four_oh_four: FourOhFourType;
	legal: LegalType;
}
function LandingPage({ layout, four_oh_four, legal }: LandingPageProps) {
	if (layout === "fourOhFour") {
		return <FourOhFour {...four_oh_four} />;
	}
	if (layout === "legal") {
		return <Legal {...legal} />;
	}
}
export default LandingPage;
