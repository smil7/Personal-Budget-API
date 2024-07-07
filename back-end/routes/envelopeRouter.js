const express = require('express');
const envelopeRouter = express.Router();
const {budgetCategories} = require('../utils/db');
const {addToDatabase} = require('../utils/db-functions');

envelopeRouter.post('/', (req, res, next) => {
    const newEnvelope = addToDatabase(req.body);
    res.status(201).send(newEnvelope);
})

module.exports = envelopeRouter;