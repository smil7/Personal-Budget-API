const express = require('express');
const envelopeRouter = express.Router();
const {addToDatabase, getAllData, getCategoryByName} = require('../utils/db-functions');

envelopeRouter.post('/', (req, res, next) => {
    const newEnvelope = addToDatabase(req.body);
    res.status(201).send(newEnvelope);
});

envelopeRouter.get('/', (req, res, next) => {
    const envelopesCategories = getAllData();
    res.status(200).send(envelopesCategories);
});

envelopeRouter.get('/:categoryName', (req, res, next) => {
    const category = getCategoryByName(req.params.categoryName);
    if(category === null){
        return res.status(404).send(`${req.params.categoryName} not in the database.`)
    }
    res.status(200).send(category);
})

module.exports = envelopeRouter;