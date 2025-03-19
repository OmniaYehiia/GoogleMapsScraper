import React from "react";
import './header.css';

function Header() {
    return (
        <header>
            <div className="logo-container">
                <p className="intro">Welcome to Pixels Summit LLC</p>
                <img src="/Pixels_Summit_Logo_-_Main_Logo_PNG.jpg" alt="company logo" />
                <div className="icons">

                <a href="https://account.pixelssummit.com/?locale=en&region_country=AE">
                    <i className="fa-regular fa-user"></i>
                </a>
                </div>
            </div>
        </header>
    );
}

export default Header;