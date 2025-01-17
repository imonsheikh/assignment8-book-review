import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({book}) => {

    const {image, bookName, author, rating, category, tags,bookId} = book;

    return (
  <Link to={`/book/${bookId}`}>
          <div className=" md:p-6 p-10  md:h-[481px] rounded-md shadow-md border">

        <div className="md:p-5 md:h-64 flex justify-center">
        <img  src={image} alt="" className="object-cover object-center rounded dark:bg-[#f3f3f3] md:px-14 md:py-3 px-40 py-7" />
        </div>
        
        <div className="">
            <h2 className="text-2xl font-semibold tracking-wide">{bookName}</h2>
            <p className="text-rose-500 font-bold"><span className="font-extrabold">By: </span> {author}</p>
             <div className="flex justify-around font-bold ">
             <p className="p-2 mx-5 rounded-full bg-[#23be0a0d] text-[#23be0a]">{tags[0]}</p>

            <p className="p-2 mx-5 rounded-full bg-[#23be0a0d]  text-[#23be0a]">{tags[1]}</p>
             </div>
             <br />
             <div className="flex justify-between">
                <p>{category}</p>
                <div className="flex">
                <p>{rating}</p>
                <CiStar className="mt-1"></CiStar>                
               
                </div>
            

            </div>
           
        </div>
  
    </div>
  </Link>
    );
};

export default Book;