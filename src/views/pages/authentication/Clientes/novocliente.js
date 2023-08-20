import MainCard from 'ui-component/cards/MainCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { CardContent, FormControl, Grid, TextField, Typography, Box, Button } from '@mui/material';
import PageTitle from 'layout/PageTitle';
import InputMask from 'react-input-mask'
import { toast } from 'react-toastify';
import { useState } from 'react';
import ClienteService from 'services/clientesServices';

const NovoCliente = () => {

    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [data_nacimento, setData_nascimento] = useState('')

    const handleSubmit = async () => {
        const registrarCliente = await ClienteService.cadastrarClinte(nome, telefone, email, data_nacimento)
        if (registrarCliente) {
            toast.success('Cliente cadastrado com sucesso!')
            console.log("OK!!")
        }
    }

    return (
        <>
            <PageTitle
                heading='Novo Cliente'
            />

            <Grid direction="column" justifyContent="center" spacing={2}>
                <MainCard>
                    <CardContent
                    >
                        <FormControl>
                            <form onSubmit={handleSubmit}>
                                <Grid xs={12} sm={6} display='inline-list-item'>
                                    <TextField
                                        label='Nome'
                                        type='text'
                                        placeholder='Nome do Cliente'
                                        sx={{ m: 1 }}
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
                                        variant='standard'
                                        size='medium'
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
            </Grid>
        </>
    )
}

export default NovoCliente;