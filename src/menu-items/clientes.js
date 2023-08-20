import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Groups2Icon from '@mui/icons-material/Groups2';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

const icons = { PersonAddAltIcon, Groups2Icon, MiscellaneousServicesIcon };
const clientes = {
  id: 'clientes',
  title: 'Clientes',
  type: 'group',
  children: [
    {
      id: 'cliente',
      title: 'Clientes',
      type: 'item',
      url: '/clientes',
      icon: icons.PersonAddAltIcon,
      breadcrumbs: false
    },
    {
      id: 'novo_cliente',
      title: 'Novo Cliente',
      type: 'item',
      url: '/novocliente',
      icon: icons.Groups2Icon,
      breadcrumbs: false
    }
  ]
};

export default clientes;
