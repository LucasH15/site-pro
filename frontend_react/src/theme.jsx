import { createTheme } from '@mui/material';

import FreitagLight from './assets/fonts/Freitag-Light.ttf';
import FreitagLightItalic from './assets/fonts/Freitag-Light-Italic.ttf';
import FreitagBook from './assets/fonts/Freitag-Book.ttf';
import FreitagBookItalic from './assets/fonts/Freitag-Book-Italic.ttf';
import FreitagMedium from './assets/fonts/Freitag-Medium.ttf';
import FreitagMediumItalic from './assets/fonts/Freitag-Medium-Italic.ttf';
import FreitagBold from './assets/fonts/Freitag-Bold.ttf';
import FreitagBoldItalic from './assets/fonts/Freitag-Bold-Italic.ttf';
import FreitagHeavy from './assets/fonts/Freitag-Heavy.ttf';
import FreitagHeavyItalic from './assets/fonts/Freitag-Heavy-Italic.ttf';
import FreitagDisplay from './assets/fonts/Freitag-Display-M.ttf';
import FreitagDisplayItalic from './assets/fonts/Freitag-Display-M-Italic.ttf';

export default createTheme({
    typography: {
        fontFamily: 'Freitag, sans-serif',
        h1: {
            fontFamily: 'Freitag Display, sans-serif'
        },
        h2: {
            fontFamily: 'Freitag Display, sans-serif'
        },
        h3: {
            fontFamily: 'Freitag Display, sans-serif'
        },
        h4: {
            fontFamily: 'Freitag Display, sans-serif'
        },
        h5: {
            fontFamily: 'Freitag Display, sans-serif'
        },
        h6: {
            fontFamily: 'Freitag Display, sans-serif'
        }
    },
    palette: {
        text: {
            main: '#252D3B',
            primary: '#252D3B'
        },
        primary: {
            main: '#FB4D3D'
        },
        secondary: {
            main: '#5BC0EB'
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                @font-face {
                    font-family: 'Freitag';
                    font-style: normal;
                    font-display: swap;
                    font-weight: 200;
                    src: url(${FreitagLight}) format('truetype');
                }
                @font-face {
                    font-family: 'Freitag';
                    font-style: italic;
                    font-display: swap;
                    font-weight: 200;
                    src: url(${FreitagLightItalic}) format('truetype');
                }
                @font-face {
                    font-family: 'Freitag';
                    font-style: normal;
                    font-display: swap;
                    font-weight: 300;
                    src: url(${FreitagBook}) format('truetype');
                }
                @font-face {
                    font-family: 'Freitag';
                    font-style: italic;
                    font-display: swap;
                    font-weight: 300;
                    src: url(${FreitagBookItalic}) format('truetype');
                }
                @font-face {
                    font-family: 'Freitag';
                    font-style: normal;
                    font-display: swap;
                    font-weight: 400;
                    src: url(${FreitagMedium}) format('truetype');
                }
                @font-face {
                    font-family: 'Freitag';
                    font-style: italic;
                    font-display: swap;
                    font-weight: 400;
                    src: url(${FreitagMediumItalic}) format('truetype');
                }
                @font-face {
                    font-family: 'Freitag';
                    font-style: normal;
                    font-display: swap;
                    font-weight: 500;
                    src: url(${FreitagBold}) format('truetype');
                }
                @font-face {
                    font-family: 'Freitag';
                    font-style: italic;
                    font-display: swap;
                    font-weight: 500;
                    src: url(${FreitagBoldItalic}) format('truetype');
                }
                @font-face {
                    font-family: 'Freitag';
                    font-style: normal;
                    font-display: swap;
                    font-weight: 600;
                    src: url(${FreitagHeavy}) format('truetype');
                }
                @font-face {
                    font-family: 'Freitag';
                    font-style: italic;
                    font-display: swap;
                    font-weight: 600;
                    src: url(${FreitagHeavyItalic}) format('truetype');
                }
                @font-face {
                    font-family: 'Freitag Display';
                    font-style: normal;
                    font-display: swap;
                    font-weight: 300;
                    src: url(${FreitagDisplay}) format('truetype');
                }
                @font-face {
                    font-family: 'Freitag Display';
                    font-style: italic;
                    font-display: swap;
                    font-weight: 300;
                    src: url(${FreitagDisplayItalic}) format('truetype');
                }
            `
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'inherit'
                }
            }
        }
    }
});
