import styles from "./BookCard.module.scss"
import {useState} from "react";
import { trimValue } from "../../Services/trimValues";

const BookCard = ({book}) => {
    const imgNotFound = "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg";
    return (
        <div className={styles.book_card}>
            <div className={styles.book_card_inner}>
                    <div className={styles.book_card_front}>
                        <img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : imgNotFound} 
                            alt={"Book Cover of \"" + book.volumeInfo.title + "\""}/>
                        <h3>{trimValue(book.volumeInfo.title,80)}</h3>
                        <h5>{book.volumeInfo.authors ? book.volumeInfo.authors[0] : "Author Unkown"}</h5>    
                    </div>

                    <div className={styles.book_card_back}>
                        <p>{book.volumeInfo.description ? trimValue(book.volumeInfo.description, 200) : "No Description"}</p>
                        <p>{book.volumeInfo.publisher ? book.volumeInfo.publisher : "Unknown Publisher"}</p>
                        <h5>Published in {book.volumeInfo.language === "en" ? 
                            "English" : book.volumeInfo.language.toUpperCase()} on {book.volumeInfo.publishedDate}
                        </h5>
                        {book.saleInfo.saleability !== "NOT_FOR_SALE" 
                            && 
                            <a href={book.saleInfo.buyLink} target="_blank">Purchase in {book.saleInfo.country}</a>}
                    </div>
                
                
                
            </div>
            
        </div>

    )
}

export default BookCard;