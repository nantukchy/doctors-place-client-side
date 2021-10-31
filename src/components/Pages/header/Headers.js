import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hook/useFirebase';
import './Headers.css';
import logoImg from '../../../utilities/images/logo.png';

const Headers = () => {
    const { user, logOut } = useFirebase();
    return (
        <>
            <Navbar  bg="body" variant="light" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                <Navbar.Brand href="#home">
      <img
        src={logoImg}
        width="130"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end" id="menu">
                        <Nav.Link className="text-warning fw-bold" bg="light" as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="text-warning fw-bold"  as={Link} to="/offers">Offers</Nav.Link>
                        <Nav.Link className="text-warning fw-bold"  as={Link} to="/package">Packages</Nav.Link>
                        <Nav.Link className="text-warning fw-bold"  as={Link} to="/wishlist">Wish list</Nav.Link>
                        <Nav.Link className="text-warning fw-bold"  as={Link} to="/addservice">Admin</Nav.Link>
                            <Nav.Link className="text-warning fw-bold"  as={Link} to="/login">Login</Nav.Link>
                            <Navbar.Text>
                <a className="text-info text-decoration-none"  href="#login">{user.displayName}</a>
              </Navbar.Text>
                        {user?.email && <Button onClick={logOut} className="ms-5" variant="warning">Logout</Button>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Headers;