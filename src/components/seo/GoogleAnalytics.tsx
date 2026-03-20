import { useEffect } from 'react';
import config from '../../config';

export default function GoogleAnalytics() {
  const gaId = (config as any).gaMeasurementId;
  
  useEffect(() => {
    if (!gaId || gaId === 'null' || gaId === '') return;
    
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    script.async = true;
    document.head.appendChild(script);
    
    const initScript = document.createElement('script');
    initScript.textContent = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gaId}');
    `;
    document.head.appendChild(initScript);
    
    (window as any).gtag = function() {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push(arguments);
    };
  }, [gaId]);
  
  return null;
}