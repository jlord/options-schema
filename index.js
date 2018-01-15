let schema = require('./schema');
let findOptions = require('./options');

const behaviors = require('./behaviors');
const validators = require('./validators');
// console.log(findOptions)

var findCompiledSchema = {};

compileSchema(schema);

function compileSchema(schema) {
  Object.keys(schema).forEach(function(key) {
    // console.log(key)
    Object.keys(schema[key]).forEach(function(k) {
      // console.log(k)
      if (!findCompiledSchema[key]) findCompiledSchema[key] = {}
      if (k === 'type') {
        findCompiledSchema[key][k] = validators.type
      }
      if (k === 'deprecated' && schema[key][k]) {
        findCompiledSchema[key][k] = behaviors.deprecated
      }
      if (k === 'default') {
        findCompiledSchema[key][k] = behaviors.defaultValue
      }
      if (k === 'alias') {
        findCompiledSchema[key][k] = behaviors.alias
      }
    })
  });
  console.log(findCompiledSchema);
  validateOptions(findOptions, findCompiledSchema);
}

function validateOptions(options, compiledSchema) {
  // console.log(options, compiledSchema)
  Object.keys(options).forEach(function (key) {
    Object.keys(compiledSchema[key]).forEach(function (fn) {
      compiledSchema[key][fn](options[key])
    })
    // console.log(compiledSchema[key]);
  })
}
