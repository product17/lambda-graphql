import promisify from '../libs/promisify';
import { assetModel } from '../models';

const createAsset = (input) => promisify(callback => {
  assetModel.dynamoSchema.get({assetID: input.assetID}, (err, item) => {
    if (err) {
      callback(err);
    } else {
      if (!item) {
        assetModel.dynamoSchema.create(input, (err) => {
          callback(err, JSON.stringify(input));
        });
      } else {
        callback(new Error('That asset already exists, use the updateAsset function.'));
      }
    }
  });
});

export default createAsset;
