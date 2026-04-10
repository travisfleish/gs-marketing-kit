import clsx from "clsx";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { FacebookLogo, LinkedinLogo, Xlogo } from "~/components/elements/Icons";

const TwitterShareButton = dynamic(() => import("react-share").then((mod) => mod.TwitterShareButton), {
	ssr: false,
});

const LinkedinShareButton = dynamic(() => import("react-share").then((mod) => mod.LinkedinShareButton), {
	ssr: false,
});

const FacebookShareButton = dynamic(() => import("react-share").then((mod) => mod.FacebookShareButton), {
	ssr: false,
});

function PostShare({ className = "" }) {
	const [currentUrl, setCurrentUrl] = useState("/");

	useEffect(() => {
		if (typeof window !== "undefined") {
			setCurrentUrl(window.location.href);
		}
	}, []);

	return (
		<div className={clsx("flex items-start gap-[4px]", className)}>
			<div className="group">
				<TwitterShareButton url={currentUrl} aria-label="Twitter">
					<Xlogo containerClassName="text-lightGrey group-hover:text-blue" logoClassName="text-navy group-hover:text-white" />
				</TwitterShareButton>
			</div>

			<div className="group">
				<LinkedinShareButton url={currentUrl} aria-label="LinkedIn">
					<LinkedinLogo containerClassName="text-lightGrey group-hover:text-blue" logoClassName="text-navy group-hover:text-white" />
				</LinkedinShareButton>
			</div>

			<div className="group">
				<FacebookShareButton url={currentUrl} aria-label="Facebook">
					<FacebookLogo containerClassName="text-lightGrey group-hover:text-blue" logoClassName="text-navy group-hover:text-white" />
				</FacebookShareButton>
			</div>
		</div>
	);
}

export default PostShare;
