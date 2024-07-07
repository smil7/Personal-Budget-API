const budgetCategories = require('./db');

let categoryIdCounter = budgetCategories.length+1;

const contains = (newCategory) => {
    for (const [key, value] of Object.entries(budgetCategories)){
        if(value.category === newCategory){
            return true;
        }
    }
    return false;
}

const addToDatabase = (instance) => {
    console.log(instance.category);
    const found = contains(instance.category);
    if(found){
        return null;
    }
    else{
        instance.id = categoryIdCounter++;
        budgetCategories.push(instance);
        return budgetCategories[budgetCategories.length - 1];
    }
}

const getAllData = () => {
    return budgetCategories;
}

module.exports = {addToDatabase, getAllData};