import {useState, useEffect} from 'react';
import {useLocation, useHistory} from 'react-router-dom';
import {getAllCategories} from "../api";
import {Preloader} from "../components/Preloader";
import {CategoryList} from "../components/CategoryList";
import {Search} from "../components/Search";

function Home() {
    const [categories, setCategories] = useState([]);
    const [filteredCategories, setFilteredCategories] = useState([]);

    const {pathname, search} = useLocation();
    const {push} = useHistory();

    const handleSearch = (str) => {
        setFilteredCategories(
            categories.filter((item) => item.strCategory.toLowerCase().includes(str.toLowerCase()))
        )

        push({
            pathname,
            search: `?search=${str}`
        })
    }

    useEffect(() => {
        getAllCategories().then(data => {
            setCategories(data.categories);
            setFilteredCategories(
                search ?
                    data.categories.filter(item =>
                        item.strCategory.toLowerCase().includes(search.split('=')[1].toLowerCase())
                    )
                    : data.categories
            )
        });
    }, [search]);

    return (
        <>
            <Search cb={handleSearch}/>
            {!categories.length ? <Preloader/> : <CategoryList categories={filteredCategories}/>}
        </>
    )
}

export {Home};