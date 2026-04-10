import React from "react";
// elements

interface MediaBarsProps {
	colour: string;
	style: string;
}

function MediaBars({ colour, style }: MediaBarsProps) {
	const bars = Array.from({ length: 30 }, (_, i) => i + 1);
	return (
		<div className="absolute inset-0 flex">
			{style === "bottom" && (
				<div className="-mx-6 h-20 h-[13.875rem] w-[calc(100%+3rem)] origin-bottom scale-100 scale-y-50 self-end lg:-mx-20 lg:w-[calc(100%+10rem)] lg:scale-y-100">
					{bars?.slice(0, 10).map((index) => <div key={index} className={`w-full ${colour}`} style={{ height: 22 - index * 2, marginTop: 3 + 2 * index }} />)}
				</div>
			)}
			{style === "top_left" && (
				<div className="relative -mx-6 h-full w-[calc(100%+3rem)] lg:-mx-20 lg:w-[calc(100%+10rem)]">
					{/* left */}
					<div className="absolute top-[6.6%] flex h-[48%] origin-left flex-row justify-start">
						{bars
							?.slice(0, 10)
							.map((index) => <div key={index} className={`w-full ${colour}`} style={{ width: `${4 - index * 0.2}px`, marginLeft: `${8 + 0.2 * index}px` }} />)}
					</div>
					{/* right */}
					<div className="absolute bottom-[6.6%] right-0 flex h-[48%] origin-right flex-row-reverse justify-end">
						{bars
							?.slice(0, 10)
							.map((index) => (
								<div key={index} className={`w-full ${colour}`} style={{ width: `${10 - index * 0.6}px`, marginLeft: `${8 + 0.4 * index}px` }} />
							))}
					</div>
				</div>
			)}
			{style === "center" && (
				<div className="relative -mx-6 my-auto h-[60%] w-[calc(100%+3rem)] lg:-mx-20 lg:w-[calc(100%+10rem)]">
					{/* left */}
					<div className="absolute bottom-[32%] flex h-[68%] origin-left flex-row-reverse justify-start">
						{bars.slice(0, 10).map((index) => (
							<div key={index} className={`w-full ${colour}`} style={{ width: `${14 - index * 0.2}px`, marginLeft: `${7 + 0.2 * index}px` }} />
						))}
					</div>
					<div className="absolute bottom-[0%] flex h-[32%] origin-left flex-row justify-start">
						{bars.slice(0, 10).map((index) => (
							<div key={index} className={`w-full ${colour}`} style={{ width: `${7 - index * 0.4}px`, marginLeft: `${12 + 0.26 * index}px` }} />
						))}
					</div>
					{/* right */}
					<div className="absolute bottom-[32%] right-0 flex h-[68%] origin-left flex-row justify-end pr-2">
						{bars.slice(0, 12).map((index) => (
							<div key={index} className={`w-full ${colour}`} style={{ width: `${7 - index * 0.4}px`, marginLeft: `${12 + 0.2 * index}px` }} />
						))}
					</div>
					<div className="absolute bottom-[0%] right-0 flex h-[32%] origin-left flex-row-reverse justify-end">
						{bars.slice(0, 10).map((index) => (
							<div key={index} className={`w-full ${colour}`} style={{ width: `${14 - index * 0.2}px`, marginLeft: `${7 + 0.2 * index}px` }} />
						))}
					</div>
				</div>
			)}
		</div>
	);
}

export default MediaBars;
