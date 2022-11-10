import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Button } from '@mui/material';

import Layout from '../components/layout';
import Seo from '../components/seo';

const Articles = () => {
    const articles = useStaticQuery(graphql`
        query {
            allSanityArticles {
                nodes {
                    title
                    slug
                }
            }
        }
    `);

    return (
        <Layout>
            <Button component={Link} variant="contained" to="/">
                Accueil
            </Button>

            {articles.allSanityArticles.nodes.map(({ title, slug }) => (
                <Button component={Link} variant="contained" to={`/articles/${slug}`}>
                    {title}
                </Button>
            ))}
        </Layout>
    );
};

export default Articles;

export const Head = () => <Seo title="Articles" />;
