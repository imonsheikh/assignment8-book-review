import Books from "../Books/Books";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Banner></Banner>
            <Books></Books>

        </div>
    );
};

export default Home;