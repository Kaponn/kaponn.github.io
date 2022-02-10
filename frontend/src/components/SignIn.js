import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
// import { validateEmail, validatePassword } from '../utils/Validators';
import { useNavigate } from 'react-router-dom';
import { theme } from '../assets/Theme';

export default function SignIn() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  // const [errors, setErrors] = useState({
  //   email: 0,
  //   password: 0,
  // });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h3">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              value={values.email}
              onChange={(e) => {
                setValues({
                  ...values,
                  email: e.target.value,
                });
              }}
              margin="normal"
              variant="standard"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              value={values.password}
              onChange={(e) => {
                setValues({
                  ...values,
                  password: e.target.value,
                });
              }}
              margin="normal"
              variant="standard"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item padding="0.5rem">
                <Link
                  href="#"
                  variant="body2"
                  onClick={() => navigate('../register')}
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
              <Grid item padding="0.5rem">
                <Link
                  gref="#"
                  variant="body2"
                  onClick={() => navigate('../home')}
                >
                  {'Or Continue as a guest'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
