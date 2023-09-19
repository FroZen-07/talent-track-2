import React, { useState } from "react";
import {
  AiOutlineEye,
  AiOutlineDelete,
  AiOutlineSearch,
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";
import Header from "./Header";

const EmployeeCards = ({
  employeeData,
  setSelectedEmployee,
  deleteEmployee,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSortDescending, setIsSortDescending] = useState(false);

  const filteredEmployeeData = employeeData
    .filter((employee) =>
      employee.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) return isSortDescending ? 1 : -1;
      if (nameA > nameB) return isSortDescending ? -1 : 1;
      return 0;
    });

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSort = () => {
    setIsSortDescending(!isSortDescending);
  };
  return (
    <div>
      <Header />

      <div className="flex justify-center items-center mb-4">
        <div>
          <AiOutlineSearch className="fill-indigo-500 w-6 h-6" />
        </div>
        <div>
          <input
            type="text"
            placeholder="Search by name"
            value={searchQuery}
            onChange={handleSearch}
            className="w-full py-2 px-4 rounded border-gray-400 focus:border-indigo-500 focus:outline-none text-center"
          />
        </div>
        <div>
          <button
            onClick={handleSort}
            className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 ml-2"
          >
            {isSortDescending ? (
              <AiOutlineSortDescending className="fill-indigo-500 w-6 h-6" />
            ) : (
              <AiOutlineSortAscending className="fill-indigo-500 w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 mx-80 my-8 content-center w-3/5 gap-4">
        {filteredEmployeeData.map((employee) => (
          <div
            key={employee.jobId}
            className="bg-white rounded-lg border-4 border-gray-100"
          >
            <div className="flex flex-col items-center">
              <img
                className="mt-4  h-20 w-20 rounded-full"
                src={employee.pictureUrl}
                alt="Employee"
              />
            </div>
            <div className="p-4">
              <div className="font-bold text-xl text-indigo-500 text-center mb-2">
                {employee.name}
              </div>
              <div className="font-semibold text-md text-center mb-1">
                Job Id : {employee.jobId}
              </div>
              <div className="text-gray-700 text-base">{employee.bioJoke}</div>
              <div className="flex justify-end mt-4">
                <div className="mr-2 cursor-pointer">
                  <AiOutlineEye
                    className="inline-block fill-indigo-500 w-6 h-6"
                    onClick={(event) => setSelectedEmployee(employee)}
                  />
                </div>
                <div className="cursor-pointer">
                  <AiOutlineDelete
                    className="inline-block fill-red-500 w-6 h-6"
                    onClick={(event) => deleteEmployee(employee)}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeCards;
