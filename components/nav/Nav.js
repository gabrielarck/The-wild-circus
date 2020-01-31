import React from 'react';
import Header from '../Header';


const Nav = () => (
    <div className="Navbar">
        <Header />    
        <style jsx>{`
            .Navbar{
                display: flex;
                flex-direction: column-reverse;
                
            }
            .navbar__link{
                color: color: aliceblue;
            }

        `}
        </style>
    </div>
)


export default Nav;
