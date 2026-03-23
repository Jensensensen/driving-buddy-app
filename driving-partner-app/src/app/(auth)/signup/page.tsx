'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';

const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    maxWidth: '450px',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    boxShadow:
        '0px 5px 15px rgba(0, 0, 0, 0.08), 0px 15px 35px rgba(0, 0, 0, 0.05)',
    borderRadius: '15px',
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
    minHeight: '100vh',
    padding: theme.spacing(2),
    justifyContent: 'center',
    alignItems: 'center',
    background:
        'radial-gradient(ellipse at center, #f0f7ff 0%, #ffffff 100%)',
}));

export default function SignIn() {
    const [emailError, setEmailError] = React.useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
    const [passwordError, setPasswordError] = React.useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');

    const validateInputs = () => {
        const email = document.getElementById('email') as HTMLInputElement | null;
        const password = document.getElementById('password') as HTMLInputElement | null;

        let isValid = true;

        if (!email || !email.value || !/\S+@\S+\.\S+/.test(email.value)) {
            setEmailError(true);
            setEmailErrorMessage('Please enter a valid email address.');
            isValid = false;
        } else {
            setEmailError(false);
            setEmailErrorMessage('');
        }

        if (!password || !password.value || password.value.length < 6) {
            setPasswordError(true);
            setPasswordErrorMessage('Password must be at least 6 characters long.');
            isValid = false;
        } else {
            setPasswordError(false);
            setPasswordErrorMessage('');
        }

        return isValid;
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!validateInputs()) return;

        const data = new FormData(event.currentTarget);

        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });

        alert('Sign in form submitted');
    };

    return (
        <>
            <CssBaseline />
            <SignInContainer direction="column">
                <Card variant="outlined">
                    <Typography
                        component="h1"
                        variant="h4"
                        sx={{ fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
                    >
                        Sign in
                    </Typography>

                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            gap: 2,
                        }}
                    >
                        <FormControl>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <TextField
                                id="email"
                                name="email"
                                type="email"
                                placeholder="your@email.com"
                                autoComplete="email"
                                autoFocus
                                required
                                fullWidth
                                error={emailError}
                                helperText={emailErrorMessage}
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <TextField
                                id="password"
                                name="password"
                                type="password"
                                placeholder="••••••"
                                autoComplete="current-password"
                                required
                                fullWidth
                                error={passwordError}
                                helperText={passwordErrorMessage}
                            />
                        </FormControl>

                        <Button type="submit" fullWidth variant="contained">
                            Sign in
                        </Button>
                    </Box>
                </Card>
            </SignInContainer>
        </>
    );
}