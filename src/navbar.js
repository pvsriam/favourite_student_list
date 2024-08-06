import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav style={{ marginBottom: '20px' }}>
            <Link to="/" style={{ marginRight: '10px', textDecoration: 'underline' }}>Student List</Link>
            <Link to="/favourites" style={{ textDecoration: 'underline' }}>Favourite Students</Link>
        </nav>
    );
}

export default NavBar;
