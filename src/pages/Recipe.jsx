import {useParams, useHistory} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {getMealById} from "../api";
import {Preloader} from "../components/Preloader";

function Recipe() {
    const {id} = useParams();
    const {goBack} = useHistory();
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        getMealById(id)
            .then(data => setRecipe(data.meals[0]));
    }, [id])

    return <>
        <button className="btn teal darken-4"
                style={{display: 'flex', alignItems: 'center'}}
                onClick={goBack}>
            <i className="material-icons">arrow_back</i>
            Back
        </button>
        {!recipe.idMeal ? <Preloader /> : (
            <div className="recipe">
                <h1>{recipe.strMeal}</h1>
                <h6>Category: {recipe.strCategory}</h6>
                {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
                <img src={recipe.strMealThumb} alt={recipe.strMeal}/>
                <p>{recipe.strInstructions}</p>
                <table className="centered">
                    <thead>
                        <tr>
                            <th>Ingredient</th>
                            <th>Measure</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            Object.keys(recipe).map(key => {
                                if(key.includes('Ingredient') && recipe[key]) {
                                    return (
                                        <tr key={key}>
                                            <td>{recipe[key]}</td>
                                            <td>
                                                {
                                                    recipe[`strMeasure${key.slice(13)}`]
                                                }
                                            </td>
                                        </tr>
                                    )
                                }
                                return null;
                            })
                        }
                    </tbody>
                </table>

                {recipe.strYoutube ? (
                    <div className="row">
                        <h5>Video recipe</h5>
                        <iframe title={recipe.strMeal}
                                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}
                                frameBorder="0" allowFullScreen />
                    </div>
                ) : null}
            </div>
        )}
    </>
}

export {Recipe}