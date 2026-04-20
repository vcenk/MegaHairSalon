import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  reactStrictMode: true,

  images: {
    formats: ["image/avif", "image/webp"],
    // TODO: Remove dangerouslyAllowSVG before launch once real raster images land.
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  async redirects() {
    // Legacy URL redirects from the old megashairsalon.ca site.
    // Add more here as they're discovered in GSC / old-URL audits.
    return [
      { source: "/our-team", destination: "/team", permanent: true },
      { source: "/our-services", destination: "/services", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
