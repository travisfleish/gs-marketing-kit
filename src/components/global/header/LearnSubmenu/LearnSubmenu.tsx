import React from "react";
// elements
import { WpImageProps } from "~/components/elements/Wp";
import { m } from "framer-motion";
import HeaderIconCard from "../HeaderElements/HeaderIconCard";
import FeaturedCard from "./FeaturedCard";
import FeaturedArticle from "./FeaturedArticle";

interface LearnSubmenuProps {
	parentMenu?: any;
	submenu: {
		cards: {
			icon: {
				type: "image" | "rive";
				image: WpImageProps["image"];
			};
			link: {
				url: string;
				title: string;
				target: "_blank" | "";
			};
			description: string;
		}[];
		featured_article: {
			permalink: string;
			post_title: string;
			acf: {
				preview: {
					thumbnail: WpImageProps["image"];
				};
			};
			categories: {
				id: string;
				name: string;
				slug: string;
			}[];
		};
		featured_card: {
			icon: {
				type: "image" | "rive";
				image: WpImageProps["image"];
			};
			link: {
				url: string;
				title: string;
				target: "_blank" | "";
				4;
			};
			description: string;
		};
	};
}

function LearnSubmenu({ submenu, parentMenu }: LearnSubmenuProps) {
	return (
		<m.div layout className="items-start space-y-4 lg:flex lg:items-stretch lg:space-x-6 lg:space-y-0  2xl:mx-[-1.5rem]">
			<div className="w-full shrink-0 space-y-4 md:space-y-6 lg:w-[calc(62%-1.5rem)]">
				{/* header cards */}
				<div className="grid gap-y-4 md:grid-cols-2 md:gap-x-4 md:gap-y-0 lg:gap-x-0">
					{submenu?.cards?.length > 0 &&
						submenu?.cards?.map((item) => (
							<div key={item?.link?.title}>
								<HeaderIconCard item={item} gapLrg parentMenu={parentMenu} />
							</div>
						))}
				</div>
				{/* featured post */}
				<div>
					<FeaturedArticle item={submenu?.featured_article} parentMenu={parentMenu} />
				</div>
			</div>
			{/* featured card */}
			<div className="w-full shrink-0 lg:w-[38%] lg:max-w-[30.9375rem]">
				<FeaturedCard item={submenu?.featured_card} parentMenu={parentMenu} />
			</div>
		</m.div>
	);
}

export default LearnSubmenu;
