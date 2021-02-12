import React, { useState, useEffect} from 'react'
import styles from "./style"

function AddNote() {
    const [title, setTitle]   = useState("")
    const [content, setContent] = useState("")

    function visiableHeader() {
        document.querySelector(".inputHeader").style.visibility = "visible"
        document.querySelector(".buttonVisibility").style.visibility = "visible"
        document.querySelector(".addNoteContent").style.borderWidth = "0px 1px 0px 1px"
    }

    const sendNote = () => {
       if(title || content){
        console.log("title ve content gönderilecek")
       }else{
           console.log("içerik yok")
       }
    }
    
    return (
        <>
            {/* Add note header */}
            <input
                contentEditable="true"
                placeholder="Başlık"
                style={styles.addHeader}
                className="inputHeader addNoteDiv"
                onInput={e => setTitle(e.target.value)}
            />

            {/* Add note content */}
            <input
                contentEditable="true"
                placeholder="Note alın.."
                style={styles.addInput}
                className="addNoteDiv addNoteContent"
                onClick={() => visiableHeader()}
                onInput={e => setContent(e.target.value)}
            />

            {/* Send Button */}
            <div className="buttonVisibility" style={styles.addNoteButton}>
                <button onClick={sendNote}>Kaydet</button>
            </div>




        </>
    )
}

export default AddNote
