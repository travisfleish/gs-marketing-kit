import Asset from "~/components/elements/media/Asset";
import { m } from "framer-motion";
import clsx from "clsx";

function AssetCard({ card, isInView, className = "" }) {
	const { asset } = card;

	return (
		<m.div
			animate={{ y: isInView ? 0 : "105%", transition: { duration: 0.4, ease: "easeInOut" } }}
			className={clsx(
				"relative aspect-[286/200] h-full w-full overflow-hidden rounded-lg sm:aspect-none 960:aspect-[286/375] 960:max-w-[286px] 960:rounded-b-none",
				className
			)}
		>
			<Asset {...asset} fill className="!object-cover object-center" />
		</m.div>
	);
}

export default AssetCard;
