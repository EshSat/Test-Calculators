'use client';
import React, { useMemo, useState } from 'react';
import { formatINR } from '../lib/formulas';

export default function InsuranceEstimator() {
  const [age, setAge] = useState(30);
  const [cover, setCover] = useState(5000000);
  const [term, setTerm] = useState(20);
  const [smoker, setSmoker] = useState(false);

  const basePerLakh = useMemo(() => {
    let b = 12; if (age > 35) b += (age - 35) * 0.8; if (smoker) b *= 1.5; return b;
  }, [age, smoker]);

  const premiumLow = useMemo(() => (cover / 100000) * basePerLakh, [cover, basePerLakh]);
  const premiumHigh = useMemo(() => premiumLow * 1.25, [premiumLow]);

  return (
    <section className="container my-8 grid gap-4 md:grid-cols-2 items-start">
      <div className="card p-5">
        <h3 className="text-xl font-semibold mb-2">Insurance Premium (Illustrative)</h3>
        <p className="text-sm text-slate-600 mb-4">Rough range. Not a quote.</p>
        <form className="space-y-3" onSubmit={e => e.preventDefault()}>
          <label className="block"><span className="text-sm font-medium">Age</span>
            <input type="number" min={18} max={65} className="mt-1 w-full rounded border px-3 py-2"
              value={age} onChange={e => setAge(Number(e.target.value))} /></label>
          <label className="block"><span className="text-sm font-medium">Sum Assured (₹)</span>
            <input type="number" min={1000000} step={500000} className="mt-1 w-full rounded border px-3 py-2"
              value={cover} onChange={e => setCover(Number(e.target.value))} /></label>
          <label className="block"><span className="text-sm font-medium">Term (years)</span>
            <input type="number" min={5} max={40} className="mt-1 w-full rounded border px-3 py-2"
              value={term} onChange={e => setTerm(Number(e.target.value))} /></label>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" checked={smoker} onChange={e => setSmoker(e.target.checked)} />
            <span className="text-sm">Smoker</span>
          </label>
        </form>
      </div>
      <div className="card p-5">
        <h4 className="text-lg font-semibold mb-2">Estimated Annual Premium</h4>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="rounded bg-slate-50 p-3"><div className="text-slate-600">Low</div>
            <div className="text-lg font-semibold">{formatINR(premiumLow)}</div></div>
          <div className="rounded bg-slate-50 p-3"><div className="text-slate-600">High</div>
            <div className="text-lg font-semibold">{formatINR(premiumHigh)}</div></div>
        </div>
        <p className="mt-4 text-xs text-slate-500">Illustrative only; varies by insurer, medicals, riders, underwriting.</p>
      </div>
    </section>
  );
}
