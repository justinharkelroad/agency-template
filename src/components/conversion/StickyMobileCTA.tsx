import { Phone, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import config from '../../config';

/**
 * Fixed bottom bar on mobile — always visible.
 * Two buttons: Call Now + Get a Quote.
 * This is the #1 conversion driver on mobile.
 */
export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-[var(--color-border)] shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <div className="grid grid-cols-2 divide-x divide-[var(--color-border)]">
        <a
          href={`tel:${config.phone}`}
          className="flex items-center justify-center gap-2 py-4 text-white bg-[var(--color-primary)] font-[family-name:var(--font-body)] font-semibold text-[0.95rem]"
        >
          <Phone size={20} />
          Call Now
        </a>
        <Link
          to="/contact"
          className="flex items-center justify-center gap-2 py-4 text-white bg-[var(--color-accent)] font-[family-name:var(--font-body)] font-semibold text-[0.95rem]"
        >
          <FileText size={20} />
          Free Quote
        </Link>
      </div>
    </div>
  );
}
