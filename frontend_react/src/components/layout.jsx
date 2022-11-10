import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material';

import theme from '../theme';

const Layout = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
