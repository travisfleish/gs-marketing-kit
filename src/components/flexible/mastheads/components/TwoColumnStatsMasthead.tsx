import React from "react";
// elements
import Asset, { AssetProps } from "~/components/elements/media/Asset";
import LinkGroup, { LinkGroupProps } from "~/components/elements/links/LinkGroup";
import TextStrokeStack from "~/components/elements/TextStrokeStack";

interface TwoColumnStatsMastheadProps {
	content: {
		subheading?: string;
		heading?: string;
		content?: string;
		links?: LinkGroupProps[];
	};
	stats?: {
		stat?: string;
		caption?: string;
	}[];
	media?: AssetProps;
}

function TwoColumnStatsMasthead({ content, stats, media }: TwoColumnStatsMastheadProps) {
	const bars = Array.from({ length: 28 }, (_, i) => i + 1);
	return (
		<div className=" relative grid gap-y-10 md:grid-cols-12 md:gap-x-6">
			{/* content */}
			<div className="md:col-span-6 md:pt-6 lg:pt-8">
				{/* content */}
				<div className="max-w-[37rem]">
					{content?.subheading && <span className="text-15 mb-3 inline-block opacity-80 md:mb-4" dangerouslySetInnerHTML={{ __html: content?.subheading }} />}

					{content?.heading && <h1 className="mb-3 md:mb-5" dangerouslySetInnerHTML={{ __html: content?.heading }} />}
					{content?.content && <p className="text-20 max-w-[26rem] font-body opacity-80" dangerouslySetInnerHTML={{ __html: content?.content }} />}
					{content?.links?.length > 0 && (
						<div className="mt-8 md:mt-12">
							<LinkGroup links={content?.links} />
						</div>
					)}
				</div>
			</div>
			{/* media */}
			<div className="relative md:col-span-6">
				<div className="relative z-10 overflow-hidden rounded-lg">
					<Asset {...media} />
				</div>
			</div>
			{/* stats */}
			{stats?.length > 0 && (
				<div className="grid gap-y-4 sm:flex sm:justify-between sm:gap-x-3 md:col-span-7 md:mt-16 md:gap-x-6 lg:mt-20">
					{stats?.map((item, index) => (
						<div key={index} className="text-center">
							<TextStrokeStack
								centerText={item.stat}
								int={index}
								options={{
									textColor: "navy",
									strokeColor: "navy",
									bgColor: "white",
									textSize: "64",
								}}
							/>
							<span className="text-20 font-regular mt-2 inline-block font-heading" dangerouslySetInnerHTML={{ __html: item?.caption }} />
						</div>
					))}
				</div>
			)}
			{/* bars */}
			<div className="absolute inset-y-0 -right-6 left-auto hidden h-3/4 w-4/5 flex-col justify-end sm:flex md:h-full md:w-1/3 lg:w-4/5 xl:-mr-20">
				<div className="hidden w-full flex-row-reverse pr-[.3rem] md:flex" style={{ height: "22%" }}>
					{bars?.map((index) => <div key={index} className="h-full bg-lightGreen" style={{ width: 1 + 0.4 * index, marginLeft: 14.5 - 0.32 * index }} />)}
				</div>
				<div className="flex w-full flex-row-reverse pr-1" style={{ height: "36%" }}>
					{bars?.map((index) => <div key={index} className="h-full bg-lightGreen" style={{ width: 3.2 + 0.4 * index, marginLeft: 12 - 0.4 * index }} />)}
				</div>
				<div className="flex w-full justify-end" style={{ height: "16%" }}>
					{bars
						?.slice(0, 14)
						.map((index) => <div key={index} className="h-full bg-lightGreen" style={{ width: 4 + 0.4 * index, marginLeft: 12 - 0.4 * index }} />)}
				</div>
			</div>
		</div>
	);
}

export default TwoColumnStatsMasthead;
