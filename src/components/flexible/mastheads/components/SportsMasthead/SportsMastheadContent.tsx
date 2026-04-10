import React from "react";
// elements
import LinkGroup, { LinkGroupProps } from "~/components/elements/links/LinkGroup";
// motion
import { LayoutGroup, m, AnimatePresence } from "framer-motion";

interface SportsMastheadContentProps {
	activeWord?: number;
	content: {
		subheading?: string;
		heading?: {
			prepend: string;
			rotating_text?: {
				text: string;
			}[];
			append: string;
		};
		content?: string;
		links?: LinkGroupProps[];
	};
}

function SportsMastheadContent({ content, activeWord }: SportsMastheadContentProps) {
	return (
		<div className="relative z-10 mx-auto max-w-[50rem] text-center">
			{content.subheading && (
				<span className="text-15 mb-2 inline-flex font-heading opacity-80 md:mb-4" dangerouslySetInnerHTML={{ __html: content?.subheading }} />
			)}
			<h1 className="">
				<m.span className="z-[20] block">
					<m.span layout style={{ display: "inline-block", willChange: "transform" }}>
						{`${content?.heading?.prepend}\u00A0`}
					</m.span>
				</m.span>
				<LayoutGroup>
					<m.span className="z-[10] w-full translate-y-[0.28rem] overflow-hidden">
						<m.span
							className="inline-block"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{
								duration: 0.4,
								delay: 0.5,
								opacity: { duration: 0.6 },
								skewX: { type: "spring", bounce: 0.4, delay: 0.7 },
							}}
						>
							<AnimatePresence mode="wait" initial={false}>
								{content?.heading?.rotating_text?.map((word, index) =>
									activeWord === index ? (
										<m.span
											key={word?.text}
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											exit={{
												opacity: 0,
												transition: {
													opacity: {
														duration: 0.3,
													},
													duration: 0.4,
												},
											}}
											layout
											transition={{
												duration: 0.4,
												delay: 0,
												opacity: { duration: 0.6, delay: 0.1 },
											}}
											className="inline-block !pb-[0.28rem] text-blue"
											dangerouslySetInnerHTML={{ __html: `&nbsp;${word?.text}&nbsp;` }}
										/>
									) : null
								)}
							</AnimatePresence>
						</m.span>
					</m.span>

					<m.span layout key={content?.heading?.prepend} className="z-[20] block translate-y-[-0.28rem] sm:inline-block">
						<m.span layout style={{ display: "inline-block", willChange: "transform" }} dangerouslySetInnerHTML={{ __html: `${content?.heading?.append}` }} />
					</m.span>
				</LayoutGroup>
			</h1>
			{content?.content && (
				<p className="text-20 mx-auto mt-3 max-w-[43.4rem] font-body opacity-80 md:mt-5" dangerouslySetInnerHTML={{ __html: content?.content }} />
			)}
			{content?.links?.length > 0 && (
				<div className="mt-6 md:mt-12">
					<LinkGroup links={content?.links} />
				</div>
			)}
		</div>
	);
}

export default SportsMastheadContent;
