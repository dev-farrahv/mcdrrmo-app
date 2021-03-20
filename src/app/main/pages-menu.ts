import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'WELCOME USER',
    group: true,
  },
  {
    title: 'Dashboard',
    icon: 'layout-outline',
    link: '/main/dashboard',
    home: true,
  },
  {
    title: 'Reports Management',
    icon: 'home-outline',
    link: '/main/report',
  },
  {
    title: 'Inventory Management',
    icon: 'home-outline',
    link: '/main/inventory',
  },
];
