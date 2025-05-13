import React from 'react';
import './styles/searchStyles.css';

import LinearSearch from './components/LinearSearch';
import BinarySearch from './components/BinarySearch';
import ExponentialSearch from './components/ExponentialSearch';

function App() {
    return (
        <div>
            <h1>Search Algorithm Visualizations</h1>
            <p>Visual comparisons of Linear, Binary, and Exponential search for CSCI_335</p>

            <div className="search-section">
                <LinearSearch />
                <BinarySearch />
                <ExponentialSearch />
            </div>
            <footer className={{marginTop: "40px", padding: "20px", background: "#f1f1f1", color: "#333"}}>
                <p>Created by: Sodikjon Ismoilov</p>
                <p>Course: CSCI_335</p>
                <p>University: NYIT</p>
                <p>Year: Spring 2025</p>

            </footer>
        </div>

    );
}

export default App;
