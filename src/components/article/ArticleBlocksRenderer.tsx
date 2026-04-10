import React from "react";
import dynamic from "next/dynamic";

// Assuming TextContent, Image, and Quote have TypeScript types
import clsx from "clsx";
import { ArticleTextContentProps } from "./components/ArticleTextContent";
import { ArticleIndexedFeatureCardsProps } from "./components/ArticleIndexedFeatureCards";
import Asset, { AssetProps } from "../elements/media/Asset";
import { ArticleQuoteProps } from "./components/ArticleQuote";
import { ArticleTripleColStatsProps } from "./components/ArticleTripleColStats";
import { ArticleBasicQuotesProps } from "./components/ArticleBasicQuotes";
import { ArticleIndexedListItemsProps } from "./components/ArticleIndexedListItems";
import { ArticleTextStrokeStacklistProps } from "./components/ArticleTextStrokeStackList";
import { FAQsAccordionProps } from "../flexible/company/components/FAQsAccordion/FAQsAccordion";

interface ArticleBlock {
	asset: AssetProps;
	acf_fc_layout: string;
	text_content?: ArticleTextContentProps;
	indexed_feature_cards?: ArticleIndexedFeatureCardsProps;
	indexed_list_items?: ArticleIndexedListItemsProps;
	// context?: {
	// 	figure_number?: number;
	// 	figure_name?: string;
	// 	caption?: string;
	// };
	quote: ArticleQuoteProps;
	triple_col_stats: ArticleTripleColStatsProps;
	basic_quotes: ArticleBasicQuotesProps;
	text_stroke_stack_list: ArticleTextStrokeStacklistProps;
	faqs_accordion?: FAQsAccordionProps;
}

interface ArticleBlocksProps {
	article: ArticleBlock[];
	liColor?: "purple" | "orange";
	ySpacing?: "40" | "80";
	onTextContentInView?: (id: string) => void;
	onTextContentNotInView?: (id: string) => void;
}

const DynamicTextContent = dynamic<ArticleTextContentProps>(() => import("./components/ArticleTextContent"), { ssr: false });
const DynamicIndexedFeatureCards = dynamic<ArticleIndexedFeatureCardsProps>(() => import("./components/ArticleIndexedFeatureCards"), { ssr: false });
const DynamicQuote = dynamic<ArticleQuoteProps>(() => import("./components/ArticleQuote"), { ssr: false });
const DynamicTripleColStats = dynamic(() => import("./components/ArticleTripleColStats"), { ssr: false });
const DynamicBasicQuotes = dynamic<ArticleBasicQuotesProps>(() => import("./components/ArticleBasicQuotes"), { ssr: false });
const DynamicIndexedListItems = dynamic<ArticleIndexedListItemsProps>(() => import("./components/ArticleIndexedListItems"), { ssr: false });
const DynamicTextStrokeStackList = dynamic<ArticleTextStrokeStacklistProps>(() => import("./components/ArticleTextStrokeStackList"), { ssr: false });
const DynamicFAQsAccordion = dynamic<FAQsAccordionProps>(() => import("../flexible/company/components/FAQsAccordion/FAQsAccordion"), { ssr: false });

const ySpacingMap = {
	40: "space-y-8 md:space-y-8 lg:space-y-10",
	80: "space-y-16 md:space-y-16 lg:space-y-20",
};

function ArticleBlocksRenderer({ article, liColor, ySpacing = "40", onTextContentInView, onTextContentNotInView }: ArticleBlocksProps) {
	return (
		<article className={clsx("flex flex-col", ySpacingMap?.[ySpacing])}>
			{article?.map((articleBlock, index) => {
				const blockType = articleBlock?.acf_fc_layout;

				return (
					<React.Fragment key={`${blockType} ${index}`}>
						{blockType === "text_content" && (
							<DynamicTextContent onInView={onTextContentInView} onNotInView={onTextContentNotInView} liColor={liColor} {...articleBlock?.text_content} />
						)}
						{blockType === "indexed_feature_cards" && <DynamicIndexedFeatureCards {...articleBlock?.indexed_feature_cards} />}
						{blockType === "asset" && (
							<div className="relative overflow-hidden rounded-lg">
								<Asset className="h-full w-full object-cover object-center" {...articleBlock.asset} />
							</div>
						)}
						{blockType === "quote" && <DynamicQuote {...articleBlock.quote} />}
						{blockType === "triple_col_stats" && <DynamicTripleColStats {...articleBlock.triple_col_stats} />}
						{blockType === "basic_quotes" && <DynamicBasicQuotes {...articleBlock.basic_quotes} />}
						{blockType === "indexed_list_items" && <DynamicIndexedListItems {...articleBlock.indexed_list_items} />}
						{blockType === "text_stroke_stack_list" && <DynamicTextStrokeStackList {...articleBlock.text_stroke_stack_list} />}
						{blockType === "faqs_accordion" && <DynamicFAQsAccordion {...articleBlock.faqs_accordion} />}
					</React.Fragment>
				);
			})}
		</article>
	);
}

export default ArticleBlocksRenderer;
