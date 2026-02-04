
import { BentoItem, CaseStudy } from './types';

export const COLORS = {
  base: '#0F0F0F',
  accent: '#D97706',
  text: '#F8F9FA',
  muted: '#9CA3AF',
};

export const BENTO_ITEMS: BentoItem[] = [
  {
    id: 'event-hub',
    title: 'Event-Hub',
    description: 'Mobile Bars & Brand-Showrooms für maximale Präsenz.',
    image: 'https://images.unsplash.com/photo-1544207603-5143407e3518?auto=format&fit=crop&q=80&w=800',
    gridClass: 'md:col-span-2 md:row-span-2',
    label: '[ CATEGORY: EVENT ]'
  },
  {
    id: 'business-modul',
    title: 'Business-Modul',
    description: 'Premium Office-Container & kollaborative Workspaces.',
    image: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80&w=800',
    gridClass: 'md:col-span-1 md:row-span-1',
    label: '[ CATEGORY: OFFICE ]'
  },
  {
    id: 'base-unit',
    title: 'Base-Unit',
    description: '"Nudie" Container für DIY-Transformations-Enthusiasten.',
    image: 'https://images.unsplash.com/photo-1512412086111-f2f281f66085?auto=format&fit=crop&q=80&w=800',
    gridClass: 'md:col-span-1 md:row-span-2',
    label: '[ CATEGORY: RAW_MODULE ]'
  },
  {
    id: 'mobility-partner',
    title: 'Mobility Partner',
    description: 'Professionelle SARIS Trailer-Konfigurationen.',
    image: 'https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&q=80&w=800',
    gridClass: 'md:col-span-1 md:row-span-1',
    label: '[ CATEGORY: MOBILITY ]'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'rooftop-gin-bar',
    title: 'The Rooftop Gin Bar',
    problem: 'Ein Kunde suchte nach einer wetterfesten, transportablen Bar-Lösung für exklusive Rooftop-Events, die Luxus ausstrahlt.',
    solution: 'Ein 20ft Seecontainer wurde mit vollautomatischer Hydraulik-Front, integriertem Kühlsystem und massiven Eichenholz-Akzenten transformiert.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200',
    specs: ['[CONFIG: CUSTOM_HYDRAULICS]', '[TYPE: 20FT GASTRO]', '[POWER: INTEGRATED_SMART_GRID]']
  }
];
