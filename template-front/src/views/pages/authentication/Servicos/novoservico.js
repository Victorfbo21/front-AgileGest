import MainCard from 'ui-component/cards/MainCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { CardContent, FormControl, Grid, TextField, Typography, Box, Button } from '@mui/material';
import { toast } from 'react-toastify';

const NovoServico = () => {

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
                        textAlign={"center"}
                    >
                        Adicionar Serviço
                    </Typography>
                    <CardContent
                        textAlign={"center"}
                    >
                        <FormControl>
                            <form onSubmit={handleSubmit}>
                                <Grid xs={12} sm={6} display='inline-list-item'>
                                    <TextField
                                        label='Nome Serviço'
                                        type='text'
                                        placeholder='Nome do Serviço'
                                        sx={{ m: 1 }}
                                        size='large'
                                        variant='standard'
                                    >
                                    </TextField>

                                    <TextField
                                        label='Valor'
                                        type='text'
                                        placeholder='Valor do Serviço'
                                        sx={{ m: 1 }}
                                        size='medium'
                                        variant='standard'

                                    >
                                    </TextField>
                                    <TextField
                                        label='Tempo Medio'
                                        type='text'
                                        placeholder='Tempo Médio do Serviço'
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

export default NovoServico;