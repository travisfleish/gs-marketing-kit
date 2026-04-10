import { AssetProps } from "~/components/elements/media/Asset";

export interface ThreeColLinesMastheadItem {
	asset: AssetProps;
	line_color: string;
	layout: "single" | "rotating";
	assets: AssetProps[];
}
