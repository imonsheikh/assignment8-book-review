import { useLoaderData, useParams } from "react-router-dom";
import { saveBooks } from "../../utils";
import { saveWishBooks } from "../../utils/wishBooks";

const BookDetails = () => {


   const books = useLoaderData()

   const {bookId} = useParams()
   const idInt = parseInt(bookId)
   const book = books.find(job => job.bookId === idInt)
  //  console.log(book);

  //  console.log(books);

   const {bookName, author, yearOfPublishing, publisher, tags, category, rating, totalPages, review, image} = book 




   const handleReadBooks = book => {
      // console.log(book);
      saveBooks(book)
   }

   const handleWishBooks = book => {
    saveWishBooks(book)
   }


    return (
        <div className="">

    <div className="hero h-[711px] mt-10">
  <div className="hero-content flex flex-col lg:flex-row gap-12">
    <div className="bg-[#1313130D] p-16">
    <img src={image} className="rounded-lg w-[570px] h-[564px] p-10" />

    </div>

    <div className="w-1/2 text-start space-y-3">
      <h1 className="text-5xl font-bold">{bookName}</h1>
      <p className="py-6 text-[#131313CC] text-xl font-semibold">By: {author}</p>
      <hr className="text-red-800 w-full" />
      <p className="text-xl text-[#131313CC] font-medium">{category}</p>
      <hr />
      <p><span className="font-extrabold">Review:</span> {review}</p>

      <div className="flex justify-around font-bold ">
            <span className="font-extrabold">Tag: </span>
             <p className="p-2 mx-5 rounded-full bg-[#23be0a0d] text-[#23be0a]">#{tags[0]}</p>

            <p className="p-2 mx-5 rounded-full bg-[#23be0a0d]  text-[#23be0a]">#{tags[1]}</p>
             </div>
             <hr />

               <div className="flex justify-start pt-2 gap-20">
               <ul className="space-y-2">               
             <li>Number of pages: </li>
             <li>Publisher: </li>
             <li>Year of Publishing: </li>
             <li>Rating: </li>
              </ul>
              <ul className="text-start font-bold text-[#131313] space-y-2">
               <li>{totalPages}</li> 
               <li>{publisher}</li> 
               <li>{yearOfPublishing}</li> 
               <li>{rating}</li> 
              </ul>

               </div>
        
             <div className=" flex gap-9 justify-center">
             <button onClick={() => handleReadBooks(book)}  className="btn border border-solid border-red-300 font-bold">Read</button>

      <button onClick={() => handleWishBooks(book)} className="btn bg-[#50B1C9] text-white">Wishlist</button>
             </div>
    
    </div>

    
  </div>
</div>

           
        </div>
    );
};

export default BookDetails;