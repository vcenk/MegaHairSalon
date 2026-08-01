"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X, Phone } from "lucide-react";
import { PRIMARY_NAV } from "@/lib/nav";
import { CONTACT, BOOKING } from "@/lib/constants";
import { Logo } from "./Logo";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function MobileNav({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Main menu"
      className="fixed inset-0 z-50 flex flex-col bg-background"
    >
      <div className="flex items-center justify-between px-6 py-5 border-b border-border">
        <Logo size="sm" onClick={onClose} />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="p-2 -m-2 text-foreground hover:text-accent transition-colors"
        >
          <X size={28} strokeWidth={1.25} />
        </button>
      </div>

      <nav className="flex-1 flex flex-col justify-center px-6">
        <ul className="flex flex-col gap-6">
          {PRIMARY_NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                className="block font-display text-[3rem] leading-none text-foreground hover:text-accent transition-colors"
                style={{ letterSpacing: "var(--tracking-display)" }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="px-6 py-8 border-t border-border flex flex-col gap-4">
        <a
          href={`tel:${CONTACT.phoneHref}`}
          onClick={onClose}
          className="flex items-center gap-3 text-foreground hover:text-accent transition-colors"
        >
          <Phone size={18} strokeWidth={1.5} />
          <span className="text-lg">{CONTACT.phone}</span>
        </a>
        <a
          href={BOOKING.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="inline-flex items-center justify-center bg-foreground text-background px-8 py-4 text-xs uppercase hover:bg-accent transition-colors"
          style={{ letterSpacing: "0.08em" }}
        >
          Book Now
        </a>
      </div>
    </div>
  );
}
