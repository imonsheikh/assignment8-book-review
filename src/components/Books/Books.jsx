import { useEffect } from "react";
import { useState } from "react";
import Book from "../Book/Book";

const Books = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('/books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])



    return (
        <div>
            <div>
            <h2>Books</h2>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-2">
                {
                    books.map(book => <Book book={book} key={book.bookId}></Book>)
                }
            </div>
        </div>
        
    );
};

export default Books;