require('dotenv').config({
    path: `.env`
});

const path = require('path');
// Get paths of Gatsby's required rules, which as of writing is located at:
// https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// gatsby/src/utils/eslint-rules
const gatsbyRequiredRules = path.join(process.cwd(), 'node_modules', 'gatsby', 'dist', 'utils', 'eslint-rules');
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    siteMetadata: {
        title: 'Lucas Hubert',
        siteUrl: process.env.SITE_URL
    },
    plugins: [
        {
            resolve: 'gatsby-source-sanity',
            options: {
                projectId: process.env.SANITY_PROJECT_ID,
                dataset: process.env.SANITY_DATASET,
                token: process.env.SANITY_TOKEN,
                watchMode: !isProd, // watchMode in dev
                overlayDrafts: !isProd // drafts in dev
            }
        },
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-plugin-emotion',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/assets/images/'
            },
            __key: 'images'
        },
        {
            resolve: 'gatsby-plugin-eslint',
            options: {
                rulePaths: [gatsbyRequiredRules],
                stages: ['develop'],
                extensions: ['js', 'jsx', 'ts', 'tsx'],
                exclude: ['node_modules', 'bower_components', '.cache', 'public']
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'Lucas Hubert',
                short_name: 'LH',
                start_url: '/',
                background_color: '#252D3B',
                theme_color: '#FB4D3D',
                display: 'standalone',
                lang: 'fr',
                icon: 'src/assets/images/favicon.svg'
            }
        }
    ]
};
