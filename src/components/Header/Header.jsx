import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h2>Nabbar</h2>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/listed-books">Listed Books</Link>
                <Link to="/pages-to-read">Pages to read</Link>
            </nav>
        </div>
    );
};

export default Header;