import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  useMediaQuery
} from '@mui/material';

import Google from 'assets/images/icons/social-google.svg';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import authServices from 'services/authServices';
import InputMask from 'react-input-mask';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';


const RegisterPage = () => {
  const theme = useTheme();
  const navigate = useNavigate()
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const customization = useSelector((state) => state.customization);
  const [showPassword, setshowPassword] = useState(false);
  const clickPassword = () => setshowPassword((show) => !show);
  const [checked, setChecked] = useState(true);
  const [strength, setStrength] = useState(0);
  const [level, setLevel] = useState();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();
  const [doc, setDoc] = useState();

  const googleHandler = async () => {
    console.error('Register');
  };

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setStrength(temp);
    setLevel(strengthColor(temp));
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const registrar = await authServices.AuthService.signUp(name, email, password, phone, doc)
    console.log(registrar._id)
    if (registrar._id) {
      toast.success('Cadastrado !')
      navigate('/dashboard')
    }
    else {
      toast.error('Erro as Cadastrar')
    }
  }

  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <AnimateButton>
            <Button
              variant="outlined"
              fullWidth
              onClick={googleHandler}
              size="large"
              sx={{
                color: 'grey.700',
                backgroundColor: theme.palette.grey[50],
                borderColor: theme.palette.grey[100]
              }}
            >
              <Box sx={{ mr: { xs: 1, sm: 2, width: 20 } }}>
                <img src={Google} alt="google" width={16} height={16} style={{ marginRight: matchDownSM ? 8 : 16 }} />
              </Box>
              Entre com Google
            </Button>
          </AnimateButton>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ alignItems: 'center', display: 'flex' }}>
            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
            <Button
              variant="outlined"
              sx={{
                cursor: 'unset',
                m: 2,
                py: 0.5,
                px: 7,
                borderColor: `${theme.palette.grey[100]} !important`,
                color: `${theme.palette.grey[900]}!important`,
                fontWeight: 500,
                borderRadius: `${customization.borderRadius}px`
              }}
              disableRipple
              disabled
            >
              OU
            </Button>
            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
          </Box>
        </Grid>
        <Grid item xs={12} container alignItems="center" justifyContent="center">
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1">Cadastre-se com o Email</Typography>
          </Box>
        </Grid>
      </Grid>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={matchDownSM ? 0 : 2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Nome"
              margin="normal"
              name="nome"
              type="text"
              required={true}
              onChange={e => setName(e.target.value)}
              sx={{ ...theme.typography.customInput }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputMask
              mask="999.999.999-99"
              disabled={false}
              maskChar=""
              onChange={(e) => setDoc(e.target.value)}
            >
              {() => (
                <TextField
                  required={true}
                  label="CPF"
                  type='text'
                  sx={{ ...theme.typography.customInput }}
                />
              )}
            </InputMask>
          </Grid>
        </Grid>
        <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
          <InputLabel htmlFor="outlined-adornment-email-register">Email / Nome de Usuário</InputLabel>
          <OutlinedInput
            id="outlined-adornment-email-register"
            type="email"
            name="email"
            required={true}
            onChange={e => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
          <InputLabel htmlFor="outlined-adornment-email-register">Número</InputLabel>
          <InputMask
            mask="85 999999999"
            maskChar=""
            onChange={(e) => setPhone(e.target.value)}
          >
            {() => (
              <OutlinedInput
                placeholder='Numero'
                required={true}
              />
            )}
          </InputMask>
        </FormControl>

        <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
          <InputLabel htmlFor="outlined-adornment-password-register">Senha</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password-register"
            type={showPassword ? 'text' : 'password'}
            name="password"
            label="Password"
            required={true}
            onChange={(e) => {
              setPassword(e.target.value)
              changePassword(e.target.value)
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={clickPassword}
                  edge="end"
                  size="large"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            inputProps={{}}
          />
        </FormControl>

        {strength !== 0 && (
          <FormControl fullWidth>
            <Box sx={{ mb: 2 }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <Box style={{ backgroundColor: level?.color }} sx={{ width: 85, height: 8, borderRadius: '7px' }} />
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" fontSize="0.75rem">
                    {level?.label}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </FormControl>
        )}

        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox checked={checked} onChange={(event) => setChecked(event.target.checked)} name="checked" color="primary" />
              }
              label={
                <Typography variant="subtitle1">
                  Concordo com &nbsp;
                  <Typography variant="subtitle1" component={Link} to="#">
                    Termos e Condições.
                  </Typography>
                </Typography>
              }
            />
          </Grid>
        </Grid>
        <Box sx={{ mt: 2 }}>
          <AnimateButton>
            <Button fullWidth size="large" type="submit" variant="contained" color="secondary">
              Registrar
            </Button>
          </AnimateButton>
        </Box>
      </form>
    </>
  );
};

export default RegisterPage;
