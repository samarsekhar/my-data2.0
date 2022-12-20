import React from "react";

const NameList = () => {
    const names = ["Rahul", "Sonia", "Kajal"]
    return (
        <div>
            {
                names.map((name) => {
                    return <h2 key={name}>{name}</h2>
                })
            }
        </div>
    )
}
export default NameList;