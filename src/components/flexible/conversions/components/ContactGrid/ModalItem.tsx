import { useState } from "react";
import Portal from "~/components/global/Portal";
import LightboxOverlay from "~/components/global/LightBoxOverlay";
import clsx from "clsx";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import { ContactGridItem } from "./types";
import DummyForm from "./DummyForm";
import ItemHeadings from "./ItemHeadings";
import ItemArrows from "./ItemArrows";
import AnimatedLines from "./AnimatedLines";

interface ModalItemProps {
	item: ContactGridItem;
	highlight?: boolean;
}

function ModalItem({ item, highlight = false }: ModalItemProps) {
	const { subheading, heading, form } = item;
	const [showModal, setShowModal] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	return (
		<LazyMotion features={domAnimation}>
			<button
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				type="button"
				onClick={() => setShowModal(true)}
				className={clsx(
					"group relative flex h-full w-full flex-col items-start justify-between overflow-hidden rounded-lg p-4 transition-colors duration-300 ease-in-out md:p-6 lg:p-8",
					highlight ? "bg-blue text-white" : "bg-lightGrey hover:bg-navy"
				)}
			>
				{/* Animated lines */}
				<AnimatedLines isHovered={isHovered} highlight={highlight} />

				{/* Headings */}
				<ItemHeadings subheading={subheading} heading={heading} altVer={highlight} />

				{/* Arrows */}
				<ItemArrows altVer={highlight} isHovered={isHovered} />
			</button>

			<AnimatePresence>
				{showModal && (
					<Portal rootId="contact-form-modal">
						<LightboxOverlay
							onClick={() => {
								setShowModal(false);
								// onPortalClose?.();
							}}
							contentVerticalPosition="center"
							disableBlur
							childrenContainerClassName="w-full"
						>
							{/* {item?.form?.form_embed && <div dangerouslySetInnerHTML={{ __html: item.form.form_embed }} />} */}
							<LazyMotion features={domAnimation}>
								<m.div
									initial={{
										opacity: 0,
										scale: 0.8,
										y: 20,
									}}
									animate={{
										opacity: 1,
										scale: 1,
										y: 0,
										transition: {
											duration: 0.25,
											ease: "easeInOut",
										},
									}}
									exit={{
										opacity: 0,
										scale: 0.8,
										y: 20,
										transition: {
											duration: 0.25,
											ease: "easeInOut",
										},
									}}
									className="contact-grid__dummy-form relative mx-auto max-w-[671px] rounded-xl bg-white p-6 md:aspect-[671/682] md:px-10 md:py-12"
								>
									<div className="form-embed-wrapper overflow-hidden bg-white">
										{/* <DummyForm form={form} /> */}
										{item?.form?.form_embed && <div dangerouslySetInnerHTML={{ __html: item.form.form_embed }} />}
									</div>
								</m.div>
							</LazyMotion>
						</LightboxOverlay>
					</Portal>
				)}
			</AnimatePresence>
		</LazyMotion>
	);
}

export default ModalItem;
