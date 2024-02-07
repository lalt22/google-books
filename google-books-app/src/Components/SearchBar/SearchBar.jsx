import {useState} from 'react';
import "./SearchBar.module.scss";
const SearchBar = ({ setSearchTerm, bookData, setBookData }) => {
    const [inputValue, setInputValue] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setSearchTerm(inputValue);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleClear = (e) => {
        setSearchTerm("");
        setBookData(null);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" onChange={handleInputChange} />
            <button type="submit">Search</button>
            {bookData && <button type="reset" onClick={handleClear}>Clear</button>}
        </form>
    )
}

export default SearchBar;