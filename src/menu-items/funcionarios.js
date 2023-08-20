import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Groups2Icon from '@mui/icons-material/Groups2';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

const icons = { PersonAddAltIcon, Groups2Icon, MiscellaneousServicesIcon };
const funcionarios = {
    id: 'Colaboradores',
    title: 'Colaboradores',
    type: 'group',
    children: [
        {
            id: 'Colaboradores',
            title: 'Colaboradores',
            type: 'item',
            url: '/novocliente',
            icon: icons.PersonAddAltIcon,
            breadcrumbs: false
        },
        {
            id: 'Novo Colaborador',
            title: 'Novo Colaborador',
            type: 'item',
            url: '/novocolaborador',
            icon: icons.Groups2Icon,
            breadcrumbs: false
        }
    ]
};

export default funcionarios;
