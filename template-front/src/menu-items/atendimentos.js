import ContentCutIcon from '@mui/icons-material/ContentCut';
const icons = { ContentCutIcon };
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
      url: '/atendimentos',
      icon: icons.ContentCutIcon,
      breadcrumbs: false
    }
  ]
};

export default atendimentos;
