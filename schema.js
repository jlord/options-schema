module.exports = {
  limit: { type: 'number', default: 0 },
  maxScan: { type: 'number', default: null },
  comment: { type: 'string', default: null },
  explain: { type: 'boolean', default: false },
  promoteLongs: { type: 'boolean', default: true },
  collation: { type: 'object', default: null },
  fields: { deprecated: true, alias: 'projection' },
  sort: { type: ['array', 'object'], default: null }
}
