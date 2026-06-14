"use client";
import { usePathname } from "next/navigation";
import { TOOLS } from "@/app/tools-map";
import Byline from "./Byline";

// Renders the author/updated byline at the foot of any tool page in the registry (E-E-A-T signal).
// Programmatic [slug] pages and About render their own byline, so they aren't in TOOLS → skipped here.
export default function AutoByline() {
  const path = usePathname();
  if (!path) return null;
  const key = path.endsWith("/") ? path : `${path}/`;
  if (!TOOLS[key]) return null;
  return <Byline />;
}
