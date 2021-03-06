const QuerySchema = require('../QuerySchema');
const { Validator, Filter } = require('./utils');

const TS_QUERYINDEX = 'TS.QUERYINDEX';
const SIGN_SPACE = ' ';

/**
 * TS_QUERYINDEX filter...
 */
module.exports = QuerySchema
  .create(TS_QUERYINDEX)
  .methodName('queryIndex')
  .data({ executable: true })
  .exports({ Filter })
  .param(
    'filter',
    (value) => !Validator.isUndefined(value) && Array.isArray(value) && value.length > 0
  )
  .serialize((command, conditions) => [command, ...conditions].join(SIGN_SPACE));
