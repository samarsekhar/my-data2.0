import React from "react";
import ChildComp from "./Child";

const ParentComp = () => {
    const greetParent = (childName) => {
        alert("Hello Parent")   // Can you also Add 1st alert
        alert("Hello Child")
        alert(`Hello Parent ${childName}`)
    }
    return (
        <div>
            <ChildComp greetHandler={greetParent} />
        </div>
    )
}
export default ParentComp;