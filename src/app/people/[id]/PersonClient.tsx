"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  bills,
  calculatePersonRangeBreakdown,
  getPersonBreakdown,
  getPersonTotal,
  money,
  people,
  type PersonBill,
} from "../../billData";

type RangeBreakdown = ReturnType<typeof calculatePersonRangeBreakdown>;

export default function PersonClient({ personId }: { personId: string }) {
  const canonicalPerson = useMemo(() => people.find((p) => p.id === personId), [personId]);

  const [selectedBillId, setSelectedBillId] = useState(bills[0].id);
  const [rangeStartBillId, setRangeStartBillId] = useState(bills[bills.length - 1].id);
  const [rangeEndBillId, setRangeEndBillId] = useState(bills[0].id);
  const [rangeBreakdown, setRangeBreakdown] = useState<RangeBreakdown | null>(null);

  const selectedBill = useMemo(
    () => bills.find((bill) => bill.id === selectedBillId) ?? bills[0],
    [selectedBillId],
  );

  const personInBill: PersonBill | undefined = useMemo(
    () => selectedBill.people.find((p) => p.id === personId),
    [personId, selectedBill],
  );

  const allPersonBills = useMemo(
    () => bills.filter((bill) => bill.people.some((p) => p.id === personId)),
    [personId],
  );

  const breakdown = personInBill ? getPersonBreakdown(personInBill, [], selectedBill.id) : [];
  const automaticTotal = personInBill ? getPersonTotal(personInBill) : 0;
  const rangeStart = bills.find((bill) => bill.id === rangeStartBillId) ?? bills[bills.length - 1];
  const rangeEnd = bills.find((bill) => bill.id === rangeEndBillId) ?? bills[0];
  const orderedRange = [rangeStart, rangeEnd].sort((a, b) => a.id.localeCompare(b.id));

  function handleBillChange(nextBillId: string) {
    setSelectedBillId(nextBillId);
  }

  function handleRangeChange(kind: "start" | "end", nextBillId: string) {
    if (kind === "start") setRangeStartBillId(nextBillId);
    if (kind === "end") setRangeEndBillId(nextBillId);
    setRangeBreakdown(null);
  }

  function applyRangeFilter() {
    if (!canonicalPerson) return;
    setRangeBreakdown(
      calculatePersonRangeBreakdown(bills, canonicalPerson.id, rangeStartBillId, rangeEndBillId),
    );
  }

  if (!canonicalPerson) {
    return (
      <main className="min-h-screen bg-[#07080b] text-white">
        <section className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-5 py-8 md:px-8 lg:px-10">
          <div className="rounded-[28px] border border-rose-300/20 bg-rose-950/20 p-8 text-center">
            <h1 className="text-2xl font-semibold text-white">Person not found</h1>
            <Link href="/" className="mt-4 inline-block text-[#e20074] hover:underline">
              Back to people list
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#07080b] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_16%_0%,rgba(226,0,116,0.20),transparent_34rem),radial-gradient(circle_at_85%_8%,rgba(113,112,255,0.18),transparent_30rem),linear-gradient(180deg,#07080b_0%,#0c0d12_100%)]" />
      <section className="relative mx-auto flex w-full max-w-7xl flex-col gap-7 px-5 py-7 md:px-8 lg:px-10">
        <Link
          href="/"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 text-sm text-[#a9adb8] transition hover:border-white/[0.18] hover:text-white"
        >
          ← All people
        </Link>

        <header className="overflow-hidden rounded-[34px] border border-white/[0.08] bg-white/[0.045] shadow-2xl shadow-black/40 backdrop-blur">
          <div className="h-1.5 bg-gradient-to-r from-[#e20074] via-[#8f7cff] to-[#16d9a3]" />
          <div className="grid gap-7 p-7 md:p-10 lg:grid-cols-[1fr_420px] lg:items-stretch">
            <div className="flex flex-col justify-between gap-8">
              <div>
                <p className="mb-5 inline-flex rounded-full border border-white/[0.1] bg-white/[0.06] px-3 py-1 text-xs font-semibold uppercase tracking-[0.26em] text-[#a9adb8]">
                  Personal bill page
                </p>
                <h1 className="text-5xl font-semibold leading-[0.92] tracking-[-0.07em] text-white md:text-7xl">
                  {canonicalPerson.name}
                </h1>
                <p className="mt-3 font-mono text-base text-[#8f96a3]">{canonicalPerson.line}</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <Metric label="Monthly base" value={money(46.4)} muted />
                <Metric label="Selected bill" value={selectedBill.label} muted />
                <Metric label="Bills loaded" value={String(allPersonBills.length)} muted />
              </div>
            </div>

            <div className="rounded-[28px] border border-white/[0.08] bg-black/25 p-5">
              <label htmlFor="bill-select" className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6f7684]">
                Bill month
              </label>
              <select
                id="bill-select"
                value={selectedBillId}
                onChange={(event) => handleBillChange(event.target.value)}
                className="mt-3 w-full rounded-2xl border border-white/[0.08] bg-[#101116] px-4 py-3 text-base font-medium text-white outline-none transition focus:border-[#e20074]"
              >
                {allPersonBills.map((bill) => (
                  <option key={bill.id} value={bill.id}>
                    {bill.label} · due {bill.dueDate}
                  </option>
                ))}
              </select>

              <div className="mt-5 rounded-[26px] border border-[#e20074]/35 bg-[#e20074]/14 p-6 text-right">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f4cfe3]">Total owed</p>
                <p className="mt-2 text-6xl font-semibold tracking-[-0.08em] text-white">{money(automaticTotal)}</p>
              </div>
            </div>
          </div>
        </header>

        <section className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[30px] border border-white/[0.08] bg-white/[0.04] p-5 shadow-xl shadow-black/25">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6f7684]">Selected month</p>
                <h2 className="mt-1 text-2xl font-semibold tracking-[-0.04em] text-white">Charge breakdown</h2>
              </div>
              <span className="rounded-full border border-white/[0.08] px-3 py-1 text-xs text-[#a9adb8]">Inclusive</span>
            </div>

            <div className="grid gap-3">
              {breakdown.map((charge, index) => (
                <div key={`${charge.label}-${index}`} className="rounded-2xl border border-white/[0.08] bg-black/20 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-medium text-[#d9dce5]">{charge.label}</span>
                    <span className="font-mono text-xl font-semibold text-white">{money(charge.amount)}</span>
                  </div>
                </div>
              ))}
            </div>

            {personInBill && personInBill.evidence.length > 0 && (
              <details className="mt-4 rounded-2xl border border-white/[0.08] bg-black/18 p-4 text-sm text-[#9aa0ad]">
                <summary className="cursor-pointer font-medium text-[#d9dce5]">Bill evidence</summary>
                <ul className="mt-3 space-y-2 leading-6">
                  {personInBill.evidence.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-[#e20074]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </details>
            )}
          </div>

          <section className="rounded-[30px] border border-white/[0.08] bg-[#101116] p-5 shadow-2xl shadow-black/30">
            <div className="mb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6f7684]">Multi-month calculator</p>
              <h2 className="mt-1 text-3xl font-semibold tracking-[-0.05em] text-white">Total owed across months</h2>
              <p className="mt-3 text-sm leading-6 text-[#9aa0ad]">
                Select a start and end month. Both endpoints are included — March 2025 through April 2026 includes March and April.
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <MonthSelect
                label="From month"
                value={rangeStartBillId}
                onChange={(value) => handleRangeChange("start", value)}
              />
              <MonthSelect
                label="To month"
                value={rangeEndBillId}
                onChange={(value) => handleRangeChange("end", value)}
              />
            </div>

            <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4 md:flex-row md:items-center md:justify-between">
              <p className="text-sm leading-6 text-[#9aa0ad]">
                Inclusive range: <span className="text-white">{orderedRange[0].label}</span> → <span className="text-white">{orderedRange[1].label}</span>
              </p>
              <button
                onClick={applyRangeFilter}
                className="rounded-2xl bg-[#e20074] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#e20074]/20 transition hover:bg-[#f01b88]"
              >
                Calculate range total
              </button>
            </div>

            {rangeBreakdown && (
              <div className="mt-5 overflow-hidden rounded-[26px] border border-[#16d9a3]/25 bg-[#16d9a3]/8">
                <div className="border-b border-white/[0.08] p-5">
                  <p className="text-sm text-[#9aa0ad]">{canonicalPerson.name}&apos;s inclusive total across {rangeBreakdown.billCount} bill months</p>
                  <p className="mt-1 text-6xl font-semibold tracking-[-0.08em] text-white">{money(rangeBreakdown.total)}</p>
                </div>
                <div className="grid gap-2 p-4 sm:grid-cols-2">
                  <RangeLine label="Base monthly share" value={rangeBreakdown.base} />
                  <RangeLine label="International calls / roaming" value={rangeBreakdown.internationalFees} />
                  <RangeLine label="Mobile device payments" value={rangeBreakdown.devicePayment} />
                  <RangeLine label="Other fees" value={rangeBreakdown.otherFees} />
                  {rangeBreakdown.adjustments !== 0 && <RangeLine label="Manual adjustments" value={rangeBreakdown.adjustments} />}
                </div>
              </div>
            )}
          </section>
        </section>
      </section>
    </main>
  );
}

function Metric({ label, value, muted = false }: { label: string; value: string; muted?: boolean }) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-black/20 p-4">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6f7684]">{label}</p>
      <p className={`mt-2 text-lg font-semibold tracking-[-0.03em] ${muted ? "text-[#d9dce5]" : "text-white"}`}>{value}</p>
    </div>
  );
}

function MonthSelect({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6f7684]">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-3 w-full rounded-xl border border-white/[0.08] bg-[#07080b] px-3 py-3 text-sm font-medium text-white outline-none transition focus:border-[#e20074]"
      >
        {bills.map((bill) => (
          <option key={bill.id} value={bill.id}>
            {bill.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function RangeLine({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-black/18 px-4 py-3">
      <span className="text-sm text-[#c9ced8]">{label}</span>
      <span className="font-mono text-lg font-semibold text-white">{money(value)}</span>
    </div>
  );
}
