var _ = require('lodash');

var localEnvVars = {
  TITLE:      'derry_fishin_log',
  SAFE_TITLE: 'derry_fishin_log'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
