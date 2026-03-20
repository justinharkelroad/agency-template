import type { ComponentType } from 'react';
import type { TemplateName } from '../config';

import HeroHeritage from './heritage/HeroHeritage';
import HeroMomentum from './momentum/HeroMomentum';
import HeroPrestige from './prestige/HeroPrestige';
import HeroApex from './apex/HeroApex';
import HeroCornerstone from './cornerstone/HeroCornerstone';
import HeroSummit from './summit/HeroSummit';
import HeroVanguard from './vanguard/HeroVanguard';
import HeroForge from './forge/HeroForge';
import HeroMeridian from './meridian/HeroMeridian';

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
  apex: {
    Hero: HeroApex,
  },
  cornerstone: {
    Hero: HeroCornerstone,
  },
  summit: {
    Hero: HeroSummit,
  },
  vanguard: {
    Hero: HeroVanguard,
  },
  forge: {
    Hero: HeroForge,
  },
  meridian: {
    Hero: HeroMeridian,
  },
};

export function getTemplate(name: TemplateName): TemplateComponents {
  return templates[name];
}
