import { describe, expect, it } from "vitest";
import {
  activeBill,
  bills,
  calculateBillCollectionTotal,
  calculatePersonRangeBreakdown,
  calculatePersonRangeTotal,
  calculatePersonTotalWithAdjustments,
  getAccountPrivateMetrics,
  getPersonBreakdown,
  getPersonTotal,
  people,
  type ManualAdjustment,
} from "./billData";

describe("billData", () => {
  it("calculates a person's total as base plus international fees plus device payments", () => {
    const person = people.find((row) => row.line === "(760) 412-2708");
    expect(person).toBeDefined();
    expect(getPersonTotal(person!)).toBe(92.17);
  });

  it("returns screenshot-friendly breakdown rows for a person", () => {
    const person = people.find((row) => row.line === "(760) 412-2708")!;
    expect(getPersonBreakdown(person)).toEqual([
      { label: "Base monthly share", amount: 46.4 },
      { label: "International calls / roaming", amount: 24.32 },
      { label: "Mobile device payment", amount: 21.45 },
    ]);
  });

  it("maps roster names to the correct phone lines", () => {
    expect(Object.fromEntries(people.map((person) => [person.line, person.name]))).toMatchObject({
      "(415) 316-3282": "Fares",
      "(415) 425-4426": "Hamza",
      "(510) 717-7163": "Ali",
      "(858) 666-5305": "Nick",
      "(415) 990-4154": "Kareem",
      "(760) 412-2708": "Johannes",
      "(917) 400-5616": "Diana",
    });
  });

  it("adds manual adjustments to a selected person's total", () => {
    const adjustments: ManualAdjustment[] = [
      { id: "adj-1", billId: activeBill.id, personId: "7604122708", label: "Paid late last month", amount: 10 },
      { id: "adj-2", billId: activeBill.id, personId: "7604122708", label: "Correction", amount: -2.5 },
      { id: "adj-3", billId: activeBill.id, personId: "4159904154", label: "Someone else", amount: 99 },
    ];

    const johannes = people.find((person) => person.id === "7604122708")!;
    expect(calculatePersonTotalWithAdjustments(activeBill.id, johannes, adjustments)).toBe(99.67);
  });

  it("calculates full bill collection total including manual adjustments for that bill only", () => {
    const adjustments: ManualAdjustment[] = [
      { id: "adj-1", billId: activeBill.id, personId: "7604122708", label: "Manual fee", amount: 10 },
      { id: "adj-2", billId: "other-bill", personId: "7604122708", label: "Wrong bill", amount: 50 },
    ];

    expect(calculateBillCollectionTotal(activeBill, adjustments)).toBe(435.74);
  });

  it("calculates one person's total across an inclusive bill range", () => {
    const adjustments: ManualAdjustment[] = [
      { id: "adj-range", billId: "2026-04", personId: "7604122708", label: "Manual fee", amount: 10 },
    ];

    expect(calculatePersonRangeTotal(bills, "7604122708", "2026-03", "2026-04", adjustments)).toBe(170.02);
  });

  it("breaks an inclusive range total into base, international, device, other, and adjustment buckets", () => {
    const adjustments: ManualAdjustment[] = [
      { id: "adj-range", billId: "2026-04", personId: "7604122708", label: "Manual fee", amount: 10 },
    ];

    expect(calculatePersonRangeBreakdown(bills, "7604122708", "2026-03", "2026-04", adjustments)).toEqual({
      billCount: 2,
      base: 92.8,
      internationalFees: 24.32,
      devicePayment: 42.9,
      otherFees: 0,
      adjustments: 10,
      total: 170.02,
    });
  });

  it("includes both far ends when the selected range spans March 2025 through April 2026", () => {
    const breakdown = calculatePersonRangeBreakdown(bills, "7604122708", "2025-03", "2026-04");
    const march2025 = bills.find((bill) => bill.id === "2025-03")!.people.find((person) => person.id === "7604122708")!;
    const april2026 = bills.find((bill) => bill.id === "2026-04")!.people.find((person) => person.id === "7604122708")!;

    expect(breakdown.billCount).toBe(14);
    expect(breakdown.base).toBeGreaterThanOrEqual(march2025.base + april2026.base);
    expect(breakdown.total).toBeGreaterThanOrEqual(getPersonTotal(march2025) + getPersonTotal(april2026));
  });

  it("keeps private account totals available for the secret page only", () => {
    expect(getAccountPrivateMetrics(activeBill)).toMatchObject({
      currentCharges: 481.13,
      pastDue: 446.67,
      totalDue: 927.8,
      reviewTotal: 673.26,
    });
  });
});
