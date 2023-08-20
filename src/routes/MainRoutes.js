import { lazy } from 'react';
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

const DashBoardFinanceiro = Loadable(lazy(() => import('views/dashboard/Default/FinanceiroDashboard')));

const NovoAtendimento = Loadable(lazy(() => import('views/pages/authentication/Atendimentos/novoatendimento')))
const AtendimentosTable = Loadable(lazy(() => import('views/pages/authentication/Atendimentos/components/atendimentosTable')))

const NovoCliente = Loadable(lazy(() => import('views/pages/authentication/Clientes/novocliente')))
const ClientesTable = Loadable(lazy(() => import('views/pages/authentication/Clientes/componentes/clientesTable')))

const NovoColaborador = Loadable(lazy(() => import('views/pages/authentication/Colaborador/novoColaborador')))
const ColaboradoresTable = Loadable(lazy(() => import('views/pages/authentication/Colaborador/components/colaboresTable')))

const NovoServico = Loadable(lazy(() => import('views/pages/authentication/Servicos/novoservico')))
const ServicosTable = Loadable(lazy(() => import('views/pages/authentication/Servicos/components/servicosTable')))





const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/dashboardfinanceiro',
      element: <DashBoardFinanceiro />
    },
    {
      path: '/atendimentos',
      element: <AtendimentosTable />
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
      path: '/clientes',
      element: <ClientesTable />
    },
    {
      path: '/novocolaborador',
      element: <NovoColaborador />
    },
    {
      path: '/colaboradores',
      element: <ColaboradoresTable />
    },
    {
      path: '/novoservico',
      element: <NovoServico />
    },
    {
      path: '/servicos',
      element: <ServicosTable />
    }


  ]
};

export default MainRoutes;
