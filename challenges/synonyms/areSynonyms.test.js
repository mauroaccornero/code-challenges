const areSynonyms = require('./areSynonyms');


describe('areSynonyms unit test', () => {
    it('should return true if terms are in dictionary',() => {
        const dictionary = [
            ['a','b']
        ]
        const result = areSynonyms(['a','b'], dictionary)
        expect(result).toBe(true);
    })

    it('should return true if terms are in dictionary and uppercase',() => {
        const dictionary = [
            ['A','b']
        ]
        const result = areSynonyms(['a','b'], dictionary)
        expect(result).toBe(true);
    })

    it('should return true if terms are in dictionary in reverse order',() => {
        const dictionary = [
            ['b','a']
        ]
        const result = areSynonyms(['a','b'], dictionary)
        expect(result).toBe(true);
    })

    it('should return true if terms are in dictionary in reverse order and uppercase',() => {
        const dictionary = [
            ['B','a']
        ]
        const result = areSynonyms(['a','b'], dictionary)
        expect(result).toBe(true);
    })

    it('should return true if terms are the same',() => {
        const dictionary = [
            ['b','a']
        ]
        const result = areSynonyms(['a','a'], dictionary)
        expect(result).toBe(true);
    })

    it('should return true if terms are the same but with different cases',() => {
        const dictionary = [
            ['b','a']
        ]
        const result = areSynonyms(['a','A'], dictionary)
        expect(result).toBe(true);
    })

    it('should return nested level relationship',() => {
        const dictionary = [
            ['b','a'],
            ['b','c'],
            ['d','e'],
            ['f','g'],
            ['g','e']
        ]

        expect(areSynonyms(['a','B'], dictionary)).toBe(true);
        expect(areSynonyms(['c','B'], dictionary)).toBe(true);
        expect(areSynonyms(['a','C'], dictionary)).toBe(true);
        expect(areSynonyms(['d','d'], dictionary)).toBe(true);
        expect(areSynonyms(['d','F'], dictionary)).toBe(true);
        expect(areSynonyms(['E','F'], dictionary)).toBe(true);
        expect(areSynonyms(['g','d'], dictionary)).toBe(true);
        expect(areSynonyms(['g','E'], dictionary)).toBe(true);
        expect(areSynonyms(['g','F'], dictionary)).toBe(true);
        expect(areSynonyms(['a','D'], dictionary)).toBe(false);
        expect(areSynonyms(['c','F'], dictionary)).toBe(false);
    })
});