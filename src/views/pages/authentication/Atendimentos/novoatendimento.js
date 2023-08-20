import MainCard from 'ui-component/cards/MainCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import PageTitle from 'layout/PageTitle';
import { CardContent, FormControl, Grid, TextField, Typography, Box, Button } from '@mui/material';

const NovoAtendimento = () => {

  const handleSubmit = async () => {
    console.log('Cadastrado !')
  }

  return (
    <>
      <PageTitle
        heading='Novo Atendimento'
      />
      <Grid direction="column" justifyContent="center" spacing={2}>
        <MainCard>
          <CardContent
          >
            <FormControl>
              <form onSubmit={handleSubmit}>
                <Grid xs={12} sm={6} display='inline-list-item'>
                  <TextField
                    label='Nome Cliente'
                    type='text'
                    placeholder='Nome do Cliente'
                    sx={{ m: 1 }}
                    size='large'
                    variant='standard'
                  >
                  </TextField>

                  <TextField
                    label='Serviço'
                    type='text'
                    placeholder='Serviço Prestado'
                    sx={{ m: 1 }}
                    size='medium'
                    variant='standard'

                  >
                  </TextField>
                  <TextField
                    label='Colaborador'
                    type='text'
                    placeholder=''
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

export default NovoAtendimento;