import React from 'react';
import Header from '../Header';


const Nav = () => (
    <div className="Navbar">
        <Header />
        <h1>The wild circus</h1>
    
        <style jsx>{`
            .Navbar{
                display: flex;
            }

        `}
        </style>
    </div>
)


export default Nav;
