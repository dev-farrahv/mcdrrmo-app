import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'WELCOME USER',
    group: true,
  },
  {
    title: 'Dashboard Analytics',
    icon: 'bar-chart-outline',
    link: '/main/dashboard',
    home: true,
  },
  {
    title: 'Reports Management',
    icon: 'file-text-outline',
    link: '/main/report',
  },
  {
    title: 'Inventory Management',
    icon: 'list-outline',
    link: '/main/inventory',
  },
  {
    title: 'Manage Users',
    icon: 'people-outline',
    link: '/main/manageusers',
  },
  {
    title: 'Locator',
    icon: 'map-outline',
    link: '/main/locator',
  },
  // {
  //   title: 'Login',
  //   link: '/auth/login',
  // },
];
