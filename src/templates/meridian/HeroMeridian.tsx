import { Phone, ArrowRight, Shield, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import config from '../../config';

/**
 * MERIDIAN Hero — ELITE: Futuristic
 * Deep space navy background, electric cyan glowing accents
 * Dashboard-style stats widget, glassmorphism card effects
 * Warm white text, futuristic aesthetic
 */
export default function HeroMeridian() {
  const dashboardStats = [
    { label: 'Protected Assets', value: '$50M+', icon: Shield },
    { label: 'Active Policies', value: '2,000+', icon: TrendingUp },
    { label: 'Families Covered', value: '1,500+', icon: Users },
  ];

  return (
    <section
      className="relative overflow-hidden min-h-screen flex items-center"
      style={{ backgroundColor: '#0B1426' }}
    >
      {/* Cyan glow accents */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 20% 50%, rgba(6, 182, 212, 0.12), transparent 50%), radial-gradient(ellipse at 80% 30%, rgba(6, 182, 212, 0.08), transparent 40%)',
        }}
      />
      {/* Subtle dot matrix */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(rgba(6, 182, 212, 0.8) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Content */}
          <div className="animate-[fadeSlideUp_800ms_ease-out_both]">
            {/* Glowing badge */}
            <div
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full"
              style={{
                border: '1px solid rgba(6, 182, 212, 0.3)',
                background: 'rgba(6, 182, 212, 0.08)',
              }}
            >
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: '#06B6D4', boxShadow: '0 0 8px rgba(6, 182, 212, 0.6)' }}
              />
              <span
                className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[3px]"
                style={{ color: '#06B6D4' }}
              >
                {config.agencyName}
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-[family-name:var(--font-heading)] font-bold mb-6 leading-[1.08]"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
                color: '#FAF5FF',
              }}
            >
              The Future of Insurance
              <span style={{ color: '#06B6D4' }}> is Personal</span>
            </h1>

            <p
              className="font-[family-name:var(--font-body)] text-lg mb-10 max-w-lg leading-relaxed"
              style={{ color: 'rgba(250, 245, 255, 0.6)' }}
            >
              {config.tagline}. Smart coverage powered by {config.yearsInBusiness} years of experience in {config.address.city} — tailored precisely to your life.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-[family-name:var(--font-body)] font-semibold text-[1rem] transition-all duration-200 hover:scale-[1.02]"
                style={{
                  backgroundColor: '#06B6D4',
                  color: '#0B1426',
                  boxShadow: '0 0 25px rgba(6, 182, 212, 0.3)',
                }}
              >
                Get a Free Quote
                <ArrowRight size={18} />
              </Link>
              <a
                href={`tel:${config.phone}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-[family-name:var(--font-body)] font-semibold text-[1rem] transition-all duration-200 hover:bg-white/5"
                style={{
                  border: '1px solid rgba(250, 245, 255, 0.15)',
                  color: 'rgba(250, 245, 255, 0.8)',
                }}
              >
                <Phone size={18} />
                {config.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Right — Dashboard Stats Widget */}
          <div className="animate-[fadeSlideUp_800ms_ease-out_200ms_both]">
            <div
              className="rounded-2xl p-8 border"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderColor: 'rgba(6, 182, 212, 0.15)',
              }}
            >
              {/* Widget header */}
              <div className="flex items-center justify-between mb-8">
                <span
                  className="font-[family-name:var(--font-body)] text-sm uppercase tracking-[2px]"
                  style={{ color: 'rgba(250, 245, 255, 0.4)' }}
                >
                  Agency Dashboard
                </span>
                <div className="flex items-center gap-1.5">
                  <div
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: '#06B6D4' }}
                  />
                  <span
                    className="font-[family-name:var(--font-body)] text-xs"
                    style={{ color: '#06B6D4' }}
                  >
                    Live
                  </span>
                </div>
              </div>

              {/* Stats cards */}
              <div className="space-y-4">
                {dashboardStats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="flex items-center justify-between p-4 rounded-xl"
                      style={{
                        background: 'rgba(6, 182, 212, 0.05)',
                        border: '1px solid rgba(6, 182, 212, 0.1)',
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={18} style={{ color: '#06B6D4' }} />
                        <span
                          className="font-[family-name:var(--font-body)] text-sm"
                          style={{ color: 'rgba(250, 245, 255, 0.6)' }}
                        >
                          {stat.label}
                        </span>
                      </div>
                      <span
                        className="font-[family-name:var(--font-heading)] text-xl font-bold"
                        style={{ color: '#FAF5FF' }}
                      >
                        {stat.value}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Service list */}
              <div
                className="mt-6 pt-6"
                style={{ borderTop: '1px solid rgba(6, 182, 212, 0.1)' }}
              >
                <span
                  className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[2px] block mb-3"
                  style={{ color: 'rgba(250, 245, 255, 0.3)' }}
                >
                  Coverage Lines
                </span>
                <div className="flex flex-wrap gap-2">
                  {(config.services || []).slice(0, 4).map((service) => (
                    <span
                      key={service.title}
                      className="inline-flex px-3 py-1 rounded-full font-[family-name:var(--font-body)] text-xs"
                      style={{
                        border: '1px solid rgba(6, 182, 212, 0.2)',
                        color: '#06B6D4',
                      }}
                    >
                      {service.title}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
