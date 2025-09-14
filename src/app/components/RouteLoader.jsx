"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect, useState } from "react";

export default function RouteLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout);
  }, [pathname]);

  useLayoutEffect(() => {
    const handlePopState = () => setLoading(true);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-muted flex items-center justify-center z-[9999]">
      <div className="w-12 h-12 border-4 border-foreground border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
