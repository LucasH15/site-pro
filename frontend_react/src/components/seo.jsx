import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import propTypes from 'prop-types';

const Seo = ({ title }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <title>
            {title} | {data.site.siteMetadata.title}
        </title>
    );
};

Seo.propTypes = {
    title: propTypes.string.isRequired
};

export default Seo;
