import React from 'react';
import './NavBar.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCirclePlus, faBook, faUserPlus, faUserGroup, faSquarePlus,faClipboardList, faChartLine, faGear, faDoorClosed } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="sticky-top">
                <Container>
                    <Navbar.Brand href="#home">Presupuesto DENT</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Menú principal" id="main-menu">
                                <NavDropdown.Item href="#newbudget"><FontAwesomeIcon icon={faFileCirclePlus} /> Nuevo presupuesto</NavDropdown.Item>
                                <NavDropdown.Item href="#budgets"><FontAwesomeIcon icon={faBook} /> Ver presupuestos</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#newcustomer"><FontAwesomeIcon icon={faUserPlus} /> Nuevo cliente</NavDropdown.Item>
                                <NavDropdown.Item href="#customers"><FontAwesomeIcon icon={faUserGroup} /> Ver clientes</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#newarticle"><FontAwesomeIcon icon={faSquarePlus} /> Nuevo artículo</NavDropdown.Item>
                                <NavDropdown.Item href="#articles"><FontAwesomeIcon icon={faClipboardList} /> Ver artículos</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#reports"><FontAwesomeIcon icon={faChartLine} /> Reportes</Nav.Link>
                            <Nav.Link href="#settings"><FontAwesomeIcon icon={faGear} /> Ajustes</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#logout"><FontAwesomeIcon icon={faDoorClosed} /> Salir</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}