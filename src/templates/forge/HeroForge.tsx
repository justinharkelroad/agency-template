import { Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import config from '../../config';

/**
 * FORGE Hero — ELITE: Industrial-warm
 * Raw cream background with subtle texture feel
 * Wide architectural font style, burnt sienna accent
 * Exposed-grid aesthetic with visible thin structure lines
 * Blueprint-inspired layout
 */
export default function HeroForge() {
  return (
    <section
      className="relative overflow-hidden min-h-screen flex items-center"
      style={{ backgroundColor: '#F2EDE4' }}
    >
      {/* Blueprint grid lines */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'linear-gradient(#3D3D3D 1px, transparent 1px), linear-gradient(90deg, #3D3D3D 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
      {/* Diagonal accent line */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full opacity-[0.04]"
        style={{
          background: 'linear-gradient(135deg, transparent 40%, #C75B39 40%, #C75B39 40.5%, transparent 40.5%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left — Main Content */}
          <div className="lg:col-span-7">
            {/* Structural label */}
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-[1px]" style={{ backgroundColor: '#C75B39' }} />
              <span
                className="uppercase tracking-[4px] font-[family-name:var(--font-body)] font-medium text-xs"
                style={{ color: '#C75B39' }}
              >
                {config.agencyName}
              </span>
            </div>

            {/* Headline — wide architectural */}
            <h1
              className="font-[family-name:var(--font-heading)] font-bold mb-8 leading-[1.05] uppercase tracking-tight"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                color: '#3D3D3D',
              }}
            >
              Built Different.
              <br />
              <span style={{ color: '#C75B39' }}>Protected Better.</span>
            </h1>

            <p
              className="font-[family-name:var(--font-body)] text-lg mb-10 max-w-lg leading-relaxed"
              style={{ color: '#6B6B6B' }}
            >
              {config.tagline}. Forged through {config.yearsInBusiness} years of serving {config.address.city} — every policy we craft is built to last.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[var(--radius-btn)] font-[family-name:var(--font-body)] font-bold text-[1rem] uppercase tracking-wider transition-all duration-200 hover:scale-[1.02]"
                style={{
                  backgroundColor: '#C75B39',
                  color: '#FFF',
                }}
              >
                Get a Free Quote
                <ArrowRight size={18} />
              </Link>
              <a
                href={`tel:${config.phone}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[var(--radius-btn)] font-[family-name:var(--font-body)] font-semibold text-[1rem] transition-all duration-200 hover:bg-[#3D3D3D]/5"
                style={{
                  border: '1px solid #3D3D3D',
                  color: '#3D3D3D',
                }}
              >
                <Phone size={18} />
                {config.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Right — Structural info block */}
          <div className="lg:col-span-5">
            <div
              className="p-8 border"
              style={{ borderColor: 'rgba(61, 61, 61, 0.15)' }}
            >
              {/* Section label */}
              <span
                className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[3px] block mb-6"
                style={{ color: '#9CA3AF' }}
              >
                Coverage Blueprint
              </span>

              <div className="space-y-4">
                {(config.services || []).slice(0, 5).map((service, index) => (
                  <div
                    key={service.title}
                    className="flex items-center gap-4 pb-4"
                    style={{ borderBottom: index < Math.min(config.services.length, 5) - 1 ? '1px solid rgba(61, 61, 61, 0.1)' : 'none' }}
                  >
                    <span
                      className="font-[family-name:var(--font-heading)] text-sm"
                      style={{ color: '#C75B39' }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span
                      className="font-[family-name:var(--font-body)] font-medium"
                      style={{ color: '#3D3D3D' }}
                    >
                      {service.title}
                    </span>
                  </div>
                ))}
              </div>

              {/* Stats row */}
              <div
                className="mt-6 pt-6 grid grid-cols-2 gap-4"
                style={{ borderTop: '1px solid rgba(61, 61, 61, 0.15)' }}
              >
                <div>
                  <div
                    className="font-[family-name:var(--font-heading)] text-2xl font-bold"
                    style={{ color: '#3D3D3D' }}
                  >
                    {config.yearsInBusiness}+
                  </div>
                  <div
                    className="font-[family-name:var(--font-body)] text-xs uppercase tracking-wider mt-1"
                    style={{ color: '#9CA3AF' }}
                  >
                    Years Est.
                  </div>
                </div>
                <div>
                  <div
                    className="font-[family-name:var(--font-heading)] text-2xl font-bold"
                    style={{ color: '#3D3D3D' }}
                  >
                    A+
                  </div>
                  <div
                    className="font-[family-name:var(--font-body)] text-xs uppercase tracking-wider mt-1"
                    style={{ color: '#9CA3AF' }}
                  >
                    BBB Rating
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
