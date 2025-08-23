'use client';
import React from 'react';

export default function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <section id="faqs" className="container my-10">
      <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
      <div className="space-y-4">
        {items.map((it, i) => (
          <details key={i} className="border rounded-lg p-4">
            <summary className="font-medium cursor-pointer">{it.q}</summary>
            <div className="mt-2 text-sm leading-6 text-gray-700">{it.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
