import { WpOptions, WpPage } from "~/types/wp";
import Layout from "../Layout";
import SingleCustomerStoryMasthead from "./components/SingleCustomerStoryMasthead";
import SingleCustomerStoryBody from "./components/SingleCustomerStoryBody";
// import SingleNewsMasthead from "./components/SingleNewsMasthead";
// import SingleNewsBody from "./components/SingleNewsBody";

interface SingleCustomerStoryProps {
	options: WpOptions;
	page: WpPage;
}

function SingleCustomerStory(props: SingleCustomerStoryProps) {
	// console.log("SingleCustomerStory.props", props);

	const { page } = props;

	const hasFlexContent = page?.inner_page?.article?.components?.length > 0;

	return (
		<Layout blockHeaderScroll addScrollProgress data={props} footerColorOverride="white">
			<SingleCustomerStoryMasthead {...page} />
			{hasFlexContent ? (
				<SingleCustomerStoryBody {...page} />
			) : (
				<section className="py-14">
					<div className="container--736px single-customer-story__post-content container">
						<div className="prose" dangerouslySetInnerHTML={{ __html: page.post_content }} />
					</div>
				</section>
			)}
		</Layout>
	);
}

export default SingleCustomerStory;
