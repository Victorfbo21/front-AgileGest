import MainCard from 'ui-component/cards/MainCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { CardContent, FormControl, Grid, TextField, Typography, Box, Button } from '@mui/material';
import { toast } from 'react-toastify';
import ServicosServices from 'services/servicosServices';
import { useState } from 'react';

const NovoServico = () => {

    const [nomeServico, setNomeServico] = useState('')
    const [valorServico, setValorServico] = useState('')
    const [tempoMedio, setTempoMedio] = useState('')

    const handleSubmit = async () => {

        const cadastrarServico = await ServicosServices.cadastrarServico(nomeServico, valorServico, tempoMedio)
        if (cadastrarServico._id) {
            toast.success("Novo Serviço Cadastrado !")
            console.log("OK !!")
        }
        else {
            toast.error("Falha ao Cadastrar Serviço")
        }
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
                                        onChange={e => setNomeServico(e.target.value)}
                                    >
                                    </TextField>

                                    <TextField
                                        label='Valor'
                                        type='text'
                                        placeholder='Valor do Serviço'
                                        sx={{ m: 1 }}
                                        size='medium'
                                        variant='standard'
                                        onChange={e => setValorServico(e.target.value)}
                                    >
                                    </TextField>
                                    <TextField
                                        label='Tempo Medio'
                                        type='text'
                                        placeholder='Tempo Médio do Serviço'
                                        sx={{ m: 1 }}
                                        size='medium'
                                        variant='standard'
                                        onChange={e => setTempoMedio(e.target.value)}

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