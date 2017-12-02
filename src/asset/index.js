import { graphql } from 'graphql';
import { assetSchema as schema } from './schema';

// We want to make a GET request with ?query=<graphql query>
// The event properties are specific to AWS. Other providers will differ.
export default (event, context, callback) => {
  console.log(event.queryStringParameters.query);
  return graphql(schema, event.queryStringParameters.query).then(
    result => callback(null, {statusCode: 200, body: result}),
    err => callback(err)
  );
};
