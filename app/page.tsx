'use client';
import Script from 'next/script';
import { useMemo, useState } from 'react';
import AdPlaceholder from './(site)/components/AdPlaceholder';
import EMICalculator from './(site)/components/EMICalculator';
import InsuranceEstimator from './(site)/components/InsuranceEstimator';
import DTICalculator from './(site)/components/DTICalculator';
import Tabs from './(site)/components/Tabs';

const faqs = [
  { q: 'What is EMI?', a: 'EMI is a fixed monthly payment comprising interest and principal.' },
  { q: 'How is EMI calculated?', a: 'EMI = P*r*(1+r)^n / ((1+r)^n - 1); r=annual/12/100; n=months.' },
  { q: 'Prepayment: reduce EMI or tenure?', a: 'Most lenders allow either—reducing tenure saves more interest overall.' },
  { q: 'Fixed vs floating rate?', a: 'Fixed = stable EMIs; Floating varies with benchmark rates.' },
  { q: 'What is DTI?', a: 'Debt-to-Income: monthly debt / monthly income × 100.' },
  { q: 'Does credit score change interest rate?', a: 'Yes, better scores usually get lower rates and higher eligibility.' },
  { q: 'Typical loan fees?', a: 'Processing, legal/valuation, insurance, prepayment/foreclosure (varies by lender).' },
  { q: 'Is insurance mandatory?', a: 'Not mandatory; evaluate cost-benefit; never link mandatory insurance to loan approval.' },
  { q: 'Are calculator results exact quotes?', a: 'No—illustrative estimates. Banks/insurers provide final offers.' },
  { q: 'What is LTV?', a: 'Loan-to-Value: loan amount as % of asset value (e.g., property).' },
  { q: 'How to improve credit score quickly?', a: 'On-time payments, reduce utilization <30%, avoid new debt, correct report errors.' },
];

export default function Page() {
  const [active, setActive] = useState<'calc'|'ins'|'cs'|'tips'|'faq'>('calc');

  const faqJsonLd = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    })),
  }), []);

  const tips = [
    'Prepay early to save interest; even small amounts help.',
    'Compare APR, not just flat interest rate.',
    'Keep DTI under ~35–40% for better eligibility.',
    'Maintain credit utilization under 30% of limits.',
    'Avoid frequent new credit lines; space out applications.',
    'Build a 6–12 month emergency fund.',
    'Read foreclosure and part-prepayment terms carefully.',
    'Check credit report for errors and dispute promptly.',
  ];

  const tabs = [
    { id: 'calc', label: 'Calculators' },
    { id: 'ins',  label: 'Insurance' },
    { id: 'cs',   label: 'Credit Score' },
    { id: 'tips', label: 'Tips' },
    { id: 'faq',  label: 'FAQ' },
  ];

  return (
    <main>
      {/* Header / Hero */}
      <header className="border-b">
        <div className="container py-6">
          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-base font-semibold">Finance Calculators India</div>
                <h1 className="h1 mt-2">EMI, Loan & Insurance Calculators</h1>
                <p className="lead mt-2">Fast, accurate & privacy-friendly tools for India. No signup. Mobile-first.</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 sm:flex gap-2">
              <a className="tab" onClick={() => setActive('calc')}>Open Calculators</a>
              <a className="tab" onClick={() => setActive('faq')}>See FAQs</a>
            </div>
          </div>
        </div>
        <div className="container pb-4">
          <AdPlaceholder id="leaderboard_top" className="w-full h-[90px] md:h-[90px]" />
        </div>
      </header>

      {/* Sticky Tabs */}
      <Tabs tabs={tabs} activeId={active} onChange={(id) => setActive(id as any)} />

      {/* Main panels */}
      <section className="container grid gap-6 my-6 md:grid-cols-[1fr_300px]">
        <div id={`panel-${active}`} role="tabpanel" aria-labelledby={`tab-${active}`} className="space-y-6">
          {active === 'calc' && (
            <>
              <div className="card p-5">
                <EMICalculator />
              </div>
              <AdPlaceholder id="in_article_1" className="w-full h-[250px]" />
              <div className="card p-5">
                <h5 className="text-sm font-semibold mb-2">What to watch for</h5>
                <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                  <li>Compare APR (includes fees) not just nominal rate.</li>
                  <li>Floating vs fixed impacts EMI behavior.</li>
                  <li>Prepayments early in tenure save more interest.</li>
                </ul>
              </div>
            </>
          )}

          {active === 'ins' && (
            <div className="card p-5">
              <InsuranceEstimator />
            </div>
          )}

          {active === 'cs' && (
            <div className="space-y-6">
              <div className="card p-5">
                <h3 className="text-xl font-semibold mb-2">Improve Your Credit Profile</h3>
                <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                  <li>Pay on time—set auto-debits; remove late fees fast.</li>
                  <li>Keep utilization &lt;30% of total credit limits.</li>
                  <li>Avoid frequent new credit; maintain account age.</li>
                  <li>Dispute report errors with bureaus (CIBIL, Experian).</li>
                  <li>Maintain 6–12 months of emergency savings.</li>
                </ul>
              </div>
              <div className="card p-5">
                <DTICalculator />
              </div>
            </div>
          )}

          {active === 'tips' && (
            <div className="grid sm:grid-cols-2 gap-4">
              {tips.map((t, i) => (
                <div key={i} className="card-soft p-4 hover:shadow-md transition">{t}</div>
              ))}
            </div>
          )}

          {active === 'faq' && (
            <div className="card p-5">
              <h2 className="text-2xl font-semibold mb-3">FAQs</h2>
              <div className="space-y-3">
                {faqs.map((f, i) => (
                  <details key={i} className="border rounded-lg p-4">
                    <summary className="font-medium cursor-pointer">{f.q}</summary>
                    <div className="mt-2 text-sm leading-6 text-slate-700">{f.a}</div>
                  </details>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar ad on desktop */}
        <aside className="hidden md:block">
          <div className="sticky top-24">
            <AdPlaceholder id="sidebar_box" className="w-full h-[600px]" />
          </div>
        </aside>
      </section>

      {/* Footer */}
      <footer className="mt-10 border-t">
        <div className="container py-6 grid gap-3 sm:grid-cols-2">
          <div className="text-sm text-slate-600">
            <p>Educational use only. Not financial advice.</p>
            <p className="mt-2">
              <a href="#" className="underline">Privacy Policy</a> · <a href="#" className="underline">Terms</a> · <a href="#" className="underline">Editorial Policy</a>
            </p>
          </div>
          <div className="space-y-2">
            <AdPlaceholder id="footer_banner" className="w-full h-[90px]" />
          </div>
        </div>
      </footer>

      {/* FAQ schema */}
      <Script id="faq-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </main>
  );
}
