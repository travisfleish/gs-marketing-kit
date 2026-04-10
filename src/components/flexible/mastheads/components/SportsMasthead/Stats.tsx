import React from "react";
// blocks
import TextStrokeStack from "~/components/elements/TextStrokeStack";

interface StatsProps {
	stats?: {
		stat?: string;
		old_stat?: string;
		caption?: string;
	}[];
}

function Stats({ stats }: StatsProps) {
	return (
		<div className="relative mx-auto grid w-[90%] max-w-[66.375rem] gap-y-8 md:grid-cols-3 md:gap-x-10 md:pb-[3.625rem]">
			{stats?.map((item, index) => (
				<div key={item.stat} className="space-y-3 px-4 text-center md:space-y-4">
					<div className="mx-auto max-w-[75%]">
						<TextStrokeStack
							centerText={item.stat}
							topText={item?.old_stat || item.stat}
							bottomText={item?.old_stat || item.stat}
							int={index}
							options={{
								textColor: "navy",
								strokeColor: "navy",
								bgColor: "white",
								textSize: "64",
							}}
						/>
					</div>
					<p className="text-20 font-heading !leading-[1.4] opacity-[.64]" dangerouslySetInnerHTML={{ __html: item.caption }} />
				</div>
			))}
			<div className="absolute bottom-0 right-[95%] top-0 flex w-full justify-end text-blue md:right-[100%] md:top-[-60%] lg:top-[-100%] xl:right-[110%]">
				<StatSpring />
			</div>
			<div className="absolute bottom-0 left-[95%] top-0 flex w-full justify-start text-blue md:left-[100%] md:top-[-60%] lg:top-[-100%] xl:left-[110%]">
				<div style={{ transform: "rotateY(180deg)" }}>
					<StatSpring />
				</div>
			</div>
		</div>
	);
}

export default Stats;

function StatSpring() {
	return (
		<svg width="295" height="435" viewBox="0 0 295 435" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_3966_2421)">
				<path d="M8.57812 434.898L8.57802 137.519" stroke="currentColor" strokeWidth="7.43448" />
				<path d="M25.9688 434.898L25.9686 137.519" stroke="currentColor" strokeWidth="7.89914" />
				<path d="M43.3555 434.898L43.3554 137.519" stroke="currentColor" strokeWidth="8.36379" />
				<path d="M60.7422 434.898L60.7421 137.519" stroke="currentColor" strokeWidth="8.82845" />
				<path d="M78.1289 434.898L78.1288 137.519" stroke="currentColor" strokeWidth="9.2931" />
				<path d="M95.5156 434.898L95.5155 137.519" stroke="currentColor" strokeWidth="9.75776" />
				<path d="M112.902 434.898L112.902 137.519" stroke="currentColor" strokeWidth="10.2224" />
				<path d="M130.289 434.898L130.289 137.519" stroke="currentColor" strokeWidth="10.6871" />
				<path d="M147.676 434.898L147.676 137.519" stroke="currentColor" strokeWidth="11.1517" />
				<path d="M165.062 434.898L165.062 137.519" stroke="currentColor" strokeWidth="11.6164" />
				<path d="M182.449 434.898L182.449 137.519" stroke="currentColor" strokeWidth="12.081" />
				<path d="M199.84 434.898L199.84 137.519" stroke="currentColor" strokeWidth="12.5457" />
				<path d="M217.227 434.898L217.226 137.519" stroke="currentColor" strokeWidth="13.0103" />
				<path d="M234.613 434.898L234.613 137.519" stroke="currentColor" strokeWidth="13.475" />
				<path d="M252 434.898L252 137.519" stroke="currentColor" strokeWidth="13.9397" />
				<path d="M269.387 434.898L269.387 137.519" stroke="currentColor" strokeWidth="14.4043" />
				<path d="M286.773 434.898L286.773 137.519" stroke="currentColor" strokeWidth="14.869" />
				<path d="M252 297.379L252 -0.000398159" stroke="currentColor" strokeWidth="0.464655" />
				<path d="M234.613 297.379L234.613 -0.000398159" stroke="currentColor" strokeWidth="0.92931" />
				<path d="M217.227 297.379L217.227 -0.000398159" stroke="currentColor" strokeWidth="1.39397" />
				<path d="M199.84 297.379L199.84 -0.000398159" stroke="currentColor" strokeWidth="1.85862" />
				<path d="M182.453 297.379L182.453 -0.000398159" stroke="currentColor" strokeWidth="2.32328" />
				<path d="M165.066 297.379L165.067 -0.000398159" stroke="currentColor" strokeWidth="2.78793" />
				<path d="M147.676 297.379L147.676 -0.000398159" stroke="currentColor" strokeWidth="3.25259" />
				<path d="M130.289 297.379L130.289 -0.000398159" stroke="currentColor" strokeWidth="3.71724" />
				<path d="M112.902 297.379L112.902 -0.000398159" stroke="currentColor" strokeWidth="4.1819" />
				<path d="M95.5156 297.379L95.5157 -0.000398159" stroke="currentColor" strokeWidth="4.64655" />
				<path d="M78.1289 297.379L78.129 -0.000398159" stroke="currentColor" strokeWidth="5.11121" />
				<path d="M60.7422 297.379L60.7423 -0.000398159" stroke="currentColor" strokeWidth="5.57586" />
				<path d="M43.3555 297.379L43.3556 -0.000398159" stroke="currentColor" strokeWidth="6.04052" />
				<path d="M25.9688 297.379L25.9689 -0.000398159" stroke="currentColor" strokeWidth="6.50517" />
				<path d="M8.58203 297.379L8.58214 -0.000398159" stroke="currentColor" strokeWidth="6.96983" />
			</g>
			<defs>
				<clipPath id="clip0_3966_2421">
					<rect width="295" height="435" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
}
