import React, { useEffect, useState } from 'react'
import { Navbar, Form, FormControl, NavDropdown } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import logo from './logo512.png'


function NavbarComponent(props) {

    return (
        <Navbar bg="light" expand="lg" className="navbar-header">
            <Navbar.Brand href="/">
                <img src={logo} width="30px" height="30px" />
                ToDo With React
            </Navbar.Brand>
            
            <Navbar.Collapse id="basic-navbar-nav" expand="lg" style={{marginLeft:"2rem"}}>
            <FontAwesomeIcon icon={faSearch} size="1x" color="#5f6368" />
                    <input
                        type="text"
                        placeholder="Başlığa göre arama yapın"
                        style={{ borderWidth: "0px", fontSize: "16px", padding:"1px",width:"100%", marginLeft:"0.5rem"}}
                    />
               
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end mr-5">


             {props && props.token ?
                        <NavDropdown title={props.user.name ?  props.user.name : "user"} id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/">Notlar</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/logout">Çıkış Yap</NavDropdown.Item>
                        </NavDropdown> 

                : null }


            </Navbar.Collapse>

        </Navbar>
    )
}


export default NavbarComponent
