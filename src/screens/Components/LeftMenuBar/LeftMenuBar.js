import React from 'react'
import { ListGroup } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faStickyNote, faFileArchive } from '@fortawesome/free-regular-svg-icons'
// import Lottie from 'lottie-react-web'
// import animation from '../../animation/8026-taking-notes.json'ö

function LeftMenuBar() {
    return (
        <ListGroup>
            {/* <Lottie
               style={{ marginLeft: "0px", padding: 0 }}

               options={{
                   width: 100,
                   height: 100,
                   animationData: animation,
                    loop: false,
                }}

            /> */}
            <ListGroup.Item><FontAwesomeIcon icon={faStickyNote} size="lg" /> Notlar</ListGroup.Item>
            <ListGroup.Item><FontAwesomeIcon icon={faFileArchive} size="lg" /> Arşiv</ListGroup.Item>
        </ListGroup >
    )
}


export default LeftMenuBar
