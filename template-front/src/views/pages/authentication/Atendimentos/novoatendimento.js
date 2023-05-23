import MainCard from 'ui-component/cards/MainCard';
import { CardContent, FormControl, Grid, TextField } from '@mui/material';


const NovoAtendimento = () => {
  return (
    <>
      <Grid>
        <MainCard>
          <CardContent>
            <FormControl>
              <form>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label='Serviço'
                    type='text'
                  >
                  </TextField>
                  <TextField
                    label='Cliente'
                    type='text'
                  >
                  </TextField>
                </Grid>
              </form>
            </FormControl>
          </CardContent>
        </MainCard>
      </Grid>
    </>
  )
}

export default NovoAtendimento;