import toast from "react-hot-toast"
import { getBooks} from "."


//get 
export const getWishBooks = () => {
    let WishBooks = []
    const storedBooks = localStorage.getItem('WishBooks')
    if(storedBooks){
      WishBooks = JSON.parse(storedBooks)
    }

    return WishBooks
}

//save 
export const saveWishBooks = WishBook => {
let WishBooks = getWishBooks()
const isExist = WishBooks.find(b => b.bookId === WishBook.bookId)
console.log(isExist);
// console.log(book);

if(isExist) {
   return toast.error('You already add to wishlist')

}
else{
   
    
    let books = getBooks()
    const isExist = books.find(b => b.bookId === WishBook.bookId)

  if(isExist){
   toast.error('you already read this book')
  }
  else{
    WishBooks.push(WishBook)
    localStorage.setItem('WishBooks', JSON.stringify(WishBooks))
    // console.log(books);
    toast.success('Book add to Wish list Successfully!')
  }

 
}
 
}