import * as React from 'react';
import { Typography } from '@mui/material';

import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = () => {
    return (
        <Layout>
            <Typography variant="h1">Petit titre</Typography>
            <Typography variant="h2">Petit titre</Typography>
            <Typography variant="h3">Petit titre</Typography>
        </Layout>
    );
};

export default IndexPage;

export const Head = () => <Seo title="Accueil" />;
