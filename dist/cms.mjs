var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};

// src/utils/cacheBustingString.ts
function cacheBustingString(url = "") {
  const date = /* @__PURE__ */ new Date();
  const dateStr = date.getTime().toString().slice(0, 9);
  if (!url.length) {
    return dateStr;
  }
  return `${url}${url.includes("?") ? `&v=${dateStr}` : `?v=${dateStr}`}`;
}

// src/utils/cms.ts
async function avoidRateLimit() {
  function sleep(ms = 500) {
    return new Promise((res) => setTimeout(res, ms));
  }
  if (process.env.NODE_ENV === "production") {
    await sleep();
  }
}
var fetchFromWp = async (url, options, attempt = 1) => {
  const MAX_RETRIES = 3;
  const baseUrl = typeof window !== "undefined" ? window.__NEXT_PUBLIC_WORDPRESS_BASE_URL__ || process.env.NEXT_PUBLIC_WORDPRESS_BASE_URL : process.env.NEXT_PUBLIC_WORDPRESS_BASE_URL;
  const processedUrl = `${baseUrl}/wp-json/${cacheBustingString(url)}`;
  const processedOptions = __spreadValues({ next: { revalidate: 60 } }, options);
  try {
    const res = await fetch(
      processedUrl,
      processedOptions
    );
    if (res.status === 503 && attempt < MAX_RETRIES) {
      await avoidRateLimit();
      return fetchFromWp(url, options, attempt + 1);
    }
    const data = res.json();
    return data;
  } catch (error) {
    console.error(`${error.code} ${error.message} on URL ${processedUrl}`);
    if (attempt < MAX_RETRIES) {
      await avoidRateLimit();
      return fetchFromWp(url, options, attempt + 1);
    }
    console.error(`Max retries reached on URL ${processedUrl}`);
    throw new Error(`${processedUrl} Failed after max retries: ${error.message}`);
  }
};
function cms() {
  return {
    paths: async () => {
      const data = await fetchFromWp("together/paths");
      const parsedData = data == null ? void 0 : data.filter(
        (path) => (
          // Use a regular expression to check if the path doesn't end with "blog/" followed by a number
          !/blogs\/\d+\/?$/.test(path) && !/newsroom\/\d+\/?$/.test(path) && !/customer-stories\/\d+\/?$/.test(path) && !path.includes("thank-you") && !path.includes("404")
        )
      );
      return parsedData;
    },
    page: async (slug) => {
      const data = await fetchFromWp(`together/post?slug=${slug}`);
      return data;
    },
    options: async () => {
      const data = await fetchFromWp(`together/options`);
      return data;
    },
    preview: async (post_id) => {
      const data = await fetchFromWp(`together/preview?post_id=${post_id}&cache=${+/* @__PURE__ */ new Date()}`, {
        cache: "no-cache"
      });
      return data;
    },
    robots: async () => {
      const data = await fetchFromWp("together/robots");
      return data;
    },
    get: async (path, options) => {
      const data = await fetchFromWp(path, options);
      return data;
    },
    search: async (query) => {
      const data = await fetchFromWp(`together/search?q=${query}`);
      return data;
    },
    post: async (path, body) => {
      const data = await cms().get(path, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
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
    redirects: async () => {
      try {
        const data = await fetchFromWp(`together/redirects`);
        return data;
      } catch (error) {
        return [];
      }
    },
    handleRedirectOrPageNotFound: async (slug) => {
      var _a;
      const redirects = await cms().redirects();
      if (redirects) {
        const match = redirects.filter(({ source }) => source === slug || source === `${slug}/`).pop();
        if (match == null ? void 0 : match.destination) {
          return {
            redirect: {
              destination: match == null ? void 0 : match.destination,
              permanent: (_a = match == null ? void 0 : match.permanent) != null ? _a : true
            }
          };
        }
      }
      return {
        notFound: true
      };
    },
    login: async (username, password) => {
      try {
        const processedUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_BASE_URL}/wp-json/jwt-auth/v1/token`;
        const response = await fetch(processedUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        return data;
      } catch (error) {
        return null;
      }
    },
    reportsPaths: async () => {
      const data = await fetchFromWp(`together/reports/paths`, {
        headers: { "Content-Type": "application/json" }
      });
      return data;
    },
    reports: async (token, category, page) => {
      const url = `together/reports`;
      const params = new URLSearchParams();
      if (category) params.set("category", category);
      if (page) params.set("page", page.toString());
      const response = await fetchFromWp(`${url}?${params.toString()}`, {
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }
      });
      return response;
    },
    report: async (id) => {
      const response = await fetchFromWp(`together/reports/single/${id}`, {
        headers: { "Content-Type": "application/json" }
      });
      return response;
    },
    reportCategories: async (token) => {
      const response = await fetchFromWp(`together/report-categories`, {
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }
      });
      return response;
    }
  };
}
export {
  avoidRateLimit,
  cms as default,
  fetchFromWp
};
