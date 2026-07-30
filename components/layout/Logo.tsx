import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
};

const SIZE_CLASS: Record<NonNullable<Props["size"]>, string> = {
  sm: "text-[1.5rem]",
  md: "text-[1.875rem] md:text-[2.125rem]",
  lg: "text-[2.5rem] md:text-[3rem]",
};

export function Logo({ className, size = "md", onClick }: Props) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="Megas Hair Salon — home"
      className={cn(
        "inline-block font-display uppercase leading-none text-foreground hover:opacity-70 transition-opacity",
        SIZE_CLASS[size],
        className,
      )}
      style={{ letterSpacing: "var(--tracking-display-caps)" }}
    >
      Megas
    </Link>
  );
}
