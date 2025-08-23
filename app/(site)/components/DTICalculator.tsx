'use client';
import React, { useMemo, useState } from 'react';

export default function DTICalculator() {
  const [income, setIncome] = useState(100000);
  const [debt, setDebt] = useState(30000);
  const dti = useMemo(() => (income > 0 ? (debt / income) * 100 : 0), [income, debt]);
  const color = dti < 35 ? 'bg-emerald-100 text-emerald-800' : dti < 45 ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800';

  return (
    <section className="container my-8 grid gap-4 md:grid-cols-2 items-start">
      <div className="card p-5">
        <h3 className="text-xl font-semibold mb-2">DTI Helper</h3>
        <p className="text-sm text-slate-600 mb-4">Debt-to-Income ratio (monthly).</p>
        <form className="space-y-3" onSubmit={e => e.preventDefault()}>
          <label className="block"><span className="text-sm font-medium">Monthly Income (₹)</span>
            <input type="number" min={0} className="mt-1 w-full rounded border px-3 py-2"
              value={income} onChange={e => setIncome(Number(e.target.value))} /></label>
          <label className="block"><span className="text-sm font-medium">Monthly Debt Payments (₹)</span>
            <input type="number" min={0} className="mt-1 w-full rounded border px-3 py-2"
              value={debt} onChange={e => setDebt(Number(e.target.value))} /></label>
        </form>
      </div>
      <div className="card p-5">
        <h4 className="text-lg font-semibold mb-2">Result</h4>
        <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm ${color}`}>
          <span>DTI:</span><strong>{dti.toFixed(1)}%</strong>
        </div>
        <ul className="mt-4 text-sm text-slate-700 list-disc pl-5 space-y-1">
          <li>&lt;35%: Generally comfortable for lenders</li>
          <li>35–45%: Borderline—improve before new credit</li>
          <li>&gt;45%: High—reduce debt to improve eligibility</li>
        </ul>
      </div>
    </section>
  );
}
