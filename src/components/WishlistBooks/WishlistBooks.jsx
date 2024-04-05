// import { useEffect, useState } from "react";
// import { getWishBooks } from "../../utils/wishBooks";
import WishBookS from "../WishBookS/WishBookS";



const WishlistBooks = ({books}) => {


//    const [books, setBooks] = useState([])

//     useEffect(() => {
//       const storedBooks = getWishBooks()
      
//       setBooks(storedBooks)
//      }, [])
//     console.log(books);




    return (

        <div>
            <h1>I am wish books</h1>
            {
                    books.map(book => <WishBookS book={book} key={book.bookId}></WishBookS>)
                }

        </div>
    );
};

export default WishlistBooks;