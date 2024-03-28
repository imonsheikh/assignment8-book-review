import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Books from "../Books/Books";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Books></Books>

            <Outlet></Outlet>
        </div>
    );
};

export default Home;