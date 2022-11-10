import PropTypes from 'prop-types';
import Link from 'next/link';
import { Button } from '@mui/material';

import { client } from '../../client';
import { Layout } from '../../components';

const Index = ({ articles }) => {
    return (
        <Layout>
            <Button variant="contained" component={Link} href="/">
                Accueil
            </Button>

            {articles.map(article => (
                <p>{article.title}</p>
            ))}
        </Layout>
    );
};

Index.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            slug: PropTypes.string
        })
    ).isRequired
};

export default Index;

export async function getStaticProps() {
    const articles = await client.fetch(`*[_type == "articles"]`);

    return {
        props: {
            articles
        }
    };
}
