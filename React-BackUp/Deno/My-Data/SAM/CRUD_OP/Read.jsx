import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Read() {
    const [data, setData] = useState([]);
    const [tableDark, setTableDark] = useState("");

    const getData = () => {
        axios.get("https://63e22047ad0093bf29c84323.mockapi.io/api/empdata/employeeData")
            .then((respone) => {
                setData(respone.data);
            });
    }

    const handleDelete = (id) => {
        axios.delete(`https://63e22047ad0093bf29c84323.mockapi.io/api/empdata/employeeData/${id}`)
            .then(() => {
                getData();
            });
    }

    const setToLocalStorage = (id, name, email, phone, role) => {
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("Phone", phone);
        localStorage.setItem("role", role);
    };

    useEffect(() => {
        getData()
    }, []);


    return (
        <div>
            <div className="form-check form-switch">
                <input className="form-check-input"
                    type="checkbox"
                    onClick={() => {
                        if (tableDark === "table-dark") setTableDark("");
                        else setTableDark("table-dark");
                    }}
                />
            </div>
            <div className="d-flex justify-content-between m-2">
                <h2>Read Data Of Developer</h2>
                <Link to="/">
                    <button className="btn btn-secondary">Create</button>
                </Link>
            </div>
            <table className={`table ${tableDark}`}>
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Role</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </thead>
                {data.map((eachData) => {
                    return (
                        <>
                            <tbody>
                                <tr>
                                    <td>{eachData.id}</td>
                                    <td>{eachData.name}</td>
                                    <td>{eachData.email}</td>
                                    <td>{eachData.phone}</td>
                                    <td>{eachData.role}</td>
                                    <td><Link to="/update">
                                        <button className="btn-info"
                                            onClick={() => setToLocalStorage(eachData.id, eachData.name, eachData.email, eachData.phone, eachData.role)}>
                                            Edit{""}
                                        </button>
                                    </Link></td>
                                    <td><button className="btn-danger" onClick={() => handleDelete(eachData.id)}>Delete</button></td>
                                </tr>
                            </tbody>
                        </>
                    )
                })}
            </table>
        </div>
    )
}
export default Read;