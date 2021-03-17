import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'WELCOME USER',
    group: true,
  },
  {
    title: 'Dashboard',
    icon: 'layout-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Reports Management',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  },
  {
    title: 'Inventory Management',
    icon: 'home-outline',
    link: '/main/inventory',
  },
];
