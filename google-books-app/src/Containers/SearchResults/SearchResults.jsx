import BookCard from '../../Components/BookCard/BookCard';
import styles from "./SearchResults.module.scss";

const SearchResults = ({bookData}) => {
    let dataExists = (bookData.totalItems > 0);
    return (
        <div>
        {dataExists && <div className={styles.cards_container}>
            {bookData && bookData.items.map((book) => {return <BookCard book={book} key={book.id}/>})}
        </div> 
        }
        {!dataExists && <h3>No Book Found, Please Try Again.</h3>}
    </div>  
    )
}

export default SearchResults;