import React, { useState } from 'react'
import { axiosInstance as api } from '../../utils/server'
import { connect } from 'react-redux'
import styles from "./style"

const AddNote = ({ setNote }) => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [cardColor, setCardColor] = useState("")
    const colors = ["#D33F49", "#343A40", "#ECA400", "green", "#5E0035", "#006992", "skyblue"]
    function visiableHeader() {
        document.querySelector(".inputHeader").style.visibility = "visible"
        document.querySelector(".buttonVisibility").style.visibility = "visible"
        document.querySelector(".addNoteContent").style.borderWidth = "0px 2px 0px 2px"
        document.querySelector(".addNoteContent").style.borderRadius = "0px 0px 0px 0px"
    }
    const onRadioButtonClick = (e) => {
        console.log(e.target.id)
        setCardColor(e.target.id)
    }
    const sendNote = () => {

        if ((title || content) && (cardColor.length > 0)) {
            if (title) {
                api.post('api/create-reminder', {
                    title,
                    description: content,
                    completed: false,
                    type: false,
                    color: cardColor
                }).then(response => {
                    if (response.data.status == false) {
                        console.log('İşlem sırasında bir hata oluştu')
                    } else {
                        setNote({
                            "title": title, "content": content, "id": response.data.id, "color": cardColor
                        })
                        console.log("not eklendi")
                        setTitle("");
                        setContent("");
                    }
                })
            } else {
                console.log('Başlığın dolu olduğundan emin olun.')
            }
        } else {
            if (cardColor.length == 0) {
                console.log("Renk seçin")
            } else {
                console.log("Not Başlığı ekleyin")
            }
        }
    }

    return (
        <>
            {/* Add note header */}

            <input
                contentEditable="true"
                placeholder="Başlık"
                style={{ ...styles.addHeader, background: cardColor, color: cardColor == "" ? "black" : "white" }}
                className={cardColor.length > 0 ? "placeholderDivWhite inputHeader addNoteDiv" : "inputHeader addNoteDiv"}
                value={title}
                onInput={e => setTitle(e.target.value)}
            />

            {/* Add note content */}
            <div
                role="textbox"
                contentEditable="true"
                placeholder="Note alın.."
                style={{ ...styles.addInput, background: cardColor, color: cardColor == "" ? "black" : "white" }}
                className={cardColor.length > 0 ? "placeholderDivWhite addNoteDiv addNoteContent " : "addNoteDiv addNoteContent "}
                value={content}
                onClick={() => visiableHeader()}
                onInput={e => setContent(e.target.value)}
            />
            {/* Send Button */}
            <div className="buttonVisibility" style={{ ...styles.sendNoteCustomize, background: cardColor }}>
                <form onClick={onRadioButtonClick} style={styles.addNoteForm}>

                    {colors.map(color => {
                        return (
                            <div id={color} style={{ ...styles.colorDiv, background: color }} />
                        )
                    })
                    }
                </form>
                <button onClick={sendNote} style={{ ...styles.sendButon, color: cardColor == "" ? "black" : "white" }}>Kaydet</button>
            </div>
        </>
    )
}


const mapDispatchToProps = dispatch => ({
    setNote: (data) => {
        dispatch({ type: 'ADDNOTE', payload: data }
        )
    }
})

export default connect(null, mapDispatchToProps)(AddNote)

