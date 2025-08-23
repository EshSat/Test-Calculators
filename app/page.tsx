import Script from 'next/script';
import AdPlaceholder from './(site)/components/AdPlaceholder';
import EMICalculator from './(site)/components/EMICalculator';
import FAQ from './(site)/components/FAQ';
import Guide from './(site)/components/Guide';

const faqs = [
  { q: 'What is EMI?', a: 'EMI (Equated Monthly Instalment) is a fixed payment amount made by a borrower to a lender at a specified date each calendar month.' },
  { q: 'How is EMI calculated?', a: 'EMI uses the formula P * r * (1+r)^n / ((1+r)^n - 1), where P is principal, r is monthly interest rate, and n is number of months.' },
  { q: 'Does prepayment reduce EMI or tenure?', a: 'You can usually choose either: keep EMI the same and reduce tenure, or reduce EMI while keeping the tenure similar—depending on lender rules.' },
  { q: 'What affects loan eligibility?', a: 'Credit score, income stability, debt-to-income ratio, and existing obligations typically affect eligibility and interest rates.' },
  { q: 'Fixed vs floating rates?', a: 'Fixed offers stable EMIs; floating can change with market rates—potentially lower or higher over time.' },
  { q: 'What is DTI?', a: 'DTI (Debt-to-Income) is your monthly debt payments divided by monthly income; lower DTI improves eligibility.' },
  { q: 'Are there penalties for prepayment?', a: 'Depends on lender and loan type; many home loans in India have low or no prepayment penalties, but check terms.' },
  { q: 'What documents are needed?', a: 'Commonly identity/address proof, income proofs (salary slips/ITR), bank statements, and property docs for home loans.' },
  { q: 'Is insurance mandatory with loans?', a: 'Not usually mandatory, but lenders may offer protection plans; evaluate cost vs benefit before opting.' },
  { q: 'Will this calculator give exact bank quotes?', a: 'No. This is an educational tool; actual offers vary by bank, borrower profile, and fees.' },
];

export default function Page() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(f => ({
      '@type': 'Question',
      'name': f.q,
      'acceptedAnswer': { '@type': 'Answer', 'text': f.a }
    }))
  };

  return (
    <main>
      <header className="border-b">
        <nav className="container py-3 flex items-center justify-between">
          <div className="text-base font-semibold">Finance Calculators India</div>
          <a href="#emi" className="text-sm underline">EMI</a>
        </nav>
        <div className="container py-6">
          <h1 className="text-2xl sm:text-4xl font-bold">EMI, Loan & Insurance Calculators (India)</h1>
          <p className="mt-2 text-gray-700 max-w-2xl">Fast, accurate and privacy-friendly tools to plan your loans and insurance. No signup. Works on mobile.</p>
        </div>
        <div className="container pb-4">
          {/* Leaderboard ad placeholder */}
          <AdPlaceholder id="leaderboard_top" className="w-full h-[90px]" />
        </div>
      </header>

      <EMICalculator />

      <section className="container my-10">
        {/* In-article ad placeholder */}
        <AdPlaceholder id="in_article_1" className="w-full h-[250px]" />
      </section>

      <Guide id="emi-guide" title="How EMI Works (with example)">
        <p><strong>Formula:</strong> EMI = P × r × (1+r)<sup>n</sup> / ((1+r)<sup>n</sup> − 1), where r is the monthly interest rate (annual/12/100) and n is the number of months.</p>
        <ul>
          <li>EMI stays constant (for fixed-rate loans) while the interest/principal mix shifts over time.</li>
          <li>Early prepayments save more interest than later ones.</li>
          <li>Processing fees and insurance add to effective cost—compare APR, not just rate.</li>
        </ul>
      </Guide>

      <FAQ items={faqs} />

      <footer className="mt-10 border-t">
        <div className="container py-6 grid gap-3 sm:grid-cols-2">
          <div className="text-sm text-gray-600">
            <p>Educational use only. Not financial advice.</p>
            <p className="mt-2">
              <a href="#" className="underline">Privacy Policy</a> · <a href="#" className="underline">Terms</a> · <a href="#" className="underline">Editorial Policy</a>
            </p>
          </div>
          <div className="space-y-2">
            {/* Footer ad placeholder */}
            <AdPlaceholder id="footer_banner" className="w-full h-[90px]" />
          </div>
        </div>
      </footer>

      <Script id="faq-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </main>
  );
}
