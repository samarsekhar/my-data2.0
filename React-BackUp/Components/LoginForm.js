import React from "react";

function Login() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-info"><h1>Login Form</h1></nav>
            <div className="container mt-5">
                <div className="row">
                    <div className="col md-4">
                        <form>
                            <div className="form-group">
                                <label>Email ID:</label>
                                <input type="email" className="form-control col-sm-4" placeholder="Please Enter Your Email"/>
                            </div>
                            <div className="form-group">
                                <label>Password:</label>
                                <input type="password" className="form-control col-sm-4" placeholder="Please Enter Your Password" />
                            </div>
                            <button className="btn btn-success mr-4">Login</button>
                            <button className="btn btn-danger">Reset</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;