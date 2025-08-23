'use client';
import React, { useMemo, useState } from 'react';
import { emiAmount, formatINR } from '../lib/formulas';

export default function EMICalculator() {
  const [p, setP] = useState(1500000);
  const [rate, setRate] = useState(9.0);
  const [years, setYears] = useState(5);

  const months = useMemo(() => years * 12, [years]);
  const emi = useMemo(() => emiAmount(p, rate, months), [p, rate, months]);
  const totalPayment = useMemo(() => emi * months, [emi, months]);
  const totalInterest = useMemo(() => totalPayment - p, [totalPayment, p]);

  return (
    <section id="emi" className="container my-8">
      <div className="grid gap-4 md:grid-cols-2 items-start">
        <div className="border rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">EMI Calculator</h3>
          <p className="text-sm text-gray-600 mb-4">Compute monthly EMI, total interest, and total payment.</p>
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <label className="block">
              <span className="text-sm font-medium">Loan Amount (₹)</span>
              <input
                type="number"
                min={10000}
                className="mt-1 w-full rounded border px-3 py-2"
                value={p}
                onChange={(e) => setP(Number(e.target.value))}
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium">Annual Interest Rate (%)</span>
              <input
                type="number"
                step="0.1"
                min={0}
                className="mt-1 w-full rounded border px-3 py-2"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium">Tenure (years)</span>
              <input
                type="number"
                min={1}
                className="mt-1 w-full rounded border px-3 py-2"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
              />
            </label>
          </form>
        </div>

        <div className="border rounded-lg p-4">
          <h4 className="text-lg font-semibold mb-2">Results</h4>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="rounded bg-gray-50 p-3">
              <div className="text-gray-600">Monthly EMI</div>
              <div className="text-lg font-semibold">{formatINR(emi)}</div>
            </div>
            <div className="rounded bg-gray-50 p-3">
              <div className="text-gray-600">Total Interest</div>
              <div className="text-lg font-semibold">{formatINR(totalInterest)}</div>
            </div>
            <div className="rounded bg-gray-50 p-3">
              <div className="text-gray-600">Total Payment</div>
              <div className="text-lg font-semibold">{formatINR(totalPayment)}</div>
            </div>
            <div className="rounded bg-gray-50 p-3">
              <div className="text-gray-600">Tenure (months)</div>
              <div className="text-lg font-semibold">{months}</div>
            </div>
          </div>

          <div className="mt-4 text-xs text-gray-500">
            Formula: EMI = P × r × (1+r)^n / ((1+r)^n − 1), where r = annualRate/12/100 and n = months.
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h5 className="text-sm font-semibold mb-2">What to watch for</h5>
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
          <li>Check processing fees and prepayment penalties that affect effective cost.</li>
          <li>Floating vs fixed rates can change EMI over time.</li>
          <li>Prepayments early in tenure save more interest.</li>
        </ul>
      </div>
    </section>
  );
}
