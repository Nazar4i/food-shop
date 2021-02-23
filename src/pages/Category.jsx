import {useEffect, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {getFilterByCategory} from "../api";
import {Preloader} from "../components/Preloader";
import {MealsList} from "../components/MealsList";

function Category() {
    const [meals, setMeals] = useState([]);
    const {name} = useParams();
    const {goBack} = useHistory();

    useEffect(() => {
        getFilterByCategory(name)
            .then((data) => {setMeals(data.meals)})
    }, [name])

    return (
        <>
            <button className="btn teal darken-4"
                    style={{display: 'flex', alignItems: 'center'}}
                    onClick={goBack}>
                <i className="material-icons">arrow_back</i>
                Back
            </button>
            {!meals.length ? <Preloader /> : <MealsList meals={meals} />}
        </>
        )
}

export {Category}