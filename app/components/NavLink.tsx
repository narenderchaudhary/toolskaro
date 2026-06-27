"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// A nav link that marks itself active on the current route (primary accent).
export default function NavLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  const path = usePathname();
  const active = href === "/" ? path === "/" : path.startsWith(href);
  const cls = [className, active ? "active" : ""].filter(Boolean).join(" ");
  return <Link href={href} className={cls || undefined}>{children}</Link>;
}
