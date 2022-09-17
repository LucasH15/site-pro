import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'
import articles from './articles';
import projects from './projects';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
      articles,
      projects
  ]),
})
