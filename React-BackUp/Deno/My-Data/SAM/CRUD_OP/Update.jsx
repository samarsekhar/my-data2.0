import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Update() {
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [role, setRole] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
        setPhone(localStorage.getItem("phone"))
        setRole(localStorage.getItem("role"));
    }, []);

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log("id...", id);
        axios.put(`https://63e22047ad0093bf29c84323.mockapi.io/api/empdata/employeeData/${id}`, {
            name: name,
            email: email,
            phone: phone,
            role: role,
        })
            .then(() => {
                navigate("/read");
            });
    };

    return (
        <div>
            <form className="m-5">
                <h2>Update Developer Details</h2> <br />
                <div className="mb-3">
                    <label>Name :</label>
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label>Email :</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label>Phone :</label>
                    <input type="number" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label>Role :</label>
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option>Choose a role..</option>
                        <option>Frontend Developer</option>
                        <option>Backend Developer</option>
                        <option>Full Stack Developer</option>
                        <option>Mern Stack Developer</option>
                    </select>
                </div>
                <button className="btn btn-warning mx-2" type="submit" onClick={handleUpdate}>
                    Update
                </button>
                <Link to="/read">
                    <button className="btn btn-secondary mx-2">Back</button>
                </Link>
            </form>
        </div>
    )
}
export default Update;