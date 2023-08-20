import MainCard from 'ui-component/cards/MainCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { CardContent, FormControl, Grid, TextField, Typography, Box, Button, Select, Menu, MenuItem } from '@mui/material';
import PageTitle from 'layout/PageTitle';
import InputMask from 'react-input-mask'
import { toast } from 'react-toastify';
import ColaboradorService from 'services/colaboradorServices';
import ServicosServices from 'services/servicosServices';
import { useState } from 'react';
import { useEffect } from 'react';

const NovoColaborador = () => {


    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [data_nacimento, setData_nascimento] = useState('')

    const [funcao, setFuncao] = useState([])
    console.log(funcao)
    const [servicoSelected, setServicoSelected] = useState('')

    const handleSelectedServico = (e) => {
        setServicoSelected(e.target.value)
    }

    const handleSubmit = async () => {
        const cadastrarColab = await ColaboradorService.cadastrarColaborador(nome, telefone, email, data_nacimento, funcao)
        if (cadastrarColab) {
            toast.success("Usuário Cadastrado!")
        }
    }

    const getServicos = async () => {
        try {
            const servicos = await ServicosServices.listarServicos()
            if (servicos) {
                setFuncao(servicos)

            }

        }
        catch (err) {
            console.log('Erro ao retornar serviços :', err)
        }
    }

    useEffect(() => {
        getServicos();
    }, [])

    return (
        <>
            <PageTitle
                heading='Novo Colaborador'
            />
            <Grid direction="column" justifyContent="center" spacing={2}>
                <MainCard>
                    <CardContent
                        textAlign={"center"}
                    >
                        <FormControl>
                            <form onSubmit={handleSubmit}>
                                <Grid xs={12} sm={6} display='inline-list-item'>
                                    <TextField
                                        label='Nome'
                                        type='text'
                                        placeholder='Nome do Cliente'
                                        sx={{ m: 1 }}
                                        size='large'
                                        variant='standard'
                                        onChange={e => setNome(e.target.value)}
                                    >
                                    </TextField>
                                    <InputMask
                                        mask={"(99) 99999-9999"}
                                        name="telefone"
                                        onChange={e => setTelefone(e.target.value)}
                                    >{() => <TextField
                                        name="telefone"
                                        label="Telefone"
                                        size='medium'
                                        variant='standard'
                                        sx={{ m: 1 }}

                                    />}
                                    </InputMask>
                                    <TextField
                                        label='Email'
                                        type='text'
                                        placeholder='Email do Cliente'
                                        sx={{ m: 1 }}
                                        size='medium'
                                        variant='standard'
                                        onChange={e => setEmail(e.target.value)}
                                    >
                                    </TextField>

                                    <InputMask
                                        mask={"99/99/9999"}
                                        name="datanascimento"
                                        onChange={e => setData_nascimento(e.target.value)}
                                    >{() => <TextField
                                        name="telefone"
                                        placeholder='Data de Nascimento'
                                        label="Data de Nascimento"
                                        variant='standard'
                                        size='medium'
                                        sx={{ m: 1 }}
                                    />}
                                    </InputMask>

                                    <TextField
                                        label='Função'
                                        select
                                        placeholder='Função do Colaborador'

                                        size='medium'
                                        variant='standard'
                                        value={servicoSelected}
                                        onChange={e => handleSelectedServico(e)}
                                        sx={{ mt: { xs: 2, md: 1 }, m: 1, width: '20%', fontSize: 15 }}
                                    >
                                        {funcao?.map((func, i) =>
                                            <MenuItem key={i} value={func.nomeServico}>
                                                {func.nomeServico}
                                            </MenuItem>)}
                                    </TextField>


                                </Grid>
                                <Box sx={{ mt: 2 }}>
                                    <AnimateButton>
                                        <Button size="large" type="submit" variant="contained" color="secondary">
                                            Cadastrar
                                        </Button>
                                    </AnimateButton>
                                </Box>
                            </form>
                        </FormControl>
                    </CardContent>
                </MainCard>
            </Grid >
        </>
    )
}

export default NovoColaborador;