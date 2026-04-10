import React from "react";
import { NextSeo } from "next-seo";
import Head from "next/head";
import type { WpPage } from "~/types/wp";

type SeoProps = {
	page: WpPage;
};

export default function Seo({ page }: SeoProps) {
	return (
		<div>
			{page?.seo && (
				<NextSeo
					title={page.seo.title}
					description={page.seo.description}
					canonical={page.url}
					noindex={page.seo.robots?.includes("noindex")}
					nofollow={page.seo.robots?.includes("nofollow")}
					robotsProps={{
						noarchive: page.seo.robots?.includes("noarchive"),
						noimageindex: page.seo.robots?.includes("noimageindex"),
						nosnippet: page.seo.robots?.includes("nosnippet"),
						notranslate: page.seo.robots?.includes("notranslate"),
					}}
					openGraph={{
						url: page.url,
						title: page.seo.title,
						description: page.seo.description,
						images: [
							{
								url: page.seo.image,
							},
						],
					}}
				/>
			)}
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png" />
				<link rel="manifest" href="/images/favicons/site.webmanifest" />
				<link rel="mask-icon" href="/static/images/favicons/safari-pinned-tab.svg" color="#0000DC" />
				<meta name="msapplication-TileColor" content="#0000DC" />
				<meta name="theme-color" content="#0000DC" />
				<meta name="twitter:card" content="summary" />
				{page?.seo?.schema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(page?.seo?.schema) }} />}
			</Head>
		</div>
	);
}
