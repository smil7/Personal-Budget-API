const budgetCategories = require('./db');

let categoryIdCounter = budgetCategories.length+1;

const contains = (newCategory) => {
    for (const [key, value] of Object.entries(budgetCategories)){
        if(value.category === newCategory){
            return false;
        }
    }
    return true;
}

const getCategory = (categoryName) => {
    for (const [key, value] of Object.entries(budgetCategories)){
        if(value.category === categoryName){
            return value;
        }
    }
    return null;
}

const addToDatabase = (instance) => {
    const found = contains(instance.category);
    if(!found){
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

const getCategoryByName = (instance) => {
    const category = getCategory(instance);
    return category;
}

module.exports = {addToDatabase, getAllData, getCategoryByName};