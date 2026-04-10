import clsx from "clsx";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";
import { LegalType } from "~/types/wp";
import parseSlug from "~/utils/parseSlug";
import { useInView, useMotionValueEvent, useScroll } from "framer-motion";
import { GlobalContext } from "~/utils/context";

function NavMobile({ content }: { content: LegalType["content"] }) {
	const router = useRouter();
	const [context, setContext] = useContext(GlobalContext) as any;
	const [showHeader, setShowHeader] = useState(false);

	const ref = useRef(null);
	const isInView = useInView(ref, { amount: 0.4 });
	const { scrollYProgress } = useScroll();

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		if (latest < 0.04 && !showHeader) {
			setShowHeader(true);
		} else if (showHeader) {
			setShowHeader(false);
		}
	});

	// Block header when container is in view
	useEffect(() => {
		if (isInView && !context?.blockHeader) {
			setContext((prev) => ({ ...prev, blockHeader: true }));
		}

		if ((!isInView || showHeader) && context?.blockHeader) {
			setContext((prev) => ({ ...prev, blockHeader: false }));
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isInView, isInView, showHeader]);

	return (
		<aside ref={ref} className="sticky top-0 z-10 flex w-full flex-col bg-white md:hidden">
			{/* Navigation */}
			<div className="flex items-center gap-3 border-y border-[#0d12260d] pl-5 pr-2 md:mb-7">
				<span className={clsx("bg-blue", "block h-[8px] w-[8px] rounded-full border")} />

				<select
					className="text-16 my-3 block w-full border-none font-medium focus:outline-none focus:ring-0"
					onChange={(e) => {
						router.push(`#${parseSlug(e.target.value)}`);
					}}
				>
					{content?.length > 0 &&
						content?.map(({ section }) => {
							const { heading } = section;

							return (
								<option value={`#${parseSlug(heading)}`} key={heading}>
									{heading}
								</option>
							);
						})}
				</select>
			</div>
		</aside>
	);
}

export default NavMobile;
