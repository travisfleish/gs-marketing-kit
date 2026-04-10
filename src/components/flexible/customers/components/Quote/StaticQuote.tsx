import React from "react";
// elements
import { Link } from "~/components/elements/links/Link";
import WpImage, { WpImageProps } from "~/components/elements/Wp";
import { CircleArrow } from "~/components/elements/Icons";

interface CustomerProps {
	customer: {
		permalink: string;
		acf: {
			media: {
				logo: WpImageProps["image"];
			};
			key_quote: {
				quotation: string;
			};
		};
	};
}

function StaticQuote({ customer }: CustomerProps) {
	return (
		<div className="mx-auto flex max-w-[41.5rem] flex-col items-center justify-center text-center">
			<div className="relative mb-6 flex h-[3.5rem] w-24 justify-center md:h-[4.375rem] lg:mb-[2.1875rem] lg:h-[5.5rem] lg:w-32">
				<WpImage image={customer.acf?.media?.logo} className="h-full w-full object-contain" />
			</div>
			<blockquote className="quote-lg font-book font-heading" dangerouslySetInnerHTML={{ __html: customer.acf?.key_quote?.quotation }} />
			<div className="mt-12">
				<Link href={customer.permalink} className="text-17 inline-flex items-center space-x-3">
					<div className="z-10 h-[1.625rem] w-[1.625rem] rotate-45 rounded-full bg-black text-white">
						<CircleArrow />
					</div>
					<span className="font-semibold" dangerouslySetInnerHTML={{ __html: "Read full story" }} />
				</Link>
			</div>
		</div>
	);
}

export default StaticQuote;
