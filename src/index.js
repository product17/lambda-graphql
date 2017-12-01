// import { graphql } from 'graphql';
// import { resourceSchema } from './schema';
import asset from './asset';

// We want to make a GET request with ?query=<graphql query>
// The event properties are specific to AWS. Other providers will differ.
// module.exports.query = (event, context, callback) => {
//   console.log(event.queryStringParameters.query);
//   return graphql(resourceSchema, event.queryStringParameters.query).then(
//     result => {
//       callback(null, {statusCode: 200, body: result});
//     },
//     err => {
//       console.log(err);
//       callback(err);
//     }
//   );
// };

module.exports.asset = asset;
