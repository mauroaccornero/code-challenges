# Find Synonyms

Give a dictionary and a set of query define a function that output if two terms are synonyms

## Input example

Dictionary

    [["A","b"],["B","c"],["d","E"]]

Queries

    [["A","c"],["B","b"],["d","A"]]

Give the previous dictionary the function for this queries should return:

## Output example

synonyms
synonyms
different

## Notes

- evaluation should be case-insensitive (example: SOME = some = SoMe)
- if query[0] === query[1] they are synonyms
- check deep relationships ("a" is synonym of "c" because "a" is synonym of "b" and "b" is synonym of "c")
- time for this exercise: 2 hours

## Commands

Run the script will create an output.txt file and compare the result with the example output provided

    node challenges/synonyms/index.js

Run test

    npm test