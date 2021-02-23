import {useState} from 'react';

function Search({cb=Function.prototype}) {
    const [value, setValue] = useState('');

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            handleSubmit()
        }
    }

    const handleSubmit = () => {
        cb(value);
    }

    return <div className="row">
        <div className="input-field col s12">
            <input type="search"
                    id="search-field"
                    placeholder="Search"
                    onKeyDown={handleKey}
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
            />
            <button
                style={{position: 'absolute', top: 0, right: 0}}
                className="btn deep-purple lighten-1"
                onClick={handleSubmit}>
                    <i className="material-icons">search</i>
            </button>
        </div>
    </div>
}

export {Search};