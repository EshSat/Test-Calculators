import React from 'react';

export default function Guide({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <article id={id} className="container my-10">
      <h2 className="text-2xl font-semibold mb-3">{title}</h2>
      <div className="prose max-w-none prose-sm sm:prose">{children}</div>
    </article>
  );
}
