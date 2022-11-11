import * as React from 'react';
import propTypes from 'prop-types';

const Article = ({ pageContext }) => {
    const { article } = pageContext;

    return (
        <div>
            Title: {article.title}
            Slug: {article.slug}
        </div>
    );
};

Article.propTypes = {
    pageContext: propTypes.shape({
        article: propTypes.shape({
            title: propTypes.string,
            slug: propTypes.string
        })
    }).isRequired
};

export default Article;
