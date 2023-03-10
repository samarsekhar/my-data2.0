import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Create() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [role, setRole] = useState("");

    const history = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Clicked");
        axios.post("https://63e22047ad0093bf29c84323.mockapi.io/api/empdata/employeeData", {
            name: name,
            email: email,
            phone: phone,
            role: role,
        })
            .then(() => {
                history("/read")
            })
    }
    return (
        <div>
            <form className="m-5">
                <div className="d-flex justify-content-between m-2">
                    <h2>Create Developer Details</h2> <br />
                    <Link to="/read">
                        <button className="btn btn-primary">Show Data</button>
                    </Link>
                </div>
                <div className="mb-3">
                    <label>Name :</label>
                    <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label>Email :</label>
                    <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label>Phone :</label>
                    <input type="number" className="form-control" onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label>Role :</label>
                    <select onChange={(e) => setRole(e.target.value)}>
                        <option>Choose a role..</option>
                        <option>Frontend Developer</option>
                        <option>Backend Developer</option>
                        <option>Full Stack Developer</option>
                        <option>Mern Stack Developer</option>
                    </select>
                </div>
                <button className="btn btn-success" type="submit" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    )
}
export default Create;