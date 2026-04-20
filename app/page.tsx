export default function Home() {
  return (
    <main className="mx-auto max-w-[720px] px-6 py-24 md:py-32">
      <p
        className="text-xs uppercase"
        style={{ letterSpacing: "var(--tracking-label)", color: "var(--color-text-muted)" }}
      >
        Scaffold ready
      </p>
      <h1
        className="mt-4 text-5xl md:text-7xl"
        style={{
          fontFamily: "var(--font-display)",
          lineHeight: "var(--leading-display)",
          letterSpacing: "var(--tracking-display)",
        }}
      >
        Megas Hair Salon
      </h1>
      <p
        className="mt-6 text-lg"
        style={{ color: "var(--color-text-muted)", lineHeight: "var(--leading-body)" }}
      >
        Master colourists since 1984. Turkish hair artistry, now in Coquitlam.
        This placeholder confirms fonts, design tokens, and routing are wired
        correctly. Pages will be built per <code>docs/</code>.
      </p>
    </main>
  );
}
