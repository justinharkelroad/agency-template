import { useEffect } from 'react';
import config from '../../config';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default function GoogleAnalytics() {
  const gaId = (config as any).gaMeasurementId as string | undefined;
  const adsId = (config as any).googleAdsId as string | undefined;

  useEffect(() => {
    const hasGA = gaId && gaId !== '' && gaId !== 'null';
    const hasAds = adsId && adsId !== '' && adsId !== 'null';

    if (!hasGA && !hasAds) return;

    // Load gtag script with whichever ID we have
    const primaryId = hasGA ? gaId : adsId;
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${primaryId}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());

    // Configure GA4
    if (hasGA) {
      window.gtag('config', gaId);
    }

    // Configure Google Ads
    if (hasAds) {
      window.gtag('config', adsId);
    }
  }, [gaId, adsId]);

  return null;
}

/**
 * Fire a Google Ads conversion event.
 * Call this from onClick handlers on call buttons and form submissions.
 */
export function trackConversion(type: 'call' | 'form') {
  const adsId = (config as any).googleAdsId as string | undefined;
  const callLabel = (config as any).googleAdsCallLabel as string | undefined;
  const formLabel = (config as any).googleAdsFormLabel as string | undefined;

  if (typeof window.gtag !== 'function') return;

  // Always fire GA4 event
  window.gtag('event', 'conversion', {
    event_category: type === 'call' ? 'engagement' : 'lead',
    event_label: type === 'call' ? 'call_click' : 'quote_form_submit',
    value: 1,
  });

  // Fire Google Ads conversion if configured
  if (adsId) {
    const label = type === 'call' ? callLabel : formLabel;
    if (label) {
      window.gtag('event', 'conversion', {
        send_to: `${adsId}/${label}`,
      });
    }
  }
}
