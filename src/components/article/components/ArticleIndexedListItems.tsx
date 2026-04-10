import { LazyMotion, m, domAnimation, useInView } from "framer-motion";
import { useRef } from "react";

export interface ArticleIndexedListItemsProps {
	items?: {
		text?: string;
	}[];
}

function RightLines({ width = null, height = null }) {
	return (
		<svg width={width} height={height} viewBox="0 0 35 64" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M4 0V64" stroke="#F6F7F9" strokeWidth="8" />
			<path d="M14 0V64" stroke="#F6F7F9" strokeWidth="6" />
			<path d="M24 0V64" stroke="#F6F7F9" strokeWidth="4" />
			<path d="M34 0V64" stroke="#F6F7F9" strokeWidth="2" />
		</svg>
	);
}

function ArticleIndexedListItems(props: ArticleIndexedListItemsProps) {
	// console.log("ArticleIndexedListItems.props", props);
	const ref = useRef(null);
	const isInView = useInView(ref, { amount: 0.7 });

	const { items } = props;

	return (
		<LazyMotion features={domAnimation}>
			<div ref={ref} className="article-indexed-list-items">
				<div className="flex flex-col gap-4 overflow-hidden">
					{items?.length > 0 &&
						items?.map((item, index) => (
							// console.log("ArticleIndexedListItems.item", item);

							<div key={`article-indexex-list-item-${index}`} className="flex h-full items-stretch justify-start">
								<div className="text-18 flex max-w-[90%] flex-1 items-center justify-start gap-4 rounded-l-lg bg-lightGrey p-4 font-body font-medium sm:max-w-[93%]">
									{/* Index */}
									<div
										className="text-14 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-navy font-body !tracking-[-0.08em] text-white/80"
										dangerouslySetInnerHTML={{
											__html: `${index < 10 ? "0" : ""} ${index + 1}`,
										}}
									/>

									{/* Text */}
									{!!item.text && (
										<span
											dangerouslySetInnerHTML={{
												__html: item.text,
											}}
										/>
									)}
								</div>

								{/* Right lines */}
								<m.div
									initial={{
										translateX: -20,
									}}
									animate={{
										translateX: isInView ? 0 : -20,
										transition: {
											duration: 0.4,
											delay: 0.15 * index,
											ease: "easeInOut",
										},
									}}
									className="flex-shrink-0"
								>
									<RightLines height="100%" />
								</m.div>
							</div>
						))}
				</div>
			</div>
		</LazyMotion>
	);
}

export default ArticleIndexedListItems;
