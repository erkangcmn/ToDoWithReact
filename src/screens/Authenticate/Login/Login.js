import React, { useState } from 'react'
import { Form, Container, Button } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import AsyncStorage from "@react-native-community/async-storage";
import { axiosInstance as api } from '../../../utils/server'
import { useHistory } from "react-router-dom";
import alertify from 'alertifyjs';
import styles from "./style"
function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()
    const sendLogin = async () => {
       
        if(email && password){
            try {
                const response = await api.post('login', {
                    email,
                    password
                })
                const payload = await response.data
                if (payload.status) {
                    await AsyncStorage.setItem('@user_token', payload.token)
                    await AsyncStorage.setItem('@user_id', payload.id)
                    await AsyncStorage.setItem('@user_email', email)
                    history.push("/");
                } else {
                    alertify.error(payload.message)
                }
            } catch (error) {
                console.log('bir hata oluştu')
                console.log(error)
            }
        }else{
            if(!email){
                alertify.error('Mail boş olamaz..');
            }
            if(!password){
                alertify.error('Şifre boş olamaz..');
            }
        }
    }
    const goRegister =()=>{
        history.push("/register")
    }
    return (
        <Container style={{ height: "100%" }}>
            <Form style={styles.loginForm}>
                <p style={styles.notNote}>
                    <FontAwesomeIcon icon={faEdit} size="lg" className="mr-2" /> ToDo With React
                </p>
                <input placeholder="Email" value={email} onChange={(email) => setEmail(email.target.value)} style={styles.loginInput} />
                <input type="password" placeholder="Şifreniz" value={password} onChange={(password) => setPassword(password.target.value)} style={styles.loginInput} />
                <div style={styles.buttonDiv}>
                    <Button style={styles.loginButton} onClick={() => sendLogin()}>Giriş Yap</Button>
                    <Button style={styles.registerButton} onClick={() => goRegister()}>Kayıt Ol</Button>
                </div>

            </Form>

        </Container>
    )
}

export default Login
