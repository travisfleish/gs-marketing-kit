import { ImageProps } from "~/components/elements/Wp";
import { AssetProps } from "~/components/elements/media/Asset";
import { WpSimpleTextCard } from "~/types/wp";

export interface ContentAnimatedBottomCardsCard {
	card_type: "asset" | "statistic" | "testimonial" | string;
	asset: AssetProps;
	statistic: {
		heading: string;
		label: string;
	};
	testimonial: {
		full_name: string;
		image: ImageProps;
		job_role: string;
		main_text: string;
	};
}

export interface ContentAnimatedBottomCardsContent extends WpSimpleTextCard {
	cards: ContentAnimatedBottomCardsCard[];
}
