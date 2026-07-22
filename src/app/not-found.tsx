import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-svh flex-col items-start justify-end bg-paper px-5 pb-16 pt-36 md:px-10">
      <p className="text-eyebrow text-smoke">404 — Page not found</p>
      <h1 className="text-display mt-6 text-[16vw] md:text-[11vw]">
        Dead <span className="text-accent-word">signal.</span>
      </h1>
      <p className="mt-6 max-w-md text-lg text-ink/70">
        This page doesn&apos;t exist — the one silence we&apos;re responsible for.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-paper transition-colors duration-300 hover:bg-magenta"
      >
        Back to home
      </Link>
    </section>
  );
}
