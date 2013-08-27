// A shared module

var _ = require('lodash');

exports.logAll = function(things) {
  _.each(things, function(thing) {
    console.log(thing);
  });
};
