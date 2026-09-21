import type { StatItem } from '../types';

export const companyStats: StatItem[] = [
  {
    id: 'projects',
    value: 50,
    suffix: '+',
    label: 'Projects Delivered',
    iconName: 'CalendarCheck'
  },
  {
    id: 'clients',
    value: 30,
    suffix: '+',
    label: 'Happy Clients',
    iconName: 'Users'
  },
  {
    id: 'satisfaction',
    value: 99,
    suffix: '%',
    label: 'Client Satisfaction',
    iconName: 'ShieldCheck'
  },
  {
    id: 'support',
    value: 24,
    suffix: '/7',
    label: 'Support',
    iconName: 'Clock'
  }
];
