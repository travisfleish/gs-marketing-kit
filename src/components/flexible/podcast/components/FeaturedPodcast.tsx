import React, { useState } from "react";
// elements
import Link from "next/link";
import WpImage, { WpImageProps } from "~/components/elements/Wp";
import { PlayArrow, MobileChevron } from "~/components/elements/Icons";
// blocks
import PodcastSpring from "~/components/elements/PodcastSpring";

interface FeaturedPodcastProps {
	featured_podcast?: {
		post_title: string;
		ID: string;
		acf?: {
			thumbnail?: WpImageProps["image"];
			episode_number?: number;
			summary?: string;
			podcast_link?: string;
			podcast_embed?: string;
		};
	};
}

function FeaturedPodcast({ featured_podcast }: FeaturedPodcastProps) {
	// podcast bar animation
	const [isHovered, setIsHovered] = useState(false);

	// summary size
	const [showSummary, setShowSummary] = useState(false);
	return (
		<div className="grid gap-x-10 gap-y-8 md:grid-cols-12">
			{/* thumbnail */}
			<div className="md:col-span-5">
				<div className="top-32 overflow-hidden rounded-lg md:sticky">
					<WpImage image={featured_podcast.acf?.thumbnail} />
				</div>
			</div>
			{/* content */}
			<div className="md:col-span-7 lg:pt-6">
				<div className="md:ml-auto md:max-w-[40.8125rem]">
					<div className="mb-8 flex items-center space-x-3 lg:mb-10 lg:space-x-8">
						{/* tag */}
						<span className="text-15 rounded-md bg-purple px-2 py-[.3rem] font-body font-medium text-white" dangerouslySetInnerHTML={{ __html: "Featured" }} />
						{/* episode number */}
						{featured_podcast.acf?.episode_number && (
							<span
								className="text-15 font-regular font-body opacity-80"
								dangerouslySetInnerHTML={{ __html: `Episode ${featured_podcast.acf?.episode_number}` }}
							/>
						)}
					</div>
					<h2 className="text-h3 mb-8 line-clamp-2 lg:mb-10" dangerouslySetInnerHTML={{ __html: featured_podcast.post_title }} />
					{/* podcast link */}
					<Link
						href={featured_podcast?.acf?.podcast_link || "#"}
						target="_blank"
						className={`mb-6 flex items-stretch space-x-3 md:space-x-8 lg:mb-[3.375rem] ${featured_podcast?.acf?.podcast_link ? "group" : ""}`}
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
					>
						{/* play */}
						<div className="flex aspect-[1/1] h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy p-4 pl-5 transition-colors duration-200 group-hover:bg-purple lg:h-[4.5rem] lg:w-[4.5rem] lg:p-5 lg:pl-6">
							<PlayArrow />
						</div>
						<PodcastSpring cardHovered={isHovered} colour="purple" heightFull />
					</Link>

					{featured_podcast?.acf?.summary && (
						<div className="space-y-6 md:space-y-8">
							<div
								key="short summary"
								className={`prose font-body opacity-80 transition-all duration-500 ${showSummary ? "" : "line-clamp-3"}`}
								dangerouslySetInnerHTML={{ __html: featured_podcast?.acf?.summary }}
							/>

							{/* toggle summary */}
							<button
								type="button"
								aria-label="Toggle Summary Length"
								className="btn-group inline-flex items-center space-x-2"
								onClick={() => setShowSummary(!showSummary)}
							>
								<span className="text-17 font-semibold" dangerouslySetInnerHTML={{ __html: "Learn more" }} />
								<div
									className={`btn-group-hover:bg-blue flex h-[1.375rem] w-[1.375rem] items-center justify-center rounded-full bg-navy p-[.3rem] text-white transition-transform duration-300 ${showSummary ? "rotate-180" : ""}`}
								>
									<MobileChevron />
								</div>
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default FeaturedPodcast;
