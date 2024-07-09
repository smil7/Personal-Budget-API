const budgetCategories = require('./db');

let categoryIdCounter = budgetCategories.length;

const contains = (newCategory) => {
    for (const [key, value] of Object.entries(budgetCategories)){
        if(value.category === newCategory){
            return true;
        }
    }
    return false;
}

const getCategory = (categoryId) => {
    return budgetCategories.findIndex(category => category.id === categoryId);
}

const addToDatabase = (instance) => {
    const found = contains(instance.category);
    if(found){
        return null;
    }
    else{
        instance.id = ++categoryIdCounter;
        budgetCategories.push(instance);
        return budgetCategories[budgetCategories.length - 1];
    }
}

const getAllData = () => {
    return budgetCategories;
}

const getCategoryById = (categoryId) => {
    const categoryIndex = getCategory(categoryId);
    return budgetCategories[categoryIndex];
}

// Updates the category's details by the PUT request
const updateCategoryDetails = (instance) => {
    const categoryIndex = getCategory(instance.id);

    if(instance.category !== budgetCategories[categoryIndex].category){
        budgetCategories[categoryIndex].category = instance.category;
    }
    if(instance.budget !== budgetCategories[categoryIndex].budget){
        budgetCategories[categoryIndex].budget = instance.budget;
    }

    return budgetCategories[categoryIndex];
}

// Updates the value of the budget by the POST request
const subtractBudgetValue = (instance, amount) => {
    if(!(amount > instance.budget)){
        instance.budget = Math.abs(amount - instance.budget);
        return instance.budget;
    }
    return 'The amount sent exceeds the envelope\'s budget!';
}

const addBudgetValue = (instance, amount) => {
    instance.budget = Math.abs(amount + instance.budget);
    return instance.budget;
}

const deleteCategoryById = (instance) => {
    const categoryIndex = getCategory(instance.id);
    categoryIdCounter--;
    return budgetCategories.splice(categoryIndex, 1);
}

module.exports = {addToDatabase, getAllData, getCategoryById, updateCategoryDetails, subtractBudgetValue, addBudgetValue, deleteCategoryById};