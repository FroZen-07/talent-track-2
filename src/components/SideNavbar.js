import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineForm,
  AiOutlineUnorderedList,
  AiOutlineTable,
} from "react-icons/ai";

function SideNavbar() {
  return (
    <div className="flex flex-col bg-indigo-500 h-96 px-16 py-6 text-white rounded-lg">
      <div className="flex items-center justify-center h-16">
        <h1 className="text-lg md:text-2xl xl:text-3xl font-extrabold pl-6 text-center">
          Talent Track
        </h1>
      </div>
      <div className="flex flex-col items-end  font-bold text-xl mt-20">
        <nav className=" cursor-pointer hover:text-gray-200  mb-12 ">
          <Link to="/">
            <div className="flex justify-center items-center">
              <div>
                <AiOutlineForm className="w-8 h-8 mr-4" />
              </div>
              <div>Form</div>
            </div>
          </Link>
        </nav>
        <nav className=" cursor-pointer hover:text-gray-200 mr-4 mb-12">
          <Link to="/list">
            <div className="flex justify-center items-center">
              <div>
                <AiOutlineUnorderedList className="w-8 h-8 mr-4" />
              </div>
              <div>List</div>
            </div>
          </Link>
        </nav>
        <nav className=" cursor-pointer hover:text-gray-200 ">
          <Link to="/table">
            <div className="flex justify-center items-center">
              <div>
                <AiOutlineTable className="w-8 h-8 mr-4 ml-2" />
              </div>
              <div>Table</div>
            </div>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default SideNavbar;
