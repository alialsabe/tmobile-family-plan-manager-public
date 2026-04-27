import { bills, getAccountPrivateMetrics, money } from "../billData";

export default function SecretPage() {
  const totalPastDue = bills.reduce((sum, bill) => sum + bill.pastDue, 0);
  const totalReview = bills.reduce((sum, bill) => sum + getAccountPrivateMetrics(bill).reviewTotal, 0);

  return (
    <main className="min-h-screen bg-[#08090a] text-[#f7f8f8]">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-7 md:px-8 lg:px-10">
        <header className="rounded-[28px] border border-rose-300/20 bg-rose-950/20 p-8 shadow-2xl shadow-black/30">
          <p className="mb-4 inline-flex rounded-full border border-rose-300/20 bg-rose-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-rose-200">
            Secret account page · not linked from home
          </p>
          <h1 className="max-w-4xl text-4xl font-medium leading-none tracking-[-0.05em] text-white md:text-6xl">
            Account-level balances, late fees, and unresolved charges.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#8a8f98] md:text-lg">
            This page intentionally contains the sensitive account-level details hidden from the public-facing home page.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-3">
          <Metric label="Bills loaded" value={String(bills.length)} />
          <Metric label="Total past-due shown across records" value={money(totalPastDue)} />
          <Metric label="Total needs-review amount" value={money(totalReview)} />
        </div>

        <section className="rounded-[24px] border border-white/[0.08] bg-[#0f1011] p-6 shadow-2xl shadow-black/25">
          <h2 className="text-2xl font-medium tracking-[-0.03em] text-white">Private bill ledger</h2>
          <p className="mt-2 text-sm text-[#8a8f98]">Account-level totals live here, not on the home page.</p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-white/[0.08]">
            <table className="w-full min-w-[980px] border-collapse text-left text-sm">
              <thead className="bg-white/[0.04] text-[#d0d6e0]">
                <tr>
                  <th className="px-4 py-3 font-medium">Bill</th>
                  <th className="px-4 py-3 font-medium">Issue date</th>
                  <th className="px-4 py-3 font-medium">Due date</th>
                  <th className="px-4 py-3 text-right font-medium">Account current charges</th>
                  <th className="px-4 py-3 text-right font-medium">Past due</th>
                  <th className="px-4 py-3 text-right font-medium">Total balance</th>
                  <th className="px-4 py-3 text-right font-medium">Needs review</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.08]">
                {bills.map((bill) => {
                  const privateMetrics = getAccountPrivateMetrics(bill);
                  return (
                    <tr key={bill.id} className="bg-black/10">
                      <td className="px-4 py-4 font-medium text-white">{bill.label}</td>
                      <td className="px-4 py-4 text-[#8a8f98]">{bill.issueDate}</td>
                      <td className="px-4 py-4 text-[#8a8f98]">{bill.dueDate}</td>
                      <td className="px-4 py-4 text-right font-mono text-[#d0d6e0]">{money(privateMetrics.currentCharges)}</td>
                      <td className="px-4 py-4 text-right font-mono text-amber-200">{money(privateMetrics.pastDue)}</td>
                      <td className="px-4 py-4 text-right font-mono text-rose-200">{money(privateMetrics.totalDue)}</td>
                      <td className="px-4 py-4 text-right font-mono text-cyan-200">{money(privateMetrics.reviewTotal)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          {bills.map((bill) => (
            <div key={bill.id} className="rounded-[22px] border border-white/[0.08] bg-white/[0.03] p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-medium text-white">{bill.label}</h3>
                  <p className="mt-1 text-xs font-mono text-[#62666d]">{bill.sourcePdf}</p>
                </div>
                <p className="font-mono text-sm text-[#8a8f98]">{bill.id}</p>
              </div>
              <div className="mt-4 space-y-2">
                {bill.needsReview.map((item) => (
                  <div key={`${bill.id}-${item.item}-${item.line}`} className="rounded-2xl border border-white/[0.08] bg-black/20 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-medium text-white">{item.item}</p>
                        <p className="mt-1 font-mono text-xs text-[#8a8f98]">{item.line}</p>
                      </div>
                      <p className="font-mono text-sm text-cyan-200">{money(item.amount)}</p>
                    </div>
                    <p className="mt-2 text-sm text-[#8a8f98]">{item.decision}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[22px] border border-white/[0.08] bg-white/[0.03] p-5">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#62666d]">{label}</p>
      <p className="mt-2 text-3xl font-medium tracking-[-0.04em] text-white">{value}</p>
    </div>
  );
}
