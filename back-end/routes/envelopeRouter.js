const express = require('express');
const envelopeRouter = express.Router();
const {addToDatabase, getAllData, getCategoryById, updateCategoryDetails, subtractBudgetValue, addBudgetValue, deleteCategoryById} = require('../utils/db-functions');


const transferBudget = (req, res, next) => {
    const fromCategoryId = Number(req.params.from);
    const fromCategory = getCategoryById(fromCategoryId);
    const toCategoryId = Number(req.params.to);
    const toCategory = getCategoryById(toCategoryId);
    if(fromCategory === undefined || toCategory === undefined){
        res.status(404).send('One of the category\'s ID is invalid!');
    }
    else{
        req.fromCategory = fromCategory;
        req.toCategory = toCategory;
        next();
    }
}

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
    let budget = subtractBudgetValue(req.category, req.body.amount);
    if(typeof reducedBudget === 'string'){
        return res.status(400).send(budget);
    }
    res.status(200).send(budget);
})

envelopeRouter.post('/transfer/:from/:to', transferBudget, (req, res, next) => {
    const reducedBudget = subtractBudgetValue(req.fromCategory, req.body.amount);
    if(typeof reducedBudget === 'string'){
        return res.status(400).send("Can't transfer to other envelope, because the amount subtracted exceeds the envelope's budget.");
    }
    const increasedBudget =  addBudgetValue(req.toCategory, req.body.amount);
    res.status(200).send('Budget transfered');
});

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
    res.status(200).send(updatedCategory);
});

envelopeRouter.delete('/:categoryId', (req, res, next) => {
    let deletedCategory = deleteCategoryById(req.category);
    res.status(204).send(deletedCategory);
});

module.exports = envelopeRouter;