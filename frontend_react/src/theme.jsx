import { createTheme } from '@mui/material';

export default createTheme({
    palette: {
        primary: {
            main: '#113300'
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'inherit'
                }
            }
        }
    }
});
