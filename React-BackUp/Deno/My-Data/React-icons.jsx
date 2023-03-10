import React from "react";
import { FaReact } from "react-icons/fa";
import { IconContext } from "react-icons";
import { MdAlarm } from "react-icons/md";

function Reacticons() {
    return (
        <div><h1>React-icons</h1>
            <FaReact size="10rem" color="green" />
            <br />
            <MdAlarm size="15rem" color="blue" />
            <h1>IconContext</h1>
            <IconContext.Provider value={{ size: "5rem", color: "purple" }}>
                <div>
                    <FaReact />
                    <MdAlarm />
                </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ size: "5rem", color: "purple" }}>
                <div>
                    <FaReact />
                    <MdAlarm color="green" size="10rem" />
                </div>
            </IconContext.Provider>
        </div>
    )
}

export default Reacticons;