import {useEffect, useState} from 'react';
import "./SearchBar.module.scss";
import search from "../../assets/search.png";
const SearchBar = ({ setSearchTerm, bookData, setBookData, setNoSearchTerm }) => {
    const [inputValue, setInputValue] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (inputValue == "") {
            setNoSearchTerm(true);
        }
        setSearchTerm(inputValue);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleClear = (e) => {
        setInputValue("");
        setSearchTerm("");
        document.getElementById("searchForm").reset();
        setBookData(null);
    }
    
    return (
        <form id='searchForm' onSubmit={handleFormSubmit}>
            <input type="text" onChange={handleInputChange} />
            <button type="submit"><img src={search}></img></button>
            {bookData && <button type="reset" onClick={handleClear}>Clear</button>}
        </form>
    )
}

export default SearchBar;