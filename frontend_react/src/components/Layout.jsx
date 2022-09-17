import PropTypes from 'prop-types';
import { CssVarsProvider } from '@mui/joy/styles';

const Layout = ({ children }) => {
    return <CssVarsProvider>{children}</CssVarsProvider>;
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
