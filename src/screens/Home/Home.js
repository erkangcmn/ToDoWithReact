import React, { useEffect, useState } from 'react'
import { Card, Row, Col } from "react-bootstrap"
import { axiosInstance as api } from '../../utils/server'
import UserInfo from "../UserInfo/UserInfo"
import { connect } from 'react-redux'
import Navbar from "../Components/Navbar/NavbarComponent"
import AddNote from "../AddNote/AddNote"


function Home({ noteReducer, setNote }) {

    useEffect(async () => {
        await api.get('api/reminders').then(response => {
            if (response.status) {

                response.data.reminders.map(element => {

                    setNote({
                        "title": element.title, "content": element.description, "id": element._id
                    })
                });
            } else {
                console.log("bağlantı hatası")
            }
        })
    }, []);


    const cardColor = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
    return (
        <>
            <Navbar />
            <Row style={{ margin: 20 }}>
                <Col md={12} xl={2}><UserInfo /></Col>

                <Col md={12} xl={10}>
                    <Row><AddNote /></Row>

                    <Row>
                        {
                            noteReducer.length > 0 ?
                                noteReducer.slice(0).reverse().map((note, idx) => {
                                    console.log(note)
                                    return (

                                        <Col sm={6} md={4} xl={3} key={note.id}>

                                            <Card
                                                bg={idx >= 8 ? cardColor[idx %= 7] : cardColor[idx]}

                                                text={cardColor[idx] === 'light' ? 'dark' : 'white'}
                                                style={{ width: '17rem' }}
                                                className="mb-2"
                                            >

                                                <Card.Body>
                                                    <Card.Title>{note.title}</Card.Title>
                                                    <Card.Text>
                                                        {note.content}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    )
                                })
                                : "Not Ekleyin"
                        }
                    </Row>
                </Col>
            </Row>
        </>
    )
}

const mapStateToProps = state => ({
    noteReducer: state.noteReducer
})

const mapDispatchToProps = dispatch => ({
    setNote: (data) => {
        dispatch({ type: 'ADDNOTE', payload: data }
        )
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)