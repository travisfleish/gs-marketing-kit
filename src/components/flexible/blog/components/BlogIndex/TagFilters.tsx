import React, { useState, useEffect } from "react";
// elements
import Link from "next/link";
import clsx from "clsx";
import { m, LazyMotion, domMax, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { ChevronDown, RightArrowCircle } from "~/components/elements/Icons";
import FilterDropdown from "./FilterDropdown";
// import { RightCircleArrow } from "~/components/elements/Icons";
// blocks
// import FilterDropdown from "~/components/flexible/blog/filterMenu/FilterDropDown";

interface TagFiltersProps {
	activeFilter: string;
	// eslint-disable-next-line
	setActiveFilter: (filter: string) => void;
	taxonomyTerms: {
		// any key
		[key: string]: {
			id: number;
			name: string;
			url: string;
		}[];
	};
	taxonomyTermAccessor?: string;
	className?: string;
	allLinkURL?: string;
}

function TagFilters({ activeFilter, setActiveFilter, taxonomyTerms, taxonomyTermAccessor = "category", className, allLinkURL = "/" }: TagFiltersProps) {
	const router = useRouter();
	const { asPath } = router;
	const [openDropdown, setOpenDropdown] = useState(false);

	useEffect(() => {
		taxonomyTerms?.[taxonomyTermAccessor]?.forEach((element) => {
			const nameAsUrl = element?.name
				.replace(/ /g, "-")
				.toLowerCase()
				.replace(/&[a-z]+;/g, "")
				.replace("--", "-");

			if (asPath.replace("/tag", "").includes(nameAsUrl)) {
				setActiveFilter(element?.name);
			}
		});
	}, [taxonomyTerms]);

	return (
		<LazyMotion features={domMax}>
			<div className={clsx(className, "tag-filters")}>
				{/* Tab Desktop version */}
				<menu
					className={clsx(
						"scrollbar scrollbar--light hidden flex-col items-start gap-x-8 gap-y-4 overflow-x-auto md:flex-row lg:flex lg:flex-col",
						"text-white-50 text-17"
					)}
				>
					<Link
						href={allLinkURL}
						role="button"
						scroll={false}
						onClick={() => {
							setActiveFilter("all");
						}}
						tabIndex={0}
						className="flex cursor-pointer items-center gap-2"
					>
						{activeFilter === "all" && <m.div layoutId="tag-filter-marker" className="h-2 w-2 rounded-full bg-blue" />}
						<p className={clsx("whitespace-nowrap transition-colors duration-300 ease-in-out", activeFilter === "all" ? "text-navy" : "text-navy/50")}>All</p>
					</Link>

					{taxonomyTerms?.[taxonomyTermAccessor]?.length > 0 &&
						taxonomyTerms?.[taxonomyTermAccessor]?.map((ind) => {
							const isActive = activeFilter === ind?.name;

							return (
								<Link
									href={ind?.url}
									tabIndex={0}
									role="button"
									scroll={false}
									onClick={() => {
										setActiveFilter(ind?.name);
									}}
									key={ind?.id}
									className={clsx("flex cursor-pointer items-center gap-2", router?.asPath === ind?.url && "pointer-events-none")}
								>
									{isActive && <m.div layoutId="filter-marker" className="h-2 w-2 rounded-full bg-blue" />}

									<p
										className={clsx("whitespace-nowrap transition-colors duration-300 ease-in-out", isActive ? "text-navy" : "text-navy/60")}
										dangerouslySetInnerHTML={{
											__html: ind?.name,
										}}
									/>
								</Link>
							);
						})}
				</menu>

				{/* Mobile dropdown */}
				<div className="relative lg:hidden">
					<button
						type="button"
						aria-label="Show filter menu"
						onClick={() => {
							setOpenDropdown(!openDropdown);
						}}
						className="flex w-full items-center justify-between rounded-md border border-[#0d12261a] bg-lightGrey px-4 py-3 text-left"
					>
						<span dangerouslySetInnerHTML={{ __html: `${activeFilter === "all" ? "Select Type" : activeFilter}` }} />

						<div className={clsx("origin-center transition-transform duration-300", openDropdown ? "-rotate-180" : "")}>
							<ChevronDown />
						</div>
					</button>
					<AnimatePresence mode="wait">
						{openDropdown && (
							<FilterDropdown
								allLinkURL={allLinkURL}
								blockScroll
								menu={taxonomyTerms?.post_tag}
								setOpenDropdown={setOpenDropdown}
								setActiveFilter={setActiveFilter}
							/>
						)}
					</AnimatePresence>
				</div>
			</div>
		</LazyMotion>
	);
}

export default TagFilters;
