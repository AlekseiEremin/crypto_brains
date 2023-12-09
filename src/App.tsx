import React from 'react';
import Header from "./components/header";
import {createTheme, ThemeProvider} from "@mui/material";
import Main from "./components/main";

const App = () => {

    const THEME = createTheme({
        palette: {
            primary: {
                main: '#1B70F1'
            }
        },
        typography: {
            allVariants: {
                color: '#F7FAFF',
                fontFamily: "'Source Sans 3', sans-serif"
            }
            // Add more styles for other typography variants as needed
        },
    });

    return (
        <ThemeProvider theme={THEME}>
            <Header/>
            <Main/>
        </ThemeProvider>
    );
};

export default App;