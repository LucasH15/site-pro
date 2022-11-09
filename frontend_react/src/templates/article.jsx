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
    // eslint-disable-next-line react/forbid-prop-types
    pageContext: propTypes.object.isRequired
};

export default Article;
