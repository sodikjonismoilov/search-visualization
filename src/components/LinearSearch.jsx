import React, { useState } from "react";
import Sketch from "react-p5";

const LinearSearch = () => {
    const [target, setTarget] = useState("");
    const [started, setStarted] = useState(false);

    let values = [5, 8, 12, 15, 23, 27, 33, 39, 41, 50, 62, 70, 75, 80, 85, 90, 95];
    let index = 0;
    let found = false;

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(1050, 150).parent(canvasParentRef);
        p5.frameRate(3);
    };


    const draw = (p5) => {
        p5.background(255);
        p5.textSize(16);
        p5.textAlign(p5.CENTER, p5.CENTER);

        for (let i = 0; i < values.length; i++) {
            if (started && i === index && !found) {
                p5.fill(255, 204, 0); // Yellow: currently checking
            } else if (found && i === index) {
                p5.fill(0, 255, 0); // Green: found
            } else {
                p5.fill(240);
            }

            p5.stroke(0);
            p5.rect(60 * i + 20, 50, 50, 50);
            p5.fill(0);
            p5.text(values[i], 60 * i + 45, 75);

            p5.fill(100);
            p5.text(`${i}`, 60 * i + 45, 120);
        }

        if (started && !found && index < values.length) {
            if (values[index] === parseInt(target)) {
                found = true;
                document.getElementById("output-linear").
                    innerHTML = `<span style="color:green;">:)️ Found at index ${index}</span>`;
            } else {
                index++;
            }
        }

        if (started && index === values.length && !found) {
            p5.fill(255, 0, 0);
            p5.rect(60 * (index - 1) + 20, 50, 50, 50);
            p5.fill(255);
            p5.text(values[index - 1], 60 * (index - 1) + 45, 75);
            p5.noLoop();
            document.getElementById("output-linear").
                innerHTML = `<span style="color:red;">:( Not found</span>`;
        }
    };

    const startSearch = () => {
        if (target === "") return;
        index = 0;
        found = false;
        setStarted(true);
    };

    return (
        <div style={{ marginBottom: "40px" }}>
            <h2>Linear Search</h2>
            <div style={{ marginBottom: "10px" }}>
                <input
                    type="number"
                    placeholder="Enter target"
                    value={target}
                    onChange={(e) => setTarget(e.target.value)}
                />
                <button onClick={startSearch}>Start Search</button>
            </div>
            <Sketch setup={setup} draw={draw} />
            <div id="output-linear" style={{ marginTop: "10px", fontSize: "16px" }}></div>
        </div>


    );
};

export default LinearSearch;
