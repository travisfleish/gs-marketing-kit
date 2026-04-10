import { ClientReport, ClientReportMeta } from "~/types/client";
import { WpCustomTaxonomyItem, WpOptions, WpPage, WpRedirect } from "~/types/wp";
import cacheBustingString from "~/utils/cacheBustingString";

export async function avoidRateLimit() {
	function sleep(ms = 500) {
		// eslint-disable-next-line
		return new Promise((res) => setTimeout(res, ms));
	}

	if (process.env.NODE_ENV === "production") {
		await sleep();
	}
}

export const fetchFromWp = async (url: string, options?: object, attempt: number = 1) => {
	const MAX_RETRIES = 3;
	const baseUrl =
		typeof window !== "undefined"
			? (window as any).__NEXT_PUBLIC_WORDPRESS_BASE_URL__ || process.env.NEXT_PUBLIC_WORDPRESS_BASE_URL
			: process.env.NEXT_PUBLIC_WORDPRESS_BASE_URL;
	const processedUrl = `${baseUrl}/wp-json/${cacheBustingString(url)}`;
	const processedOptions = { next: { revalidate: 60 }, ...options };
	try {
		const res = await fetch(
			processedUrl,
			processedOptions as RequestInit & { next?: { revalidate?: number } },
		);
		if (res.status === 503 && attempt < MAX_RETRIES) {
			await avoidRateLimit();
			return fetchFromWp(url, options, attempt + 1);
		}

		const data = res.json();
		return data;
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error(`${error.code} ${error.message} on URL ${processedUrl}`);
		if (attempt < MAX_RETRIES) {
			await avoidRateLimit();
			return fetchFromWp(url, options, attempt + 1);
		}

		// eslint-disable-next-line no-console
		console.error(`Max retries reached on URL ${processedUrl}`);
		throw new Error(`${processedUrl} Failed after max retries: ${error.message}`);
	}
};

export default function cms() {
	return {
		paths: async (): Promise<string[]> => {
			const data: string[] = await fetchFromWp("together/paths");
			const parsedData = data?.filter(
				(path) =>
					// Use a regular expression to check if the path doesn't end with "blog/" followed by a number
					!/blogs\/\d+\/?$/.test(path) &&
					!/newsroom\/\d+\/?$/.test(path) &&
					!/customer-stories\/\d+\/?$/.test(path) &&
					!path.includes("thank-you") &&
					!path.includes("404")
			);
			return parsedData;
		},
		page: async (slug: string): Promise<WpPage> => {
			const data: WpPage = await fetchFromWp(`together/post?slug=${slug}`);
			return data;
		},
		options: async (): Promise<WpOptions> => {
			const data = await fetchFromWp(`together/options`);
			return data;
		},

		preview: async (post_id: number): Promise<WpPage> => {
			const data: WpPage = await fetchFromWp(`together/preview?post_id=${post_id}&cache=${+new Date()}`, {
				cache: "no-cache",
			});
			return data;
		},
		robots: async (): Promise<any> => {
			const data = await fetchFromWp("together/robots");
			return data;
		},
		get: async (path: string, options?: object): Promise<any> => {
			const data = await fetchFromWp(path, options);
			return data;
		},
		search: async (query: string): Promise<any> => {
			const data = await fetchFromWp(`together/search?q=${query}`);
			return data;
		},
		post: async (path: string, body: object): Promise<any> => {
			const data = await cms().get(path, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(body),
			});
			return data;
		},
		getJobContent: async (jobId) => {
			try {
				const response = await fetch(`https://boards-api.greenhouse.io/v1/boards/geniussports/jobs/${jobId}?questions=true`);
				const responseData = await response.json();
				return responseData;
			} catch (error) {
				return null;
			}
		},
		redirects: async (): Promise<WpRedirect[]> => {
			try {
				const data = await fetchFromWp(`together/redirects`);
				return data;
			} catch (error) {
				return [];
			}
		},
		handleRedirectOrPageNotFound: async (slug: string) => {
			const redirects = await cms().redirects();
			if (redirects) {
				const match = redirects.filter(({ source }) => source === slug || source === `${slug}/`).pop();
				if (match?.destination) {
					return {
						redirect: {
							destination: match?.destination,
							permanent: match?.permanent ?? true,
						},
					};
				}
			}

			// No redirect found, return 404
			return {
				notFound: true,
			};
		},
		login: async (username: string, password: string) => {
			try {
				const processedUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_BASE_URL}/wp-json/jwt-auth/v1/token`;
				const response = await fetch(processedUrl, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ username, password }),
				});
				const data = await response.json();
				return data;
			} catch (error) {
				return null;
			}
		},
		reportsPaths: async (): Promise<string[]> => {
			const data = await fetchFromWp(`together/reports/paths`, {
				headers: { "Content-Type": "application/json" },
			});
			return data;
		},
		reports: async (
			token: string,
			category?: string,
			page?: string
		): Promise<{
			data: ClientReport[];
			meta: ClientReportMeta;
		}> => {
			const url = `together/reports`;
			const params = new URLSearchParams();

			if (category) params.set("category", category);
			if (page) params.set("page", page.toString());

			const response = await fetchFromWp(`${url}?${params.toString()}`, {
				headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
			});

			return response;
		},
		report: async (id: string): Promise<ClientReport> => {
			const response = await fetchFromWp(`together/reports/single/${id}`, {
				headers: { "Content-Type": "application/json" },
			});

			return response;
		},
		reportCategories: async (token: string): Promise<WpCustomTaxonomyItem[]> => {
			const response = await fetchFromWp(`together/report-categories`, {
				headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
			});

			return response;
		},
	};
}
