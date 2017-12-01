import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLInputObjectType,
  GraphQLEnumType,
} from 'graphql';

import {
  getAsset,
} from '../queries';

import {
  createAsset,
  // updateAsset,
} from '../mutations';

const assetTypeEnum = new GraphQLEnumType({
  name: 'assetType',
  values: {
    video: {
      value: 'video',
      description: 'Video asset type, this supports YouTube',
    },
    brochure: {
      value: 'brochure',
      description: 'resource for displaying PDF formatted assets',
    },
    demo: {
      value: 'demo',
      description: 'Demo type displays a template that helps explain the product',
    },
  },
});

const seo = new GraphQLInputObjectType({
  name: 'seoItems',
  fields: {
    canonical: {
      type: GraphQLString,
    },
    custom_title: {
      type: GraphQLString,
    },
  },
});

const AssetInput = new GraphQLInputObjectType({
  name: 'AssetInput',
  fields: {
    assetID: {
      name: 'assetID',
      type: new GraphQLNonNull(GraphQLString),
    },
    title: {
      name: 'title',
      type: GraphQLString,
      // resolve: (parent, args) => {
      //   console.log(args);
      //   return 'test';
      // },
    },
    url: {
      name: 'url',
      type: new GraphQLNonNull(GraphQLString),
    },
    // assetType: {
    //   name: 'assetType',
    //   // type: new GraphQLList(assetTypeEnum),
    //   type: GraphQLList,
    // },
    // seo: {
    //   name: 'seo',
    //   type: seo,
    // },
  },
  // type: Asset,
});

const Asset = new GraphQLObjectType({
  name: 'Asset',
  fields: {
    assetID: {
      name: 'assetID',
      type: new GraphQLNonNull(GraphQLString),
    },
    title: {
      name: 'title',
      type: GraphQLString,
      resolve: (parent, args) => {
        console.log(args);
        return 'test';
      },
    },
    url: {
      name: 'url',
      type: new GraphQLNonNull(GraphQLString),
    },
    // assetType: {
    //   name: 'assetType',
    //   // type: new GraphQLList(assetTypeEnum),
    //   type: GraphQLList,
    // },
    // seo: {
    //   name: 'seo',
    //   type: seo,
    // },
  },
  // type: Asset,
});

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      getAsset: {
        args: {
          assetID: {
            name: 'assetID',
            type: new GraphQLNonNull(GraphQLString),
          },
        },
        // the greeting message is a string
        type: Asset,
        resolve: (parent, args) => getAsset(args.assetID),
      },
    },
  }),
  mutation: new GraphQLObjectType({
    name: 'RootMuationType',
    fields: {
      createAsset: {
        args: {
          input: {
            name: 'input',
            type: new GraphQLNonNull(AssetInput),
          },
        },
        type: Asset,
        resolve: (parent, args) => createAsset(args.input),
      },
    },
  }),
});

export default schema;
