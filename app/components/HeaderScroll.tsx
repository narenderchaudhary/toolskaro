"use client";

import { useEffect } from "react";

// Adds a subtle shadow to the sticky header once the page is scrolled.
export default function HeaderScroll() {
  useEffect(() => {
    const h = document.querySelector("header.site");
    if (!h) return;
    const onScroll = () => h.classList.toggle("is-scrolled", window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return null;
}
