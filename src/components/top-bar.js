import React from 'react';
import DatePicker from "./data-picker";
import "./TopBar.css";


const TopBar = () => {
    return (
        <nav className="d-flex justify-content-between align-items-center top-bar">
            <h5 className="w-25 px-3">Dashboard</h5>
            <div className="w-25 text-right px-3"><DatePicker /></div>
        </nav>
    )
}
export default TopBar;