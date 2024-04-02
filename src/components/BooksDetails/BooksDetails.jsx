import { useEffect, useState } from 'react';
import BookDetails from '../BookDetails/BookDetails';
import { getBooks } from '../../utils';

const BooksDetails = () => {
    const [books, setBooks] = useState([])

    // useEffect(() => {
    //     fetch('/books.json')
    //     .then(res => res.json())
    //     .then(data => setBooks(data))
    // }, [])

    useEffect(() => {
      const storedBooks = getBooks()
      setBooks(storedBooks)
    }, [])



    return (
        <div>
            <div>
            <h2>Book details</h2>
            </div>
            <div className="grid justify-center grid-cols-1 gap-6 ">
                {
                    books.map(book => <BookDetails book={book} key={book.bookId}></BookDetails>)
                }
            </div>
        </div>
        
    );
};

export default BooksDetails;
