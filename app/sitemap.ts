import type { MetadataRoute } from "next";
import { chronological } from "@/data/events";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/events", "/sources", ...chronological.map((event) => `/events/${event.slug}`)];
  return paths.map((path) => ({ url: `${SITE_URL}${path}` }));
}
