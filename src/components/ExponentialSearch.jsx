import React, { useState } from "react";
import Sketch from "react-p5";

const ExponentialSearch = () => {
    const [target, setTarget] = useState("");
    const [started, setStarted] = useState(false);

    let values = [5, 8, 12, 15, 23, 27, 33, 39, 41, 50, 62, 70, 75, 80, 85, 90, 95];
    let bound = 1;
    let low = 0;
    let high = values.length - 1;
    let mid = -1;
    let phase = "expanding";
    let found = false;

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(1050, 150).parent(canvasParentRef);
        p5.frameRate(1.5); // slower for visibility
    };

    const draw = (p5) => {
        p5.background(255);
        p5.textSize(16);
        p5.textAlign(p5.CENTER, p5.CENTER);

        for (let i = 0; i < values.length; i++) {
            if (i === mid && found) {
                p5.fill(0, 255, 0); // Green when found
            } else if (i === mid) {
                p5.fill(255, 204, 0); // Yellow for current check
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

        if (!started || found) return;

        if (phase === "expanding") {
            if (values[Math.min(bound, values.length - 1)] < parseInt(target)) {
                bound *= 2;
            } else {
                phase = "binary";
                low = Math.floor(bound / 2);
                high = Math.min(bound, values.length - 1);
            }
        } else if (phase === "binary" && low <= high) {
            mid = Math.floor((low + high) / 2);
            if (values[mid] === parseInt(target)) {
                found = true;
                document.getElementById("output-exponential").
                    innerHTML = `<span style="color:green;">:)️ Found at index ${mid}</span>`;
            } else if (values[mid] < parseInt(target)) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        if (!found && phase === "binary" && low > high) {
            p5.fill(255, 0, 0); // Red = not found
            p5.rect(60 * mid + 20, 50, 50, 50);
            p5.fill(255);
            p5.text(values[mid], 60 * mid + 45, 75);
            p5.noLoop();
            document.getElementById("output-exponential").
                innerHTML = `<span style="color:red;">:( Not found</span>`;
        }
    };

    const startSearch = () => {
        if (target === "") return;
        bound = 1;
        low = 0;
        high = values.length - 1;
        found = false;
        mid = -1;
        phase = "expanding";
        setStarted(true);
    };

    return (
        <div style={{ marginBottom: "40px" }}>
            <h2>Exponential Search</h2>
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
            <div id="output-exponential" style={{ marginTop: "10px", fontSize: "16px" }}></div>
        </div>
    );
};

export default ExponentialSearch;
