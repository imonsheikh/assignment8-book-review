
const Book = ({book}) => {

    const {image, bookName, author, rating, category, tags, publisher, yearOfPublishing} = book

    return (
  <div>
          <div className=" p-6 w-96 h-[481px] rounded-md shadow-md border ">

        <div className="p-5 w-96 h-64">
        <img  src={image} alt="" className="object-cover object-center rounded dark:bg-[#f3f3f3] px-24 py-7" />
        </div>

        
        <div className="">
            <h2 className="text-2xl font-semibold tracking-wide">{bookName}</h2>
            <p className="text-rose-500 font-bold"><span className="font-extrabold">By: </span> {author}</p>
             <div className="flex justify-around font-bold ">
             <p className="p-2 mx-5 rounded-full bg-[#23be0a0d] text-[#23be0a]">{tags[0]}</p>

            <p className="p-2 mx-5 rounded-full bg-[#23be0a0d]  text-[#23be0a]">{tags[1]}</p>
             </div>

             <div>
                <p>{category}</p>
                <p>{rating}</p>
             </div>
           
        </div>
        <p className="dark:text-gray-800">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
    </div>
  </div>
    );
};

export default Book;