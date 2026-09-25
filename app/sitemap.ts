import type { MetadataRoute } from "next";

const siteUrl = "https://kkzone.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: siteUrl + "/shop", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: siteUrl + "/categories", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: siteUrl + "/cart", lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
    { url: siteUrl + "/checkout", lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
  ];
}
