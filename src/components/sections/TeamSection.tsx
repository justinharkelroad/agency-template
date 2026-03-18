import config from '../../config';
import TeamCard from '../ui/TeamCard';

export default function TeamSection() {
  const colClass =
    config.team.length <= 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3';

  return (
    <section className="py-[var(--section-padding)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="uppercase text-[var(--color-accent)] tracking-[3px] font-[family-name:var(--font-body)] font-semibold text-sm">
            Our Team
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-[var(--color-text)] mt-3">
            Meet the People Behind Your Policies
          </h2>
        </div>
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 ${colClass} gap-8 max-w-4xl mx-auto`}
        >
          {config.team.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
