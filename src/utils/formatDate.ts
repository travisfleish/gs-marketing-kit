export default function formatDate(date: string) {
	try {
		return new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(date));
	} catch (error) {
		console.log("Error:", error);
		return date;
	}
}
