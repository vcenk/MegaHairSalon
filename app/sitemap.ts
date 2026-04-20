import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

const URL = SITE.url;

// Service / location / team / blog URLs will be appended here
// once content MDX files are added under /content.

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: URL, priority: 1.0, changeFrequency: "weekly" },
    { url: `${URL}/services`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${URL}/locations`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${URL}/team`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${URL}/about`, priority: 0.7, changeFrequency: "yearly" },
    { url: `${URL}/gallery`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${URL}/reviews`, priority: 0.7, changeFrequency: "weekly" },
    { url: `${URL}/contact`, priority: 0.8, changeFrequency: "yearly" },
    { url: `${URL}/book`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${URL}/blog`, priority: 0.7, changeFrequency: "weekly" },
  ];
}
