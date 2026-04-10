import { d as WpPost, I as ImageProps, F as FlexibleContent, e as WpPage, f as WpOptions, g as WpRedirect, h as WpCustomTaxonomyItem } from './Link-mWKhQbm-.mjs';
import 'react/jsx-runtime';
import 'react';

type ClientReport = WpPost & {
	id: number;
	title: string;
	content: string;
	date: string;
	modified: string;
	slug: string;
	status: string;
	thumbnail: ImageProps;
	sections: FlexibleContent[];
};

type ClientReportMeta = {
	pagination: {
		total: number;
		count: number;
		per_page: number;
		current_page: number;
		total_pages: number;
	};
};

declare function avoidRateLimit(): Promise<void>;
declare const fetchFromWp: (url: string, options?: object, attempt?: number) => any;
declare function cms(): {
    paths: () => Promise<string[]>;
    page: (slug: string) => Promise<WpPage>;
    options: () => Promise<WpOptions>;
    preview: (post_id: number) => Promise<WpPage>;
    robots: () => Promise<any>;
    get: (path: string, options?: object) => Promise<any>;
    search: (query: string) => Promise<any>;
    post: (path: string, body: object) => Promise<any>;
    getJobContent: (jobId: any) => Promise<any>;
    redirects: () => Promise<WpRedirect[]>;
    handleRedirectOrPageNotFound: (slug: string) => Promise<{
        redirect: {
            destination: string;
            permanent: boolean;
        };
        notFound?: undefined;
    } | {
        notFound: boolean;
        redirect?: undefined;
    }>;
    login: (username: string, password: string) => Promise<any>;
    reportsPaths: () => Promise<string[]>;
    reports: (token: string, category?: string, page?: string) => Promise<{
        data: ClientReport[];
        meta: ClientReportMeta;
    }>;
    report: (id: string) => Promise<ClientReport>;
    reportCategories: (token: string) => Promise<WpCustomTaxonomyItem[]>;
};

export { avoidRateLimit, cms as default, fetchFromWp };
