import React from "react";
// elements
import Asset, { AssetProps } from "~/components/elements/media/Asset";
import { LazyMotion, m, domAnimation } from "framer-motion";

interface MosaicDesktopProps {
	grid: {
		media: AssetProps;
	}[];
}

function MosaicDesktop({ grid = [] }: MosaicDesktopProps) {
	const initial = {
		transform: "scale(0.8)",
	};
	const animate = {
		transform: "scale(1)",
	};
	const transition = {
		type: "spring",
		stiffness: 180,
		damping: 22,
	};

	return (
		<LazyMotion features={domAnimation}>
			<div className="absolute hidden gap-x-4 lg:inset-x-[-13.625rem] lg:bottom-[-9rem] lg:top-[-2rem] lg:grid lg:grid-cols-12">
				{/* col 1 */}
				<div className="lg:col-span-4 lg:col-start-2 lg:space-y-4">
					<m.div
						className="relative w-full rounded-lg bg-white/20 lg:aspect-[13/9] lg:max-w-[17.0625rem]"
						initial={initial}
						whileInView={animate}
						viewport={{ once: true }}
						transition={{ transition }}
					>
						{grid[0] ? <Asset fill {...grid[0].media} /> : null}
					</m.div>
					<m.div
						className="relative aspect-[163/129] w-full max-w-[20.375rem] rounded-lg bg-white/20"
						initial={initial}
						whileInView={animate}
						viewport={{ once: true }}
						transition={{ transition, delay: 0.1 }}
					>
						{grid[1] ? <Asset fill {...grid[1].media} /> : null}
					</m.div>
					<m.div
						className="relative ml-auto aspect-[99/52] w-full max-w-[30.9375rem] rounded-lg bg-white/20"
						initial={initial}
						whileInView={animate}
						viewport={{ once: true }}
						transition={{ transition, delay: 0.2 }}
					>
						{grid[2] ? <Asset fill {...grid[2].media} /> : null}
					</m.div>
				</div>
				{/* col 2 */}
				<div className="flex items-end lg:col-span-3">
					<m.div
						className="relative aspect-[81/70] w-full max-w-[26rem] rounded-lg bg-white/20"
						initial={initial}
						whileInView={animate}
						viewport={{ once: true }}
						transition={{ transition, delay: 0.3 }}
					>
						{grid[3] ? <Asset fill {...grid[3].media} /> : null}
					</m.div>
				</div>
				{/* col 3 */}
				<div className="lg:col-span-4 lg:space-y-4">
					<m.div
						className="relative ml-auto aspect-[99/71] w-full max-w-[30.9375rem] rounded-lg bg-white/20"
						initial={initial}
						whileInView={animate}
						viewport={{ once: true }}
						transition={{ transition, delay: 0.4 }}
					>
						{grid[4] ? <Asset fill {...grid[4].media} /> : null}
					</m.div>
					<m.div
						className="relative aspect-[8/5] w-full max-w-[35rem] rounded-lg bg-white/20"
						initial={initial}
						whileInView={animate}
						viewport={{ once: true }}
						transition={{ transition, delay: 0.5 }}
					>
						{grid[5] ? <Asset fill {...grid[5].media} /> : null}
					</m.div>
				</div>
			</div>
		</LazyMotion>
	);
}

export default MosaicDesktop;
