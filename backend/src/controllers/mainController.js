const SynonymsService = require('../services/mainServices/SynonymsService')

const findSynonims = async (req, res, next) => {
    try {
        const results = await SynonymsService(req.body.text)

        res.status(200).send(results)
    } catch (err) {
        console.log(err)
        res.status(500)
    }
}


module.exports = {
    findSynonims
}

