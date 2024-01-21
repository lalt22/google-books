//Function will make the API fetch call and update the state var
//TODO: Clean up this data
export const fetchBookData = async (searchTerm) => {
    console.log("IN FETCHING");
    const apiKey = "AIzaSyC8dOxZOxPY9oe9ZqWBl4349My7ZRTgnFw";
    console.log("Search term = " + searchTerm);
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${apiKey}&maxResults=20`;
    console.log("Fetching from: " + url);
    const fetchedBooks = await fetch(url);          
    const bookObject = await fetchedBooks.json(); 
    console.log("Printing fetched data: " + bookObject);
    return bookObject;
}

     