import type { MetadataRoute } from "next";

const siteUrl = "https://kkzone.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/checkout"],
    },
    sitemap: siteUrl + "/sitemap.xml",
  };
}
