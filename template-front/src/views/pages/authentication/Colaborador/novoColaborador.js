import MainCard from 'ui-component/cards/MainCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { CardContent, FormControl, Grid, TextField, Typography, Box, Button } from '@mui/material';
import InputMask from 'react-input-mask'
import { toast } from 'react-toastify';

const NovoColaborador = () => {

    const handleSubmit = () => {
        toast.error('Email ou Senha incorretos !')
        console.log('Chamado')
    }

    return (
        <>
            <Grid direction="column" justifyContent="center" spacing={2}>
                <MainCard>
                    <Typography
                        variant='h2'
                    >
                        Adicionar Colaborador
                    </Typography>
                    <CardContent>
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
                                    >
                                    </TextField>
                                    <InputMask
                                        mask={"(99) 99999-9999"}
                                        name="telefone"
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

                                    >
                                    </TextField>

                                    <InputMask
                                        mask={"99/99/9999"}
                                        name="datanascimento"
                                    // onChange={setFormData}
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
                                        type='text'
                                        placeholder='Função do Colaborador'
                                        sx={{ m: 1 }}
                                        size='medium'
                                        variant='standard'

                                    >
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
            </Grid>
        </>
    )
}

export default NovoColaborador;