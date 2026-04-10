import LinkGroup from "~/components/elements/links/LinkGroup";
import { getSplitBreakText } from "~/utils/text";
import { LazyMotion, m, domAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import { useWindowSize } from "react-use";
import clsx from "clsx";
import CardSelect from "./CardSelect";
import { ContentAnimatedBottomCardsContent } from "./types";

interface ContentAnimatedBottomCardsProps {
	content: ContentAnimatedBottomCardsContent;
}

function ContentAnimatedBottomCards(props: ContentAnimatedBottomCardsProps) {
	const { content } = props;
	const ref = useRef(null);
	const { width: windowWidth } = useWindowSize();

	const inViewThreshold = windowWidth > 960 ? 0.7 : 0.1;
	const areCardsInView = useInView(ref, {
		amount: inViewThreshold,
		once: true,
	});

	return (
		<LazyMotion features={domAnimation}>
			<div ref={ref} className="content-animated-bottom-cards">
				<div className="container">
					{/* Content */}
					<div className="content-animated-bottom-cards__content flex flex-col items-center overflow-hidden rounded-xl bg-lightBlue px-5 pb-8 pt-8 sm:pt-16 md:px-8 md:pt-24 960:pb-0">
						<div className="mb-12 flex flex-col items-center md:mb-20 960:mb-32">
							{/* Heading */}
							{!!content?.heading && (
								<span
									className="text-h3 mb-6 text-center"
									dangerouslySetInnerHTML={{
										__html: getSplitBreakText({
											text: content.heading,
											breakAtAll: true,
										}),
									}}
								/>
							)}

							{/* Content */}
							{!!content?.content && (
								<span
									dangerouslySetInnerHTML={{ __html: content.content }}
									className="text-16 mb-6 block w-full max-w-[494px] text-center font-body sm:mb-10"
								/>
							)}

							{/* Links */}
							{content?.links?.links?.length > 0 && <LinkGroup centered links={content?.links?.links} />}
						</div>

						{/* Cards */}
						{content?.cards?.length > 0 && (
							<div className="content-animated-bottom-card__cards grid w-full items-end gap-3 sm:grid-cols-2 960:flex 960:gap-6">
								{content?.cards?.map((card, index) => (
									<div key={`content-animated-bottom-card-${index}`} className={clsx("h-full w-full", index === 2 && windowWidth < 960 && "order-last")}>
										<CardSelect key={`content-animated-bottom-card-${index}`} index={index} card={card} areCardsInView={areCardsInView} />
									</div>
								))}
							</div>
						)}
					</div>
				</div>
			</div>
		</LazyMotion>
	);
}

export default ContentAnimatedBottomCards;
