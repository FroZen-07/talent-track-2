import React, { useState } from "react";
import SideNavbar from "./SideNavbar";
import { AiOutlineClose } from "react-icons/ai";

function EmployeeForm({
  onFormSubmit,
  fetchBioJoke,
  fetchPicture,
  generateJobId,
}) {
  const [employee, setEmployee] = useState({
    name: "",
    address: "",
    salary: "",
    department: "",
    bioJoke: "",
    pictureUrl: "",
    jobId: "",
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmployee((prevEmployee) => ({ ...prevEmployee, [name]: value }));
    setIsSuccess(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const bioJoke = await fetchBioJoke();
    const pictureUrl = await fetchPicture();
    const jobId = generateJobId();
    onFormSubmit({ ...employee, bioJoke, pictureUrl, jobId });
    setEmployee({
      name: "",
      address: "",
      salary: "",
      department: "",
      bioJoke: "",
      pictureUrl: "",
      jobId: "",
    });
    setIsSuccess(true);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-indigo-500">
      <SideNavbar />
      <div className="flex justify-center items-center ">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg p-12 shadow-sm"
        >
          <h2 className="text-2xl font-extrabold mb-6 text-center  text-indigo-500">
            Add New Employee
          </h2>

          <div className="flex flex-col justify-center items-center ">
            <div className="mb-4">
              <label htmlFor="name" className=" font-medium mb-2 p-4">
                Name:
              </label>
              <input
                type="tex"
                id="name"
                name="name"
                value={employee.name}
                onChange={handleChange}
                pattern="^[a-zA-Z]+(\s[a-zA-Z]+)?$"
                className="w-100 rounded-md bg-gray-100  px-3 py-2 ml-12"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className=" font-medium mb-2 p-4">
                Address:
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={employee.address}
                onChange={handleChange}
                className="w-100 rounded-md bg-gray-100 px-3 py-2 ml-8"
                placeholder="221B Baker's Street"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="salary" className=" font-medium mb-2 p-4 ">
                Salary:
              </label>
              <input
                type="number"
                id="salary"
                name="salary"
                value={employee.salary}
                min={0}
                onChange={handleChange}
                className="w-100 rounded-md bg-gray-100  px-3 py-2 ml-11"
                placeholder="$10000"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="department" className=" font-medium mb-2 p-4">
                Department:
              </label>
              <input
                type="text"
                id="department"
                name="department"
                value={employee.department}
                onChange={handleChange}
                className="w-100 rounded-md bg-gray-100  px-3 py-2"
                placeholder="Front-End Dev"
                required
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className={` rounded-lg  border-solid border-2  px-3 py-2 my-3 mx-1  font-bold ${!isSuccess} ? "border-indigo-600 text-indigo-600 hover:text-white hover:bg-indigo-600 hover:border-collapse" : "bg-gray-200 text-indigo-500"`}
              >
                Submit
              </button>
            </div>
            {isSuccess && (
              <div className="flex justify-between items-center">
                <div>
                  <span className="bg-white border-green-500 text-green-500 font-semibold">
                    Employee Added!
                  </span>
                </div>
                <div>
                  <AiOutlineClose
                    className="fill-green-500 font-bold ml-6 cursor-pointer"
                    onClick={() => setIsSuccess(false)}
                  />
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmployeeForm;
