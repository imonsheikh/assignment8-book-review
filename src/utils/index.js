import toast from "react-hot-toast"


//get 
export const getBooks = () => {
    let books = []
    const storedBooks = localStorage.getItem('books')
    if(storedBooks){
      books = JSON.parse(storedBooks)
    }

    return books
}

//save 
export const saveBooks = book => {
let books = getBooks()
const isExist = books.find(b => b.bookId === book.bookId)
console.log(isExist);
// console.log(book);

if(isExist) {
   return toast.error('Already Read!')

}
else{

  books.push(book)
  localStorage.setItem('books', JSON.stringify(books))
  // console.log(books);
  toast.success('Book add to read list Successfully!')
}
 
}

//delete 
//  export const deleteBooks = id => {
//     let books = getBooks()
//     const remaining = books.filter(b => b.id !== id)
//     localStorage.setItem('books', JSON.stringify(remaining))
//     toast.success('Book removed from read list!')

//  }




