import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getBooks } from "../../utils";

const ListedBooks = () => {


	const [tabIndex, setTabIndex] = useState(0)



	
     // books with filter

   const [sortBooks, setSortBooks] = useState([])
   useEffect(() => {
    const storedBooks = getBooks()
    
    setSortBooks(storedBooks)

   }, [])


   const handleBooksSorting = sort => {
    const storedBooks = getBooks()
    if(sort === 'SortBy'){
     setSortBooks(storedBooks)
    }
    else if(sort === 'rating'){
        const rating = storedBooks.sort((a,b) => a.rating - b.rating)
        setSortBooks(rating)
    }
    else if(sort === 'total pages'){
        const totalpages = storedBooks.sort((a,b) => a.totalpages - b.totalpages)
        setSortBooks(totalpages)
    }
  } 
    




    return (
        <div>
            <h2 className="bg-[#1313130D] h-24 text-4xl mt-9 pt-5 font-bold rounded-lg"> Books</h2>
           
           <select name="" id="" className="mt-10 bg-[#23BE0A] text-white p-5 text-xl font-semibold rounded-xl outline-none">

			<option   value="" className="bg-white text-black">SortBy</option>
			<option  onClick={() => handleBooksSorting('rating')} value="" className="bg-white text-black">Rating</option>
			<option  value="" className="bg-white text-black">Number of pages</option>
			<option  value="" className="bg-white text-black">Published Year</option>

			</select>      
        
            <div className="mt-10">
            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark dark:text-gray-800">


   



	<Link to='' onClick={() => setTabIndex(0)}  rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  ${tabIndex === 0? 'border border-b-0': 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
		</svg>
		<span>Read Books</span>
	</Link>

	<Link to='' onClick={() => setTabIndex(1)}  rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  ${tabIndex === 1? 'border border-b-0': 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
			<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
		</svg>
         <Link to={`wishlist`}><span>Wishlist Books</span> </Link>
	</Link>


</div>

    {/* <Outlet></Outlet> */}
    { tabIndex == 0 && <ReadBooks sortData={sortBooks} />}
{ tabIndex == 1 && <WishBooks sortData={sortData} />}

            </div>
        </div>
    );
};

export default ListedBooks;