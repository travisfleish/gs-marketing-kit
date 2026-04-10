import { WpPost } from "~/types/wp";

interface VisualTagProps {
	visualTags: WpPost["visual_tags"];
	className?: string;
}

function VisualTags({ visualTags, className }: VisualTagProps) {
	return (
		<>
			{/* Tags */}
			{visualTags?.tags?.length > 0 &&
				visualTags?.tags?.map((tag, index) => (
					<span key={`visual-tag-${index}`} className={className}>
						{tag}
					</span>
				))}
			{/* Custom Tags */}
			{visualTags?.custom_tags?.length > 0 &&
				visualTags?.custom_tags?.map((tag, index) => (
					<span key={`visual-tag-${index}`} className={className}>
						{tag?.tag}
					</span>
				))}
			{/* Location */}
			<span className={className}>{visualTags?.location}</span>
		</>
	);
}

export default VisualTags;
