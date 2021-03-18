import React from 'react'
import { Navbar, Form, FormControl, NavDropdown } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import logo from './logo512.png'


function NavbarComponent() {
    return (
        <Navbar bg="light" expand="lg" className="navbar-header">
            <Navbar.Brand href="/">
                <img src={logo} width="30px" height="30px" />
                ToDo With React</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" expand="lg">

                <Form inline style={{ marginRight: "auto", marginLeft: "auto" }}>
                    <FontAwesomeIcon icon={faSearch} size="1x" color="#5f6368" />
                    <FormControl
                        type="text"
                        placeholder="Arama yapın"

                        style={{ borderWidth: "0px", fontSize: "16px" }}
                    />

                </Form>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end mr-2">

                <NavDropdown title="Erkan Göçmen" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Notlar</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Arşiv</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/logout">Çıkış Yap</NavDropdown.Item>
                    <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                </NavDropdown>

            </Navbar.Collapse>

        </Navbar>
    )
}


export default NavbarComponent
