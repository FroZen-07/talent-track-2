import React, { useState } from "react";
import {
  AiOutlineEye,
  AiOutlineDelete,
  AiOutlineSearch,
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";
import Header from "./Header";

const EmployeeTable = ({
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

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-indigo-500 text-white">
            <th className="py-2 px-4 text-left">Picture</th>
            <th className="py-2 px-4 text-center ">Name</th>
            <th className="py-2 px-4 text-center">Job ID</th>

            <th className="py-2 px-4 text-center">BioJoke</th>
            <th className="py-2 px-4 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployeeData.map((employee) => (
            <tr
              key={employee.jobId}
              className="border hover:bg-gray-200 hover:shadow-md"
            >
              <td className="p-4">
                <img
                  src={employee.pictureUrl}
                  alt={`${employee.name}`}
                  className="w-16 h-16 rounded-full"
                />
              </td>
              <td class="py-2 px-4 font-semibold">{employee.name}</td>
              <td class="py-2 px-4 font-semibold">{employee.jobId}</td>
              <td class="py-2 px-4  font-normal">{employee.bioJoke}</td>
              <td class="py-2 px-4 flex justify-center items-center">
                <AiOutlineEye
                  className="mr-2 w-8 h-8 fill-indigo-500 cursor-pointer"
                  onClick={(event) => setSelectedEmployee(employee)}
                />

                <AiOutlineDelete
                  className="w-8 h-8 fill-red-600 cursor-pointer"
                  onClick={(event) => deleteEmployee(employee)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
