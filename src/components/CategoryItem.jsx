import {Link} from "react-router-dom";

function CategoryItem(props) {
    const {
        strCategory: name,
        strCategoryDescription: description,
        strCategoryThumb: thumbnail
    } = props;

    return (
        <div className="card">
            <div className="card-image">
                <img src={thumbnail} alt={name} />
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>{description.slice(0, 60)}...</p>
            </div>
            <div className="card-action">
                <Link to={`/category/${name.toString().toLocaleLowerCase()}`}
                      className="btn teal darken-4">
                      View category
                </Link>
            </div>
        </div>
    )
}

export {CategoryItem};