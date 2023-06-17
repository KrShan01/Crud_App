import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import Table from "./components/Table";
import "./App.css";

const App = () => {
  // State to store the form data
  const [data, setData] = useState([]);

  useEffect(() => {
    // On component mount, retrieve data from local storage (if available)
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  const addData = (formData) => {
    // Add new data to the existing data array
    const newData = [...data, formData];
    setData(newData);

    // Store the updated data in local storage
    localStorage.setItem("formData", JSON.stringify(newData));
  };

  const editData = (index, formData) => {
    // Edit data at a specific index in the data array
    const newData = [...data];
    newData[index] = formData;
    setData(newData);

    // Update the data in local storage
    localStorage.setItem("formData", JSON.stringify(newData));
  };

  const deleteData = (index) => {
    // Remove data at a specific index from the data array
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);

    // Update the data in local storage
    localStorage.setItem("formData", JSON.stringify(newData));
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/form" element={<Form addData={addData} />} />
          <Route
            path="/"
            element={
              <Table data={data} editData={editData} deleteData={deleteData} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
