import React from 'react'
import { Form, Container } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import styles from "./style"
function Login() {
    return (
        <Container style={{ height: "100%" }}>

            <Form style={styles.loginForm}>
                <p style={styles.notNote}>
                    <FontAwesomeIcon icon={faEdit} size="lg" className="mr-2" /> ToDo With React
                </p>
                <input placeholder="Email" style={styles.loginInput} />
                <input placeholder="Şifreniz" style={styles.loginInput} />
                <div style={styles.buttonDiv}>
                    <button style={styles.loginButton}>Giriş Yap</button>
                    <button style={styles.logOutButton}>Kayıt Ol</button>
                </div>

            </Form>

        </Container>
    )
}

export default Login
