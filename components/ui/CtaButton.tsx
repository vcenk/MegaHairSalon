import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary";
type Size = "md" | "lg";

const BASE =
  "inline-flex items-center justify-center uppercase rounded-full transition-colors leading-none";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-foreground text-background hover:bg-accent",
  secondary:
    "bg-transparent text-foreground border border-foreground hover:border-accent hover:text-accent",
};

const SIZES: Record<Size, string> = {
  md: "px-7 py-3.5 text-[0.7rem]",
  lg: "px-9 py-[18px] text-xs",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  external?: boolean;
};

export function CtaButton({
  href,
  children,
  variant = "primary",
  size = "lg",
  className,
  external = false,
}: Props) {
  const classes = cn(BASE, VARIANTS[variant], SIZES[size], className);
  const style = { letterSpacing: "0.08em" } as const;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        style={style}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} style={style}>
      {children}
    </Link>
  );
}
