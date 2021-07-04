const wordnet = require("../wordnet/index")
const ActivityService = require('./ActivityService')


const createWordArray = (text) => {
    let valuesToRemove = ["a", "the", "and", "of", "in", "be", "also", "as"]
    let splitedText = text.replace(/\s+/g,' ').trim().split(" ").filter( i => !valuesToRemove.includes(i))

    //return with removed duplicates
    return splitedText.filter((item,index) => splitedText.indexOf(item) == index)
}

const processData = async (text) =>{

    let words = createWordArray(text)
    let findings = await wordnet.lookForSynonims(words)

    let wordsToSkip = []
    let synonyms = []

    for(let word of words){
        //Skip words that are already a synonym
        if(wordsToSkip.includes(word)){
            continue
        }
        //Find synonyms in text, don't count repeated words
        let synonimsPresentInText = findings[word].filter(x => words.filter(x => x != word).includes(x))
        
        //Words to skip as they already are synonyms
        let existingSynonimsInText = words.filter(x => synonimsPresentInText.includes(x))
        wordsToSkip = wordsToSkip.concat(existingSynonimsInText)

        //Populate response data
        synonyms[word] = {}
        synonyms.push({word : word, synonyms_found : synonimsPresentInText.length})

    }

    ActivityService.addAnalysis(words,synonyms)

    return synonyms
}

module.exports = processData

