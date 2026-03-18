import { useState } from 'react';
import type { TeamMember } from '../../config';

export default function TeamCard({ name, title, bio, image }: TeamMember) {
  const [imgError, setImgError] = useState(false);

  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <div className="bg-white rounded-[var(--radius-card)] overflow-hidden shadow-sm">
      <div className="aspect-[3/4] overflow-hidden relative bg-[var(--color-surface)]">
        {imgError ? (
          <div className="w-full h-full flex items-center justify-center bg-[var(--color-primary-light)]">
            <span className="text-4xl font-semibold text-[var(--color-primary)]">
              {initials}
            </span>
          </div>
        ) : (
          <img
            src={image}
            alt={`${name}, ${title}`}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <div className="p-6">
        <h3 className="font-[family-name:var(--font-heading)] text-[1.25rem] text-[var(--color-text)]">
          {name}
        </h3>
        <p className="text-[var(--color-accent)] font-[family-name:var(--font-body)] font-medium text-[0.875rem] uppercase tracking-wide">
          {title}
        </p>
        <p className="text-[var(--color-text-light)] text-[0.95rem] mt-3">
          {bio}
        </p>
      </div>
    </div>
  );
}
