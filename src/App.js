import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import Table from "./components/Table";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  const addData = (formData) => {
    const newData = [...data, formData];
    setData(newData);
    localStorage.setItem("formData", JSON.stringify(newData));
  };

  const editData = (index, formData) => {
    const newData = [...data];
    newData[index] = formData;
    setData(newData);
    localStorage.setItem("formData", JSON.stringify(newData));
  };

  const deleteData = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
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
