import { CiLocationOn } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineInsertPageBreak } from "react-icons/md";
import { Link } from "react-router-dom";




const WishBookS = ({book}) => {

    const {bookName, author, yearOfPublishing, publisher, tags, category, rating, totalPages, image, bookId} = book
     console.log(author);
    


    return (
        <div>
    
    <div className="hero">
  <div className="hero-content flex-col lg:flex-row border mt-7 rounded-2xl w-full justify-start">
    <div className="">
    <img className="bg-base-200 w-60 h-56 p-10 rounded-2xl" src={image} />
      
    </div>
    <div className="text-start">
      <h3 className="text-2xl font-bold text-[#131313]">{bookName}</h3>
      <p className="py-6 text-[#131313CC] text-xl font-semibold">By: {author}</p>
     
      <div className="flex justify-around font-bold text-xl">
            <p className="font-extrabold mt-1">Tag: </p>
             <p className="p-2 mx-5 rounded-full bg-[#23be0a0d] text-[#23be0a]">#{tags[0]}</p>

            <p className="p-2 mx-5 rounded-full bg-[#23be0a0d]  text-[#23be0a]">#{tags[1]}</p>

            <div className="flex">
                <CiLocationOn className="mr-1 mt-1 text-2xl"></CiLocationOn>
            <p className="mt-1 text-[#34323cd4] text-xl">Year of Publishing: {yearOfPublishing}</p>            
            </div>
             </div>

             <div className="flex gap-4 mb-2 text-[#13131399] text-xl mt-4 font-semibold">
                <FaUserFriends></FaUserFriends>
                <p>Publisher: {publisher}</p>
                <MdOutlineInsertPageBreak></MdOutlineInsertPageBreak>
                <p>Page: {totalPages}</p>
            </div>
            <hr className="mb-5" /> 
            <div className="flex gap-4">
                <p className="bg-[#328EFF26] rounded-full text-[#328EFF] pt-3 p-4 text-lg font-semibold">Category: {category}</p>

                <p className="bg-[#FFAC3326] text-[#FFAC33] px-10 py-4 rounded-full text-xl font-semibold">rating: {rating}</p>
                
                <Link to={`/book/${bookId}`}>
                <button className="btn bg-[#23BE0A] text-white rounded-full px-10 text-2xl">view details</button>
                
                </Link>

            </div>

    </div>
  </div>
</div>
        </div>
    );
};




export default WishBookS;