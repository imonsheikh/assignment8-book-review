import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero h-[554px] bg-base-200 rounded-3xl px-28 py-3 mt-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://i.ibb.co/VYmptnV/pngwing-1.png" className="max-w-sm rounded-lg" />
          <div className="text-start ">
            <h1 className="text-5xl font-bold mb-10">Books to freshen up your bookshelf</h1>
             
             <Link to="/listed-books">
            <button className="btn bg-[#23BE0A] text-[#FFFFFF]">View the list</button>
             </Link>
          </div>
        </div>
      </div>
    );
};

export default Banner;