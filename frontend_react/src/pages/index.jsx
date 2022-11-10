import * as React from 'react';
import { Link } from 'gatsby';
import { Button } from '@mui/material';

import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = () => {
    return (
        <Layout>
            <Button component={Link} variant="contained" to="/articles">
                Articles
            </Button>
        </Layout>
    );
};

export default IndexPage;

export const Head = () => <Seo title="Accueil" />;
