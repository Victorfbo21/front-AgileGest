import { lazy } from 'react';
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

const DashBoardFinanceiro = Loadable(lazy(() => import('views/dashboard/Default/FinanceiroDashboard')));
const NovoAtendimento = Loadable(lazy(() => import('views/pages/authentication/Atendimentos/novoatendimento')))
const NovoCliente = Loadable(lazy(() => import('views/pages/authentication/Clientes/novocliente')))

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashBoardFinanceiro />
    },
    {
      path: '/novoatendimento',
      element: <NovoAtendimento />
    },
    {
      path: '/novocliente',
      element: <NovoCliente />
    }

  ]
};

export default MainRoutes;
