const fs = require('fs');
const path = require('path');
const data = require('./input/example_big.in.json');
const areSynonyms = require('./areSynonyms');

// log time
console.time('synonyms');
const output = [];

// loop testcases to create output
data.testCases.forEach(tc => {
    const { dictionary, queries} = tc;
    queries.forEach(q => {
        const singleOutput = areSynonyms(q, dictionary) ? 'synonyms' : 'different'
        output.push(singleOutput)
    })
})

// create output
fs.writeFileSync(path.normalize(__dirname + '/output/output.txt'),output.join('\n'))

// end log time
console.timeEnd('synonyms');

// read example output
const exampleOutput = fs.readFileSync(path.normalize(__dirname + '/output/example_big.out.txt')).toString()

// track differences between example and output
const differences = []

// read lines to check for differences
exampleOutput.split('\n').forEach((line,index) => {
    if(line !== output[index]){
        differences.push('difference at line ' + index + ", expected: '" + line + "' found: '" + output[index] + "'")
        }
})

// return feedback
if(differences.length === 0){
    console.log('No errors found, great!')
}else{
    console.log(differences)
}



