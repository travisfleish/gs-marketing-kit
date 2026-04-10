import clsx from "clsx";
import React from "react";
import { CloseIcon, SearchIcon } from "~/components/elements/Icons";
import { m, LazyMotion, domAnimation } from "framer-motion";

interface BlogSearchProps {
	open: boolean;
	onSearchClick?: () => void;
	onSearchCloseClick?: () => void;
	onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	className?: string;
	hideCloseIcon?: boolean;
}

const itemAnim = {
	initial: { opacity: 0, y: 10 },
	animate: { opacity: 1, y: 0 },
};

function BlogSearch({ open, className, hideCloseIcon, onSearchClick, onSearchCloseClick, onInputChange }: BlogSearchProps) {
	return open ? (
		<LazyMotion features={domAnimation}>
			<m.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.2, ease: "easeInOut" }}
				className={clsx("relative flex w-full items-center lg:max-w-[320px]", className)}
			>
				<m.input
					variants={itemAnim}
					animate="animate"
					initial="initial"
					transition={{ delay: 0.25, ease: "easeInOut", duration: 0.2 }}
					onChange={(e) => {
						onInputChange(e);
					}}
					onKeyDown={(e) => {
						// If escape key is pressed
						if (e.key === "Escape") {
							onSearchCloseClick?.();
						}
					}}
					type="text"
					placeholder="Search"
					className="text-18 font-family w-full border border-b border-l-0 border-r-0 border-t-0 border-[#0d12261a] bg-white px-10 py-2 font-normal text-navy focus:border-transparent focus:outline-none focus:ring-0"
				/>

				<span className="absolute left-2 top-1/2 -translate-y-1/2 transform">
					<m.div layoutId="search-icon">
						<SearchIcon />
					</m.div>
				</span>

				{!hideCloseIcon && (
					<m.button
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0, translateY: "-50%" }}
						transition={{ delay: 0.4, ease: "easeInOut", duration: 0.2 }}
						type="button"
						onClick={() => {
							onSearchCloseClick?.();
						}}
						className="absolute right-2 top-1/2 transform"
					>
						<CloseIcon lineClassName="text-navy/70" />
					</m.button>
				)}
			</m.div>
		</LazyMotion>
	) : (
		<button
			type="button"
			aria-label="Toggle search"
			onClick={() => {
				onSearchClick?.();
			}}
		>
			<m.div layoutId="search-icon">
				<SearchIcon />
			</m.div>
		</button>
	);
}

export default BlogSearch;
