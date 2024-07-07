const {budgetCategories} = require('./db');

let categoryIdCounter = budgetCategories.length;

const contains = (newCategory) => {
    for (const [key, value] of Object.entries(budgetCategories)){
        if(key === newCategory){
            return true;
        }
    }
    return false;
}

const addToDatabase = (instance) => {
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