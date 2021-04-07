import React, { useState } from 'react'
import { Navbar, NavDropdown } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import logo from './logo512.png'
import { axiosInstance as api } from '../../../utils/server'


function NavbarComponent({getUserReducer,searchNote}) {
    const [searchWord, setSearchWord] = useState("")

    const chanceSearchWord=async(word)=>{
        setSearchWord(word)
        await api.get('api/search-reminder', {
            params: {
                searchWord:word
            }
        }).then(res => {
            searchNote({"data":res.data, status:"search"})
        }).catch(e => {
            console.log("Hata => " + e)
        })
    }
    return (
        <Navbar bg="light" expand="lg" className="navbar-header">
            <Navbar.Brand href="/">
                <img src={logo} width="30px" height="30px" />
                ToDo With React
            </Navbar.Brand>

            <Navbar.Collapse id="basic-navbar-nav" expand="lg" style={{ marginLeft: "2rem" }}>
                <FontAwesomeIcon icon={faSearch} size="1x" color="#5f6368" />
                <input
                    onChange={(e) =>chanceSearchWord(e.target.value)}
                    value={searchWord}
                    type="text"
                    placeholder="Başlığa göre arama yapın"
                    style={{ borderWidth: "0px", fontSize: "16px", padding: "1px", width: "100%", marginLeft: "0.5rem" }}
                />

            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end mr-5">

                {getUserReducer && getUserReducer.token ?
                    <NavDropdown title={getUserReducer.user.name ? getUserReducer.user.name : "user"} id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/">Notlar</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/logout">Çıkış Yap</NavDropdown.Item>
                    </NavDropdown>

                    : null}


            </Navbar.Collapse>

        </Navbar>
    )
}

const mapStateToProps = state => ({
    getUserReducer: state.getUserReducer
})
const mapDispatchToProps = dispatch => ({
    searchNote: (data) => {
        dispatch({ type: 'NOTEOPERATION', payload: data }
        )
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent)
