import React from "react";
import { WpOptions, WpPage } from "~/types/wp";
import Layout from "~/components/templates/Layout";
import LayoutRenderer from "~/components/layouts/LayoutRenderer";

type PageProps = {
	page: WpPage;
	options: WpOptions;
};

export default function Page(data: PageProps) {
	const { page } = data;

	return (
		<Layout data={data}>
			<LayoutRenderer {...page} />
		</Layout>
	);
}
