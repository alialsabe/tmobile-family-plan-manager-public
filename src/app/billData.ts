export type Charge = {
  label: string;
  amount: number;
  evidence?: string;
};

export type PersonBill = {
  id: string;
  name: string;
  line: string;
  type: string;
  base: number;
  internationalFees: number;
  devicePayment: number;
  otherFees: number;
  note: string;
  evidence: string[];
};

export type ReviewItem = {
  item: string;
  line: string;
  amount: number;
  decision: string;
};

export type BillRecord = {
  id: string;
  label: string;
  issueDate: string;
  dueDate: string;
  currentCharges: number;
  pastDue: number;
  totalDue: number;
  basePerPerson: number;
  sourcePdf: string;
  people: PersonBill[];
  needsReview: ReviewItem[];
};

export type ManualAdjustment = {
  id: string;
  billId: string;
  personId: string;
  label: string;
  amount: number;
};

const roster = [
  { id: "person-1", name: "Person 1", line: "(555) 010-1001" },
  { id: "person-2", name: "Person 2", line: "(555) 010-1002" },
  { id: "person-3", name: "Person 3", line: "(555) 010-1003" },
  { id: "person-4", name: "Person 4", line: "(555) 010-1004" },
  { id: "person-5", name: "Person 5", line: "(555) 010-1005" },
  { id: "person-6", name: "Person 6", line: "(555) 010-1006" },
  { id: "person-7", name: "Person 7", line: "(555) 010-1007" },
  { id: "person-8", name: "Person 8", line: "(555) 010-1008" },
];

const monthSpecs = [
  ["2026-04", "April 2026", "Apr 14, 2026", "May 07, 2026"],
  ["2026-03", "March 2026", "Mar 14, 2026", "Apr 07, 2026"],
  ["2026-02", "February 2026", "Feb 14, 2026", "Mar 07, 2026"],
  ["2026-01", "January 2026", "Jan 14, 2026", "Feb 07, 2026"],
  ["2025-12", "December 2025", "Dec 14, 2025", "Jan 07, 2026"],
  ["2025-11", "November 2025", "Nov 14, 2025", "Dec 07, 2025"],
  ["2025-10", "October 2025", "Oct 14, 2025", "Nov 07, 2025"],
  ["2025-09", "September 2025", "Sep 14, 2025", "Oct 07, 2025"],
  ["2025-08", "August 2025", "Aug 14, 2025", "Sep 07, 2025"],
  ["2025-07", "July 2025", "Jul 14, 2025", "Aug 07, 2025"],
  ["2025-06", "June 2025", "Jun 14, 2025", "Jul 07, 2025"],
  ["2025-05", "May 2025", "May 14, 2025", "Jun 07, 2025"],
  ["2025-04", "April 2025", "Apr 14, 2025", "May 07, 2025"],
  ["2025-03", "March 2025", "Mar 14, 2025", "Apr 07, 2025"],
  ["2025-02", "February 2025", "Feb 14, 2025", "Mar 07, 2025"],
  ["2025-01", "January 2025", "Jan 14, 2025", "Feb 07, 2025"],
];

function makePerson(person: (typeof roster)[number], monthIndex: number, personIndex: number): PersonBill {
  const internationalFees = personIndex === 5 ? [24.32, 0, 24.42, 0][monthIndex % 4] : personIndex === 0 ? [0, 55.12, 57.98, 0][monthIndex % 4] : personIndex === 4 ? [7.69, 0, 0, 0][monthIndex % 4] : 0;
  const devicePayment = personIndex === 5 ? 21.45 : 0;
  const otherFees = personIndex === 6 && monthIndex % 5 === 0 ? 1.08 : 0;

  return {
    ...person,
    type: "Voice",
    base: 46.4,
    internationalFees,
    devicePayment,
    otherFees,
    note: internationalFees || devicePayment || otherFees ? "Sample extra charges for public demo data." : "No extra demo charge for this bill.",
    evidence: [
      "Sanitized sample data: no real bill PDF, account number, customer name, or real phone number is included in this public repository.",
    ],
  };
}

export const bills: BillRecord[] = monthSpecs.map(([id, label, issueDate, dueDate], monthIndex) => {
  const people = roster.map((person, personIndex) => makePerson(person, monthIndex, personIndex));
  const collectionTotal = roundMoney(people.reduce((sum, person) => sum + getPersonTotal(person), 0));
  const needsReviewAmount = roundMoney(150 + (monthIndex % 4) * 12.5);

  return {
    id,
    label,
    issueDate,
    dueDate,
    currentCharges: collectionTotal,
    pastDue: monthIndex % 5 === 0 ? 100 : 0,
    totalDue: roundMoney(collectionTotal + (monthIndex % 5 === 0 ? 100 : 0)),
    basePerPerson: 46.4,
    sourcePdf: "sanitized-demo-no-raw-pdf.pdf",
    people,
    needsReview: [
      {
        item: "Sample account-level item",
        line: "Account",
        amount: needsReviewAmount,
        decision: "Sanitized demo placeholder; private allocations stay outside this public repository.",
      },
    ],
  };
});

export const activeBill = bills[0];
export const people = activeBill.people;

export function getPersonTotal(person: PersonBill) {
  return roundMoney(person.base + person.internationalFees + person.devicePayment + person.otherFees);
}

export function getManualAdjustmentTotal(billId: string, personId: string, adjustments: ManualAdjustment[] = []) {
  return roundMoney(
    adjustments
      .filter((adjustment) => adjustment.billId === billId && adjustment.personId === personId)
      .reduce((sum, adjustment) => sum + adjustment.amount, 0),
  );
}

export function calculatePersonTotalWithAdjustments(
  billId: string,
  person: PersonBill,
  adjustments: ManualAdjustment[],
) {
  return roundMoney(getPersonTotal(person) + getManualAdjustmentTotal(billId, person.id, adjustments));
}

export function calculateBillCollectionTotal(billRecord: BillRecord, adjustments: ManualAdjustment[]) {
  return roundMoney(
    billRecord.people.reduce(
      (sum, person) => sum + calculatePersonTotalWithAdjustments(billRecord.id, person, adjustments),
      0,
    ),
  );
}

export function getBillsInRange(allBills: BillRecord[], startBillId: string, endBillId: string) {
  const startIndex = allBills.findIndex((billRecord) => billRecord.id === startBillId);
  const endIndex = allBills.findIndex((billRecord) => billRecord.id === endBillId);
  if (startIndex === -1 || endIndex === -1) return [];
  const [from, to] = startIndex <= endIndex ? [startIndex, endIndex] : [endIndex, startIndex];
  return allBills.slice(from, to + 1);
}

export function calculatePersonRangeBreakdown(
  allBills: BillRecord[],
  personId: string,
  startBillId: string,
  endBillId: string,
  adjustments: ManualAdjustment[] = [],
) {
  const totals = getBillsInRange(allBills, startBillId, endBillId).reduce(
    (sum, billRecord) => {
      const person = billRecord.people.find((row) => row.id === personId);
      if (!person) return sum;
      return {
        billCount: sum.billCount + 1,
        base: sum.base + person.base,
        internationalFees: sum.internationalFees + person.internationalFees,
        devicePayment: sum.devicePayment + person.devicePayment,
        otherFees: sum.otherFees + person.otherFees,
        adjustments: sum.adjustments + getManualAdjustmentTotal(billRecord.id, personId, adjustments),
      };
    },
    { billCount: 0, base: 0, internationalFees: 0, devicePayment: 0, otherFees: 0, adjustments: 0 },
  );

  const rounded = {
    billCount: totals.billCount,
    base: roundMoney(totals.base),
    internationalFees: roundMoney(totals.internationalFees),
    devicePayment: roundMoney(totals.devicePayment),
    otherFees: roundMoney(totals.otherFees),
    adjustments: roundMoney(totals.adjustments),
  };

  return {
    ...rounded,
    total: roundMoney(rounded.base + rounded.internationalFees + rounded.devicePayment + rounded.otherFees + rounded.adjustments),
  };
}

export function calculatePersonRangeTotal(
  allBills: BillRecord[],
  personId: string,
  startBillId: string,
  endBillId: string,
  adjustments: ManualAdjustment[] = [],
) {
  return calculatePersonRangeBreakdown(allBills, personId, startBillId, endBillId, adjustments).total;
}

export function getAccountPrivateMetrics(billRecord: BillRecord) {
  return {
    currentCharges: billRecord.currentCharges,
    pastDue: billRecord.pastDue,
    totalDue: billRecord.totalDue,
    reviewTotal: roundMoney(billRecord.needsReview.reduce((sum, item) => sum + item.amount, 0)),
    needsReview: billRecord.needsReview,
  };
}

export function getPersonBreakdown(person: PersonBill, manualAdjustments: ManualAdjustment[] = [], billId = activeBill.id): Charge[] {
  const automaticCharges = [
    { label: "Base monthly share", amount: person.base },
    { label: "International calls / roaming", amount: person.internationalFees },
    { label: "Mobile device payment", amount: person.devicePayment },
    { label: "Other fees", amount: person.otherFees },
  ].filter((charge) => charge.amount !== 0);

  const manualCharges = manualAdjustments
    .filter((adjustment) => adjustment.billId === billId && adjustment.personId === person.id)
    .map((adjustment) => ({ label: adjustment.label, amount: adjustment.amount }));

  return [...automaticCharges, ...manualCharges];
}

export function roundMoney(value: number) {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

export function money(value: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
}
