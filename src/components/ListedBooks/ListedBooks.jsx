import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getBooks } from "../../utils";
import ReadBooks from "../ReadBooks/ReadBooks";
import WishlistBooks from "../WishlistBooks/WishlistBooks";
import { getWishBooks } from "../../utils/wishBooks";



const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);


  // books with filter
  const [sortBooks, setSortBooks] = useState([]);
  const [wishBooks, setWishBooks] = useState([]);
  useEffect(() => {
    const storedBooks = getBooks();

    setSortBooks(storedBooks);
  }, []);

  useEffect(() => {
    const storedBooks = getWishBooks();

    setWishBooks(storedBooks);
  }, []);




  const handleBooksSorting = (sort) => {

    // method 01 
  //   if(sort == 'rating'){
  //    console.log(sortBooks);
  //    const a = [...sortBooks].sort((a,b) => b.rating - a.rating)
  //   const b = wishBooks.sort((a,b) => b.rating - a.rating)
  //    console.log(a);
  //    setSortBooks(a)

  //  }
   
    //method 02 
    console.log("SORT", sort);
    if (tabIndex == 0) {
      const storedBooks = getBooks();
      if (sort === "SortBy") {
        setSortBooks(storedBooks);
      } else if (sort === "rating") {
        const rating = storedBooks.sort((a, b) => b.rating - a.rating);
        console.log(rating);
        setSortBooks(rating);
      } else if (sort === "totalPages") {
        const totalPages = storedBooks.sort(
          (a, b) => b.totalPages - a.totalPages
        );
        setSortBooks(totalPages);
      }else if (sort === "yearOfPublishing") {
        const yearOfPublishing = storedBooks.sort(
          (a, b) => b.yearOfPublishing - a.yearOfPublishing
        );
        setSortBooks(yearOfPublishing);
      } 
    }


     else {
      const storedBooks = getBooks();
      if (sort === "SortBy") {
        setWishBooks(storedBooks);
      } else if (sort === "rating") {
        const rating = storedBooks.sort((a, b) => b.rating - a.rating);
        console.log(rating);
        setWishBooks(rating);
      } else if (sort === "totalPages") {
        const totalPages = storedBooks.sort(
          (a, b) => b.totalPages - a.totalPages
        );
        setWishBooks(totalPages);
      }else if (sort === "yearOfPublishing") {
        const yearOfPublishing = storedBooks.sort(
          (a, b) => b.yearOfPublishing - a.yearOfPublishing
        );
        setWishBooks(yearOfPublishing);
      } 
    }
  };





  return (
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="bg-[#1313130D] h-24 text-4xl mt-9 pt-5 font-bold rounded-lg text-center">
        
        Books
      </h2>
   

      <select
        name=""
        id=""
        className="mt-10 bg-[#23BE0A] text-white p-5 text-xl font-semibold rounded-xl outline-none text-center"
        onChange={(e) => handleBooksSorting(e.target.value)}
      >
        <option value="SortBy" className="bg-white text-black">
          SortBy
        </option>
        <option value="rating" className="bg-white text-black">
          <span>Rating</span>
        </option>
        <option value="totalPages" className="bg-white text-black">
          Number of pages
        </option>
        <option value="yearOfPublishing" className="bg-white text-black">
          Published Year
        </option>
      </select>

      <div className="mt-10">
        <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark dark:text-gray-800">
          <Link
            to=""
            onClick={() => setTabIndex(0)}
            rel="noopener noreferrer"
            href="#"
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  ${
              tabIndex === 0 ? "border border-b-0" : "border-b"
            } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>Read Books</span>
          </Link>

          <Link
            to=""
            onClick={() => setTabIndex(1)}
            rel="noopener noreferrer"
            href="#"
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  ${
              tabIndex === 1 ? "border border-b-0" : "border-b"
            } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            <span>Wishlist Books</span>{" "}
          </Link>
        </div>



        {/* <Outlet></Outlet> */}
        {tabIndex == 0 && <ReadBooks books={sortBooks} />}
        {tabIndex == 1 && <WishlistBooks books={wishBooks} />}
      </div>
    </div>
  );
};

export default ListedBooks;
