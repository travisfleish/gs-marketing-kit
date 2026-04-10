/* eslint-disable no-unsafe-optional-chaining */

import clsx from "clsx";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";

function BlogPagination({ postListing, onClick, basePath = "content-hub" }) {
	const router = useRouter();

	let path = "";

	if (router.asPath.includes("category")) {
		path = `${basePath}/category/${router.query?.slug[2]}`;
	} else if (router.asPath.includes("tag")) {
		path = `${basePath}/tag/${router.query?.slug[2]}`;
	} else if (basePath === "/the-fan-engagement-podcast/") {
		path = `the-fan-engagement-podcast`;
	} else {
		path = `${basePath}`;
	}

	return (
		<ReactPaginate
			className="mt-12 flex select-none items-center justify-center space-x-2 md:mt-24"
			pageClassName="h-7.5 w-7.5 rounded-full flex items-center justify-center hover:bg-lightGrey transition-colors duration-300"
			activeClassName="!text-white !bg-blue"
			breakLabel="..."
			breakClassName="w-[1.8rem] flex justify-center"
			initialPage={postListing?.page?.current - 1}
			onClick={({ event }: { event }) => {
				router.push(event.currentTarget.href, undefined, { scroll: false });
				onClick?.();
			}}
			hrefBuilder={(page, pageCount) => (page > 1 && page <= pageCount ? `/${path}/page/${page}` : `/${path}`)}
			pageRangeDisplayed={4}
			marginPagesDisplayed={2}
			pageCount={postListing?.page?.total}
			renderOnZeroPageCount={null}
			previousLinkClassName={postListing?.page?.current === 1 && "pointer-events-none"}
			nextLinkClassName={postListing?.page?.current === postListing?.page?.total && "pointer-events-none"}
			previousLabel={postListing?.page?.current === 1 ? "" : <PaginateArrow isDisabled={postListing?.page?.current === 1} onClick={onClick} />}
			nextLabel={
				postListing?.page?.current === postListing?.page?.total ? (
					""
				) : (
					<PaginateArrow rotate180 isDisabled={postListing?.page?.current === postListing?.page?.total} onClick={onClick} />
				)
			}
		/>
	);
}

function PaginateArrow({ isDisabled, rotate180, onClick }: { isDisabled: boolean; rotate180?: boolean; onClick?: () => void }) {
	return (
		<button
			type="button"
			onClick={() => {
				onClick?.();
			}}
			className={clsx(
				rotate180 && "rotate-180",
				`flex h-7.5 w-7.5 items-center justify-center rounded-full p-[0.325rem]`,
				isDisabled
					? "paginate-arrow--disabled text-midnight/40 pointer-events-none"
					: "text-navy transition-colors duration-300 hover:bg-blue/40 hover:text-navy"
			)}
		>
			<PaginationArrow />
		</button>
	);
}

export function PaginationArrow() {
	return (
		<svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
			<g>
				<path
					d="M5.21763 7.33327L8.79363 3.75726L7.85083 2.81445L2.66536 7.99993L7.85083 13.1853L8.79363 12.2425L5.21763 8.6666H13.332V7.33327H5.21763Z"
					fill="currentColor"
				/>
			</g>
		</svg>
	);
}

export default BlogPagination;
