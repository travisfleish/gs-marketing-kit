// Add progress bar

import { WpOptions, WpPage } from "~/types/wp";
import Layout from "../Layout";
import BlogBody from "./components/BlogBody";
import BlogMasthead from "./components/BlogMasthead";
import EventBody from "./components/EventBody";
import EventMasthead from "./components/EventMasthead";
import WebinarBody from "./components/WebinarBody";
import WebinarMasthead from "./components/WebinarMasthead";

function LayoutSelect(props) {
	const { layout } = props;

	return (
		<>
			{!layout ||
				(layout === "blog" && (
					<>
						<BlogMasthead {...props} />
						<BlogBody {...props} />
					</>
				))}
			{layout === "event" && (
				<>
					<EventMasthead {...props} />
					<EventBody {...props} />
				</>
			)}
			{layout === "webinar" && (
				<>
					<WebinarMasthead {...props} />
					<WebinarBody {...props} />
				</>
			)}
		</>
	);
}

interface SingleResourceProps {
	options: WpOptions;
	page: WpPage;
}

const headerOverrideColorMap = {
	blog: "lightBlue",
	webinar: "navy",
	event: "lightOrange",
};

function SingleResource(props: SingleResourceProps) {
	// console.log("SingleResource.props", props);

	const { page } = props;
	const post = page;

	return (
		<Layout
			addScrollProgress={post?.layout === "blog"}
			blockHeaderScroll={post?.layout === "blog"}
			data={props}
			headerColorOverride={headerOverrideColorMap[post.layout]}
			footerColorOverride="white"
		>
			<LayoutSelect {...post} />
		</Layout>
	);
}

export default SingleResource;
