import React, { useRef } from "react";
import { LazyMotion, domAnimation, useScroll } from "framer-motion";
// helpers
import useWindowSize from "~/hooks/useWindowSize";
// blocks
import PodcastBar from "./FanEngagement/PodcastBar";

interface FanEngagementMastheadProps {
	heading: string;
	content?: string;
	animation_colour?: { colours: string };
}

function FanEngagementMasthead({ heading, content, animation_colour }: FanEngagementMastheadProps) {
	const bars = Array.from({ length: 48 }, (_, i) => i + 1);
	const audioColour = animation_colour?.colours;

	const scrollRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: scrollRef,
		offset: ["start start", "end start"],
	});

	const { width: windowWidth } = useWindowSize();

	const isMobile = windowWidth < 768;

	return (
		<LazyMotion features={domAnimation}>
			<div ref={scrollRef} className="space-y-10 pt-16 md:space-y-[4.5rem] md:pt-[114px]">
				<div className="grid gap-y-6 md:grid-cols-2 md:gap-x-10">
					{heading && (
						<div>
							<h1 dangerouslySetInnerHTML={{ __html: heading }} />
						</div>
					)}
					{content && (
						<div>
							<div className="prose !max-w-[36.125rem] md:ml-auto" dangerouslySetInnerHTML={{ __html: content }} />
						</div>
					)}
				</div>
				{/* audio */}
				<div className="-mx-6 flex w-[calc(100%+3rem)] items-end justify-between lg:-mx-20 lg:w-[calc(100%+10rem)]">
					{bars
						?.slice(0, isMobile ? 24 : 50)
						.map((index, idx) => (
							<PodcastBar key={`podcast-spring-${index}`} scrollYProgress={scrollYProgress} int={idx} audioColour={audioColour} isMobile={isMobile} />
						))}
				</div>
			</div>
		</LazyMotion>
	);
}

export default FanEngagementMasthead;
