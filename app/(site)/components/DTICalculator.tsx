'use client';
import React, { useMemo, useState } from 'react';

export default function DTICalculator() {
  const [income, setIncome] = useState(100000);
  const [debt, setDebt] = useState(30000);

  const dti = useMemo(() => (income > 0 ? (debt / income) * 100 : 0), [income, debt]);
  const getStatusColor = (dti: number) => {
    if (dti < 35) return 'result-card result-success';
    if (dti < 45) return 'result-card result-warning';
    return 'result-card result-warning bg-gradient-to-br from-red-500 to-rose-600';
  };

  return (
    <section className="grid gap-8 lg:grid-cols-2 items-start">
      <div className="card-soft p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800">DTI Calculator</h3>
            <p className="text-sm text-slate-600">Debt-to-Income ratio analysis</p>
          </div>
        </div>
        <form className="space-y-6" onSubmit={e => e.preventDefault()}>
          <label className="block">
            <span className="text-sm font-semibold text-slate-700 mb-2 block">Monthly Income (₹)</span>
            <input type="number" min={0} className="input-field" placeholder="Enter monthly income"
              value={income} onChange={e => setIncome(Number(e.target.value))} />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-slate-700 mb-2 block">Monthly Debt Payments (₹)</span>
            <input type="number" min={0} className="input-field" placeholder="Enter debt payments"
              value={debt} onChange={e => setDebt(Number(e.target.value))} />
          </label>
        </form>
      </div>

      <div className="card-soft p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h4 className="text-xl font-bold text-slate-800">Your DTI Result</h4>
            <p className="text-sm text-slate-600">Debt-to-income analysis</p>
          </div>
        </div>
        
        <div className={`${getStatusColor(dti)} mb-6`}>
          <div className="text-white/80 text-sm font-medium">Debt-to-Income Ratio</div>
          <div className="text-3xl font-bold text-white">{dti.toFixed(1)}%</div>
        </div>
        
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-green-50 border border-green-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="font-semibold text-green-800">Excellent (< 35%)</span>
            </div>
            <p className="text-sm text-green-700">Generally comfortable for lenders, good eligibility</p>
          </div>
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <span className="font-semibold text-amber-800">Borderline (35-45%)</span>
            </div>
            <p className="text-sm text-amber-700">Consider improving before applying for new credit</p>
          </div>
          <div className="p-4 rounded-xl bg-red-50 border border-red-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span className="font-semibold text-red-800">High (> 45%)</span>
            </div>
            <p className="text-sm text-red-700">Reduce debt to improve loan eligibility</p>
          </div>
        </div>
      </div>
    </section>
  )
  );
}
