import { WpOptions, WpPage } from "~/types/wp";
import Layout from "../Layout";
import SingleNewsMasthead from "./components/SingleNewsMasthead";
import SingleNewsBody from "./components/SingleNewsBody";

interface SingleNewsProps {
	options: WpOptions;
	page: WpPage;
}

function SingleNews(props: SingleNewsProps) {
	// console.log("SingleNews.props", props);

	const { page } = props;

	return (
		<Layout blockHeaderScroll addScrollProgress data={props} footerColorOverride="white">
			<SingleNewsMasthead {...page} />
			<SingleNewsBody {...page} />
		</Layout>
	);
}

export default SingleNews;
