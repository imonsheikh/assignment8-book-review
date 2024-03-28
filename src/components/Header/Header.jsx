import { NavLink } from "react-router-dom";

const Header = () => {

    const links = <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/listed-books">Listed Books</NavLink></li>
            <li><NavLink to="/pages-to-read">Pages To Read</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
 
    </>


    return (
        <div className="navbar max-w-6xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
             {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Books Jone</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {links}
          </ul>
        </div>
        <div className="navbar-end flex gap-5">
          <a className="btn w-28 h-14">Sign In</a>
          <a className="btn  w-28 h-14">Sign Up</a>
        </div>
      </div>
    );
};

export default Header;