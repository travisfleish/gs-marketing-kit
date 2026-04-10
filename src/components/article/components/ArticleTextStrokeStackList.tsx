import TextStrokeStack from "~/components/elements/TextStrokeStack";
import { WpStackedText } from "~/types/wp";

export interface ArticleTextStrokeStacklistProps {
	items: {
		stacked_text: WpStackedText;
		description?: string;
	};
}

function ArticleTextStrokeStacklist(props) {
	const { items } = props;

	return (
		<div className="article-text-stroke-stack-list">
			<div className="flex flex-col gap-[16px]">
				{items?.length > 0 &&
					items?.map((item, index) => (
						<div
							className="flex flex-col items-center gap-12 rounded-lg bg-lightGrey p-4 sm:p-6 md:flex-row md:pr-8"
							key={`text-stroke-stack-list-item${index}`}
						>
							<div className="flex-shrink-0">
								<TextStrokeStack
									bottomText={item?.stacked_text?.bottom_text}
									centerText={item?.stacked_text?.center_text}
									topText={item?.stacked_text?.top_text}
									int={index}
									options={{
										textSize: "64",
										textColor: "navy",
										bgColor: "lightGrey",
										strokeColor: "navy",
									}}
								/>
							</div>

							{!!item?.description && (
								<p
									className="text-20 font-normal"
									dangerouslySetInnerHTML={{
										__html: item?.description,
									}}
								/>
							)}
						</div>
					))}
			</div>
		</div>
	);
}

export default ArticleTextStrokeStacklist;
