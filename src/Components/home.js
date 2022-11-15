import React from "react";

const Home = ({setLoginUser}) => {
    return (
        <div>
        <div className="container mt-5">
        <div className="row">
        <div className="col-md-4">
        <div className="home">
            <h2>Home Page</h2> <br/>
            <div className="button btn btn-danger" onClick={() => setLoginUser({})} >Logout</div>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}
export default Home;