import {Meal} from "./Meal";

function MealsList({meals}) {
    return (
        <div className="category-list">
            {meals.map(meal => (<Meal key={meal.idMeal} {...meal} />))}
        </div>
    )
}

export {MealsList};