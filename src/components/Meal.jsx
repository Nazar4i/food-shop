import {Link} from "react-router-dom";

function Meal(props) {
    const {
        idMeal: id,
        strMeal: name,
        strMealThumb: thumbnail
    } = props;

    return (
        <div className="card">
            <div className="card-image">
                <img src={thumbnail} alt={name} />
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
            </div>
            <div className="card-action">
                <Link to={`/meal/${id}`} className="btn teal darken-4">View recipe</Link>
            </div>
        </div>
    )
}

export {Meal};