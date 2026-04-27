import { people } from "./billData";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07080b] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(226,0,116,0.22),transparent_34rem),radial-gradient(circle_at_80%_10%,rgba(113,112,255,0.18),transparent_32rem),linear-gradient(180deg,#07080b_0%,#0c0d12_100%)]" />
      <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-8 md:px-8 lg:px-10">
        <header className="overflow-hidden rounded-[34px] border border-white/[0.08] bg-white/[0.045] shadow-2xl shadow-black/40 backdrop-blur">
          <div className="h-1.5 bg-gradient-to-r from-[#e20074] via-[#8f7cff] to-[#16d9a3]" />
          <div className="grid gap-8 p-7 md:p-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-white/[0.1] bg-white/[0.06] px-3 py-1 text-xs font-semibold uppercase tracking-[0.26em] text-[#a9adb8]">
                T-Mobile family plan
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.07em] text-white md:text-7xl">
                Pick a person. Keep the money clean.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[#a9adb8] md:text-lg">
                This public page is only a directory. Amounts live on each person&apos;s page so the home screen does not expose balances.
              </p>
            </div>
            <div className="rounded-3xl border border-white/[0.08] bg-black/25 p-5">
              <p className="text-sm font-medium text-[#d9dce5]">What happens next</p>
              <div className="mt-4 space-y-3 text-sm leading-6 text-[#9aa0ad]">
                <p>1. Choose your name.</p>
                <p>2. Select the months you want.</p>
                <p>3. See base, international, device, and total owed.</p>
              </div>
            </div>
          </div>
        </header>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {people.map((person, index) => (
            <a
              key={person.id}
              href={`/people/${person.id}`}
              className="group relative overflow-hidden rounded-[26px] border border-white/[0.08] bg-white/[0.035] p-5 shadow-xl shadow-black/20 transition duration-200 hover:-translate-y-1 hover:border-[#e20074]/45 hover:bg-white/[0.06]"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#e20074] to-[#7170ff] opacity-0 transition group-hover:opacity-100" />
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/[0.08] bg-black/25 text-sm font-semibold text-[#f2d5e7]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <span className="text-[#626a78] transition group-hover:text-[#e20074]">→</span>
              </div>
              <p className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-white">{person.name}</p>
              <p className="mt-2 font-mono text-sm text-[#8f96a3]">{person.line}</p>
            </a>
          ))}
        </section>
      </section>
    </main>
  );
}
