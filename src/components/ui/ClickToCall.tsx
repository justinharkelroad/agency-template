import { Phone } from 'lucide-react';
import config from '../../config';

interface ClickToCallProps {
  variant: 'button' | 'floating';
}

export default function ClickToCall({ variant }: ClickToCallProps) {
  if (variant === 'floating') {
    return (
      <a
        href={`tel:${config.phone}`}
        className="fixed bottom-6 right-6 z-40 md:hidden flex items-center justify-center w-[60px] h-[60px] rounded-full bg-[var(--color-accent)] text-white shadow-lg animate-pulse [animation-iteration-count:2]"
        aria-label={`Call ${config.agencyName}`}
      >
        <Phone size={28} />
      </a>
    );
  }

  return (
    <a
      href={`tel:${config.phone}`}
      className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white rounded-full px-4 py-2 font-[family-name:var(--font-body)] font-semibold transition-all duration-200 hover:bg-[var(--color-accent-hover)]"
    >
      <Phone size={18} />
      <span className="hidden md:inline">{config.phoneDisplay}</span>
    </a>
  );
}
