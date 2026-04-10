import clsx from "clsx";
import Asset, { AssetProps } from "~/components/elements/media/Asset";
import { getSplitBreakText } from "~/utils/text";
import { useWindowSize } from "react-use";

export interface HeadingAssetRowProps {
	heading: string;
	assets: {
		asset: AssetProps;
		size: "small" | "medium" | "large";
	}[];
}

const assetSizeMap = {
	small: "asset--small aspect-[210/328] md:aspect-[217/339] max-w-[40%] md:max-w-[20%] xl:max-w-[217px]",
	medium: "asset--medium aspect-[308/239] md:aspect-[319/247] flex-1 md:max-w-[30%] xl:max-w-[319px]",
	large: "asset--large aspect-[526/295] md:max-w-[30%] xl:max-w-[526px]",
};

function HeadingAssetRow(props: HeadingAssetRowProps) {
	const { heading, assets } = props;
	const { width: windowWidth } = useWindowSize();
	// console.log("headingAssetRow.props", props);

	return (
		<div className="heading-asset-row">
			<div className="container--extra-small container">
				{/* Heading */}
				{heading && (
					<span
						className="text-h4 mb-12 block text-center md:mb-16"
						dangerouslySetInnerHTML={{
							__html: getSplitBreakText({
								text: heading,
							}),
						}}
					/>
				)}

				{/* Assets */}
				{assets?.length > 0 && (
					<>
						{/* Desktop */}
						{windowWidth > 768 && (
							<div className="flex w-full items-end justify-center gap-6">
								{assets?.map((asset, index) => (
									<div key={`asset-${index}`} className={clsx(assetSizeMap?.[asset?.size], "relative w-full overflow-hidden rounded-lg")}>
										<Asset key={`asset${index}`} {...asset?.asset} fill className="object-top" />
									</div>
								))}
							</div>
						)}

						{windowWidth < 768 && (
							<div className="flex flex-col gap-4">
								{/* Row one */}
								<div className="flex w-full items-end justify-between gap-4">
									{[...assets]?.splice(0, 2)?.map((asset, index) => (
										<div key={`asset-row-one-${index}`} className={clsx(assetSizeMap?.[asset?.size], "relative w-full overflow-hidden rounded-lg")}>
											<Asset key={`asset${index}`} {...asset?.asset} fill className="object-top" />
										</div>
									))}
								</div>

								{/* Row two */}
								<div className="relative aspect-[539/302] overflow-hidden rounded-lg">
									<Asset {...assets[2]?.asset} fill className="object-top" />
								</div>
							</div>
						)}
					</>
				)}
			</div>
		</div>
	);
}

export default HeadingAssetRow;
