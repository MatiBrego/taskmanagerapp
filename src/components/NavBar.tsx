import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../assets/NavBar.css";

function NavBar(): JSX.Element{
    return(
        <Navbar bg='light' expand="md">
            <Navbar.Brand href='/'> <h2 className='nav-header'>Blog <small className='text-muted'>App</small></h2> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
                <Nav className='nav-1'>
                    <Nav.Link className='nav-item' href='/posts'>Posts</Nav.Link>
                </Nav>
                <Nav className='nav-2'>
                    <Nav.Link className='nav-item' href='/'>Log In</Nav.Link>
                    <Nav.Link className='nav-item' href='/'>Sign Up</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar