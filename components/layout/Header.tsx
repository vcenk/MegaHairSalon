"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { PRIMARY_NAV } from "@/lib/nav";
import { BOOKING } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";

const SCROLL_THRESHOLD = 80;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-300 ease-out",
          scrolled
            ? "backdrop-blur-md border-b border-border"
            : "border-b border-transparent",
        )}
        style={{
          backgroundColor: scrolled
            ? "color-mix(in srgb, var(--color-bg) 88%, transparent)"
            : "transparent",
        }}
      >
        <div
          className={cn(
            "mx-auto flex items-center justify-between px-6 md:px-10 transition-[padding] duration-300 ease-out",
            scrolled ? "py-3 md:py-4" : "py-5 md:py-7",
          )}
          style={{ maxWidth: "var(--container-max)" }}
        >
          <Logo size={scrolled ? "sm" : "md"} />

          <nav
            aria-label="Primary"
            className="hidden md:flex items-center gap-8"
          >
            <ul className="flex items-center gap-7">
              {PRIMARY_NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.75rem] uppercase text-foreground hover:text-accent transition-colors"
                    style={{ letterSpacing: "var(--tracking-label)" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={BOOKING.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-foreground text-background px-5 py-3 text-[0.7rem] uppercase hover:bg-accent transition-colors"
              style={{ letterSpacing: "0.08em" }}
            >
              Book Now
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            className="md:hidden p-2 -m-2 text-foreground hover:text-accent transition-colors"
          >
            <Menu size={26} strokeWidth={1.25} />
          </button>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
