import { WpPage } from "~/types/wp";
// import Link from "next/link";
import { RightArrowCircle } from "~/components/elements/Icons";
import Asset from "~/components/elements/media/Asset";
import WpImage from "~/components/elements/Wp";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { GlobalContext } from "~/utils/context";
import SingleCustomerBannerSidebar from "./SingleCustomerBannerSidebar";

function SingleCustomerStoryMasthead(props: WpPage) {
	const [context] = useContext(GlobalContext) as any;

	const router = useRouter();

	const { inner_page, post_title, media, banner_sidebar } = props;

	const { masthead } = inner_page || {};

	return (
		<div className="single-customer-story-masthead">
			{/* Back button */}
			<div className="container hidden md:block">
				<button
					aria-label="Go back"
					type="button"
					className="group flex w-fit justify-start gap-4 pb-12 pt-6 md:py-12"
					onClick={() => {
						// Go to last path
						if (context?.history?.length > 1) {
							router.push(context?.history?.[0] || "/customer-stories/");
						} else {
							router.push("/customer-stories/");
						}
					}}
				>
					<div className="rotate-180">
						<RightArrowCircle circleClassName="text-navy group-hover:text-blue" />
					</div>
					Take me back
				</button>
			</div>

			{/* Main */}
			<div>
				<div className="container--1062px container pt-6 md:pt-0">
					<div className="flex w-full flex-col items-start gap-6">
						{/* Logo */}
						<WpImage className="max-h-16 w-auto max-w-40 object-contain object-center md:max-h-24" image={media?.logo} />

						{/* Heading */}
						{!!post_title && (
							<h1
								className="text-h2 max-w-[894px] text-left"
								dangerouslySetInnerHTML={{
									__html: post_title,
								}}
							/>
						)}

						{/* Tag */}
						<span
							className="text-15 font-body text-navy/80"
							dangerouslySetInnerHTML={{
								__html: "Customer Story",
							}}
						/>
					</div>
				</div>
			</div>

			{/* Asset */}
			<div className="container--1062px container mt-6 pl-0 pr-0 pt-6 sm:mt-10 md:mt-[72px] md:flex md:justify-between md:gap-[20px] md:pt-0 xl:gap-[35px]">
				{banner_sidebar?.show_sidebar && <SingleCustomerBannerSidebar {...props} />}

				{!!masthead?.asset?.image?.url?.length && (
					<div
						className={`aspect-[1062/568] w-full max-w-[1062px] overflow-hidden sm:mt-10 ${banner_sidebar?.show_sidebar ? "md:w-[65%]" : "md:w-full"} md:rounded-lg`}
					>
						<Asset className="h-full w-full object-cover object-center" {...masthead.asset} />
					</div>
				)}
			</div>
		</div>
	);
}

export default SingleCustomerStoryMasthead;
