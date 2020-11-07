const individuals = require('./Src/Individual');
const parentSelection = require('./Src/Selection/Parent');
const parents = parentSelection(individuals);


console.log(individuals);
console.log('###########################################################################');
console.log(parents);

