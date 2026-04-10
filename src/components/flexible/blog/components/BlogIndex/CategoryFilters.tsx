// Setup category accessor

import React, { useEffect, useState } from "react";
// elements
import Link from "next/link";
import clsx from "clsx";
import { m, LazyMotion, domMax, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { ChevronDown } from "~/components/elements/Icons";
import FilterDropdown from "./FilterDropdown";
import BlogSearch from "./BlogSearch";
// import { RightCircleArrow } from "~/components/elements/Icons";
// blocks
// import FilterDropdown from "~/components/flexible/blog/filterMenu/FilterDropDown";

interface CategoryFiltersProps {
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
	onSearchClick?: () => void;
	onSearchCloseClick?: () => void;
	hideFilters?: boolean;
	openSearch?: boolean;
	onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CategoryFilters({
	activeFilter,
	setActiveFilter,
	taxonomyTerms,
	taxonomyTermAccessor = "category",
	className,
	allLinkURL = "/",
	onSearchClick,
	onSearchCloseClick,
	hideFilters = false,
	openSearch = false,
	onInputChange,
}: CategoryFiltersProps) {
	const router = useRouter();
	const { asPath } = router;

	const [openDropdown, setOpenDropdown] = useState(false);

	function changePage(urlLink: string) {
		router.push(urlLink, "", { scroll: false });
	}

	useEffect(() => {
		taxonomyTerms?.[taxonomyTermAccessor]?.forEach((element) => {
			const nameAsUrl = element?.name
				.replace(/ /g, "-")
				.toLowerCase()
				.replace(/&[a-z]+;/g, "")
				.replace("--", "-");

			if (asPath.replace("/newsroom", "").replace("/category", "").includes(nameAsUrl)) {
				setActiveFilter(element?.name);
			}
		});
	}, [taxonomyTerms]);

	return (
		<LazyMotion features={domMax}>
			<div className={clsx(className, "category-filters w-full")}>
				{/* Tab Desktop version */}
				<div className="hidden w-full items-center justify-between gap-12 lg:flex">
					<m.menu
						layout
						className={clsx(
							"text-white-50 text-17 scrollbar scrollbar--dark relative hidden w-full max-w-[70%] items-center gap-x-8 gap-y-4 overflow-x-auto pb-4 lg:flex lg:pb-3"
						)}
					>
						{!hideFilters && (
							<>
								{/* All filter */}
								<div
									role="button"
									onClick={() => {
										setActiveFilter("all");
										changePage(allLinkURL);
									}}
									tabIndex={0}
									aria-label="All"
									onKeyDown={(e) => {
										if (e.key === "Enter") {
											setActiveFilter("all");
											changePage(allLinkURL);
										}
									}}
									className="relative ml-4 flex cursor-pointer items-center gap-2"
								>
									{activeFilter === "all" && (
										<m.div layoutId="category-filter-marker" className="absolute -left-4 top-[calc(50%-4px)] h-2 w-2 rounded-full bg-blue" />
									)}
									<p className={clsx("whitespace-nowrap transition-colors duration-300 ease-in-out", activeFilter === "all" ? "text-navy" : "text-navy/50")}>
										All
									</p>
								</div>

								{/* All categories */}
								{taxonomyTerms?.[taxonomyTermAccessor]?.length > 0 &&
									taxonomyTerms?.[taxonomyTermAccessor]?.map((ind) => {
										const isActive = activeFilter === ind?.name;

										return (
											<div
												key={ind?.id}
												tabIndex={0}
												role="button"
												onClick={() => {
													setActiveFilter(ind?.name);
													changePage(ind?.url);
												}}
												onKeyDown={(e) => {
													if (e.key === "Enter") {
														setActiveFilter(ind?.name);
														changePage(ind?.url);
													}
												}}
												aria-label={ind?.name}
												className={clsx("relative ml-4 flex cursor-pointer items-center gap-2", router?.asPath === ind?.url && "pointer-events-none")}
											>
												{isActive && <m.div layoutId="category-filter-marker" className="absolute -left-4 top-[calc(50%-4px)] h-2 w-2 rounded-full bg-blue" />}

												<p
													className={clsx("whitespace-nowrap transition-colors duration-300 ease-in-out", isActive ? "text-navy" : "text-navy/60")}
													dangerouslySetInnerHTML={{
														__html: ind?.name,
													}}
												/>
											</div>
										);
									})}
							</>
						)}
					</m.menu>

					{/* Search */}
					{/* <div className="flex-1 flex-shrink-0"> */}
					<m.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="-mt-4" key={`search-open-${openSearch}`}>
						<BlogSearch open={openSearch} onSearchClick={onSearchClick} onSearchCloseClick={onSearchCloseClick} onInputChange={onInputChange} />
					</m.div>
					{/* </div> */}
				</div>

				{/* Mobile dropdown */}
				<div className="relative lg:hidden">
					<button
						type="button"
						aria-label="Show category filter menu"
						onClick={() => {
							setOpenDropdown(!openDropdown);
						}}
						className="flex w-full items-center justify-between rounded-md border border-[#0d12261a] bg-lightGrey px-4 py-3 text-left"
					>
						<span dangerouslySetInnerHTML={{ __html: `${activeFilter === "all" ? "Select Category" : activeFilter}` }} />
						<div className={clsx("origin-center transition-transform duration-300", openDropdown ? "-rotate-180" : "")}>
							<ChevronDown />
						</div>
					</button>

					<AnimatePresence mode="wait">
						{openDropdown && (
							<FilterDropdown
								allLinkURL={allLinkURL}
								menu={taxonomyTerms?.[taxonomyTermAccessor]}
								setOpenDropdown={setOpenDropdown}
								setActiveFilter={setActiveFilter}
								blockScroll
							/>
						)}
					</AnimatePresence>
				</div>
			</div>
		</LazyMotion>
	);
}

export default CategoryFilters;
