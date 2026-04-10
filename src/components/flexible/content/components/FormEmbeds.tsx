import clsx from "clsx";

type FormEmbedsProps = {
	form_embeds: {
		embed: string;
	}[];
	options: {
		alignment: "left" | "center";
	};
};

function FormEmbeds(props: FormEmbedsProps) {
	const { form_embeds, options } = props;

	return (
		<div className="form-embeds">
			<div className={clsx(options?.alignment === "center" && "justify-center", options?.alignment === "left" && "justify-start", "flex flex-wrap gap-10")}>
				{form_embeds?.map((form_embed, index) => (
					<div className="form-embed-wrapper rounded-lg bg-white px-6 py-7">
						<div dangerouslySetInnerHTML={{ __html: form_embed.embed }} key={`form-embed-${index}`} />
					</div>
				))}
			</div>
		</div>
	);
}

export default FormEmbeds;
