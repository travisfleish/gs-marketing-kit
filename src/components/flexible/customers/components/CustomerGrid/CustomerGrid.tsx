import { WpCustomerStory, WpStackedText } from "~/types/wp";
import { Fragment } from "react";
import DoubleStatCard from "./components/DoubleStatCard";
import SingleStatCard from "./components/SingleStatCard";
import PostCard from "./components/PostCard";

interface CustomerGridCard {
	card: {
		layout: "post" | "singleStat" | "doubleStat";
		post: WpCustomerStory[];
		single_stat: {
			stacked_text: WpStackedText;
			label: string;
		};
		double_stats: {
			top_text: string;
			bottom_text: string;
			label: string;
		}[];
	};
}
interface CustomerGridProps {
	cards: CustomerGridCard[];
}

function CustomerGrid(props: CustomerGridProps) {
	const { cards } = props;

	return (
		<div className="customer-grid">
			<div className="grid gap-4 md:grid-cols-2 md:gap-6">
				{cards?.length > 0 &&
					cards?.map(({ card }, i) => {
						const { layout } = card;

						return (
							<Fragment key={`customer-grid-card-${i}`}>
								{layout === "doubleStat" && <DoubleStatCard card={card} />}
								{layout === "singleStat" && <SingleStatCard card={card} />}
								{layout === "post" && <PostCard card={card} />}
							</Fragment>
						);
					})}
			</div>
		</div>
	);
}

export default CustomerGrid;
