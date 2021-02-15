import React, { useEffect, useState } from 'react'
import { Card, Row, Col } from "react-bootstrap"
import { axiosInstance as api } from '../../utils/server'
import UserInfo from "../UserInfo/UserInfo"
import { connect } from 'react-redux'
import Navbar from "../Components/Navbar/NavbarComponent"
import AddNote from "../AddNote/AddNote"


function Home({noteReducer}) {

    const [noteData, setNoteData] = useState([])
    useEffect(async () => {
        await api.get('api/reminders').then(response => {
            if (response.status) {
                console.log(response.data.reminders)
                setNoteData(response.data.reminders.reverse())
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
                        {console.log(noteReducer)}
                    
                        {noteData.length > 0 ?
                            noteData.map((data, idx) => (
                                <Col sm={6} md={4} xl={3} key={data._id}>
                                    <Card
                                        bg={idx >= 8 ? cardColor[idx %= 7] : cardColor[idx]}

                                        text={cardColor[idx] === 'light' ? 'dark' : 'white'}
                                        style={{ width: '17rem' }}
                                        className="mb-2"
                                    >

                                        <Card.Body>
                                            <Card.Title>{data.title}</Card.Title>
                                            <Card.Text>
                                                {data.description}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                            : "not ekleyin"
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


export default connect(mapStateToProps)(Home)