import React from "react";

const Navbar = () => {
return (
    <header className="header-nav">
        <h1>Ashley Arena</h1>
        <nav className="top-menu">
            <ul>
                <li>
                    <a href="#about-me">About Me</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#contact">contact</a>
                </li>
            </ul>
        </nav>
    </header>
)
}
export default Navbar