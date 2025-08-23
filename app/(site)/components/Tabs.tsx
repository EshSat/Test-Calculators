'use client';
import React from 'react';

type Tab = { id: string; label: string };
export default function Tabs({
  tabs, activeId, onChange,
}: { tabs: Tab[]; activeId: string; onChange: (id: string) => void; }) {
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const idx = tabs.findIndex(t => t.id === activeId);
    if (e.key === 'ArrowRight') onChange(tabs[(idx + 1) % tabs.length].id);
    if (e.key === 'ArrowLeft') onChange(tabs[(idx - 1 + tabs.length) % tabs.length].id);
    if (e.key === 'Home') onChange(tabs[0].id);
    if (e.key === 'End') onChange(tabs[tabs.length - 1].id);
  };
  return (
    <div className="tabs" role="navigation" aria-label="Section Tabs">
      <div role="tablist" aria-orientation="horizontal" className="tablist" onKeyDown={onKeyDown}>
        {tabs.map(t => (
          <button
            key={t.id}
            role="tab"
            aria-selected={t.id === activeId}
            aria-controls={`panel-${t.id}`}
            id={`tab-${t.id}`}
            className="tab"
            onClick={() => onChange(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
}
