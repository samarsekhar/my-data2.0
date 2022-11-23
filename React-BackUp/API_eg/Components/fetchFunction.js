import React, {useEffect, useState} from "react";

function UserData() {
    const [Users, fetchUsers] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    
    useEffect(() => {
        fetch("https://fake-hotel-api.herokuapp.com/api/hotels")
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            fetchUsers(response);
            setIsLoaded(true)
        },
        (error) => {setError("Error!!"); setIsLoaded(true)} 
        );
    }, [])

    const containsErrorMessage = () => { return <div>Error: {error.message}</div>}
    const isLoading = () => {return <div>Loading...</div>}
    const results = () => {
        return (
            <div>
                <ul>
                    {Users.map((result) => (
                        <li key={result.id}>
                            <b>ID</b>: {result.id} <br/>
                            <b>Name</b>: {result.name} <br/>
                            <b>Description</b>: {result.description} <hr/>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
    if (error) return containsErrorMessage();
    return !isLoaded ? isLoading() : results();
}
export default UserData; 