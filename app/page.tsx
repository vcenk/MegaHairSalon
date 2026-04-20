export default function Home() {
  return (
    <div
      className="mx-auto px-6 py-24 md:py-32"
      style={{ maxWidth: "var(--container-text)" }}
    >
      <p
        className="text-xs uppercase text-muted"
        style={{ letterSpacing: "var(--tracking-label)" }}
      >
        Scaffold ready · Batch 1 complete
      </p>
      <h1
        className="mt-4 text-5xl md:text-7xl font-display"
        style={{
          lineHeight: "var(--leading-display)",
          letterSpacing: "var(--tracking-display)",
        }}
      >
        Megas Hair Salon
      </h1>
      <p
        className="mt-6 text-lg text-muted"
        style={{ lineHeight: "var(--leading-body)" }}
      >
        Header, footer, and smooth scroll are wired. The homepage sections
        come in Batch 2 per <code>docs/pages/home.md</code>.
      </p>

      {/* Filler so the sticky compact header has somewhere to compact to. */}
      <div
        className="mt-16 rounded-sm p-10"
        style={{ backgroundColor: "var(--color-bg-alt)" }}
        aria-hidden="true"
      >
        <p className="text-sm text-muted">
          Scroll down to see the header shift to its compact variant.
        </p>
      </div>
      <div aria-hidden="true" style={{ height: "120vh" }} />
      <p
        className="text-sm text-muted"
        style={{ lineHeight: "var(--leading-body)" }}
      >
        End of placeholder. Footer is below.
      </p>
    </div>
  );
}
