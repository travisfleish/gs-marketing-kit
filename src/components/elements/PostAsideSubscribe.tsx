import { getSplitBreakText } from "~/utils/text";
import { useRef } from "react";
import { useInView } from "framer-motion";
import clsx from "clsx";

function PostAsideSubscribe({ heading = null, embed = null }) {
	const assetRef = useRef(null);
	const isAssetInView = useInView(assetRef, { amount: 0.5, once: true });

	return (
		<>
			<div className="relative rounded-t-lg bg-blue p-8 px-6">
				<h6
					className="mb-12 font-normal text-white"
					dangerouslySetInnerHTML={{
						__html: getSplitBreakText({
							text: "Be the first to <> know about new <> content",
						}),
					}}
				/>

				{embed ? (
					<div dangerouslySetInnerHTML={{ __html: embed }} />
				) : (
					<iframe title="blog-subscribe" src="https://digital.geniussports.com/l/822433/2024-07-12/ty4lzy" width="100%" height="100%" style={{ border: "0" }} />
				)}
			</div>
			<div className="pt-[50px]">
				<div ref={assetRef} className="relative mt-[-52px] h-[52px] bg-blue">
					<div
						className={clsx(
							"linear absolute bottom-0 left-0 flex w-full origin-bottom flex-col bg-white transition-transform duration-300",
							isAssetInView ? "scale-y-[100%]" : "scale-y-0"
						)}
					>
						<BottomLines width="100%" />
						{/* <div className="absolute bottom-0 h-[100%] w-full bg-white" /> */}
					</div>
				</div>
			</div>
		</>
	);
}

export default PostAsideSubscribe;

function BottomLines({ width = "100%", height = null }) {
	return (
		<svg width={width} height={height} viewBox="0 0 334 52" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M0 51L334 51" stroke="#0000DC" />
			<path d="M0 39L334 39" stroke="#0000DC" strokeWidth="2" />
			<path d="M0 27L334 27" stroke="#0000DC" strokeWidth="3" />
			<path d="M0 15L334 15" stroke="#0000DC" strokeWidth="4" />
			<path d="M0 3L334 2.99999" stroke="#0000DC" strokeWidth="5" />
		</svg>
	);
}
