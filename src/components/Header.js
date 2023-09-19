import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className=" bg-white text-indigo-500  flex justify-between items-center">
        <div>
          <h1 className="text-lg md:text-2xl xl:text-3xl font-extrabold pl-6">
            Talent Track
          </h1>
        </div>
        <div className="flex pr-40 font-bold text-xl">
          <nav className=" cursor-pointer hover:text-gray-200 hover:bg-indigo-700 p-4">
            <Link to="/">Form</Link>
          </nav>
          <nav className=" cursor-pointer hover:text-gray-200 hover:bg-indigo-700 p-4">
            <Link to="/list">List</Link>
          </nav>
          <nav className=" cursor-pointer hover:text-gray-200 hover:bg-indigo-700 p-4">
            <Link to="/table">Table</Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
