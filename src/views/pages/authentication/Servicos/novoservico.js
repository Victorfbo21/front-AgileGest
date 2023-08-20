import MainCard from 'ui-component/cards/MainCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { CardContent, FormControl, Grid, TextField, Typography, Box, Button } from '@mui/material';
import InputMask from 'react-input-mask'
import { toast, ToastContainer } from 'react-toastify';
import ServicosServices from 'services/servicosServices';
import { useState } from 'react';
import PageTitle from 'layout/PageTitle';

const NovoServico = () => {

    const [nomeServico, setNomeServico] = useState("")
    const [valorServico, setValorServico] = useState("")
    const [tempoMedio, setTempoMedio] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const servico = {
                nomeServico: nomeServico,
                valorServico: valorServico,
                tempoMedio: tempoMedio
            }
            if (!nomeServico || !valorServico || !tempoMedio) {
                toast.error("Preencha todos os campos !")
            }

            await ServicosServices.cadastrarServico({ servico })
                .then((sucess) => {
                    toast.success("Novo Serviço Cadastrado !")
                    setNomeServico("");
                    setValorServico("");
                    setTempoMedio("");
                })
                .catch((error) => {
                    toast.error("Falha ao Cadastrar Serviço")
                })
        }
        catch (err) {
            console.error('Erro ao Cadastrar Serviço')
        }


    }

    return (
        <>
            <PageTitle
                heading='Novo Serviço'
            />

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

                                    <InputMask
                                        mask={""}
                                        name="valor"
                                        onChange={e => setValorServico(e.target.value)}
                                    >{() => <TextField
                                        name="valor"
                                        placeholder='Valor'
                                        label="Valor"
                                        variant='standard'
                                        size='medium'
                                        sx={{ m: 1 }}
                                    />}
                                    </InputMask>

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
                <ToastContainer />
            </Grid>
        </>
    )
}

export default NovoServico;