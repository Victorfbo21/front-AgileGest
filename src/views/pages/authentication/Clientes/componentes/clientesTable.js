import {
    Tooltip,
    Divider,
    Box,
    Card,
    Checkbox,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableContainer,
    Typography

} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { useEffect } from 'react';
import { useState } from 'react';
import PageTitle from 'layout/PageTitle';
import ServicosServices from 'services/servicosServices';
import { toast } from 'react-toastify';

const ClientesTable = () => {

    const [servicos, setServicos] = useState([])
    const deleteServico = async (id) => {
        try {
            await ServicosServices.deletarServico(id);
            toast.success('Serviço Deletado com Sucesso')
            getServicos();
        }
        catch (err) {
            console.error('Erro ao deletar o serviço:', err)
        }

    }
    const getServicos = async () => {
        try {
            const listServicos = await ServicosServices.listarServicos();
            if (listServicos) {
                setServicos(listServicos)
            }
        }
        catch (err) {
            console.error('Erro ao obter os serviços:', err)
        }
    }

    useEffect(() => {
        getServicos();
    }, [])

    return (
        <>
            <PageTitle
                heading='Clientes'
            />
            <Card>
                <Divider />
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        color="primary"

                                    />
                                </TableCell>
                                <TableCell>Nome Serviço</TableCell>
                                <TableCell>Valor</TableCell>
                                <TableCell>Tempo Médio</TableCell>
                                <TableCell>Açoes</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <>
                                {servicos.map((serv, i) => (
                                    <TableRow
                                        key={"row" + i}
                                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}

                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                color="primary"
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Typography
                                                variant="body2"
                                                fontWeight="bold"
                                                color="text.primary"
                                                gutterBottom
                                                noWrap
                                            >
                                                {serv.nomeServico}

                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography
                                                variant="body1"
                                                fontWeight="bold"
                                                color="text.primary"
                                                gutterBottom
                                                noWrap
                                            >
                                                R$ {serv?.valor}
                                            </Typography>
                                        </TableCell>

                                        <TableCell>
                                            <Typography
                                                variant="body1"
                                                fontWeight="bold"
                                                color="text.primary"
                                                gutterBottom
                                                noWrap
                                                sx={{ ml: 4 }}
                                            >
                                                {serv?.tempoMedio}
                                            </Typography>
                                        </TableCell>

                                        <TableCell>

                                            <Tooltip title="Editar" arrow >
                                                <IconButton
                                                    sx={{

                                                    }}
                                                    color="inherit"
                                                    size="small"
                                                >
                                                    <EditTwoToneIcon fontSize="small" />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Excluir" arrow >
                                                <IconButton
                                                    sx={{

                                                    }}
                                                    color="error"
                                                    size="small"
                                                    onClick={(e) => deleteServico(serv._id)}
                                                >
                                                    <DeleteTwoToneIcon fontSize="small" />
                                                </IconButton>
                                            </Tooltip>
                                        </TableCell>

                                    </TableRow>

                                ))}
                            </>
                        </TableBody>
                    </Table>
                </TableContainer>

                <Box p={2}>
                    {/* <TablePagination
                    component="div"
                    count={2}
                    onPageChange={ }
                    onRowsPerPageChange={ }
                    page={ }
                    rowsPerPage={10}
                    rowsPerPageOptions={[5, 10]}
                /> */}
                </Box>

                {/* <ConfirmDialog
                    open={projectDelete.openDialogDelete}
                    onClose={(value) => {
                        if (value)
                            handleDelete(projectDelete);
                        handleCloseDialogDelete();
                    }}
                    title="Excluir Projeto"
                    text="Deseja realmente excluir esse projeto?"
                /> */}
            </Card>
        </>
    )
}

export default ClientesTable;