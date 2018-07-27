import ReactJsonSchema from 'react-json-schema';

const deserialize = json => new ReactJsonSchema().parseSchema(json);
export default {
  serialize(component) {
    // TODO 07/26/2018 Rich Baird : Serialize a react component tree to JSON
  },
  deserialize,
};
