import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { SERVICES } from "@/lib/services";
import { TEAM } from "@/lib/team";
import { LOCATIONS } from "@/lib/locations";

const URL = SITE.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: URL, priority: 1.0, changeFrequency: "weekly" },
    { url: `${URL}/services`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${URL}/menu`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${URL}/locations`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${URL}/team`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${URL}/about`, priority: 0.7, changeFrequency: "yearly" },
    { url: `${URL}/gallery`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${URL}/reviews`, priority: 0.7, changeFrequency: "weekly" },
    { url: `${URL}/contact`, priority: 0.8, changeFrequency: "yearly" },
    { url: `${URL}/book`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${URL}/blog`, priority: 0.7, changeFrequency: "weekly" },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${URL}/services/${s.slug}`,
    priority: 0.9,
    changeFrequency: "monthly" as const,
  }));

  const locationPages: MetadataRoute.Sitemap = LOCATIONS.map((l) => ({
    url: `${URL}/locations/${l.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const teamPages: MetadataRoute.Sitemap = TEAM.map((t) => ({
    url: `${URL}/team/${t.slug}`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPages, ...servicePages, ...locationPages, ...teamPages];
}
