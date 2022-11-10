import { createClient } from 'next-sanity';

// eslint-disable-next-line import/prefer-default-export
export const client = createClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: process.env.REACT_APP_SANITY_DATASET,
    apiVersion: process.env.REACT_APP_SANITY_API_VERSION,
    useCdn: false
});

// const builder = imgUrlBuilder(client);

// export const urlFor = source => builder.image(source);
