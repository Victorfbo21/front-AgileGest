import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Groups2Icon from '@mui/icons-material/Groups2';

const icons = { PersonAddAltIcon, Groups2Icon };
const cadastros = {
  id: 'cadastros',
  title: 'Cadastros',
  type: 'group',
  children: [
    {
      id: 'cliente',
      title: 'Novo Cliente',
      type: 'item',
      url: '/novocliente',
      icon: icons.PersonAddAltIcon,
      breadcrumbs: false
    },
    {
      id: 'colaborador',
      title: 'Novo Colaborador',
      type: 'item',
      url: '',
      icon: icons.Groups2Icon,
      breadcrumbs: false
    }
  ]
};

export default cadastros;
