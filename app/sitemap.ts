import type { MetadataRoute } from "next";
import { guides } from "./guides/guides-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.holaespagne.fr";

  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/nie-espagne`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/immatriculation-voiture-espagne`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/installation-espagne`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/autre-demarche`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/guides`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const guidePages: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...mainPages, ...guidePages];
}