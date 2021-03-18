
import React, { useEffect, useState } from 'react'
import { Button, Modal } from "react-bootstrap"
import { axiosInstance as api } from '../../../utils/server'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEdit } from '@fortawesome/free-regular-svg-icons' // içi beyaz ikonlar
import styles from "./style"

function UpdateNoteModal({getNoteReducer, setNote}) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show, setShow] = useState(false);
  const [note, getNote]=useState([])

useEffect(()=>{
  getNote(getNoteReducer)
},[getNoteReducer])
  // function saveNote() {
  //   api.put("/api/edit-reminder/" + id, {
  //     title,
  //     content
  //   }).then(response => {
  //     if (response.data.status == false) {
  //       console.log('İşlem sırasında bir hata oluştu')
  //     } else {
  //       console.log("işlem başarılı..")
  //       setNote({
  //         "title": title, "content": content, "id": response.data.id, "color": "red", "status": "update"
  //       })
  //     }
  //   })

  // }
  return (
    <>
    {console.log(note)}
      <FontAwesomeIcon icon={faEdit} style={{ fontSize: "18px", cursor: "pointer" }} onClick={handleShow} />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          hello
          {/* <input

            value={title}
            style={{ ...styles.addHeader, backgroundColor: props.note.color }}
            onChange={e => setTitle(e.target.value)}
          />

          <input
            style={{ ...styles.addInput, backgroundColor: props.note.color }}
            role="textbox"
            placeholder="Note alın.."
            value={content}
            onChange={e => setContent(e.target.value)}

          /> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


function mapStateToProps(state) {
  return {
    getNoteReducer: state.getNoteReducer,
  };
}
const mapDispatchToProps = dispatch => ({
  setNote: (data) => {
    dispatch({ type: 'NOTEOPERATION', payload: data }
    )
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateNoteModal)
