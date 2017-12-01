import promisify from '../libs/promisify';
import { assetModel } from '../models';

function getAsset (assetID) {
  return promisify(callback => {
    assetModel.dynamoSchema.get({ assetID }, (err, asset) => {
      callback(err, asset);
    });
  }).then(result => {
    if (!result.Item) {
      return assetID;
    }
    return result.Item.assetID;
  });
}

export default getAsset;
