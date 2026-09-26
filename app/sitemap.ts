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
      url: `${baseUrl}/reconnaissance-diplome-espagne`,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/creer-activite-espagne`,
      changeFrequency: "monthly",
      priority: 0.85,
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
    {
      url: `${baseUrl}/a-propos`,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/comment-ca-marche`,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  const guidePages: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...mainPages, ...guidePages];
}
