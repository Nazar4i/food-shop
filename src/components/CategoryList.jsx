import {CategoryItem} from './CategoryItem';

function CategoryList(props) {
    const {categories = []} = props;

    return (
        <div className="category-list">
            {categories.map(el => (<CategoryItem key={el.idCategory} {...el} />))}
        </div>
    )
}

export {CategoryList};