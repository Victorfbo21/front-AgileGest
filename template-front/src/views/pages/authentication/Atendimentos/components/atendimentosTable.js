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
    Typography,

} from '@mui/material';

import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { useEffect } from 'react';



const AtendimentosTable = () => {

    // const [atendimentos, setAtendimentos] = useState([])


    const getAtendimentos = async () => {
        //TODO
    }

    useEffect(() => {

    }, [getAtendimentos])

    return (
        <>
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
                                <TableCell>Nome Cliente</TableCell>
                                <TableCell>Serviço</TableCell>
                                <TableCell>Colaborador</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'table-cell' } }}>Horário de Início</TableCell>
                                <TableCell sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'table-cell' } }}>Previsão</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            <TableRow
                                key={"row"}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                hover
                            >
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        color="primary"
                                    />
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        variant="body1"
                                        fontWeight="bold"
                                        color="text.primary"
                                        gutterBottom
                                        noWrap
                                    >
                                        Teste Nome
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
                                        Teste Serviço
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
                                        Teste Colaborador
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
                                        Teste Status
                                    </Typography>
                                </TableCell>
                                <TableCell sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'table-cell' } }} >
                                    <Typography
                                        variant="body1"
                                        fontWeight="bold"
                                        color="text.primary"
                                        gutterBottom
                                        noWrap
                                    >
                                        Hora Início
                                    </Typography>
                                </TableCell>
                                <TableCell sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'table-cell' } }}>
                                    <Typography

                                        variant="body1"
                                        fontWeight="bold"
                                        color="text.primary"
                                        gutterBottom
                                        noWrap
                                    >
                                        Previsão
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
                                            color="inherit"
                                            size="small"
                                        // onClick={(e) => handleClickMenuDelete(rows._id)}
                                        >
                                            <DeleteTwoToneIcon fontSize="small" />
                                        </IconButton>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>


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

export default AtendimentosTable;