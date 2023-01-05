exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
        {
            allSanityArticles {
                nodes {
                    title
                    slug
                }
            }
        }
    `);

    if (result.errors) {
        throw result.errors;
    }

    const articles = result.data.allSanityArticles.nodes || [];

    articles.forEach(article => {
        const path = `/articles/${article.slug}`;

        createPage({
            path,
            component: require.resolve('./src/templates/article.jsx'),
            context: { article }
        });
    });
};

// exports.onCreateWebpackConfig = ({ actions }) => {
//     actions.setWebpackConfig({
//         module: {
//             rules: [{ test: /\.(riv)$/i, type: 'asset/resource' }]
//         }
//     });
// };
