import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';

const icons = { CurrencyExchangeIcon  , FolderCopyIcon};
const financeiro = {
  id: 'financeiro',
  title: 'Financeiro',
  type: 'group',
  children: [
    {
      id: 'financeiro',
      title: 'Financeiro',
      type: 'item',
      url: '',
      icon: icons.CurrencyExchangeIcon,
      breadcrumbs: false
    },
    {
      id: 'financeiro_relatorios',
      title: 'Relatórios',
      type: 'item',
      url: '',
      icon: icons.FolderCopyIcon,
      breadcrumbs: false
    }
  ]
};

export default financeiro;
