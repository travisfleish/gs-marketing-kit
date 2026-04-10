import clsx from "clsx";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";

function ValuesThreeColCard({ value, index }) {
	const { heading, text_list } = value;
	const ref = useRef(null);

	const isInView = useInView(ref, { amount: 0.7, once: true });

	const delayMap = {
		1: "delay-100",
		2: "delay-200",
	};

	return (
		<div ref={ref} className="values-three-col__card overflow-hidden rounded-xl bg-lightPurple pb-8 pt-10 text-navy">
			{/* Index and lines */}
			<div className="-ml-9 mb-6 flex items-center justify-between">
				{/* Index */}
				<p
					className={clsx(
						"-mb-7 text-[120px] leading-[0.8] text-purple transition-transform duration-300 ease-linear",
						delayMap?.[index],
						isInView ? "scale-100" : "scale-75"
					)}
				>
					{index < 10 ? "0" : ""}
					{index + 1}
				</p>

				{/* Lines */}
				<div
					className={clsx(
						delayMap?.[index],
						isInView ? "scale-x-100" : "scale-x-0",
						"-mr-1 h-[88px]",
						"origin-right transition-transform duration-300 ease-linear",
						"leaders-grid__row-one__lines flex flex-row-reverse"
					)}
				>
					{Array(20)
						.fill("")
						.map((_, i) => (
							<div key={i} style={{ width: `${9 - i * 0.35}px`, marginRight: `${3 + i * 0.3}px` }} className="h-full bg-purple" />
						))}
				</div>
			</div>

			{/* Content */}
			<div className="flex flex-col gap-6 px-6 py-8 sm:px-10">
				{/* Heading */}
				{!!heading && (
					<h5
						dangerouslySetInnerHTML={{
							__html: heading,
						}}
					/>
				)}

				{/* Text List */}
				{text_list?.length > 0 && (
					<ul className="values-three-col__card__list space-y-3">
						{text_list?.length > 0 &&
							text_list.map((text, i) => (
								<li key={`text-${i}`} className="flex items-start gap-3">
									<Image src="/ul-item-bullet-purple.svg" width={16} height={12} className="mt-[6px] flex-shrink-0 object-contain" alt="list-item-icon" />
									<p className="text-18 font-body" dangerouslySetInnerHTML={{ __html: text.text }} />
								</li>
							))}
					</ul>
				)}
			</div>
		</div>
	);
}

export default ValuesThreeColCard;
