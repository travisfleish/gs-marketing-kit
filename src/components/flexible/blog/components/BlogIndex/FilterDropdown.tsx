import React from "react";
import Link from "next/link";
import { m } from "framer-motion";
import clsx from "clsx";
import { useRouter } from "next/router";

function FilterDropdown({ menu, setOpenDropdown, blockScroll, allLinkURL = "/", setActiveFilter }) {
	const router = useRouter();
	return (
		<m.div
			key="results box"
			initial={{ y: -10, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: -10, opacity: 0 }}
			transition={{ duration: 0.3 }}
			onClick={() => setOpenDropdown(false)}
			className={clsx("category-filters__filter-dropdown absolute top-[130%] z-[20] max-h-[20.75rem] w-full overflow-y-auto rounded-lg bg-lightGrey shadow-lg")}
		>
			{/* All link */}
			<button
				type="button"
				aria-label="Show all posts"
				// scroll={!blockScroll}

				className="group flex items-center p-4 transition-colors duration-200  hover:bg-white/10 sm:space-x-3 md:space-x-4 md:pr-6"
				onClick={() => {
					setActiveFilter("all");
					console.log("allLinkURL", allLinkURL);
					router.push(allLinkURL);
				}}
			>
				<span className="text-16" dangerouslySetInnerHTML={{ __html: "All" }} />
			</button>

			{menu?.length > 0 &&
				menu?.map((item) => (
					<button
						aria-label={`Show ${item.name} posts`}
						type="button"
						// scroll={!blockScroll}
						key={item.id}
						// target={item.link.target}
						className="group flex items-center p-4 transition-colors duration-200 hover:bg-stone-50 sm:space-x-3 md:space-x-4 md:pr-6"
						onClick={() => {
							setActiveFilter(item.name);
							router.push(item.url);
						}}
					>
						<span className="text-16" dangerouslySetInnerHTML={{ __html: item.name }} />
					</button>
				))}
		</m.div>
	);
}

export default FilterDropdown;
