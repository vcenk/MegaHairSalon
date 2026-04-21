import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  accent?: boolean;
};

export function Eyebrow({ children, className, accent = false }: Props) {
  return (
    <span
      className={cn(
        "inline-block text-[0.7rem] uppercase",
        accent ? "text-accent" : "text-muted",
        className,
      )}
      style={{ letterSpacing: "var(--tracking-label)" }}
    >
      {children}
    </span>
  );
}
