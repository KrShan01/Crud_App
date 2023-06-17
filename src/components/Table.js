import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Table.css";

const Table = ({ data, editData, deleteData }) => {
  // State variables to track the index of the row being edited and the edited data
  const [editIndex, setEditIndex] = useState(null);
  const [editedData, setEditedData] = useState({});

  // Handle the edit button click event
  const handleEdit = (index, rowData) => {
    setEditIndex(index);
    setEditedData(rowData);
  };

  // Handle the save button click event
  const handleSave = (index) => {
    editData(index, editedData); // Call the parent component's editData function to update the data

    // Reset the edit index and edited data
    setEditIndex(null);
    setEditedData({});
  };

  // Handle the cancel button click event
  const handleCancel = () => {
    // Reset the edit index and edited data
    setEditIndex(null);
    setEditedData({});
  };

  // Handle input change event in the edit mode
  const handleInputChange = (e) => {
    // Update the edited data with the new input value
    setEditedData({ ...editedData, [e.target.name]: e.target.value });
  };

  return (
    <div className="table-container">
      <div className="box">
        <h2 className="table-heading">Profiles</h2>
        <Link to="/form" className="add-profile-button">
          Add new profile
        </Link>
        <table className="modern-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>City</th>
              <th>State</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                {index === editIndex ? (
                  <>
                    <td>
                      <input
                        type="text"
                        name="firstName"
                        value={editedData.firstName || item.firstName}
                        onChange={handleInputChange}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="lastName"
                        value={editedData.lastName || item.lastName}
                        onChange={handleInputChange}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="phoneNumber"
                        value={editedData.phoneNumber || item.phoneNumber}
                        onChange={handleInputChange}
                      />
                    </td>
                    <td>
                      <input
                        type="email"
                        name="email"
                        value={editedData.email || item.email}
                        onChange={handleInputChange}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="gender"
                        value={editedData.gender || item.gender}
                        onChange={handleInputChange}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        name="dob"
                        value={editedData.dob || item.dob}
                        onChange={handleInputChange}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="city"
                        value={editedData.city || item.city}
                        onChange={handleInputChange}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="state"
                        value={editedData.state || item.state}
                        onChange={handleInputChange}
                      />
                    </td>
                    <td>
                      <button
                        className="save-button"
                        onClick={() => handleSave(index)}
                      >
                        Save
                      </button>
                      <button className="cancel-button" onClick={handleCancel}>
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.phoneNumber}</td>
                    <td>{item.email}</td>
                    <td>{item.gender}</td>
                    <td>{item.dob}</td>
                    <td>{item.city}</td>
                    <td>{item.state}</td>
                    <td>
                      <FaEdit
                        className="edit-icon"
                        onClick={() => handleEdit(index, item)}
                      />
                      <FaTrash
                        className="delete-icon"
                        onClick={() => deleteData(index)}
                      />
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
