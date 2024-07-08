const express = require('express');
const envelopeRouter = express.Router();
const {addToDatabase, getAllData, getCategoryById, updateCategoryDetails, subtractBudgetValue} = require('../utils/db-functions');

envelopeRouter.param('categoryId', (req, res, next, id) => {
    const categoryId = Number(id);
    const category = getCategoryById(categoryId);
    if(category === undefined){
        res.status(404).send('Category not found!');
    }
    else{
        req.category = category;
        next();
    }
})

envelopeRouter.post('/', (req, res, next) => {
    const newEnvelope = addToDatabase(req.body);
    res.status(201).send(newEnvelope);
});

envelopeRouter.post('/:categoryId', (req, res, next) => {
    let budget = subtractBudgetValue(req.body);
    if(budget === null){
        return res.status(400).send(budget);
    }
    return res.status(200).send(budget);
})

envelopeRouter.get('/', (req, res, next) => {
    const envelopesCategories = getAllData();
    res.status(200).send(envelopesCategories);
});

envelopeRouter.get('/:categoryId', (req, res, next) => {
    const category = req.category;
    res.status(200).send(category);
});

envelopeRouter.put('/:categoryId', (req, res, next) => {
    let updatedCategory = updateCategoryDetails(req.body);
    if(updatedCategory === null){
        return res.status(400).send('Nothing updated, because same details!');
    }
    return res.status(200).send(updatedCategory);
});

module.exports = envelopeRouter;