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

describe("sanitized billData", () => {
  it("calculates a person's total as base plus extras", () => {
    const person = people.find((row) => row.id === "person-6");
    expect(person).toBeDefined();
    expect(getPersonTotal(person!)).toBe(92.17);
  });

  it("returns breakdown rows for a person", () => {
    const person = people.find((row) => row.id === "person-6")!;
    expect(getPersonBreakdown(person)).toEqual([
      { label: "Base monthly share", amount: 46.4 },
      { label: "International calls / roaming", amount: 24.32 },
      { label: "Mobile device payment", amount: 21.45 },
    ]);
  });

  it("uses only sanitized placeholder names and lines", () => {
    expect(people.every((person) => person.name.startsWith("Person "))).toBe(true);
    expect(people.every((person) => person.line.startsWith("(555) 010-"))).toBe(true);
  });

  it("adds manual adjustments to a selected person's total", () => {
    const adjustments: ManualAdjustment[] = [
      { id: "adj-1", billId: activeBill.id, personId: "person-6", label: "Manual fee", amount: 10 },
      { id: "adj-2", billId: activeBill.id, personId: "person-6", label: "Correction", amount: -2.5 },
      { id: "adj-3", billId: activeBill.id, personId: "person-5", label: "Someone else", amount: 99 },
    ];

    const person = people.find((row) => row.id === "person-6")!;
    expect(calculatePersonTotalWithAdjustments(activeBill.id, person, adjustments)).toBe(99.67);
  });

  it("calculates bill collection total including adjustments for that bill only", () => {
    const adjustments: ManualAdjustment[] = [
      { id: "adj-1", billId: activeBill.id, personId: "person-6", label: "Manual fee", amount: 10 },
      { id: "adj-2", billId: "other-bill", personId: "person-6", label: "Wrong bill", amount: 50 },
    ];

    expect(calculateBillCollectionTotal(activeBill, adjustments)).toBe(435.74);
  });

  it("calculates one person's total across an inclusive bill range", () => {
    const adjustments: ManualAdjustment[] = [
      { id: "adj-range", billId: "2026-04", personId: "person-6", label: "Manual fee", amount: 10 },
    ];

    expect(calculatePersonRangeTotal(bills, "person-6", "2026-03", "2026-04", adjustments)).toBe(170.02);
  });

  it("breaks an inclusive range total into charge buckets", () => {
    const adjustments: ManualAdjustment[] = [
      { id: "adj-range", billId: "2026-04", personId: "person-6", label: "Manual fee", amount: 10 },
    ];

    expect(calculatePersonRangeBreakdown(bills, "person-6", "2026-03", "2026-04", adjustments)).toEqual({
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
    const breakdown = calculatePersonRangeBreakdown(bills, "person-6", "2025-03", "2026-04");
    expect(breakdown.billCount).toBe(14);
    expect(breakdown.base).toBe(649.6);
  });

  it("keeps account totals available for the private/secret page demo", () => {
    expect(getAccountPrivateMetrics(activeBill)).toMatchObject({
      currentCharges: 425.74,
      pastDue: 100,
      totalDue: 525.74,
      reviewTotal: 150,
    });
  });
});
