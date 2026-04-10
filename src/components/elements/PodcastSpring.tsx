import React from "react";

interface PodcastSpringProps {
	cardHovered?: boolean;
	colour?: string;
	heightFull?: boolean;
}

function PodcastSpring({ cardHovered, colour = "", heightFull = false }: PodcastSpringProps) {
	const bars = Array.from({ length: 48 }, (_, i) => i + 1);
	const barTranslate = [
		[0, 8],
		[5, 45],
		[10, 1],
		[30, 18],
	];

	const getRandomTranslate = (translates) => {
		const values = translates?.map((obj) => obj);
		return values[Math.floor(Math.random() * values.length)];
	};

	const colourClass = [""];

	if (colour === "purple") {
		colourClass.push("bg-purple");
	} else {
		colourClass.push("bg-lightPurple");
	}

	return (
		<div className={`flex w-full items-end justify-between overflow-hidden ${heightFull ? "h-auto grow" : "h-[2.625rem]"}`}>
			{bars.map((index) => {
				const translateY = getRandomTranslate(barTranslate);
				return (
					<div
						className="flex h-full flex-col items-center transition-transform duration-300"
						key={`podcast-spring-${index}`}
						style={{ transform: `translateY(${cardHovered ? translateY[0] : cardHovered[1]}%)` }}
					>
						<div className={`shrink-0 ${heightFull ? "h-1/4 w-[0.09375rem]" : "h-[.5rem] w-[0.0625rem]"} ${colourClass.join(" ")}`} />
						<div className={`${heightFull ? "h-3/4 w-[.28rem] sm:w-[.3125rem]" : "h-full w-[0.2rem]"} ${colourClass.join(" ")}`} />
					</div>
				);
			})}
		</div>
	);
}

export default PodcastSpring;
