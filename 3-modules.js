//Module - every file in node is module by default
// it is Encapsulated code (only share minimum)

const names = require('./4-names');
const sayHi = require('./5-utils')
const data = require('./6-alternate-flavour')
console.log(data)
require('./7-mind-grenade')
console.log(names);

sayHi('nihal');
sayHi(names.shivam);
sayHi(names.awanish);