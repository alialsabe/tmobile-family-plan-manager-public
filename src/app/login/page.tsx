export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; next?: string }>;
}) {
  const params = await searchParams;
  const nextPath = params.next?.startsWith("/") ? params.next : "/";

  return (
    <main className="min-h-screen overflow-hidden bg-[#07080b] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(226,0,116,0.22),transparent_34rem),radial-gradient(circle_at_80%_10%,rgba(113,112,255,0.18),transparent_32rem),linear-gradient(180deg,#07080b_0%,#0c0d12_100%)]" />
      <section className="relative flex min-h-screen items-center justify-center px-5 py-8">
        <form action="/api/login" method="post" className="w-full max-w-sm">
          <input type="hidden" name="next" value={nextPath} />
          <div className="overflow-hidden rounded-[30px] border border-white/[0.08] bg-white/[0.045] shadow-2xl shadow-black/40 backdrop-blur">
            <div className="h-1.5 bg-gradient-to-r from-[#e20074] via-[#8f7cff] to-[#16d9a3]" />
            <div className="grid gap-4 p-6 md:p-7">
              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8f96a3]">
                  T-Mobile family plan
                </p>
                <h1 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white">
                  Enter password
                </h1>
              </div>

              <label className="grid gap-2">
                <span className="sr-only">Password</span>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  autoFocus
                  className="rounded-2xl border border-white/[0.08] bg-[#101116] px-4 py-4 text-center text-base font-medium text-white outline-none transition placeholder:text-[#6f7684] focus:border-[#e20074]"
                />
              </label>

              {params.error && (
                <p className="rounded-2xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-center text-sm text-red-100">
                  Wrong password. Try again.
                </p>
              )}

              <button className="rounded-2xl bg-[#e20074] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-[#e20074]/20 transition hover:bg-[#f01b88]">
                Unlock
              </button>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}
