import React, { FC } from 'react'
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import './Header.scss'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Header: FC = () => {
    return (
        <header>
            <Navbar bg="light" expand={"lg"} className="mb-3">
                <Container fluid>
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${"lg"}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${"lg"}`}
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"lg"}`}>
                                МИТРА СОФТ
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-start flex-grow-1 pe-3">
                                <NavLink className="navLink" to="/">Посты</NavLink>
                                <NavLink className="navLink" to="/me">Обо мне</NavLink>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"lg"}`} />

                </Container>
            </Navbar>
        </header>
    )
}

export default Header