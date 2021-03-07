import React, { useEffect, useState } from 'react'
import { Card, Row, Col } from "react-bootstrap"
import { axiosInstance as api } from '../../utils/server'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStickyNote } from '@fortawesome/free-solid-svg-icons' // siyah ikonlar
import { faTrashAlt, faEdit, faFileArchive  } from '@fortawesome/free-regular-svg-icons' // içi beyaz ikonlar
import UserInfo from "../UserInfo/UserInfo"
import { connect } from 'react-redux'
import Navbar from "../Components/Navbar/NavbarComponent"
import AsyncStorage from '@react-native-community/async-storage';
import AddNote from "../AddNote/AddNote"
import { useHistory } from "react-router-dom";
import styles from "./style"


function Home({ noteReducer, setNote }) {
    const history = useHistory()
    useEffect(async () => {
        const token = await AsyncStorage.getItem('@user_token')
        if (token) {
            await api.get('api/reminders').then(response => {
                if (response.status) {
                    if (response.data.reminders) {
                        response.data.reminders.forEach(element => {

                            setNote({
                                "title": element.title, "content": element.content, "id": element._id, "color": element.color
                            })
                        });
                    }

                } else {
                    console.log("bağlantı hatası")
                }
            })
        } else {
            history.push("/login")
        }

    }, []);
    function deleteNote(note) {
        setNote({
            "title": note.title, "content": note.content, "id": note.id, "color": note.color,
        })
        api.delete('api/reminder/' + note.id).then(response => {
            if (response.data.status) {
                console.log("Not Silindi")
            }
        })
     
    }


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

                                    return (

                                        <Col sm={6} md={4} xl={3} key={note.id}>

                                            <Card

                                                style={{
                                                    width: '17rem',
                                                    background: note.color ? note.color : "grey",
                                                    color: "white"
                                                }}
                                                className="mb-2"
                                            >

                                                <Card.Body>
                                                    <Card.Title>{note.title}</Card.Title>
                                                    <Card.Text>
                                                        {note.content}
                                                    </Card.Text>
                                                    <Row>
                                                        <Col style={styles.cardTransactions}><FontAwesomeIcon icon={faEdit} style={{fontSize:"18px",cursor:"pointer"}}/></Col>
                                                        <Col style={styles.cardTransactions}><FontAwesomeIcon icon={faFileArchive} style={{fontSize:"20px",cursor:"pointer"}}/></Col>
                                                        <Col><FontAwesomeIcon icon={faTrashAlt} style={{fontSize:"18px",cursor:"pointer"}} onClick={()=>deleteNote(note)}/></Col>
                                                    </Row>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    )
                                })
                                :
                                <p style={styles.notNote}>
                                    <FontAwesomeIcon icon={faStickyNote} size="lg" /> Eklediğiniz notlar burada gözükecek
                                </p>
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