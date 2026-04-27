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

export const bills: BillRecord[] = [
  {
    "id": "2026-04",
    "label": "April 2026",
    "issueDate": "Apr 14, 2026",
    "dueDate": "May 07, 2026",
    "currentCharges": 481.13,
    "pastDue": 446.67,
    "totalDue": 927.8,
    "basePerPerson": 46.4,
    "sourcePdf": "data/bills/DetailedBillApr2026.pdf",
    "people": [
      {
        "id": "4153163282",
        "name": "Fares",
        "line": "(415) 316-3282",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $0.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $0.00"
        ]
      },
      {
        "id": "4154254426",
        "name": "Hamza",
        "line": "(415) 425-4426",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $0.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $0.00"
        ]
      },
      {
        "id": "5107177163",
        "name": "Ali",
        "line": "(510) 717-7163",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $40.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $40.00"
        ]
      },
      {
        "id": "8586665305",
        "name": "Nick",
        "line": "(858) 666-5305",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $40.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $40.00"
        ]
      },
      {
        "id": "4159904154",
        "name": "Kareem",
        "line": "(415) 990-4154",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 7.69,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $40.00, equipment $0.00, services $0.00, one-time $7.69, T-Mobile total $47.69",
          "Page 2 summary: line-specific one-time/usage charge $7.69"
        ]
      },
      {
        "id": "7604122708",
        "name": "Johannes",
        "line": "(760) 412-2708",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 24.32,
        "devicePayment": 21.45,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $40.00, equipment $21.45, services $0.00, one-time $24.32, T-Mobile total $85.77",
          "Page 2 summary: line-specific one-time/usage charge $24.32",
          "Page 2 summary: line-specific equipment charge $21.45"
        ]
      },
      {
        "id": "9174005616",
        "name": "Diana",
        "line": "(917) 400-5616",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 1.08,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $40.00, equipment $0.00, services $0.00, one-time $1.08, T-Mobile total $41.08",
          "Page 2 summary: line-specific one-time/usage charge $1.08"
        ]
      },
      {
        "id": "6194503199",
        "name": "Unassigned",
        "line": "(619) 450-3199",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $0.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $0.00"
        ]
      }
    ],
    "needsReview": [
      {
        "item": "Account",
        "line": "Account",
        "amount": 184.49,
        "decision": "Unallocated: assign owner/split/ignore after review"
      },
      {
        "item": "Mobile Internet",
        "line": "(442) 354-4556",
        "amount": 42.1,
        "decision": "Unallocated: assign owner/split/ignore after review"
      },
      {
        "item": "Past due balance",
        "line": "Account",
        "amount": 446.67,
        "decision": "Do not allocate until payment history is known"
      }
    ]
  },
  {
    "id": "2026-03",
    "label": "March 2026",
    "issueDate": "Mar 14, 2026",
    "dueDate": "Apr 07, 2026",
    "currentCharges": 446.67,
    "pastDue": 0.0,
    "totalDue": 446.67,
    "basePerPerson": 46.4,
    "sourcePdf": "data/bills/DetailedBillMar2026.pdf",
    "people": [
      {
        "id": "4153163282",
        "name": "Fares",
        "line": "(415) 316-3282",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 55.12,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $0.00, equipment $0.00, services $0.00, one-time $55.12, T-Mobile total $55.12",
          "Page 2 summary: line-specific one-time/usage charge $55.12"
        ]
      },
      {
        "id": "4154254426",
        "name": "Hamza",
        "line": "(415) 425-4426",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $0.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $0.00"
        ]
      },
      {
        "id": "5107177163",
        "name": "Ali",
        "line": "(510) 717-7163",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $35.00"
        ]
      },
      {
        "id": "8586665305",
        "name": "Nick",
        "line": "(858) 666-5305",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $35.00"
        ]
      },
      {
        "id": "4159904154",
        "name": "Kareem",
        "line": "(415) 990-4154",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $35.00"
        ]
      },
      {
        "id": "7604122708",
        "name": "Johannes",
        "line": "(760) 412-2708",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 21.45,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $21.45, services $0.00, one-time $0.00, T-Mobile total $56.45",
          "Page 2 summary: line-specific equipment charge $21.45"
        ]
      },
      {
        "id": "9174005616",
        "name": "Diana",
        "line": "(917) 400-5616",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $35.00"
        ]
      },
      {
        "id": "6194503199",
        "name": "Unassigned",
        "line": "(619) 450-3199",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $0.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $0.00"
        ]
      }
    ],
    "needsReview": [
      {
        "item": "Account",
        "line": "Account",
        "amount": 153.0,
        "decision": "Unallocated: assign owner/split/ignore after review"
      },
      {
        "item": "Mobile Internet",
        "line": "(442) 354-4556",
        "amount": 42.1,
        "decision": "Unallocated: assign owner/split/ignore after review"
      }
    ]
  },
  {
    "id": "2026-02",
    "label": "February 2026",
    "issueDate": "Feb 14, 2026",
    "dueDate": "Mar 07, 2026",
    "currentCharges": 529.5,
    "pastDue": 210.6,
    "totalDue": 740.1,
    "basePerPerson": 46.4,
    "sourcePdf": "data/bills/DetailedBillFeb2026.pdf",
    "people": [
      {
        "id": "4153163282",
        "name": "Fares",
        "line": "(415) 316-3282",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 57.98,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $0.00, equipment $0.00, services $0.00, one-time $57.98, T-Mobile total $57.98",
          "Page 2 summary: line-specific one-time/usage charge $57.98"
        ]
      },
      {
        "id": "4154254426",
        "name": "Hamza",
        "line": "(415) 425-4426",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $0.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $0.00"
        ]
      },
      {
        "id": "5107177163",
        "name": "Ali",
        "line": "(510) 717-7163",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $40.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $40.00"
        ]
      },
      {
        "id": "8586665305",
        "name": "Nick",
        "line": "(858) 666-5305",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 1.45,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $40.00, equipment $0.00, services $0.00, one-time $1.45, T-Mobile total $41.45",
          "Page 2 summary: line-specific one-time/usage charge $1.45"
        ]
      },
      {
        "id": "4159904154",
        "name": "Kareem",
        "line": "(415) 990-4154",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $40.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $40.00"
        ]
      },
      {
        "id": "7604122708",
        "name": "Johannes",
        "line": "(760) 412-2708",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 24.42,
        "devicePayment": 21.45,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $40.00, equipment $21.45, services $0.00, one-time $24.42, T-Mobile total $85.87",
          "Page 2 summary: line-specific one-time/usage charge $24.42",
          "Page 2 summary: line-specific equipment charge $21.45"
        ]
      },
      {
        "id": "9174005616",
        "name": "Diana",
        "line": "(917) 400-5616",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $40.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $40.00"
        ]
      },
      {
        "id": "6194503199",
        "name": "Unassigned",
        "line": "(619) 450-3199",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $0.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $0.00"
        ]
      }
    ],
    "needsReview": [
      {
        "item": "Account",
        "line": "Account",
        "amount": 182.1,
        "decision": "Unallocated: assign owner/split/ignore after review"
      },
      {
        "item": "Mobile Internet",
        "line": "(442) 354-4556",
        "amount": 42.1,
        "decision": "Unallocated: assign owner/split/ignore after review"
      },
      {
        "item": "Past due balance",
        "line": "Account",
        "amount": 210.6,
        "decision": "Do not allocate until payment history is known"
      }
    ]
  },
  {
    "id": "2026-01",
    "label": "January 2026",
    "issueDate": "Jan 14, 2026",
    "dueDate": "Feb 07, 2026",
    "currentCharges": 421.19,
    "pastDue": 0.0,
    "totalDue": 421.19,
    "basePerPerson": 46.4,
    "sourcePdf": "data/bills/DetailedBillJan2026.pdf",
    "people": [
      {
        "id": "4153163282",
        "name": "Fares",
        "line": "(415) 316-3282",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $0.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $0.00"
        ]
      },
      {
        "id": "4154254426",
        "name": "Hamza",
        "line": "(415) 425-4426",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $0.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $0.00"
        ]
      },
      {
        "id": "5107177163",
        "name": "Ali",
        "line": "(510) 717-7163",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 14.82,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $14.82, services $0.00, one-time $0.00, T-Mobile total $49.82",
          "Page 2 summary: line-specific equipment charge $14.82"
        ]
      },
      {
        "id": "8586665305",
        "name": "Nick",
        "line": "(858) 666-5305",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $35.00"
        ]
      },
      {
        "id": "4159904154",
        "name": "Kareem",
        "line": "(415) 990-4154",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 13.68,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $0.00, services $0.00, one-time $13.68, T-Mobile total $48.68",
          "Page 2 summary: line-specific one-time/usage charge $13.68"
        ]
      },
      {
        "id": "7604122708",
        "name": "Johannes",
        "line": "(760) 412-2708",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 1.37,
        "devicePayment": 21.45,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $21.45, services $0.00, one-time $1.37, T-Mobile total $57.82",
          "Page 2 summary: line-specific one-time/usage charge $1.37",
          "Page 2 summary: line-specific equipment charge $21.45"
        ]
      },
      {
        "id": "9174005616",
        "name": "Diana",
        "line": "(917) 400-5616",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.27,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $0.00, services $0.00, one-time $0.27, T-Mobile total $35.27",
          "Page 2 summary: line-specific one-time/usage charge $0.27"
        ]
      },
      {
        "id": "6194503199",
        "name": "Unassigned",
        "line": "(619) 450-3199",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $0.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $0.00"
        ]
      }
    ],
    "needsReview": [
      {
        "item": "Account",
        "line": "Account",
        "amount": 153.0,
        "decision": "Unallocated: assign owner/split/ignore after review"
      },
      {
        "item": "Mobile Internet",
        "line": "(442) 354-4556",
        "amount": 41.6,
        "decision": "Unallocated: assign owner/split/ignore after review"
      }
    ]
  },
  {
    "id": "2025-12",
    "label": "December 2025",
    "issueDate": "Dec 14, 2025",
    "dueDate": "Jan 07, 2026",
    "currentCharges": 421.32,
    "pastDue": 0.0,
    "totalDue": 401.15,
    "basePerPerson": 46.4,
    "sourcePdf": "data/bills/DetailedBillDec2025.pdf",
    "people": [
      {
        "id": "4153163282",
        "name": "Fares",
        "line": "(415) 316-3282",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 2.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $0.00, equipment $0.00, services $0.00, one-time $2.00, T-Mobile total $2.00",
          "Page 2 summary: line-specific one-time/usage charge $2.00"
        ]
      },
      {
        "id": "4154254426",
        "name": "Hamza",
        "line": "(415) 425-4426",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $0.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $0.00"
        ]
      },
      {
        "id": "5107177163",
        "name": "Ali",
        "line": "(510) 717-7163",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 14.79,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $14.79, services $0.00, one-time $0.00, T-Mobile total $49.79",
          "Page 2 summary: line-specific equipment charge $14.79"
        ]
      },
      {
        "id": "8586665305",
        "name": "Nick",
        "line": "(858) 666-5305",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 13.01,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $0.00, services $0.00, one-time $13.01, T-Mobile total $48.01",
          "Page 2 summary: line-specific one-time/usage charge $13.01"
        ]
      },
      {
        "id": "4159904154",
        "name": "Kareem",
        "line": "(415) 990-4154",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $35.00"
        ]
      },
      {
        "id": "7604122708",
        "name": "Johannes",
        "line": "(760) 412-2708",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 3.47,
        "devicePayment": 21.45,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $21.45, services $0.00, one-time $3.47, T-Mobile total $59.92",
          "Page 2 summary: line-specific one-time/usage charge $3.47",
          "Page 2 summary: line-specific equipment charge $21.45"
        ]
      },
      {
        "id": "9174005616",
        "name": "Diana",
        "line": "(917) 400-5616",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $35.00"
        ]
      },
      {
        "id": "6194503199",
        "name": "Unassigned",
        "line": "(619) 450-3199",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $0.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $0.00"
        ]
      }
    ],
    "needsReview": [
      {
        "item": "Account",
        "line": "Account",
        "amount": 150.0,
        "decision": "Unallocated: assign owner/split/ignore after review"
      },
      {
        "item": "Mobile Internet",
        "line": "(442) 354-4556",
        "amount": 41.6,
        "decision": "Unallocated: assign owner/split/ignore after review"
      }
    ]
  },
  {
    "id": "2025-11",
    "label": "November 2025",
    "issueDate": "Nov 14, 2025",
    "dueDate": "Dec 07, 2025",
    "currentCharges": 458.55,
    "pastDue": 439.57,
    "totalDue": 898.12,
    "basePerPerson": 46.4,
    "sourcePdf": "data/bills/DetailedBillNov2025.pdf",
    "people": [
      {
        "id": "4153163282",
        "name": "Fares",
        "line": "(415) 316-3282",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.54,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $0.00, equipment $0.00, services $0.00, one-time $0.54, T-Mobile total $0.54",
          "Page 2 summary: line-specific one-time/usage charge $0.54"
        ]
      },
      {
        "id": "4154254426",
        "name": "Hamza",
        "line": "(415) 425-4426",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $0.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $0.00"
        ]
      },
      {
        "id": "5107177163",
        "name": "Ali",
        "line": "(510) 717-7163",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 14.79,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $40.00, equipment $14.79, services $0.00, one-time $0.00, T-Mobile total $54.79",
          "Page 2 summary: line-specific equipment charge $14.79"
        ]
      },
      {
        "id": "8586665305",
        "name": "Nick",
        "line": "(858) 666-5305",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $40.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $40.00"
        ]
      },
      {
        "id": "4159904154",
        "name": "Kareem",
        "line": "(415) 990-4154",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $40.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $40.00"
        ]
      },
      {
        "id": "7604122708",
        "name": "Johannes",
        "line": "(760) 412-2708",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 21.45,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $40.00, equipment $21.45, services $0.00, one-time $0.00, T-Mobile total $61.45",
          "Page 2 summary: line-specific equipment charge $21.45"
        ]
      },
      {
        "id": "9174005616",
        "name": "Diana",
        "line": "(917) 400-5616",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $40.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $40.00"
        ]
      },
      {
        "id": "6194503199",
        "name": "Unassigned",
        "line": "(619) 450-3199",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $0.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $0.00"
        ]
      }
    ],
    "needsReview": [
      {
        "item": "Account",
        "line": "Account",
        "amount": 180.17,
        "decision": "Unallocated: assign owner/split/ignore after review"
      },
      {
        "item": "Mobile Internet",
        "line": "(442) 354-4556",
        "amount": 41.6,
        "decision": "Unallocated: assign owner/split/ignore after review"
      },
      {
        "item": "Past due balance",
        "line": "Account",
        "amount": 439.57,
        "decision": "Do not allocate until payment history is known"
      }
    ]
  },
  {
    "id": "2025-10",
    "label": "October 2025",
    "issueDate": "Oct 14, 2025",
    "dueDate": "Nov 07, 2025",
    "currentCharges": 439.57,
    "pastDue": 0.0,
    "totalDue": 439.57,
    "basePerPerson": 46.4,
    "sourcePdf": "data/bills/DetailedBillOct2025.pdf",
    "people": [
      {
        "id": "4153163282",
        "name": "Fares",
        "line": "(415) 316-3282",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $0.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $0.00"
        ]
      },
      {
        "id": "4154254426",
        "name": "Hamza",
        "line": "(415) 425-4426",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $0.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $0.00"
        ]
      },
      {
        "id": "5107177163",
        "name": "Ali",
        "line": "(510) 717-7163",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 14.79,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $40.00, equipment $14.79, services $0.00, one-time $0.00, T-Mobile total $54.79",
          "Page 2 summary: line-specific equipment charge $14.79"
        ]
      },
      {
        "id": "8586665305",
        "name": "Nick",
        "line": "(858) 666-5305",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.57,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $40.00, equipment $0.00, services $0.00, one-time $0.57, T-Mobile total $40.57",
          "Page 2 summary: line-specific one-time/usage charge $0.57"
        ]
      },
      {
        "id": "4159904154",
        "name": "Kareem",
        "line": "(415) 990-4154",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 1.16,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $40.00, equipment $0.00, services $0.00, one-time $1.16, T-Mobile total $41.16",
          "Page 2 summary: line-specific one-time/usage charge $1.16"
        ]
      },
      {
        "id": "7604122708",
        "name": "Johannes",
        "line": "(760) 412-2708",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 21.45,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $40.00, equipment $21.45, services $0.00, one-time $0.00, T-Mobile total $61.45",
          "Page 2 summary: line-specific equipment charge $21.45"
        ]
      },
      {
        "id": "9174005616",
        "name": "Diana",
        "line": "(917) 400-5616",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $40.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $40.00"
        ]
      },
      {
        "id": "6194503199",
        "name": "Unassigned",
        "line": "(619) 450-3199",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $0.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $0.00"
        ]
      }
    ],
    "needsReview": [
      {
        "item": "Account",
        "line": "Account",
        "amount": 160.0,
        "decision": "Unallocated: assign owner/split/ignore after review"
      },
      {
        "item": "Mobile Internet",
        "line": "(442) 354-4556",
        "amount": 41.6,
        "decision": "Unallocated: assign owner/split/ignore after review"
      }
    ]
  },
  {
    "id": "2025-09",
    "label": "September 2025",
    "issueDate": "Sep 14, 2025",
    "dueDate": "Oct 07, 2025",
    "currentCharges": 477.24,
    "pastDue": 483.08,
    "totalDue": 960.32,
    "basePerPerson": 46.4,
    "sourcePdf": "data/bills/DetailedBillSep2025.pdf",
    "people": [
      {
        "id": "4153163282",
        "name": "Fares",
        "line": "(415) 316-3282",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $0.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $0.00"
        ]
      },
      {
        "id": "4154254426",
        "name": "Hamza",
        "line": "(415) 425-4426",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $0.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $0.00"
        ]
      },
      {
        "id": "5107177163",
        "name": "Ali",
        "line": "(510) 717-7163",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 14.79,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $40.00, equipment $14.79, services $0.00, one-time $0.00, T-Mobile total $54.79",
          "Page 2 summary: line-specific equipment charge $14.79"
        ]
      },
      {
        "id": "8586665305",
        "name": "Nick",
        "line": "(858) 666-5305",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.57,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $40.00, equipment $0.00, services $0.00, one-time $0.57, T-Mobile total $40.57",
          "Page 2 summary: line-specific one-time/usage charge $0.57"
        ]
      },
      {
        "id": "4159904154",
        "name": "Kareem",
        "line": "(415) 990-4154",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 3.44,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $40.00, equipment $0.00, services $0.00, one-time $3.44, T-Mobile total $43.44",
          "Page 2 summary: line-specific one-time/usage charge $3.44"
        ]
      },
      {
        "id": "7604122708",
        "name": "Johannes",
        "line": "(760) 412-2708",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 21.45,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $40.00, equipment $21.45, services $0.00, one-time $0.00, T-Mobile total $61.45",
          "Page 2 summary: line-specific equipment charge $21.45"
        ]
      },
      {
        "id": "9174005616",
        "name": "Diana",
        "line": "(917) 400-5616",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $40.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $40.00"
        ]
      },
      {
        "id": "6194503199",
        "name": "Unassigned",
        "line": "(619) 450-3199",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $0.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $0.00"
        ]
      }
    ],
    "needsReview": [
      {
        "item": "Account",
        "line": "Account",
        "amount": 181.99,
        "decision": "Unallocated: assign owner/split/ignore after review"
      },
      {
        "item": "Mobile Internet",
        "line": "(442) 354-4556",
        "amount": 55.0,
        "decision": "Unallocated: assign owner/split/ignore after review"
      },
      {
        "item": "Past due balance",
        "line": "Account",
        "amount": 483.08,
        "decision": "Do not allocate until payment history is known"
      }
    ]
  },
  {
    "id": "2025-08",
    "label": "August 2025",
    "issueDate": "Aug 14, 2025",
    "dueDate": "Sep 07, 2025",
    "currentCharges": 481.69,
    "pastDue": 10.24,
    "totalDue": 491.93,
    "basePerPerson": 46.4,
    "sourcePdf": "data/bills/DetailedBillAug2025.pdf",
    "people": [
      {
        "id": "4153163282",
        "name": "Fares",
        "line": "(415) 316-3282",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.57,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $0.00, equipment $0.00, services $0.00, one-time $0.57, T-Mobile total $0.57",
          "Page 2 summary: line-specific one-time/usage charge $0.57"
        ]
      },
      {
        "id": "4154254426",
        "name": "Hamza",
        "line": "(415) 425-4426",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $0.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $0.00"
        ]
      },
      {
        "id": "5107177163",
        "name": "Ali",
        "line": "(510) 717-7163",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 14.79,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $40.00, equipment $14.79, services $0.00, one-time $0.00, T-Mobile total $54.79",
          "Page 2 summary: line-specific equipment charge $14.79"
        ]
      },
      {
        "id": "8586665305",
        "name": "Nick",
        "line": "(858) 666-5305",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $40.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $40.00"
        ]
      },
      {
        "id": "4159904154",
        "name": "Kareem",
        "line": "(415) 990-4154",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 7.69,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $40.00, equipment $0.00, services $0.00, one-time $7.69, T-Mobile total $47.69",
          "Page 2 summary: line-specific one-time/usage charge $7.69"
        ]
      },
      {
        "id": "7604122708",
        "name": "Johannes",
        "line": "(760) 412-2708",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 8.44,
        "devicePayment": 21.45,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $40.00, equipment $21.45, services $0.00, one-time $8.44, T-Mobile total $69.89",
          "Page 2 summary: line-specific one-time/usage charge $8.44",
          "Page 2 summary: line-specific equipment charge $21.45"
        ]
      },
      {
        "id": "9174005616",
        "name": "Diana",
        "line": "(917) 400-5616",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 6.75,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $40.00, equipment $0.00, services $0.00, one-time $6.75, T-Mobile total $46.75",
          "Page 2 summary: line-specific one-time/usage charge $6.75"
        ]
      },
      {
        "id": "6194503199",
        "name": "Unassigned",
        "line": "(619) 450-3199",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $0.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $0.00"
        ]
      }
    ],
    "needsReview": [
      {
        "item": "Account",
        "line": "Account",
        "amount": 167.0,
        "decision": "Unallocated: assign owner/split/ignore after review"
      },
      {
        "item": "Mobile Internet",
        "line": "(442) 354-4556",
        "amount": 55.0,
        "decision": "Unallocated: assign owner/split/ignore after review"
      },
      {
        "item": "Past due balance",
        "line": "Account",
        "amount": 10.24,
        "decision": "Do not allocate until payment history is known"
      }
    ]
  },
  {
    "id": "2025-07",
    "label": "July 2025",
    "issueDate": "Jul 14, 2025",
    "dueDate": "Aug 07, 2025",
    "currentCharges": 430.24,
    "pastDue": 0.0,
    "totalDue": 430.24,
    "basePerPerson": 46.4,
    "sourcePdf": "data/bills/DetailedBillJul2025.pdf",
    "people": [
      {
        "id": "4153163282",
        "name": "Fares",
        "line": "(415) 316-3282",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $0.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $0.00"
        ]
      },
      {
        "id": "4154254426",
        "name": "Hamza",
        "line": "(415) 425-4426",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $0.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $0.00"
        ]
      },
      {
        "id": "5107177163",
        "name": "Ali",
        "line": "(510) 717-7163",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 14.79,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $14.79, services $0.00, one-time $0.00, T-Mobile total $49.79",
          "Page 2 summary: line-specific equipment charge $14.79"
        ]
      },
      {
        "id": "8586665305",
        "name": "Nick",
        "line": "(858) 666-5305",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $35.00"
        ]
      },
      {
        "id": "4159904154",
        "name": "Kareem",
        "line": "(415) 990-4154",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 7.08,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $0.00, services $0.00, one-time $7.08, T-Mobile total $42.08",
          "Page 2 summary: line-specific one-time/usage charge $7.08"
        ]
      },
      {
        "id": "7604122708",
        "name": "Johannes",
        "line": "(760) 412-2708",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 21.45,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $21.45, services $0.00, one-time $0.00, T-Mobile total $56.45",
          "Page 2 summary: line-specific equipment charge $21.45"
        ]
      },
      {
        "id": "9174005616",
        "name": "Diana",
        "line": "(917) 400-5616",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 6.92,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $0.00, services $0.00, one-time $6.92, T-Mobile total $41.92",
          "Page 2 summary: line-specific one-time/usage charge $6.92"
        ]
      },
      {
        "id": "6194503199",
        "name": "Unassigned",
        "line": "(619) 450-3199",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $0.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $0.00"
        ]
      }
    ],
    "needsReview": [
      {
        "item": "Account",
        "line": "Account",
        "amount": 150.0,
        "decision": "Unallocated: assign owner/split/ignore after review"
      },
      {
        "item": "Mobile Internet",
        "line": "(442) 354-4556",
        "amount": 55.0,
        "decision": "Unallocated: assign owner/split/ignore after review"
      }
    ]
  },
  {
    "id": "2025-06",
    "label": "June 2025",
    "issueDate": "Jun 14, 2025",
    "dueDate": "Jul 07, 2025",
    "currentCharges": 515.82,
    "pastDue": 0.0,
    "totalDue": 515.82,
    "basePerPerson": 46.4,
    "sourcePdf": "data/bills/DetailedBillJun2025.pdf",
    "people": [
      {
        "id": "4153163282",
        "name": "Fares",
        "line": "(415) 316-3282",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $0.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $0.00"
        ]
      },
      {
        "id": "4154254426",
        "name": "Hamza",
        "line": "(415) 425-4426",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $0.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $0.00"
        ]
      },
      {
        "id": "5107177163",
        "name": "Ali",
        "line": "(510) 717-7163",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 14.79,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $14.79, services $0.00, one-time $0.00, T-Mobile total $49.79",
          "Page 2 summary: line-specific equipment charge $14.79"
        ]
      },
      {
        "id": "8586665305",
        "name": "Nick",
        "line": "(858) 666-5305",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $35.00"
        ]
      },
      {
        "id": "4159904154",
        "name": "Kareem",
        "line": "(415) 990-4154",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 57.59,
        "devicePayment": 16.9,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $16.90, services $0.00, one-time $57.59, T-Mobile total $109.49",
          "Page 2 summary: line-specific one-time/usage charge $57.59",
          "Page 2 summary: line-specific equipment charge $16.90"
        ]
      },
      {
        "id": "7604122708",
        "name": "Johannes",
        "line": "(760) 412-2708",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 21.45,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $21.45, services $0.00, one-time $0.00, T-Mobile total $56.45",
          "Page 2 summary: line-specific equipment charge $21.45"
        ]
      },
      {
        "id": "9174005616",
        "name": "Diana",
        "line": "(917) 400-5616",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 25.09,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $0.00, services $0.00, one-time $25.09, T-Mobile total $60.09",
          "Page 2 summary: line-specific one-time/usage charge $25.09"
        ]
      }
    ],
    "needsReview": [
      {
        "item": "Account",
        "line": "Account",
        "amount": 150.0,
        "decision": "Unallocated: assign owner/split/ignore after review"
      },
      {
        "item": "Mobile Internet",
        "line": "(442) 354-4556",
        "amount": 55.0,
        "decision": "Unallocated: assign owner/split/ignore after review"
      }
    ]
  },
  {
    "id": "2025-05",
    "label": "May 2025",
    "issueDate": "May 14, 2025",
    "dueDate": "Jun 07, 2025",
    "currentCharges": 437.19,
    "pastDue": 0.0,
    "totalDue": 437.19,
    "basePerPerson": 46.4,
    "sourcePdf": "data/bills/DetailedBillMay2025.pdf",
    "people": [
      {
        "id": "4153163282",
        "name": "Fares",
        "line": "(415) 316-3282",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $0.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $0.00"
        ]
      },
      {
        "id": "4154254426",
        "name": "Hamza",
        "line": "(415) 425-4426",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $0.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $0.00"
        ]
      },
      {
        "id": "5107177163",
        "name": "Ali",
        "line": "(510) 717-7163",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 14.79,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $14.79, services $0.00, one-time $0.00, T-Mobile total $49.79",
          "Page 2 summary: line-specific equipment charge $14.79"
        ]
      },
      {
        "id": "8586665305",
        "name": "Nick",
        "line": "(858) 666-5305",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $35.00"
        ]
      },
      {
        "id": "4159904154",
        "name": "Kareem",
        "line": "(415) 990-4154",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 3.15,
        "devicePayment": 16.9,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $16.90, services $0.00, one-time $3.15, T-Mobile total $55.05",
          "Page 2 summary: line-specific one-time/usage charge $3.15",
          "Page 2 summary: line-specific equipment charge $16.90"
        ]
      },
      {
        "id": "7604122708",
        "name": "Johannes",
        "line": "(760) 412-2708",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 21.45,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $21.45, services $0.00, one-time $0.00, T-Mobile total $56.45",
          "Page 2 summary: line-specific equipment charge $21.45"
        ]
      },
      {
        "id": "9174005616",
        "name": "Diana",
        "line": "(917) 400-5616",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 5.9,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $0.00, services $0.00, one-time $5.90, T-Mobile total $40.90",
          "Page 2 summary: line-specific one-time/usage charge $5.90"
        ]
      }
    ],
    "needsReview": [
      {
        "item": "Account",
        "line": "Account",
        "amount": 150.0,
        "decision": "Unallocated: assign owner/split/ignore after review"
      },
      {
        "item": "Mobile Internet",
        "line": "(442) 354-4556",
        "amount": 50.0,
        "decision": "Unallocated: assign owner/split/ignore after review"
      }
    ]
  },
  {
    "id": "2025-04",
    "label": "April 2025",
    "issueDate": "Apr 14, 2025",
    "dueDate": "May 07, 2025",
    "currentCharges": 432.11,
    "pastDue": 0.0,
    "totalDue": 432.11,
    "basePerPerson": 46.4,
    "sourcePdf": "data/bills/DetailedBillApr2025.pdf",
    "people": [
      {
        "id": "4153163282",
        "name": "Fares",
        "line": "(415) 316-3282",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $0.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $0.00"
        ]
      },
      {
        "id": "4154254426",
        "name": "Hamza",
        "line": "(415) 425-4426",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $0.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $0.00"
        ]
      },
      {
        "id": "5107177163",
        "name": "Ali",
        "line": "(510) 717-7163",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 14.79,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $14.79, services $0.00, one-time $0.00, T-Mobile total $49.79",
          "Page 2 summary: line-specific equipment charge $14.79"
        ]
      },
      {
        "id": "8586665305",
        "name": "Nick",
        "line": "(858) 666-5305",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $35.00"
        ]
      },
      {
        "id": "4159904154",
        "name": "Kareem",
        "line": "(415) 990-4154",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 16.9,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $16.90, services $0.00, one-time $0.00, T-Mobile total $51.90",
          "Page 2 summary: line-specific equipment charge $16.90"
        ]
      },
      {
        "id": "7604122708",
        "name": "Johannes",
        "line": "(760) 412-2708",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 3.44,
        "devicePayment": 21.45,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $21.45, services $0.00, one-time $3.44, T-Mobile total $59.89",
          "Page 2 summary: line-specific one-time/usage charge $3.44",
          "Page 2 summary: line-specific equipment charge $21.45"
        ]
      },
      {
        "id": "9174005616",
        "name": "Diana",
        "line": "(917) 400-5616",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.53,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $0.00, services $0.00, one-time $0.53, T-Mobile total $35.53",
          "Page 2 summary: line-specific one-time/usage charge $0.53"
        ]
      }
    ],
    "needsReview": [
      {
        "item": "Account",
        "line": "Account",
        "amount": 150.0,
        "decision": "Unallocated: assign owner/split/ignore after review"
      },
      {
        "item": "Mobile Internet",
        "line": "(442) 354-4556",
        "amount": 50.0,
        "decision": "Unallocated: assign owner/split/ignore after review"
      }
    ]
  },
  {
    "id": "2025-03",
    "label": "March 2025",
    "issueDate": "Mar 14, 2025",
    "dueDate": "Apr 07, 2025",
    "currentCharges": 431.58,
    "pastDue": 0.0,
    "totalDue": 431.58,
    "basePerPerson": 46.4,
    "sourcePdf": "data/bills/DetailedBillMar2025.pdf",
    "people": [
      {
        "id": "4153163282",
        "name": "Fares",
        "line": "(415) 316-3282",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $0.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $0.00"
        ]
      },
      {
        "id": "4154254426",
        "name": "Hamza",
        "line": "(415) 425-4426",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $0.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $0.00"
        ]
      },
      {
        "id": "5107177163",
        "name": "Ali",
        "line": "(510) 717-7163",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 14.79,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $14.79, services $0.00, one-time $0.00, T-Mobile total $49.79",
          "Page 2 summary: line-specific equipment charge $14.79"
        ]
      },
      {
        "id": "8586665305",
        "name": "Nick",
        "line": "(858) 666-5305",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $35.00"
        ]
      },
      {
        "id": "4159904154",
        "name": "Kareem",
        "line": "(415) 990-4154",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 16.9,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $16.90, services $0.00, one-time $0.00, T-Mobile total $51.90",
          "Page 2 summary: line-specific equipment charge $16.90"
        ]
      },
      {
        "id": "7604122708",
        "name": "Johannes",
        "line": "(760) 412-2708",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 3.44,
        "devicePayment": 21.45,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $21.45, services $0.00, one-time $3.44, T-Mobile total $59.89",
          "Page 2 summary: line-specific one-time/usage charge $3.44",
          "Page 2 summary: line-specific equipment charge $21.45"
        ]
      },
      {
        "id": "9174005616",
        "name": "Diana",
        "line": "(917) 400-5616",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $35.00"
        ]
      }
    ],
    "needsReview": [
      {
        "item": "Account",
        "line": "Account",
        "amount": 150.0,
        "decision": "Unallocated: assign owner/split/ignore after review"
      },
      {
        "item": "Mobile Internet",
        "line": "(442) 354-4556",
        "amount": 50.0,
        "decision": "Unallocated: assign owner/split/ignore after review"
      }
    ]
  },
  {
    "id": "2025-02",
    "label": "February 2025",
    "issueDate": "Feb 14, 2025",
    "dueDate": "Mar 07, 2025",
    "currentCharges": 431.35,
    "pastDue": 0.0,
    "totalDue": 431.35,
    "basePerPerson": 46.4,
    "sourcePdf": "data/bills/DetailedBillFeb2025.pdf",
    "people": [
      {
        "id": "4153163282",
        "name": "Fares",
        "line": "(415) 316-3282",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $0.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $0.00"
        ]
      },
      {
        "id": "4154254426",
        "name": "Hamza",
        "line": "(415) 425-4426",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $0.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $0.00"
        ]
      },
      {
        "id": "5107177163",
        "name": "Ali",
        "line": "(510) 717-7163",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 14.79,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $14.79, services $0.00, one-time $0.00, T-Mobile total $49.79",
          "Page 2 summary: line-specific equipment charge $14.79"
        ]
      },
      {
        "id": "8586665305",
        "name": "Nick",
        "line": "(858) 666-5305",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $35.00"
        ]
      },
      {
        "id": "4159904154",
        "name": "Kareem",
        "line": "(415) 990-4154",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 16.9,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $16.90, services $0.00, one-time $0.00, T-Mobile total $51.90",
          "Page 2 summary: line-specific equipment charge $16.90"
        ]
      },
      {
        "id": "7604122708",
        "name": "Johannes",
        "line": "(760) 412-2708",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 21.45,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $21.45, services $0.00, one-time $0.00, T-Mobile total $56.45",
          "Page 2 summary: line-specific equipment charge $21.45"
        ]
      },
      {
        "id": "9174005616",
        "name": "Diana",
        "line": "(917) 400-5616",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 3.21,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $0.00, services $0.00, one-time $3.21, T-Mobile total $38.21",
          "Page 2 summary: line-specific one-time/usage charge $3.21"
        ]
      }
    ],
    "needsReview": [
      {
        "item": "Account",
        "line": "Account",
        "amount": 150.0,
        "decision": "Unallocated: assign owner/split/ignore after review"
      },
      {
        "item": "Mobile Internet",
        "line": "(442) 354-4556",
        "amount": 50.0,
        "decision": "Unallocated: assign owner/split/ignore after review"
      }
    ]
  },
  {
    "id": "2025-01",
    "label": "January 2025",
    "issueDate": "Jan 14, 2025",
    "dueDate": "Feb 07, 2025",
    "currentCharges": 413.53,
    "pastDue": 0.0,
    "totalDue": 413.53,
    "basePerPerson": 46.4,
    "sourcePdf": "data/bills/DetailedBillJan2025.pdf",
    "people": [
      {
        "id": "4153163282",
        "name": "Fares",
        "line": "(415) 316-3282",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $0.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $0.00"
        ]
      },
      {
        "id": "4154254426",
        "name": "Hamza",
        "line": "(415) 425-4426",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $0.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $0.00"
        ]
      },
      {
        "id": "5107177163",
        "name": "Ali",
        "line": "(510) 717-7163",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 14.79,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $14.79, services $0.00, one-time $0.00, T-Mobile total $49.79",
          "Page 2 summary: line-specific equipment charge $14.79"
        ]
      },
      {
        "id": "8586665305",
        "name": "Nick",
        "line": "(858) 666-5305",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $35.00"
        ]
      },
      {
        "id": "4159904154",
        "name": "Kareem",
        "line": "(415) 990-4154",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $35.00"
        ]
      },
      {
        "id": "7604122708",
        "name": "Johannes",
        "line": "(760) 412-2708",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 2.29,
        "devicePayment": 21.45,
        "otherFees": 0.0,
        "note": "Base share plus line-specific extras from bill summary.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $21.45, services $0.00, one-time $2.29, T-Mobile total $58.74",
          "Page 2 summary: line-specific one-time/usage charge $2.29",
          "Page 2 summary: line-specific equipment charge $21.45"
        ]
      },
      {
        "id": "9174005616",
        "name": "Diana",
        "line": "(917) 400-5616",
        "type": "Voice",
        "base": 46.4,
        "internationalFees": 0.0,
        "devicePayment": 0.0,
        "otherFees": 0.0,
        "note": "No extra charge found on this bill.",
        "evidence": [
          "Page 2 summary: plan $35.00, equipment $0.00, services $0.00, one-time $0.00, T-Mobile total $35.00"
        ]
      }
    ],
    "needsReview": [
      {
        "item": "Account",
        "line": "Account",
        "amount": 150.0,
        "decision": "Unallocated: assign owner/split/ignore after review"
      },
      {
        "item": "Mobile Internet",
        "line": "(442) 354-4556",
        "amount": 50.0,
        "decision": "Unallocated: assign owner/split/ignore after review"
      }
    ]
  }
];

export const activeBill = bills[0];
export const bill = activeBill;
export const people = activeBill.people;
export const needsReview = activeBill.needsReview;

export function getPersonTotal(person: PersonBill) {
  return roundMoney(person.base + person.internationalFees + person.devicePayment + person.otherFees);
}

export function getManualAdjustmentTotal(billId: string, personId: string, adjustments: ManualAdjustment[]) {
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
  const rangeBills = getBillsInRange(allBills, startBillId, endBillId);
  const totals = rangeBills.reduce(
    (sum, billRecord) => {
      const person = billRecord.people.find((row) => row.id === personId);
      if (!person) return sum;

      const adjustmentTotal = getManualAdjustmentTotal(billRecord.id, personId, adjustments);

      return {
        billCount: sum.billCount + 1,
        base: sum.base + person.base,
        internationalFees: sum.internationalFees + person.internationalFees,
        devicePayment: sum.devicePayment + person.devicePayment,
        otherFees: sum.otherFees + person.otherFees,
        adjustments: sum.adjustments + adjustmentTotal,
      };
    },
    {
      billCount: 0,
      base: 0,
      internationalFees: 0,
      devicePayment: 0,
      otherFees: 0,
      adjustments: 0,
    },
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
    total: roundMoney(
      rounded.base +
        rounded.internationalFees +
        rounded.devicePayment +
        rounded.otherFees +
        rounded.adjustments,
    ),
  };
}

export function calculatePersonRangeTotal(
  allBills: BillRecord[],
  personId: string,
  startBillId: string,
  endBillId: string,
  adjustments: ManualAdjustment[] = [],
) {
  return roundMoney(
    getBillsInRange(allBills, startBillId, endBillId).reduce((sum, billRecord) => {
      const person = billRecord.people.find((row) => row.id === personId);
      return sum + (person ? calculatePersonTotalWithAdjustments(billRecord.id, person, adjustments) : 0);
    }, 0),
  );
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
