export default function cacheBustingString(url = "") {
	const date = new Date();
	const dateStr = date.getTime().toString().slice(0, 9);

	if (!url.length) {
		return dateStr;
	}

	return `${url}${url.includes("?") ? `&v=${dateStr}` : `?v=${dateStr}`}`;
}
