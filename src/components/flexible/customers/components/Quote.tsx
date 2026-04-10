import React from "react";
// elements
import { WpImageProps } from "~/components/elements/Wp";
// blocks
import StaticQuote from "./Quote/StaticQuote";
import PageQuote from "./Quote/PageQuote";
import RotatingQuotes from "./Quote/RotatingQuotes";

export interface QuoteProps {
	quote_source: "customerStory" | "enterPage";
	customers: {
		permalink: string;
		acf: {
			media: {
				logo: WpImageProps["image"];
			};
			key_quote: {
				quotation: string;
			};
		};
	}[];
	quote: {
		logo: WpImageProps["image"];
		profile?: WpImageProps["image"];
		quote: string;
		name?: string;
		job_position?: string;
	};
}

function Quote({ quote_source, customers, quote }: QuoteProps) {
	// if multiple customers
	if (quote_source === "customerStory" && customers?.length > 1) {
		return <RotatingQuotes customers={customers} />;
	}
	// else one
	return (
		<div>{quote_source === "customerStory" ? customers?.map((customer, l) => <StaticQuote key={l} customer={customer} />) : <PageQuote quote={quote} />}</div>
	);
}

export default Quote;
