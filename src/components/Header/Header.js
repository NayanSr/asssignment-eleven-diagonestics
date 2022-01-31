import React from 'react';
import './Header.css';
import logo from '../../Images/logo.png'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>

            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand className='text-primary' href="#home"> L / L Diagonestics</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/service">Service</Nav.Link>
                        <Nav.Link as={Link} to="/upcomming">Upcomming</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>

                        {user?.email ?
                            <Button onClick={logOut} variant='light'> Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}

                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            {/* <Nav className='nav' >
                <Link to='/home'><img className='img' src={logo} alt="" /></Link>
                <Link to='/home'>Home</Link>
                <Link to='/service'>Services</Link>
                <Link to='/upcomming'>Upcomming</Link>
                <Link to='/aboutus'>About Us</Link>
            </Nav> */}
        </>
    );
};

export default Header;