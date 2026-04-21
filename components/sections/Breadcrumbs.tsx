import Link from "next/link";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";

export type Crumb = { name: string; href?: string };

type Props = { items: Crumb[]; className?: string };

export function Breadcrumbs({ items, className }: Props) {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema(
          items.map((i) => ({ name: i.name, path: i.href })),
        )}
      />
      <nav
        aria-label="Breadcrumb"
        className={className}
      >
        <ol
          className="flex flex-wrap items-center gap-2 text-[0.7rem] uppercase text-muted"
          style={{ letterSpacing: "var(--tracking-label)" }}
        >
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={i} className="flex items-center gap-2">
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span aria-current={isLast ? "page" : undefined} className={isLast ? "text-foreground" : undefined}>
                    {item.name}
                  </span>
                )}
                {!isLast && (
                  <span aria-hidden="true" className="text-border">
                    /
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
