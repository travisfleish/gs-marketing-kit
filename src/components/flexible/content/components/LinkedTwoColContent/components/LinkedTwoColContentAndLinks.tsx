import DefaultLinks from "./DefaultLinks";
import ExtendsLinks from "./ExtendsLinks";

function LinkedTwoColContentAndLinks({ section, hasBgColor }) {
	const { content, hide_default_links, default_links_type, links } = section;

	return (
		<>
			{/* Content */}
			<p
				className="text-18 font-body text-navy/80 opacity-80"
				dangerouslySetInnerHTML={{
					__html: content,
				}}
			/>

			{/* Links */}
			{!hide_default_links && (
				<>
					{default_links_type === "extends" && links?.length > 0 && (
						<div className="mt-6 flex flex-col md:mt-[36px]">
							<ExtendsLinks links={links} sectionHasBgColor={hasBgColor} />
						</div>
					)}
					{default_links_type === "default" && links?.length > 0 && (
						<div className="mt-6 md:mt-[36px]">
							<DefaultLinks links={links} />
						</div>
					)}
				</>
			)}
		</>
	);
}

export default LinkedTwoColContentAndLinks;
