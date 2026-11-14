import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <p className="font-display text-6xl font-bold text-accent">404</p>
        <p className="mt-4 text-muted">Cette page n&apos;existe pas.</p>
        <Link href="/" className="mt-8 inline-block rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-on-accent">
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
