import React, { useState, useTransition } from "react";
import Names from "../data.json";

const SmallTransition = () => {
    const [query, setQuery] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [isPending, startTransition] = useTransition()

    const handleChange = (event) => {
        setInputValue(event.target.value)
        startTransition(() => setQuery(event.target.value))
    }
    const filteredNames = Names.filter((item) => {
        return item.first_name.includes(query) || item.last_name.includes(query)
    })

    return (
        <div>
            <input type="text" value={inputValue} onChange={handleChange} />
            {isPending && <p>Updating list...</p>}
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
export default SmallTransition;