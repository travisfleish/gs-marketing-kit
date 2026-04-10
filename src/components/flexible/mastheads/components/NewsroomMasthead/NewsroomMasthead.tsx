import clsx from "clsx";
import Link from "next/link";
import PostTag from "~/components/elements/PostTag";
import WpImage from "~/components/elements/Wp";
import LinkGroup from "~/components/elements/links/LinkGroup";
import useSection from "~/components/layouts/Section/useSection";
import { WpPost, WpSimpleTextCard } from "~/types/wp";
import { getSplitBreakText } from "~/utils/text";
import { useInView } from "framer-motion";
import { useRef } from "react";
import getPostPreviewImage from "~/utils/getPostPreviewImage";

interface NewsroomMastheadProps {
	content: WpSimpleTextCard;
	posts: WpPost[];
}

type BottomLinesProps = {
	width?: string;
	height?: string;
};

function BottomLeftLines({ width = "421", height }: BottomLinesProps) {
	return (
		<svg width={width} height={height} viewBox="0 0 421 503" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M142 317.792L142 1.60336e-05" stroke="#0000DC" strokeWidth="0.49655" />
			<path d="M123.42 317.792L123.42 1.60336e-05" stroke="#0000DC" strokeWidth="0.9931" />
			<path d="M104.838 317.792L104.838 1.60336e-05" stroke="#0000DC" strokeWidth="1.48965" />
			<path d="M86.2578 317.792L86.2578 1.60336e-05" stroke="#0000DC" strokeWidth="1.9862" />
			<path d="M67.6777 317.792L67.6777 1.60336e-05" stroke="#0000DC" strokeWidth="2.48275" />
			<path d="M49.0977 317.792L49.0977 1.60336e-05" stroke="#0000DC" strokeWidth="2.9793" />
			<path d="M30.5156 317.792L30.5156 1.60336e-05" stroke="#0000DC" strokeWidth="3.47585" />
			<path d="M11.9355 317.792L11.9355 1.60336e-05" stroke="#0000DC" strokeWidth="3.9724" />
			<path d="M421 635.587L421 317.795" stroke="#0000DC" strokeWidth="0.49655" />
			<path d="M402.42 635.587L402.42 317.795" stroke="#0000DC" strokeWidth="0.9931" />
			<path d="M383.838 635.587L383.838 317.795" stroke="#0000DC" strokeWidth="1.48965" />
			<path d="M365.258 635.587L365.258 317.795" stroke="#0000DC" strokeWidth="1.9862" />
			<path d="M346.678 635.587L346.678 317.795" stroke="#0000DC" strokeWidth="2.48275" />
			<path d="M328.098 635.587L328.098 317.795" stroke="#0000DC" strokeWidth="2.9793" />
			<path d="M309.516 635.587L309.516 317.795" stroke="#0000DC" strokeWidth="3.47585" />
			<path d="M290.936 635.587L290.936 317.795" stroke="#0000DC" strokeWidth="3.9724" />
			<path d="M272.355 635.587L272.355 317.795" stroke="#0000DC" strokeWidth="4.46895" />
			<path d="M253.773 635.587L253.773 317.795" stroke="#0000DC" strokeWidth="4.9655" />
			<path d="M235.193 635.587L235.193 317.795" stroke="#0000DC" strokeWidth="5.46205" />
			<path d="M216.613 635.587L216.613 317.795" stroke="#0000DC" strokeWidth="5.9586" />
			<path d="M198.033 635.587L198.033 317.795" stroke="#0000DC" strokeWidth="6.45515" />
			<path d="M179.451 635.587L179.451 317.795" stroke="#0000DC" strokeWidth="6.9517" />
			<path d="M160.871 635.587L160.871 317.795" stroke="#0000DC" strokeWidth="7.44825" />
			<path d="M142.291 635.587L142.291 317.795" stroke="#0000DC" strokeWidth="7.9448" />
			<path d="M123.709 635.587L123.709 317.795" stroke="#0000DC" strokeWidth="8.44135" />
			<path d="M105.129 635.587L105.129 317.795" stroke="#0000DC" strokeWidth="8.93789" />
			<path d="M86.5488 635.587L86.5488 317.795" stroke="#0000DC" strokeWidth="9.43444" />
			<path d="M67.9688 635.587L67.9687 317.795" stroke="#0000DC" strokeWidth="9.93099" />
			<path d="M49.3867 635.587L49.3867 317.795" stroke="#0000DC" strokeWidth="10.4275" />
			<path d="M30.8066 635.587L30.8066 317.795" stroke="#0000DC" strokeWidth="10.9241" />
			<path d="M12.2266 635.587L12.2266 317.795" stroke="#0000DC" strokeWidth="11.4206" />
		</svg>
	);
}

function BottomRightLines({ width = "422", height }: BottomLinesProps) {
	return (
		<svg width={width} height={height} viewBox="0 0 422 230" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1 0L1 472" stroke="#0000DC" strokeWidth="0.49655" />
			<path d="M22.3223 0L22.3223 472" stroke="#0000DC" strokeWidth="0.9931" />
			<path d="M43.6445 0L43.6445 472" stroke="#0000DC" strokeWidth="1.48965" />
			<path d="M64.9668 0L64.9668 472" stroke="#0000DC" strokeWidth="1.9862" />
			<path d="M86.291 0L86.291 472" stroke="#0000DC" strokeWidth="2.48275" />
			<path d="M107.613 0L107.613 472" stroke="#0000DC" strokeWidth="2.9793" />
			<path d="M128.936 0L128.936 472" stroke="#0000DC" strokeWidth="3.47585" />
			<path d="M150.258 0L150.258 472" stroke="#0000DC" strokeWidth="3.9724" />
			<path d="M171.58 0L171.58 472" stroke="#0000DC" strokeWidth="4.46895" />
			<path d="M192.902 0L192.902 472" stroke="#0000DC" strokeWidth="4.9655" />
			<path d="M214.227 0L214.227 472" stroke="#0000DC" strokeWidth="5.46205" />
			<path d="M235.549 0L235.549 472" stroke="#0000DC" strokeWidth="5.9586" />
			<path d="M256.871 0L256.871 472" stroke="#0000DC" strokeWidth="6.45515" />
			<path d="M278.193 0L278.193 472" stroke="#0000DC" strokeWidth="6.9517" />
			<path d="M299.516 0L299.516 472" stroke="#0000DC" strokeWidth="7.44825" />
			<path d="M320.838 0L320.838 472" stroke="#0000DC" strokeWidth="7.9448" />
			<path d="M342.162 0L342.162 472" stroke="#0000DC" strokeWidth="8.44135" />
			<path d="M363.484 0L363.484 472" stroke="#0000DC" strokeWidth="8.93789" />
			<path d="M384.807 0L384.807 472" stroke="#0000DC" strokeWidth="9.43444" />
			<path d="M406.129 0L406.129 472" stroke="#0000DC" strokeWidth="9.93099" />
		</svg>
	);
}

function NewsroomMasthead(props: NewsroomMastheadProps) {
	const { paddingTopMap, paddingBottomMap } = useSection();

	const { content, posts } = props;

	const ref = useRef(null);

	const isInView = useInView(ref, { amount: 0.5, once: true });

	return (
		<div className="w-full">
			<div ref={ref} className="blog-masthead relative z-10 bg-lightPurple">
				<div className="container--1292px container">
					<div
						className={clsx(
							paddingTopMap?.medium,
							paddingBottomMap?.medium
							//  "pb-32 md:pb-[186px]"
						)}
					>
						{/* Text */}
						<div className="mb-14 flex flex-col items-center md:mb-20">
							{/* Subheading */}
							<span
								className="text-15 mb-[18px] text-navy/80"
								dangerouslySetInnerHTML={{
									__html: content?.subheading,
								}}
							/>

							{/* Heading */}
							<h1
								className="mb-[33px] text-center font-normal !tracking-[-0.04em] text-navy"
								dangerouslySetInnerHTML={{
									__html: getSplitBreakText({ text: content?.heading }),
								}}
							/>

							{/* Links */}
							<LinkGroup {...content?.links} centered />
						</div>

						{/* Featured posts */}
						{posts?.length > 0 && (
							<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
								{posts?.map((post) => (
									<Link href={post?.permalink} aria-label="Open post" className="group flex gap-5 rounded-lg bg-white p-2 pr-5">
										{!!getPostPreviewImage(post) && (
											<div className="aspect-[154/88] w-full max-w-[154px] overflow-hidden rounded">
												<WpImage
													image={getPostPreviewImage(post)}
													className="h-full w-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-110"
												/>
											</div>
										)}

										<div className="flex flex-col items-start gap-[10px]">
											<PostTag text="Featured" />

											{!!post?.post_title && (
												<p
													className="text-16 line-clamp-2 font-body font-normal"
													dangerouslySetInnerHTML={{
														__html: post.post_title,
													}}
												/>
											)}
										</div>
									</Link>
								))}
							</div>
						)}
					</div>
				</div>

				{/* Bottom Left Lines */}
				<div className={clsx("linear absolute bottom-0 left-0 w-[29.5%] transition-transform duration-300", isInView ? "translate-x-0" : "-translate-x-full")}>
					<BottomLeftLines width="100%" />
				</div>

				{/* Bottom Right Lines */}
				<div className={clsx("linear absolute bottom-0 right-0 w-[28.5%] transition-transform duration-300", isInView ? "translate-x-0" : "translate-x-full")}>
					<BottomRightLines width="100%" />
				</div>
			</div>
		</div>
	);
}

export default NewsroomMasthead;
