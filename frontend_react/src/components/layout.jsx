import * as React from 'react';
import propTypes from 'prop-types';
import { ThemeProvider } from '@mui/material';

import theme from '../theme';

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <main>{children}</main>
        </ThemeProvider>
    );
};

Layout.propTypes = {
    children: propTypes.node.isRequired
};

export default Layout;
