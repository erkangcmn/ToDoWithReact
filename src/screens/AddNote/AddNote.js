import React from 'react'
import styles from "./style"

function AddNote() {
    function visiableHeader() {

        document.querySelector(".inputHeader").style.visibility = "visible"
        document.querySelector(".buttonVisibility").style.visibility = "visible"
        document.querySelector(".addNoteContent").style.borderWidth = "0px 1px 0px 1px"

    }
    return (
        <>
            {/* Add note header */}
            <div
                contentEditable="true"
                data-placeholder="Başlık"
                style={styles.addHeader}
                className="inputHeader addNoteDiv"
            />

            {/* Add note content */}
            <div
                contentEditable="true"
                data-placeholder="Note alın.."
                style={styles.addInput}
                className="addNoteDiv addNoteContent"
                onClick={() => visiableHeader()}
            />
            <div
                className="buttonVisibility"
                style={styles.addNoteButton}
            ><button>Hello</button></div>




        </>
    )
}

export default AddNote
