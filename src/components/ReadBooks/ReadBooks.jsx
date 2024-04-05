// import { useEffect, useState } from "react";
// import { getBooks } from "../../utils";
import ReadBooksP from "../ReadBooksP/ReadBooksP";



const ReadBooks = ({books}) => {

   
    //books without filter
//    const [books, setBooks] = useState([])
//     useEffect(() => {
//       const storedBooks = getBooks()
      
//       setBooks(storedBooks)
//      }, [])
//     console.log(books);











    return (

        <div>
            {
                    books.map(book => <ReadBooksP book={book} key={book.bookId}></ReadBooksP>)
                }

        </div>
    );
};

export default ReadBooks;