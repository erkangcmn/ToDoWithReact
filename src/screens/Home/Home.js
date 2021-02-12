import React, {useEffect} from 'react'
import { Card, Row, Col } from "react-bootstrap"
import { axiosInstance as api } from '../../utils/server'
import UserInfo from "../UserInfo/UserInfo"
import Navbar from "../Components/Navbar/NavbarComponent"
import AddNote from "../AddNote/AddNote"

function Home() {

    const cardColor = ['Primary', 'Secondary', 'Success', 'Danger', 'Warning', 'Info', 'Light', 'Dark'];

    useEffect(()=>{
        api.get('api/reminders').then(response => {
            console.log(response)
        })
    })

    return (
        <>
            <Navbar />
            <Row style={{ margin: 20 }}>
                <Col md={12} xl={2}><UserInfo /></Col>

                <Col md={12} xl={10}>
                    <Row><AddNote /></Row>

                    <Row>
                        {cardColor.map((variant, idx) => (
                            <Col sm={6} md={4} xl={3} key={idx}>
                                <Card
                                    bg={variant.toLowerCase()}

                                    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                                    style={{ width: '17rem' }}
                                    className="mb-2"
                                >

                                    <Card.Body>
                                        <Card.Title>{variant} Card Title </Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk
                                            of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Home