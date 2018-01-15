module.exports.deprecated = function deprecated(key) {
  console.log('deprecated', key)
};

module.exports.defaultValue = function defaultValue(key, defaultValue) {
  console.log('default is', key)
};

module.exports.alias = function alias(key, defaultValue) {
  console.log('alias is', key)
};
