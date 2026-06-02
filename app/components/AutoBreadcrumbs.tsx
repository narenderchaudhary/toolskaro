"use client";
import { usePathname } from "next/navigation";
import Breadcrumbs from "./Breadcrumbs";
import { TOOLS } from "@/app/tools-map";
import { CAT_BY_KEY } from "@/app/tools-catalog";

// Renders Home › <Category hub> › <Tool> breadcrumbs (JSON-LD + visible nav) on any tool page in
// the registry. This wires every spoke (tool page) up to its pillar (category hub) for clustering.
// Pages that build their own breadcrumbs (programmatic [slug], About, hubs) are not in TOOLS, so
// they are skipped here — no duplicate breadcrumbs.
export default function AutoBreadcrumbs() {
  const path = usePathname();
  if (!path) return null;
  const key = path.endsWith("/") ? path : `${path}/`;
  const tool = TOOLS[key];
  if (!tool) return null;
  const cat = CAT_BY_KEY[tool.cat];
  return (
    <Breadcrumbs
      items={[
        { name: "Home", href: "/" },
        { name: cat.name, href: cat.hubHref },
        { name: tool.name, href: key },
      ]}
    />
  );
}
