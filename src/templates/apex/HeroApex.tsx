import { Phone, ArrowRight, Shield, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import config from '../../config';

/**
 * APEX Hero — PREMIUM: Stripe-inspired
 * Split layout: bold headline left, inline quote form right
 * Deep indigo-to-teal gradient with glass card effect
 */
export default function HeroApex() {
  const stats = [
    { value: `${config.yearsInBusiness}+`, label: 'Years Serving', icon: Clock },
    { value: '2,000+', label: 'Families Protected', icon: Users },
    { value: 'A+', label: 'BBB Rated', icon: Shield },
  ];

  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #041525, #1a2a3a)',
        }}
      />
      {/* Teal radial accent */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(ellipse at 70% 50%, rgba(20, 184, 166, 0.3), transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full py-28 lg:py-0">
          {/* Left — Content */}
          <div className="animate-[fadeSlideUp_800ms_ease-out_both]">
            <span className="inline-block uppercase tracking-[3px] font-[family-name:var(--font-body)] font-semibold text-sm mb-4 text-teal-400">
              {config.agencyName}
            </span>
            <h1
              className="font-[family-name:var(--font-heading)] font-bold text-white mb-6 leading-[1.08]"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)' }}
            >
              Insurance that moves
              <span className="text-teal-400"> at your speed</span>
            </h1>
            <p className="font-[family-name:var(--font-body)] text-slate-300 text-lg mb-8 max-w-lg leading-relaxed">
              {config.tagline}. We combine {config.yearsInBusiness}+ years of local expertise with modern service to protect what matters most.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-teal-500 text-white px-7 py-4 rounded-full font-[family-name:var(--font-body)] font-semibold text-[1rem] transition-all duration-200 hover:bg-teal-400 hover:scale-[1.02] shadow-lg shadow-teal-500/25"
              >
                Get a Free Quote
                <ArrowRight size={18} />
              </Link>
              <a
                href={`tel:${config.phone}`}
                className="inline-flex items-center justify-center gap-2 border border-slate-500 text-slate-200 px-7 py-4 rounded-full font-[family-name:var(--font-body)] font-semibold text-[1rem] transition-all duration-200 hover:bg-white/5"
              >
                <Phone size={18} />
                {config.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Right — Glass Card */}
          <div className="animate-[fadeSlideUp_800ms_ease-out_200ms_both]">
            <div
              className="rounded-2xl p-8 md:p-10 border border-white/10"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
              }}
            >
              <h2 className="font-[family-name:var(--font-heading)] text-white text-2xl mb-2">
                Get Your Free Quote
              </h2>
              <p className="text-slate-400 font-[family-name:var(--font-body)] mb-6">
                In minutes, not days. Coverage from carriers you trust.
              </p>

              <div className="space-y-4 mb-6">
                {(config.services || []).slice(0, 4).map((service) => (
                  <div
                    key={service.title}
                    className="flex items-center gap-3 p-3 rounded-lg border border-white/10 hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <Shield size={18} className="text-teal-400 flex-shrink-0" />
                    <span className="text-white font-[family-name:var(--font-body)]">{service.title}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="block w-full text-center bg-teal-500 text-white py-4 rounded-xl font-[family-name:var(--font-body)] font-semibold transition-all duration-200 hover:bg-teal-400"
              >
                Start My Quote
              </Link>
              <p className="text-slate-500 text-xs text-center mt-3 font-[family-name:var(--font-body)]">
                No commitment required · Free consultation
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Counter Bar */}
      <div className="relative z-10 border-t border-white/10" style={{ background: 'rgba(255,255,255,0.03)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-white/10 py-6 md:py-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center px-2">
                <div className="font-[family-name:var(--font-heading)] text-white text-2xl md:text-3xl">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-xs md:text-sm mt-1 font-[family-name:var(--font-body)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
