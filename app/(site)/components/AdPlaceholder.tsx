'use client';
import React from 'react';

type Props = { id: string; className?: string; label?: string };

export default function AdPlaceholder({ id, className = '', label }: Props) {
  return (
    <div
      role="complementary"
      aria-label={label || `Advertisement placeholder ${id}`}
      data-ad-slot={id}
      className={`ad-box ${className}`}
      style={{ minHeight: 90 }}
    >
      AD SLOT: {id}
    </div>
  );
}
