import React from 'react';

function Header() {
    return (
        <header>
            <a href="index.html" id="headerImgHolder">
                <img id="headerImgA" src="https://picsum.photos/300/100" alt="placeholder" />
                <img id="headerImgB" src="https://picsum.photos/100" alt="placeholder" />
            </a>
            <a id="headerTextHolder" href="/" id="headerTextHolder">
                <h1>GTN ShadowFeed</h1>
            </a>
            <nav id="desktopNav">
                <a href="/login">Log In</a>
            </nav>
            <nav id="mobileNav">
                <span>&#9776;</span>
            </nav>
        </header>
    );
}


export default Header;
