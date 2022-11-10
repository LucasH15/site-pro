import { Button, Typography } from '@mui/material';
import Link from 'next/link';

import { Layout } from '../components';

const Index = () => {
    return (
        <Layout>
            <Typography variant="h1">HELLO</Typography>
            <Button variant="contained" component={Link} href="/articles">
                Articles
            </Button>
        </Layout>
    );
};

export default Index;
