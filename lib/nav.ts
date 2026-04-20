export type NavItem = { readonly label: string; readonly href: string };

export const PRIMARY_NAV: readonly NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Team", href: "/team" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_SERVICES: readonly NavItem[] = [
  { label: "Balayage", href: "/services/balayage-coquitlam" },
  { label: "Blonde Specialist", href: "/services/blonde-specialist-coquitlam" },
  { label: "Precision Cut", href: "/services/precision-haircut-coquitlam" },
  { label: "Hair Color", href: "/services/hair-color-coquitlam" },
  { label: "Keratin Treatment", href: "/services/keratin-treatment-coquitlam" },
  { label: "Blow Dry", href: "/services/blow-dry-coquitlam" },
  { label: "Root Touch Up", href: "/services/root-touch-up-coquitlam" },
  { label: "Restorative Treatment", href: "/services/restorative-treatment-coquitlam" },
] as const;
