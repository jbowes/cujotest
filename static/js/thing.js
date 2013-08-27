var foo = require('./foo');
var shared = require('./common/shared');

console.log('foo required:', foo);

console.log('client side shared module use:');
shared.logAll(['some', 'things']);

exports.hi = 'hi';
