import React, { useState} from 'react'
import { axiosInstance as api } from '../../utils/server'
import { connect } from 'react-redux'
import styles from "./style"

const AddNote = ({setNote}) => {
    const [title, setTitle]   = useState("")
    const [content, setContent] = useState("")

    function visiableHeader() {
        document.querySelector(".inputHeader").style.visibility = "visible"
        document.querySelector(".buttonVisibility").style.visibility = "visible"
        document.querySelector(".addNoteContent").style.borderWidth = "0px 1px 0px 1px"
    }

    const sendNote = () => {
        setNote({
            "title": title, "content": content
        })
       if(title || content){
        if (title) {
            api.post('api/create-reminder', {
                title,
                description:content,
                completed: false,
                type: false
            }).then(response => {
                if (response.data.status == false) {
                    console.log('İşlem sırasında bir hata oluştu')
                } else {
                    
                   
                    console.log("not eklendi")
                    setTitle("");
                    setContent(""); 
                }
            })
        } else {
            console.log('Başlığın dolu olduğundan emin olun.')
        }
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
                value={title}
                onInput={e => setTitle(e.target.value)}
            />

            {/* Add note content */}
            <input
                contentEditable="true"
                placeholder="Note alın.."
                style={styles.addInput}
                className="addNoteDiv addNoteContent"
                value={content}
                onClick={() => visiableHeader()}
                onInput={e => setContent(e.target.value)}
            />
            {/* Send Button */}
            <div className="buttonVisibility" style={styles.addNoteButton}>
                <div style={{width:"1.5rem", height:"1.5rem", background:"red",marginRight:"10px" }}/>
                <div style={{width:"1.5rem", height:"1.5rem", background:"black",marginRight:"10px" }}/>
                <div style={{width:"1.5rem", height:"1.5rem", background:"yellow",marginRight:"10px"}}/>
                <div style={{width:"1.5rem", height:"1.5rem", background:"skyblue",marginRight:"10px" }}/>
                <div style={{width:"1.5rem", height:"1.5rem", background:"grey", marginRight:"10px"}}/>
                <div style={{width:"1.5rem", height:"1.5rem", background:"blue",marginRight:"10px" }}/>
                <div style={{width:"1.5rem", height:"1.5rem", background:"green",marginRight:"10px" }}/>
                <button onClick={sendNote} >Kaydet</button>
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

