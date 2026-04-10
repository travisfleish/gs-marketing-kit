import { FourOhFourType } from "~/types/wp";
import { getSplitBreakText } from "~/utils/text";
import Asset from "../elements/media/Asset";
import LinkGroup from "../elements/links/LinkGroup";

function FourOhFour(props: FourOhFourType) {
	const { asset, content } = props || {};

	return (
		<section className="bg-navy">
			<div className="container">
				<div className="flex flex-col items-center justify-center gap-8 py-24 text-center md:pb-36">
					<Asset {...asset} />

					{/* Content */}
					<div className="">
						<h1 className="text-center !tracking-[-0.04em] text-white" dangerouslySetInnerHTML={{ __html: getSplitBreakText({ text: content?.heading }) }} />

						{/* Links */}
						<div className="mt-10 md:mt-14">
							<LinkGroup links={content?.links?.links} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default FourOhFour;
