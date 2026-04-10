// Update lines

import { HorizontalBars } from "~/components/landing/Legal/components/LegalMasthead";

interface IndexedFeatureCardsCard {
	content: string;
	heading: string;
	subheading: string;
}

export interface ArticleIndexedFeatureCardsProps {
	cards: IndexedFeatureCardsCard[];
}

function ArticleIndexedFeatureCards(props: ArticleIndexedFeatureCardsProps) {
	const { cards } = props;

	return (
		<div className="indexed-feature-cards flex flex-col gap-[36px]">
			{cards?.length > 0 &&
				cards?.map((card, index) => {
					const { content, heading, subheading } = card;

					return (
						<div
							key={`indexed-feature-card-${index}`}
							className="!md:pl-[158px] relative overflow-hidden rounded-lg bg-lightPurple p-6 pl-32 md:p-10 md:pl-[140px]"
						>
							<div className="absolute -left-12 top-6 flex flex-col md:top-10">
								{/* Index */}
								<p className="text-[133px] leading-[1] text-purple">
									{index < 9 ? "0" : ""}
									{index + 1}
								</p>

								{/* Lines */}
								<span className="w-full max-w-[80%]">
									<HorizontalBars
										className="flex flex-col-reverse"
										barsClassName="bg-purple"
										barVolume={7}
										heightFactor={0.4}
										bars={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}
										marginInitial={6}
										marginFactor={0.4}
										blockAnimation
									/>
								</span>
							</div>

							{/* Content */}
							<div className="flex flex-col items-start">
								{/* Subheading */}
								{!!subheading && <span className="text-15--clamp mb-4 text-navy" dangerouslySetInnerHTML={{ __html: subheading }} />}

								{/* Heading */}
								{!!heading && <h5 className="mb-6" dangerouslySetInnerHTML={{ __html: heading }} />}

								{/* Content */}
								{!!content && <p dangerouslySetInnerHTML={{ __html: content }} className="text-18 font-body text-black/80" />}
							</div>
						</div>
					);
				})}
		</div>
	);
}

export default ArticleIndexedFeatureCards;
