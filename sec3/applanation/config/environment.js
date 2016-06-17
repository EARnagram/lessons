// This file adds localEnvVars to the process object's env object.
// It also exports the env object (exists on the process object), so we
// have an shorter name to access the env object.

// lodash is a javascript library, like jQuery. Unlike jQuery, it handles data
// manipulation.
var _ = require('lodash');

// define the title and safe title variables for the project
var localEnvVars = {
  TITLE:      'Applanation',
  SAFE_TITLE: 'applanation'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
