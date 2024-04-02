import { useLoaderData, useParams } from "react-router-dom";

const ReadBooks = () => {
 

    const books = useLoaderData()

    const {bookId} = useParams()
    const idInt = parseInt(bookId)
    const book = books.find(job => job.bookId === idInt)
    console.log(book);
 
    console.log(books,);
 
    const {bookName, author, yearOfPublishing, publisher, tags, category, rating, totalPages, review, image} = books
 

    return (
        <div>
            <h1>read books {bookId}</h1>

            <div className="hero w-full bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
    <div className="text-start">
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ReadBooks;