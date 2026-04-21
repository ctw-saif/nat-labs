import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nat-labs.vercel.app";
  const routes = [
    "",
    "/about",
    "/capabilities",
    "/spotcheckplus",
    "/spot-check-kit-form",
    "/billing",
    "/contact",
  ];
  const now = new Date();
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.8,
  }));
}
