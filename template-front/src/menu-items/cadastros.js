import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Groups2Icon from '@mui/icons-material/Groups2';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

const icons = { PersonAddAltIcon, Groups2Icon, MiscellaneousServicesIcon };
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
      url: '/novocolaborador',
      icon: icons.Groups2Icon,
      breadcrumbs: false
    },
    {
      id: 'servico',
      title: 'Novo Serviço',
      type: 'item',
      url: '/novoservico',
      icon: icons.MiscellaneousServicesIcon,
      breadcrumbs: false
    }
  ]
};

export default cadastros;
