import {
  // GraphQLSchema,
  // GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  // GraphQLList,
  // GraphQLInputObjectType,
  // GraphQLEnumType,
} from 'graphql';
import promisify from '../../libs/promisify';
import assetModel from '../asset.model';

// Resolve function
function getAsset (assetID) {
  return promisify(callback => {
    assetModel.get({ assetID }, (err, asset) => {
      callback(err, asset);
    });
  }).then(result => {
    if (!result.Item) {
      return assetID;
    }
    return result.Item.assetID;
  });
}

// GraphQL Schema
const getAssetSchema = {
  args: {
    assetID: {
      name: 'assetID',
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  type: GraphQLString,
  resolve: (parent, args) => getAsset(args.assetID),
};

export default getAssetSchema;
