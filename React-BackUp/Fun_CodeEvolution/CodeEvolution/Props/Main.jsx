import React from "react";
import Second from "./Second";

function Main() {
    return (
        <div>
            <Second names="Virat" playerDetails="Batsman" />
            <Second names="Rohit" playerDetails="Batsman" />
            <Second names="Pandia" playerDetails="All Rounder">
                <p>This is children props</p>
            </Second>
        </div>
    )
}
export default Main;