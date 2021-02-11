import React from 'react'
import { Navbar, Form, Button, FormControl } from "react-bootstrap"

function NavbarComponent() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" expand="lg">

                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2"  />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Signed in as: <a href="#login">Mark Otto</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}


export default NavbarComponent
