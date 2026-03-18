import type { ComponentType } from 'react';
import type { TemplateName } from '../config';

import HeroHeritage from './heritage/HeroHeritage';
import HeroMomentum from './momentum/HeroMomentum';
import HeroPrestige from './prestige/HeroPrestige';

export interface TemplateComponents {
  Hero: ComponentType;
}

const templates: Record<TemplateName, TemplateComponents> = {
  heritage: {
    Hero: HeroHeritage,
  },
  momentum: {
    Hero: HeroMomentum,
  },
  prestige: {
    Hero: HeroPrestige,
  },
};

export function getTemplate(name: TemplateName): TemplateComponents {
  return templates[name];
}
