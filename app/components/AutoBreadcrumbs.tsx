"use client";
import { usePathname } from "next/navigation";
import Breadcrumbs from "./Breadcrumbs";
import { TOOLS } from "@/app/tools-map";

// Renders Home › <Tool> breadcrumbs (JSON-LD + visible nav) on any tool page in the registry.
// Pages that build their own breadcrumbs (programmatic [slug], About) are not in TOOLS, so they
// are skipped here — no duplicate breadcrumbs.
export default function AutoBreadcrumbs() {
  const path = usePathname();
  if (!path) return null;
  const key = path.endsWith("/") ? path : `${path}/`;
  const tool = TOOLS[key];
  if (!tool) return null;
  return <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: tool.name, href: key }]} />;
}
