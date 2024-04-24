//npm - global command, comes with node
//npm --version

//local dependency - use it in this particular project
//npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>
//sudo install -g <pachkageName> (mac)

//package.json - manifest file (stores important info about project/package)
//manual approach (create package.json in the root, create properties ect)
//npm init (step by step, press enter to skip)
//npm init -y (everything default)

const a = require('lodash')

const item = [1, [2, [3, [4]]]]
const newItems = a.flattenDeep(item)
console.log(newItems)