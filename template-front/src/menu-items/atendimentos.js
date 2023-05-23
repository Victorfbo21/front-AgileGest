import ContentCutIcon from '@mui/icons-material/ContentCut';
import AddIcon from '@mui/icons-material/Add';
const icons = { ContentCutIcon, AddIcon };
const atendimentos = {
  id: 'atendimentos',
  title: 'Atendimentos',
  type: 'group',
  children: [
    {
      id: 'atendimentos',
      title: 'Atendimentos',
      type: 'item',
      url: '/atendimentos',
      icon: icons.ContentCutIcon,
      breadcrumbs: false
    },
    {
      id: 'novoatendimento',
      title: 'Novo Atendimento',
      type: 'item',
      url: '/novoatendimento',
      icon: icons.AddIcon,
      breadcrumbs: false
    }
  ]
};

export default atendimentos;
