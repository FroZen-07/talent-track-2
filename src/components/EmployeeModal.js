import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const EmployeeModal = ({ employee, onClose }) => {
  return (
    <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-60"></div>
      <div className="modal-container bg-white w-96 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6 ">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold text-indigo-600">
                {employee.name}
              </h2>
            </div>
            <div className="modal-close relative cursor-pointer">
              <AiOutlineCloseCircle
                onClick={onClose}
                className="h-8 w-8 fill-indigo-600"
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="mt-4  h-30 w-30 rounded-full"
              src={employee.pictureUrl}
              alt="Employee"
            />
          </div>

          <p className="mt-2">
            <span className="font-semibold">Job ID:</span> {employee.jobId}
          </p>
          <p className="mt-2">
            <span className="font-semibold">Address:</span> {employee.address}
          </p>
          <p className="mt-2">
            <span className="font-semibold">Salary:</span> {employee.salary}
          </p>
          <p className="mt-2">
            <span className="font-semibold">Department:</span>{" "}
            {employee.department}
          </p>
          <p className="mt-2">
            <span className="font-semibold">Bio Joke:</span> {employee.bioJoke}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeModal;
