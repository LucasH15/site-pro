import sanityClient from '@sanity/client';
import imgUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: process.env.REACT_APP_SANITY_DATASET,
    apiVersion: process.env.REACT_APP_SANITY_API_VERSION,
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN
});

const builder = imgUrlBuilder(client);

export const urlFor = source => builder.image(source);
