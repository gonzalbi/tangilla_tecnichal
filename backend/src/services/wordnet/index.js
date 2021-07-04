const Wordnet = require('node-wordnet')
const wndb = require('wndb-with-exceptions');

const wordnet = new Wordnet()

const lookForSynonims = async (words) => {
    let synonyms = {}
    for(let word of words){

        let findings = await wordnet.lookupAsync(word)
            .then(res => {
                return [].concat.apply([], res.map(x => x.synonyms)).filter(x => x != word)
            })
        synonyms[word] = findings
    }

    return synonyms;
}

module.exports = {
    lookForSynonims
}
