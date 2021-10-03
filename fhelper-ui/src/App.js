import React from 'react';

import LoginPage from './pages/login/LoginPage';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './pages/style/page.scss';

const theme = createTheme();

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <LoginPage />
        </ThemeProvider>
    );
}

export default App;
