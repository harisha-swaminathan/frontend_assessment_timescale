import React from 'react';

const Header = ()=>{
    return(
        <div className="header">
            <div className="header__titles">
                <h1 className="header__title">Travelize</h1>
                <p className="header__subtitle">My travelling experiences</p>
            </div>
            <div className="header__links">
                <a href="#">Home</a>
                <a href="#">Blog</a>
                <a href="#" className="header__links--current">About</a>
            </div>
        </div>
    )
} 

export default Header;