import { Car, Home, Heart, Building2, Key, Shield, Bike, Anchor, Truck, Droplets, Briefcase, Umbrella, type LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap: Record<string, LucideIcon> = {
  Car, Home, Heart, Building2, Key, Shield,
  Bike, Anchor, Truck, Droplets, Briefcase, Umbrella,
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const Icon = iconMap[icon];

  return (
    <div className="bg-white rounded-[var(--radius-card)] p-6 border border-[var(--color-border)] transition-all duration-200 hover:-translate-y-1 hover:shadow-lg group">
      <div className="w-12 h-12 rounded-[var(--radius-sm)] bg-[var(--color-primary-light)] flex items-center justify-center mb-4 transition-colors group-hover:bg-[var(--color-accent)]/10">
        {Icon && <Icon size={24} className="text-[var(--color-primary)] transition-colors group-hover:text-[var(--color-accent)]" />}
      </div>
      <h3 className="font-[family-name:var(--font-heading)] text-[1.25rem] text-[var(--color-text)] mb-2">
        {title}
      </h3>
      <p className="text-[var(--color-text-light)] text-[0.95rem] mb-4">
        {description}
      </p>
      <Link
        to="/contact"
        className="text-[var(--color-accent)] font-medium font-[family-name:var(--font-body)] hover:underline"
      >
        Get a Quote →
      </Link>
    </div>
  );
}
