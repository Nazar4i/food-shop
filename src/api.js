import {API_URL} from "./config";

//Lookup full meal details by id
const getMealById = async (mealId) => {
    const response = await fetch(API_URL + `lookup.php?i=` + mealId);
    const meal = await response.json();
    return meal;
}

//List all meal categories
const getAllCategories = async () => {
    const response = await fetch(API_URL + 'categories.php');
    const categories = await response.json();
    return categories;
}

//Filter by CategoryItem
const getFilterByCategory = async (categoryName) => {
    const response = await fetch(API_URL + 'filter.php?c=' + categoryName);
    const filteredCategories = await response.json();
    return filteredCategories;
}


export {getMealById, getAllCategories, getFilterByCategory};