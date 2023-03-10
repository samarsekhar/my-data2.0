import React, { useState } from "react";

function A() {
    const [cendol, setCendol] = useState(1);

    return <B cendol={cendol} incrementCendol={() => setCendol(cendol + 10)} />;
}

function B({ cendol, incrementCendol }) {
    const [circleColor, setCircleColor] = useState("lightblue");

    return (
        <div className="container">
            <div className="square" style={{ backgroundColor: circleColor }}>
                <div className="circle">
                    {cendol}
                </div>
            </div>
            <br />
            <button
                id="color-change-btn"
                onClick={() => {
                    setCircleColor(getRandomColor());
                    incrementCendol();
                }}
                style={{
                    backgroundColor: "lightgreen",
                    cursor: "pointer",
                    padding: "10px 20px",
                    borderradius: "5px",
                    border: "none",
                    marginTop: "20px",
                }}
            >
                Change Color
            </button>

        </div>
    );
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export default A;
