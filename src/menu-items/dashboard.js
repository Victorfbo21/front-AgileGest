import { IconDashboard } from '@tabler/icons';

const icons = { IconDashboard };
const dashboard = {
  id: 'dashboard',
  title: 'DashBoard',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboardfinanceiro',
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
