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
        <div className="mx-auto">
            <div className="text-center my-12 text-3xl font-bold">
            <h2>Books</h2>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 md:gap-5">
                {
                    books.map(book => <Book book={book} key={book.bookId}></Book>)
                }
            </div>
        </div>
        
    );
};

export default Books;