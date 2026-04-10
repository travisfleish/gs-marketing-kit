import React from "react";
// elements
import WpImage, { WpImageProps } from "~/components/elements/Wp";

interface PageQuoteProps {
	quote: {
		logo: WpImageProps["image"];
		profile?: WpImageProps["image"];
		quote: string;
		name?: string;
		job_position?: string;
	};
}

function PageQuote({ quote }: PageQuoteProps) {
	return (
		<div className="mx-auto flex max-w-[48rem] flex-col items-center justify-center text-center">
			<div className="relative mb-6 flex h-[3.5rem] w-24 justify-center md:h-[4.375rem] lg:mb-[2.1875rem] lg:h-[5.5rem] lg:w-32">
				<WpImage image={quote?.logo} className="h-full w-full object-contain object-center" />
			</div>
			<blockquote className="quote-lg font-book font-heading" dangerouslySetInnerHTML={{ __html: quote.quote }} />
			<div className="mt-12 flex items-center space-x-3 md:space-x-4 lg:mt-[3.5rem]">
				{quote?.profile && (
					<div className="relative h-12 w-12 overflow-hidden rounded-full bg-lightRed lg:h-[4.5rem] lg:w-[4.5rem]">
						<WpImage image={quote?.profile} fill className="h-full w-full object-cover" />
					</div>
				)}
				<div className="flex flex-col items-start text-left">
					<span className="text-18 !font-medium" dangerouslySetInnerHTML={{ __html: quote.name }} />
					<span className="text-15 !font-body opacity-85" dangerouslySetInnerHTML={{ __html: quote.job_position }} />
				</div>
			</div>
		</div>
	);
}

export default PageQuote;
