/** Minimal shape so Header, Footer, SiteShell, and Providers can render in isolation demos. */
export const minimalWpOptions = {
  header: {
    menu: [] as unknown[],
    toast_bar: {
      show_toast_bar: false,
      link: { url: "https://www.geniussports.com", title: "Genius Sports" },
      background_colours: "navy",
      text_colours: "white",
    },
  },
  footer: {
    columns: [] as unknown[],
    social: { links: [] as unknown[] },
    global_cta: {
      footer_cta: {},
    },
    global_featured_links: {
      footer_featured_links: [] as unknown[],
    },
    terms: {
      content: "",
      links: [] as unknown[],
    },
  },
};
