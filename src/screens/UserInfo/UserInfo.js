import React from 'react'
import { ListGroup } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faStickyNote, faFileArchive  } from '@fortawesome/free-regular-svg-icons'


function UserInfo() {
    return (
        <ListGroup>
            <ListGroup.Item><FontAwesomeIcon icon={faStickyNote} size="lg"/> Notlar</ListGroup.Item>
            <ListGroup.Item><FontAwesomeIcon icon={faFileArchive} size="lg"/> Arşiv</ListGroup.Item>
        </ListGroup>
    )
}


export default UserInfo
