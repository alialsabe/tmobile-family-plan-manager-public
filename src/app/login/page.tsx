type LoginPageProps = {
  searchParams: Promise<{ error?: string; next?: string }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;
  const hasError = params.error === "1";
  const next = params.next || "/";

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#07080b] px-5 py-10 text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(226,0,116,0.24),transparent_34rem),radial-gradient(circle_at_78%_14%,rgba(113,112,255,0.2),transparent_32rem),linear-gradient(180deg,#07080b_0%,#0c0d12_100%)]" />
      <div className="pointer-events-none fixed inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#e20074] via-[#8f7cff] to-[#16d9a3]" />

      <section className="relative w-full max-w-md overflow-hidden rounded-[34px] border border-white/[0.08] bg-white/[0.055] shadow-2xl shadow-black/45 backdrop-blur">
        <div className="h-1.5 bg-gradient-to-r from-[#e20074] via-[#8f7cff] to-[#16d9a3]" />
        <form action="/api/login" method="post" className="p-7 md:p-9">
          <input type="hidden" name="next" value={next} />

          <p className="inline-flex rounded-full border border-white/[0.1] bg-white/[0.06] px-3 py-1 text-xs font-semibold uppercase tracking-[0.26em] text-[#a9adb8]">
            T-Mobile family plan
          </p>

          <div className="mt-7 space-y-3">
            <h1 className="text-4xl font-semibold leading-[0.95] tracking-[-0.06em] text-white md:text-5xl">
              Enter the family password.
            </h1>
            <p className="text-sm leading-6 text-[#a9adb8]">
              Balances are private. Unlock the site, then click your name to see what you owe.
            </p>
          </div>

          <label className="mt-8 block text-sm font-medium text-[#d9dce5]" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            autoFocus
            required
            className="mt-3 w-full rounded-2xl border border-white/[0.1] bg-black/30 px-4 py-4 text-base text-white outline-none ring-0 transition placeholder:text-[#626a78] focus:border-[#e20074]/70 focus:bg-black/40 focus:shadow-[0_0_0_4px_rgba(226,0,116,0.14)]"
            placeholder="Enter password"
          />

          {hasError ? (
            <p className="mt-4 rounded-2xl border border-[#e20074]/35 bg-[#e20074]/10 px-4 py-3 text-sm text-[#ffd7ec]">
              Incorrect password. Try again.
            </p>
          ) : null}

          <button
            type="submit"
            className="mt-6 w-full rounded-2xl bg-gradient-to-r from-[#e20074] to-[#7170ff] px-5 py-4 text-sm font-bold uppercase tracking-[0.22em] text-white shadow-lg shadow-[#e20074]/20 transition hover:scale-[1.01] hover:shadow-[#7170ff]/25 focus:outline-none focus:shadow-[0_0_0_4px_rgba(226,0,116,0.22)]"
          >
            Unlock site
          </button>
        </form>
      </section>
    </main>
  );
}
