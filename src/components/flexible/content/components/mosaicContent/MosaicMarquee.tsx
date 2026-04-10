import React from "react";
// elements
import Asset, { AssetProps } from "~/components/elements/media/Asset";
import Marquee from "react-fast-marquee";

interface MosaicMarqueeProps {
	grid: {
		media: AssetProps;
	}[];
}

function MosaicMarquee({ grid = [] }: MosaicMarqueeProps) {
	return (
		<div className="mosaic-marquee mb-[-3rem] w-[300%] sm:w-[120%] lg:hidden">
			<Marquee className="relative z-10" speed={35}>
				<div className="grid w-full grid-cols-12 gap-x-4">
					<div className="col-span-4 flex flex-col justify-end space-y-3">
						<div className="relative aspect-[71/39] w-full rounded-lg bg-white/20">{grid[1] ? <Asset fill {...grid[1].media} /> : null}</div>
						<div className="relative ml-auto aspect-[71/39] w-full rounded-lg bg-white/20">{grid[2] ? <Asset fill {...grid[2].media} /> : null}</div>
					</div>
					{/* col 2 */}
					<div className="col-span-3 flex items-end">
						<div className="relative aspect-[5/7] w-full rounded-lg bg-white/20">{grid[3] ? <Asset fill {...grid[3].media} /> : null}</div>
					</div>
					{/* col 3 */}
					<div className="col-span-5 space-y-3 pr-4">
						<div className="relative ml-auto aspect-[201/101] w-full rounded-lg bg-white/20">{grid[4] ? <Asset fill {...grid[4].media} /> : null}</div>
						<div className="relative aspect-[201/101] w-full rounded-lg bg-white/20">{grid[5] ? <Asset fill {...grid[5].media} /> : null}</div>
					</div>
				</div>
			</Marquee>
		</div>
	);
}

export default MosaicMarquee;
