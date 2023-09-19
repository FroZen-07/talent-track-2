import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeTable from "./components/EmployeeTable";
import EmployeeModal from "./components/EmployeeModal";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeCards from "./components/EmployeeCards";
import "./App.css";

const App = () => {
  const initialEmployeeData = localStorage.getItem("employeeData")
    ? JSON.parse(localStorage.getItem("employeeData"))
    : [];
  const [employeeData, setEmployeeData] = useState(initialEmployeeData);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    localStorage.setItem("employeeData", JSON.stringify(employeeData));
  }, [employeeData]);

  const addEmployee = (employee) => {
    const newEmployee = { ...employee, jobId: generateJobId() };
    const newEmployeeData = [...employeeData, newEmployee];
    setEmployeeData(newEmployeeData);
  };

  const generateJobId = () => {
    const alphanumeric =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let jobId = "";
    for (let i = 0; i < 6; i++) {
      jobId += alphanumeric.charAt(
        Math.floor(Math.random() * alphanumeric.length)
      );
    }
    return jobId;
  };

  const fetchBioJoke = () => {
    return fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => data.joke);
  };

  const fetchPicture = () => {
    const width = 200;
    const height = 200;
    const id = Math.floor(Math.random() * 1000);
    return `https://picsum.photos/id/${id}/${width}/${height}`;
  };

  const deleteEmployee = (employeeToDelete) => {
    const updatedEmployeeData = employeeData.filter(
      (employee) => employee.jobId !== employeeToDelete.jobId
    );
    setEmployeeData(updatedEmployeeData);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <EmployeeForm
                onFormSubmit={addEmployee}
                fetchBioJoke={fetchBioJoke}
                fetchPicture={fetchPicture}
                generateJobId={generateJobId}
              />
            }
          />
        </Routes>

        <Routes>
          <Route
            path="/list"
            element={
              <EmployeeCards
                employeeData={employeeData}
                setSelectedEmployee={setSelectedEmployee}
                deleteEmployee={deleteEmployee}
              />
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/table"
            element={
              <EmployeeTable
                employeeData={employeeData}
                setSelectedEmployee={setSelectedEmployee}
                deleteEmployee={deleteEmployee}
              />
            }
          />
        </Routes>
      </BrowserRouter>
      {selectedEmployee && (
        <EmployeeModal
          employee={selectedEmployee}
          onClose={() => setSelectedEmployee(null)}
        />
      )}
    </div>
  );
};

export default App;
