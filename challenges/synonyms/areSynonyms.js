const areSynonyms = (q, dictionary) => {
    // if is not string return false
    if(typeof q[0] !== 'string' || typeof q[1] !== 'string'){
        return false
    }

    // normalize terms
    const t1 = q[0].toLowerCase()
    const t2 = q[1].toLowerCase()

    // if t1 === t2 is the same term so they are synonyms
   if(t1 === t2){
        return true;
    }

    // normalize dictionary
    const IDictionary = dictionary.map(terms => terms.map(term => term.toLowerCase()))

    // avoid other calculations if there's a first level relationship
    if(IDictionary.indexOf([t1,t2]) !== -1 || IDictionary.indexOf([t1,t2]) !== -1){
        return true
    }

    // create synonyms array for t1
    let synonyms = [t1]

    // add coupled synonyms from dictionary
    IDictionary.forEach(terms => {
        if(terms.includes(t1)) {
            synonyms = [...new Set([...synonyms, ...terms])]
        }
    })

    // loop the synonyms array against dictionary for dictionary.length times
    const IDictionaryLength = IDictionary.length
    for(let k = 0; k < IDictionaryLength; k++){
        synonyms.forEach((syn) => {
            IDictionary.forEach(terms => {
                if(terms.includes(syn)) {
                    synonyms = [...new Set([...synonyms, ...terms])]
                }})
        })
    }

    // check if t1's synonyms include t2
    return synonyms.indexOf(t2) !== -1
}

module.exports = areSynonyms