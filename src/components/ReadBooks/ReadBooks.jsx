import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { getBooks } from "../../utils";
import ReadBooksP from "../ReadBooksP/ReadBooksP";
import BookDetails from "../BookDetails/BookDetails";



const ReadBooks = () => {


   const [books, setBooks] = useState([])

    useEffect(() => {
      const storedBooks = getBooks()
      
      setBooks(storedBooks)
     }, [])
    console.log(books);




    return (

        <div>
            <h1>read books instead of bookmarks</h1>
            {
                    books.map(book => <ReadBooksP book={book} key={book.bookId}></ReadBooksP>)
                }

        </div>
    );
};

export default ReadBooks;