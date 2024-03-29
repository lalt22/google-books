import SearchBar from "../../Components/SearchBar/SearchBar.jsx";
import {useState, useEffect}  from 'react';

import { fetchBookData } from '../../data/getBookData';
import SearchResults from "../../Containers/SearchResults/SearchResults";

import styles from "./BookLoader.module.scss";

const BookLoader = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [bookData, setBookData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(!searchTerm) {
            return;
        }
        setLoading(true);
        fetchBookData(searchTerm)
        .then((result) => {
            setBookData(result);
        })
        .catch((e) => {
            setBookData(null);
        })
        .finally((r) => {
            setLoading(false);
        })
    }, [searchTerm])

    console.log(bookData, "bookData");

    return (
        <div className={styles.book_loader}>
            <div className={styles.header_bar}>
                <h1>Search For Books</h1>
                <SearchBar setSearchTerm={setSearchTerm} bookData={bookData} setBookData={setBookData}/>
            </div>
            
            <div className={styles.book_data}>
                {loading && <p>Loading</p>}
                {!searchTerm && <h3>Search for books. Will search for corresponding book names, authors, descriptions and more.</h3>}
                {!loading && searchTerm && bookData && <SearchResults bookData={bookData}/>}
            </div>
            
        </div>
        
    )
}

export default BookLoader;