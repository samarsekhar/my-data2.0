import React, { useState } from "react";
import Names from "../data.json";

const Transition = () => {
    const [query, setQuery] = useState("")

    const ChangeHandler = (event) => {
        setQuery(event.target.value)
    }

    const filteredNames = Names.filter((item) => {
        return item.first_name.includes(query) || item.last_name.includes(query)
    })
    return (
        <div>
            <input type="text" value={query} onChange={ChangeHandler} />
            {
                filteredNames.map((item) => {
                    return <p key={item.id}>
                        {item.first_name}
                        {item.last_name}
                    </p>
                })
            }
        </div>
    )
}
export default Transition;