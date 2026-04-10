export default function parseSlug(inputString: string): string {
	if (!inputString) return "";

	return inputString
		.toString()
		.normalize("NFD")
		.toLowerCase()
		.replace(/\s+/g, "-")
		.replace(/&/g, "-and-")
		.replace(/[^\w-]+/g, "");
}
