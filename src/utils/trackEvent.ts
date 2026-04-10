// utils/gtm.js

import type { WpLinkType } from "~/types/wp";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const trackEvent = (eventName: string, eventParams?: Object & { page_location?: string } & any) => {
	try {
		window.dataLayer = window.dataLayer || [];

		const obj = {
			event: eventName,
			...eventParams,
		};

		if (!obj.page_location) {
			obj.page_location = window.location.href;
		}

		window.dataLayer.push({
			event: eventName,
			...eventParams,
		});
	} catch (error) {
		console.log(error); // eslint-disable-line no-console
	}
};

export default trackEvent;

export const trackLinkClick = (link: WpLinkType & { id?: string }) => {
	try {
		trackEvent("buttons_trackevent", {
			button_name: link?.title,
			button_id: link?.id,
			exit_click: link?.url,
		});
	} catch (error) {
		console.log(error); // eslint-disable-line no-console
	}
};

export const trackLinkClickProduct = (link: WpLinkType & { id?: string }) => {
	try {
		trackEvent("products_trackevent", {
			button_name: "brands",
			button_url: link?.url,
			exit_click: "/",
		});
	} catch (error) {
		console.log(error); // eslint-disable-line no-console
	}
};

// doing this because they currently have two events firing for the same thing, and they want to consolidate them
export const trackFooterMenuItemClick = (title) => {
	if (!title) return;
	trackEvent("footer_trackevent", {
		item_name: title,
		menu_type: "menu_footer",
	});
};

export const useTrackResourceLinks = () => {
	const pathname = usePathname();
	const router = useRouter();

	useEffect(() => {
		const handleLinkClick = (event) => {
			const link = event.currentTarget;
			const href = link.getAttribute("href");
			const previewHeadingText = link.querySelector(".preview-text-heading")?.textContent;

			if (href) {
				let category = "";
				if (href.startsWith("/newsroom")) {
					category = "newsroom";
				}
				if (href.startsWith("/case-studies")) {
					category = "case-studies";
				}
				if (href.startsWith("/content-hub")) {
					category = "content-hub";
				}
				if (category !== "") {
					const text = previewHeadingText || link?.innerText || link?.textContent || href;
					// console.log("Preview Heading Text", previewHeadingText);
					// console.log("INNER TEXT", link.innerText);
					// console.log("TEXT CONTENT", link.textContent);
					// console.log("HREF", href);

					trackEvent("news_trackevent", { Article_name: text, exit_click: href, category_name: category });
					// Wait a short time to allow the tracking event to fire before navigating
					event.preventDefault();
					setTimeout(() => {
						router.push(href);
					}, 100);
				}
			}
		};

		const links = document.querySelectorAll('a[href^="/newsroom"], a[href^="/case-studies"], a[href^="/content-hub"]');

		links.forEach((link) => {
			link.addEventListener("click", handleLinkClick);
		});

		// Cleanup event listeners on component unmount
		return () => {
			links.forEach((link) => {
				link.removeEventListener("click", handleLinkClick);
			});
		};
	}, [pathname, router]);
};
