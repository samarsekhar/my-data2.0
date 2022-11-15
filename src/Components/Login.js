import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = ({setLoginUser}) => {
    const history = useHistory()

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name] : value
        })
    }
    const login = () => {
        axios.post("http://localhost:5000/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/")
        })
    }
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="login">
                            <h1>Login</h1> <br/>
                            <div>
                                <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Enter Your Email" />
                            </div> <br/>
                            <div>
                                <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter Your Password" />
                            </div> <br/>
                            <div className="button btn btn-success" onClick={login} >Login</div>
                            <div>or</div>
                            <div className="button btn btn-info" onClick={() => history.push("/register")}>Register</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;