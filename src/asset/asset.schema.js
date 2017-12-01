import {
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';

import {
  getAsset,
  // listAssets,
} from './queries';

// import {
//   createAsset,
//   updateAsset,
// } from './mutations';
console.log(getAsset);
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      getAsset,
      // listAssets,
    },
  }),
  // mutation: new GraphQLObjectType({
  //   name: 'RootMuationType',
  //   fields: {
  //     createAsset,
  //     updateAsset,
  //   },
  // }),
});

export default schema;
