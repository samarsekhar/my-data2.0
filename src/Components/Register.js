import React, {useState} from "react";
import axios from "axios";

const Register = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: "",
    })

    const register = () => {
        const { name, email, password, reEnterPassword} = user

        if(name && email && password && (password===reEnterPassword)) {
            axios.post("http://localhost:5000/register", user)
            .then(response=>console.log(response))
            alert("post")
        }
        else {
            alert("invalid")
        }
    }

    const handleChange = (e) => {
        const { name, value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="register">
                            {console.log('user', user)}
                            <h1>Register</h1> <br/>
                            <div>
                                <input type="text" name="name" value={user.name} placeholder="Enter Your Name" onChange={handleChange} />
                            </div>
                            <br/>
                            <div>
                                <input type="email" name="email" value={user.email} placeholder="Enter Your Email" onChange={handleChange} />
                            </div>
                            <br/>
                            <div>
                                <input type="password" name="password" value={user.password} placeholder="Enter Your Password" onChange={handleChange} />
                            </div>
                            <br/>
                            <div>
                                <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Your Password" onChange={handleChange} />
                            </div>
                            <br/>
                            <div className="button btn btn-info" onClick={register}>Register</div>
                               or  
                            <div className="button btn btn-success">Login</div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}
export default Register;