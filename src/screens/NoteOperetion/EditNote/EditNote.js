
import React, { useEffect, useState } from 'react'
import { Button, Modal } from "react-bootstrap"
import { axiosInstance as api } from '../../../utils/server'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEdit } from '@fortawesome/free-regular-svg-icons' // içi beyaz ikonlar
import styles from "./style"

function UpdateNoteModal({ getNoteReducer, setNote }) {
  const handleClose = () => {
    setShow(false)}

  const handleShow = () => setShow(true);


  const [show, setShow] = useState(false);
  const [note, getNote] = useState([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  useEffect(() => {
    console.log(getNoteReducer)
    setTitle(getNoteReducer.title)
    setContent(getNoteReducer.content)
    getNote(getNoteReducer)
  }, [getNoteReducer])
  function saveNote() {
    api.put("/api/edit-reminder/" + note.id, {
      title,
      content
    }).then(response => {
      if (response.data.status == false) {
        console.log('İşlem sırasında bir hata oluştu')
      } else {
        
        setNote({
          "title": title, "content": content, "id": note.id, "color": "#ECA400", "status": "update"
        })
      }
    })
    setShow(false)
  }
  return (
    <>

      <FontAwesomeIcon icon={faEdit} style={{ fontSize: "18px", cursor: "pointer" }} onClick={handleShow} />
      <Modal show={show} onHide={handleClose}>
        <Modal.Body >
          <input

            value={title}
            style={{ ...styles.addHeader, backgroundColor: note.color }}
            onChange={e => setTitle(e.target.value)}
          />

          <input
            style={{ ...styles.addInput, backgroundColor: note.color }}
            role="textbox"
            placeholder="Note alın.."
            value={content}
            onChange={e => setContent(e.target.value)}

          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveNote}>
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
