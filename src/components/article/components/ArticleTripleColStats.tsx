// TODO : Review spacing after swappinng out font files

import clsx from "clsx";
import Image from "next/image";
import TextStrokeStack from "~/components/elements/TextStrokeStack";

interface ArticleTripleColStatsStat {
	stat: string;
	text: string;
}

export interface ArticleTripleColStatsProps {
	stats: ArticleTripleColStatsStat[];
}

function ArticleTripleColStats(props: ArticleTripleColStatsProps) {
	// console.log("ArticleTripleColStats.props", props);

	const { stats } = props;

	return (
		<div className="article-triple-col-stats relative min-h-[366px] rounded-lg bg-navy pb-[40%] pt-4 sm:pt-0 lg:pb-0">
			{/* Stats */}
			<div className="grid gap-4 px-6 py-4 md:grid-cols-3 md:gap-12">
				{stats?.length > 0 &&
					stats?.map((stat, index) => {
						const { stat: statText, text } = stat;

						return (
							<div key={`stat-${index}`} className={clsx("gap flex flex-col items-center gap-4", index !== 1 && "md:mt-[30%]")}>
								<TextStrokeStack
									centerText={statText}
									hideBottomRow
									int={index}
									options={{
										textColor: "lightPurple",
										strokeColor: "lightPurple",
										bgColor: "navy",
										textSize: "64",
									}}
								/>

								{/* Text */}
								<p className="text-22 text-center font-medium text-lightPurple" dangerouslySetInnerHTML={{ __html: text }} />
							</div>
						);
					})}
			</div>

			{/* Lines */}
			<div className="absolute bottom-0 left-0 aspect-[1956/644] w-full lg:max-w-[652px]">
				<Image alt="" src="/images/triple-col-stats-lines.png" layout="fill" objectPosition="right" objectFit="contain" />
			</div>
		</div>
	);
}

export default ArticleTripleColStats;
