import { CAFES } from "@/constants/constants";
import type { MetadataRoute } from "next";

const LAST_MODIFIED = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const list: MetadataRoute.Sitemap = CAFES.map((c) => ({
    url: `https://daldal.app/cafes/${c.id}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  list.push({
    url: "https://daldal.app",
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 1.0,
  });

  list.push({
    url: "https://daldal.app/cafes",
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.8,
  });

  return list;
}
