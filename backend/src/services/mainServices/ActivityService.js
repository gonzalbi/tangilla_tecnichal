const {Activity} = require("../../db/models/Activity")

const addAnalysis = (text,analysis) => {

    Activity.create({text : JSON.stringify(text), analysis: JSON.stringify(analysis)})
}

module.exports = {
    addAnalysis
}