import { useEffect } from "react";
import { useLocation } from "react-router";

/** Scrolls to hash anchors when navigating from other routes (e.g. /#contact). */
export function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace("#", "");
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);

    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}
