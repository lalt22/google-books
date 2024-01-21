import styles from "./BookCard.module.scss"
import {useState} from "react";
import { trimValue } from "../../Services/trimValues";

const BookCard = ({book}) => {
    const [showDetails, setShowDetails] = useState(false);
    const handleClick = () => {
        setShowDetails(!showDetails);
    }
    return (
        <div className={styles.book_card} >
            {showDetails && <div>
                <p>{book.volumeInfo.description ? trimValue(book.volumeInfo.description, 200) : "No Description"}</p>
                <p>{book.volumeInfo.publisher ? book.volumeInfo.publisher : "Unknown Publisher"}</p>
                <h5>Published in {book.volumeInfo.language === "en" ? 
                    "English" : book.volumeInfo.language.toUpperCase()} on {book.volumeInfo.publishedDate}
                </h5>
                {book.saleInfo.saleability !== "NOT_FOR_SALE" 
                    && 
                    <a href={book.saleInfo.buyLink} target="_blank">Purchase in {book.saleInfo.country}</a>}
                </div>}

            {!showDetails && <div>
                <img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "No Image Available"} 
                    alt={"Book Cover of \"" + book.volumeInfo.title + "\""}/>
                <h3>{trimValue(book.volumeInfo.title,80)}</h3>
                <h5>{book.volumeInfo.authors ? book.volumeInfo.authors[0] : "Author Unkown"}</h5>    
                </div>}
            <button onClick={() => handleClick()}>{showDetails ? "See Less Info ": "See More Info"}</button> 
        </div>

    )
}

export default BookCard;