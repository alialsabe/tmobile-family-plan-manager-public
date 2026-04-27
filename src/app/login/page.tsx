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
      <section className="relative mx-auto flex min-h-screen w-full max-w-md flex-col justify-center px-5 py-8">
        <div className="overflow-hidden rounded-[34px] border border-white/[0.08] bg-white/[0.055] shadow-2xl shadow-black/40 backdrop-blur">
          <div className="h-1.5 bg-gradient-to-r from-[#e20074] via-[#8f7cff] to-[#16d9a3]" />
          <div className="p-7 md:p-8">
            <p className="mb-4 inline-flex rounded-full border border-white/[0.1] bg-white/[0.06] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#a9adb8]">
              Protected family plan
            </p>
            <h1 className="text-4xl font-semibold tracking-[-0.06em] text-white">Enter password</h1>
            <p className="mt-3 text-sm leading-6 text-[#a9adb8]">
              This site is private. Enter the shared password to continue.
            </p>

            <form action="/api/login" method="post" className="mt-6 grid gap-4">
              <input type="hidden" name="next" value={nextPath} />
              <label className="grid gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6f7684]">Password</span>
                <input
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  autoFocus
                  className="rounded-2xl border border-white/[0.08] bg-[#101116] px-4 py-3 text-base font-medium text-white outline-none transition focus:border-[#e20074]"
                />
              </label>
              {params.error && (
                <p className="rounded-2xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-100">
                  Wrong password. Try again.
                </p>
              )}
              <button className="rounded-2xl bg-[#e20074] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#e20074]/20 transition hover:bg-[#f01b88]">
                Unlock site
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
