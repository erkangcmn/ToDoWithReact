
import React, { useEffect, useState } from 'react'
import { Button, Modal } from "react-bootstrap"
import { axiosInstance as api } from '../../../utils/server'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEdit } from '@fortawesome/free-regular-svg-icons' // içi beyaz ikonlar
import styles from "./style"

function UpdateNoteModal({ getNoteReducer, setNote }) {

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true);

  const [show, setShow] = useState(false);
  const [note, getNote] = useState([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [cardColor, setCardColor] = useState("")
  const colors = ["#D33F49", "#343A40", "#EC9F05", "#43B929", "#58355E", "#006992", "#F34213"]
  useEffect(() => {
    setTitle(getNoteReducer.title)
    setContent(getNoteReducer.content)
    setCardColor(getNoteReducer.color)
    getNote(getNoteReducer)
  }, [getNoteReducer])

  const onRadioButtonClick = (e) => {
    setCardColor(e.target.id)
  }
  function saveNote() {
    api.put("/api/edit-reminder/" + note.id, {
      title,
      content,
      color:cardColor
    }).then(response => {
      if (response.data.status == false) {
        console.log('İşlem sırasında bir hata oluştu')
      } else {

        setNote({
          "title": title, "content": content, "id": note.id, "color": cardColor, "status": "update"
        })
      }
    })
    setShow(false)
  }
  return (
    <>

      <FontAwesomeIcon icon={faEdit} style={{ fontSize: "18px", cursor: "pointer" }} onClick={handleShow} />
      <Modal show={show} onHide={handleClose} >
        <Modal.Body style={{backgroundColor: cardColor}}>
          <input
            value={title}
            style={{ ...styles.addHeader, background: cardColor, color: cardColor == "" ? "black" : "white" }}
            onChange={e => setTitle(e.target.value)}
          />

          <input
            style={{ ...styles.addInput, background: cardColor, color: cardColor == "" ? "black" : "white" }}
            role="text"
            placeholder="Note alın.."
            value={content}
            onChange={e => setContent(e.target.value)}
            className={cardColor && cardColor.length > 0 ? "placeholderDivWhite addNoteDiv addNoteContent " : "addNoteDiv addNoteContent "}
          />
         
        </Modal.Body>
        <Modal.Footer style={{backgroundColor: cardColor}}>
          <form onClick={onRadioButtonClick} style={styles.addNoteForm}>

            {colors.map((color, index) => {
              return (
                <div key={index} id={color} style={{ ...styles.colorDiv, background: color }} />
              )
            })
            }
          </form>
          <button style={{ ...styles.sendButon, color: cardColor == "" ? "black" : "white" }} variant="primary" onClick={saveNote}>
            Kaydet
          </button>
          <button style={{ ...styles.sendButon, color: cardColor == "" ? "black" : "white" }} variant="secondary" onClick={handleClose}>
            İptal
          </button>
         
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
