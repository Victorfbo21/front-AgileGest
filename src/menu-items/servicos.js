import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Groups2Icon from '@mui/icons-material/Groups2';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

const icons = { PersonAddAltIcon, Groups2Icon, MiscellaneousServicesIcon };
const servicos = {
    id: 'servicos',
    title: 'Serviços',
    type: 'group',
    children: [
        {
            id: 'lista_servicos',
            title: 'Serviços',
            type: 'item',
            url: '/servicos',
            icon: icons.PersonAddAltIcon,
            breadcrumbs: false
        },
        {
            id: 'novo_servico',
            title: 'Novo Serviço',
            type: 'item',
            url: '/novoservico',
            icon: icons.Groups2Icon,
            breadcrumbs: false
        }
    ]
};

export default servicos;
