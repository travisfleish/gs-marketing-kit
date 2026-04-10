import clsx from "clsx";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import parseSlug from "~/utils/parseSlug";

export interface ArticleTextContentProps {
	text: string;
	add_anchor_id?: boolean;
	anchor_id?: string;
	liColor?: "purple" | "orange";
	onInView?: (id: string) => void;
	onNotInView?: (id: string) => void;
}

const liColorMap = {
	purple: "prose--post--li-purple",
	orange: "prose--post--li-orange",
};

export default function ArticleTextContent(props: ArticleTextContentProps) {
	const { liColor = "purple", add_anchor_id, anchor_id, text, onInView, onNotInView } = props;
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { amount: 0.5 });

	useEffect(() => {
		if (isInView) {
			onInView?.(anchor_id);
		} else {
			onNotInView?.(anchor_id);
		}
	}, [anchor_id, isInView, onInView, onNotInView]);

	const textReplace = text?.replace(/\/\/(uat\.)?cms\./g, "//www.");

	return (
		<div
			ref={ref}
			id={add_anchor_id ? parseSlug(anchor_id) : undefined}
			className={clsx("text-prose prose--post prose scroll-mt-32 text-navy/80", liColorMap?.[liColor])}
			dangerouslySetInnerHTML={{ __html: textReplace }}
		/>
	);
}
