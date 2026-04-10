import { use, useContext, useEffect, useRef, useState } from "react";
// import PostShare from "~/components/templates/SingleResource/components/PostShare";
import { GlobalContext } from "~/utils/context";
import clsx from "clsx";
import { getSplitBreakText } from "~/utils/text";
import cms from "~/utils/cms";
import { useDebounce, useWindowSize } from "react-use";
import { motion } from "framer-motion";
import trackEvent from "~/utils/trackEvent";
import CategoryFilters from "./CategoryFilters";
import BlogIndexCard from "./BlogIndexCard";
import TagFilters from "./TagFilters";
import BlogSearch from "./BlogSearch";
import BlogPagination from "./BlogPagination";

type BlogIndexProps = {
	heading: string;
	hideAside?: boolean;
	// hidePostShare?: boolean;
	hideTagFilters?: boolean;
	colNumber: 2 | 3;
	topFiltersTaxonomyTermAccessor?: string;
	sideFiltersTaxonomyTermAccessor?: string;
	postCategoriesAccessor?: string;
	allLinkURL?: string;
	imageAccessor?: string;
	hideCTAs?: boolean;
	showCustomerLogos?: boolean;
	paginationBasePath?: string;
};

const animationParent = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			duration: 0.75,
			ease: "easeInOut",
			when: "beforeChildren",
			staggerChildren: 0.25,
			delayChildren: 0.25,
		},
	},
};

function BlogIndex({
	heading,
	hideAside = false,
	// hidePostShare = false,
	hideTagFilters = false,
	colNumber = 2,
	topFiltersTaxonomyTermAccessor = "category",
	postCategoriesAccessor = "categories",
	sideFiltersTaxonomyTermAccessor = "post_tag",
	allLinkURL = "/content-hub/",
	imageAccessor,
	hideCTAs = false,
	showCustomerLogos = false,
	paginationBasePath,
}: BlogIndexProps) {
	const [context] = useContext(GlobalContext);
	const { postListing } = context;
	const { taxonomyTerms, posts } = postListing || {};
	const [activeCategoryFilter, setActiveCategoryFilter] = useState("all");
	const [activeTagFilter, setActiveTagFilter] = useState("all");
	const containerRef = useRef(null);

	const { width: windowWidth } = useWindowSize();

	const scrollToListings = () => {
		containerRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	const [openSearch, setOpenSearch] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	const [, cancel] = useDebounce(
		() => {
			setDebouncedSearchTerm(searchTerm);
		},
		250,
		[searchTerm]
	);

	useEffect(() => {
		const getPosts = async () => {
			const results = await cms().search(debouncedSearchTerm);
			setSearchResults(results);
		};

		getPosts();

		if (debouncedSearchTerm?.length > 0) {
			trackEvent("search_trackevent", {
				keyword: debouncedSearchTerm,
			});
		}
	}, [debouncedSearchTerm]);

	useEffect(() => {
		if (activeTagFilter !== "all" || activeCategoryFilter !== "all") {
			scrollToListings();
		}
	}, [activeCategoryFilter, activeTagFilter]);

	const postsToRender = searchTerm ? searchResults : posts;

	return (
		<div ref={containerRef} id="blog-index" className="blog-index scroll-mt-32 sm:scroll-mt-40">
			<div className="mb-12 flex flex-col justify-between gap-6 sm:gap-8 lg:mb-[88px] lg:gap-12 xl:gap-16">
				{/* Heading */}
				<div className="flex items-center justify-between gap-32">
					<span
						className="text-h3 !tracking-[-0.0275em]"
						dangerouslySetInnerHTML={{ __html: getSplitBreakText({ text: heading, disable: windowWidth <= 1150 }) }}
					/>

					{/* Post share mobile */}
					<div className={clsx("flex items-center gap-x-8 lg:hidden", openSearch && "flex-1")}>
						{/* Tablet search */}
						{/* <div className={clsx("hidden w-full", colNumber === 2 ? "sm:block" : "md:block")}>
							<BlogSearch
								open={openSearch}
								onSearchClick={() => setOpenSearch(!openSearch)}
								onSearchCloseClick={() => {
									setOpenSearch(false);
									setSearchTerm("");
								}}
								onInputChange={(e) => setSearchTerm(e.target.value)}
							/>
						</div> */}

						{/* {!hidePostShare && !openSearch && <PostShare className="block lg:hidden" />} */}
					</div>
				</div>

				{/* Mobile search */}
				<div className={clsx(colNumber === 2 ? "lg:hidden" : "lg:hidden")}>
					<BlogSearch
						className="mt-4"
						open
						hideCloseIcon
						onSearchClick={() => setOpenSearch(!openSearch)}
						onSearchCloseClick={() => {
							setOpenSearch(false);
							setSearchTerm("");
						}}
						onInputChange={(e) => setSearchTerm(e.target.value)}
					/>
				</div>

				<div className={clsx("flex w-full flex-col gap-4 sm:flex-row sm:items-center", openSearch && "flex-1")}>
					{/* Category filters */}
					<CategoryFilters
						className="flex-1"
						activeFilter={activeCategoryFilter}
						setActiveFilter={setActiveCategoryFilter}
						taxonomyTerms={taxonomyTerms}
						taxonomyTermAccessor={topFiltersTaxonomyTermAccessor}
						allLinkURL={allLinkURL}
						onSearchClick={() => setOpenSearch(!openSearch)}
						onSearchCloseClick={() => {
							setOpenSearch(false);
							setSearchTerm("");
						}}
						// hideFilters={openSearch}
						openSearch={openSearch}
						onInputChange={(e) => setSearchTerm(e.target.value)}
					/>

					{/* Mobile tag filters */}
					{!hideTagFilters && (
						<div className="block flex-1 lg:hidden">
							<TagFilters
								activeFilter={activeTagFilter}
								setActiveFilter={setActiveTagFilter}
								taxonomyTerms={taxonomyTerms}
								taxonomyTermAccessor={sideFiltersTaxonomyTermAccessor}
								allLinkURL={allLinkURL}
							/>
						</div>
					)}
				</div>
			</div>

			{/* Tag filters and post listings */}
			<div className="flex flex-col items-start justify-between gap-12 md:gap-32 lg:flex-row">
				{!hideAside && !openSearch && (
					<div className="hidden flex-1 flex-col gap-16 md:sticky md:top-16 lg:flex">
						{/* Desktop Tag filters */}
						<TagFilters
							activeFilter={activeTagFilter}
							setActiveFilter={setActiveTagFilter}
							taxonomyTerms={taxonomyTerms}
							taxonomyTermAccessor={sideFiltersTaxonomyTermAccessor}
							allLinkURL={allLinkURL}
						/>

						{/* Post share desktop */}
						{/* <PostShare /> */}
					</div>
				)}

				<div className={clsx("flex w-full origin-right flex-col", colNumber === 2 && !openSearch ? "max-w-[894px]" : "")}>
					{searchTerm && searchResults.length === 0 ? (
						<p className="mx-auto text-center font-body">No results, enter another search term.</p>
					) : (
						<>
							<motion.div
								variants={animationParent}
								initial="initial"
								animate="animate"
								className={clsx(
									"grid w-full gap-10",
									colNumber === 2 && !openSearch && "sm:grid-cols-2 md:gap-x-[72px] md:gap-y-20",
									(colNumber === 3 || openSearch) && "sm:grid-cols-2 sm:gap-x-6 sm:gap-y-20 md:grid-cols-3"
								)}
							>
								{postsToRender?.length > 0 &&
									posts?.map((post, i) => (
										<BlogIndexCard
											showCustomerLogo={showCustomerLogos}
											hideCTA={hideCTAs}
											imageAccessor={imageAccessor}
											categoryAccessor={postCategoriesAccessor}
											key={post.ID}
											post={post}
											index={i}
											disableAnimation={colNumber === 3}
											searchOpen={openSearch}
										/>
									))}
							</motion.div>

							<BlogPagination
								basePath={paginationBasePath}
								postListing={postListing}
								onClick={() => {
									scrollToListings();
								}}
							/>
						</>
					)}
				</div>
			</div>
		</div>
	);
}

export default BlogIndex;
