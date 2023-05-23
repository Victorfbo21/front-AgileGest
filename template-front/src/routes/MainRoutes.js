import { lazy } from 'react';
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default/FinanceiroDashboard')));
const DashBoardFinanceiro = Loadable(lazy(() => import('views/dashboard/Default/FinanceiroDashboard')));

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashBoardFinanceiro />
    },
    
  ]
};

export default MainRoutes;
