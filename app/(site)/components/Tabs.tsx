'use client';
import React from 'react';

type TabProps = {
  tabs: { id: string; label: string }[];
  activeId: string;
  onChange: (id: string) => void;
};

export default function Tabs({ tabs, activeId, onChange }: TabProps) {
  return (
    <nav className="sticky top-0 bg-white z-10 border-b">
      <div className="container flex space-x-4 py-3 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeId === tab.id ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => onChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
}