import { lazy } from 'react';
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

const DashBoardFinanceiro = Loadable(lazy(() => import('views/dashboard/Default/FinanceiroDashboard')));
const NovoAtendimento = Loadable(lazy(() => import('views/pages/authentication/Atendimentos/novoatendimento')))
const NovoCliente = Loadable(lazy(() => import('views/pages/authentication/Clientes/novocliente')))
const NovoColaborador = Loadable(lazy(() => import('views/pages/authentication/Colaborador/novoColaborador')))
const NovoServico = Loadable(lazy(() => import('views/pages/authentication/Servicos/novoservico')))


const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/dashboard',
      element: <DashBoardFinanceiro />
    },
    {
      path: '/novoatendimento',
      element: <NovoAtendimento />
    },
    {
      path: '/novocliente',
      element: <NovoCliente />
    },
    {
      path: '/novocolaborador',
      element: <NovoColaborador />
    },
    {
      path: '/novoservico',
      element: <NovoServico />
    }


  ]
};

export default MainRoutes;
