const express = require('express');
const envelopeRouter = express.Router();
const {addToDatabase, getAllData} = require('../utils/db-functions');

envelopeRouter.post('/', (req, res, next) => {
    const newEnvelope = addToDatabase(req.body);
    res.status(201).send(newEnvelope);
});

envelopeRouter.get('/', (req, res, next) => {
    const envelopesCategories = getAllData();
    res.status(200).send(envelopesCategories);
});

module.exports = envelopeRouter;