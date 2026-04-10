import clsx from "clsx";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useWindowSize } from "react-use";
import LinkItem from "./LinkItem";
import { ContactGridItem } from "./types";
import ModalItem from "./ModalItem";

function LeftLines({ width = null, height = null }) {
	return (
		<svg width={width} height={height} viewBox="0 0 388 318" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M6.06641 318L6.06641 1.48416e-05" stroke="#0000DC" strokeWidth="3.9724" />
			<path d="M21.6445 318L21.6445 1.48416e-05" stroke="#0000DC" strokeWidth="4.46895" />
			<path d="M37.2266 318L37.2266 1.48416e-05" stroke="#0000DC" strokeWidth="4.9655" />
			<path d="M52.8047 318L52.8047 1.48416e-05" stroke="#0000DC" strokeWidth="5.46205" />
			<path d="M68.3867 318L68.3867 1.48416e-05" stroke="#0000DC" strokeWidth="5.9586" />
			<path d="M83.9688 318L83.9687 1.48416e-05" stroke="#0000DC" strokeWidth="6.45515" />
			<path d="M99.5469 318L99.5469 1.48416e-05" stroke="#0000DC" strokeWidth="6.9517" />
			<path d="M115.129 318L115.129 1.48416e-05" stroke="#0000DC" strokeWidth="7.44825" />
			<path d="M130.711 318L130.711 1.48416e-05" stroke="#0000DC" strokeWidth="7.9448" />
			<path d="M146.289 318L146.289 1.48416e-05" stroke="#0000DC" strokeWidth="8.44135" />
			<path d="M161.871 318L161.871 1.48416e-05" stroke="#0000DC" strokeWidth="8.93789" />
			<path d="M177.453 318L177.453 1.48416e-05" stroke="#0000DC" strokeWidth="9.43444" />
			<path d="M193.031 318L193.031 1.48416e-05" stroke="#0000DC" strokeWidth="9.93099" />
			<path d="M208.613 318L208.613 1.48416e-05" stroke="#0000DC" strokeWidth="10.4275" />
			<path d="M224.195 318L224.195 1.48416e-05" stroke="#0000DC" strokeWidth="10.9241" />
			<path d="M239.773 318L239.773 1.48416e-05" stroke="#0000DC" strokeWidth="11.4206" />
			<path d="M255.355 318L255.355 1.48416e-05" stroke="#0000DC" strokeWidth="11.9172" />
			<path d="M270.938 318L270.937 1.48416e-05" stroke="#0000DC" strokeWidth="12.4137" />
			<path d="M286.516 318L286.516 1.48416e-05" stroke="#0000DC" strokeWidth="12.9103" />
			<path d="M302.098 318L302.098 1.48416e-05" stroke="#0000DC" strokeWidth="13.4068" />
			<path d="M317.676 318L317.676 1.48416e-05" stroke="#0000DC" strokeWidth="13.9034" />
			<path d="M333.258 318L333.258 1.48416e-05" stroke="#0000DC" strokeWidth="14.3999" />
			<path d="M348.84 318L348.84 1.48416e-05" stroke="#0000DC" strokeWidth="14.8965" />
			<path d="M364.418 318L364.418 1.48416e-05" stroke="#0000DC" strokeWidth="15.393" />
			<path d="M380 318L380 1.48416e-05" stroke="#0000DC" strokeWidth="15.8896" />
		</svg>
	);
}

interface ContactGridProps {
	content: {
		items: ContactGridItem[];
	};
}

function ContactGrid(props: ContactGridProps) {
	const { content } = props;

	const getFirstRowItemSize = (index: number) => {
		switch (index) {
			case 0:
				return "w-full min-h-[200px] md:aspect-[737/360] md:max-w-[57.5%]";
			case 1:
				return "w-full min-h-[200px] flex-1";
			default:
				return "w-full min-h-[200px] flex-1";
		}
	};

	const getSecondRowItemSize = (index: number) => {
		switch (index) {
			default:
				return "w-full min-h-[200px] lg:aspect-[409/360] flex-1";
		}
	};

	const containerRef = useRef(null);
	const { width: windowWidth } = useWindowSize();

	const amountThreshold = windowWidth > 768 ? 0.5 : 0.2;

	const isInView = useInView(containerRef, { amount: amountThreshold, once: true });

	return (
		<div ref={containerRef} className="contact-grid">
			<div className="mb-6 grid gap-4 sm:grid-cols-2 sm:gap-6 md:flex">
				{/* 1st row */}
				{[...content.items].splice(0, 2)?.map((item, index) => {
					const { type } = item;

					const isFirstItem = index === 0;

					return (
						<div key={`first-row-item-${index}`} className={clsx(getFirstRowItemSize?.(index), "relative")}>
							{isFirstItem && (
								<div
									className={clsx(
										isInView ? "scale-x-100" : "scale-x-0",
										"absolute left-[-9%] top-4 h-full origin-right transition-transform duration-300 ease-linear"
									)}
								>
									<LeftLines height="90%" />
								</div>
							)}
							{type === "link" && <LinkItem item={item} highlight={index === 0} />}
							{type === "modalForm" && <ModalItem item={item} highlight={index === 0} />}
						</div>
					);
				})}
			</div>

			<div className="grid gap-6 sm:grid-cols-2 md:flex">
				{/* 2nd row */}
				{[...content.items].splice(2, content.items.length)?.map((item, index) => {
					const { type } = item;

					return (
						<div key={`second-row-item-${index}`} className={clsx(getSecondRowItemSize?.(index))}>
							{type === "link" && <LinkItem item={item} />}
							{type === "modalForm" && <ModalItem item={item} />}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default ContactGrid;
