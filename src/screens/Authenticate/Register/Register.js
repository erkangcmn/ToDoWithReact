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
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [secondPassword, setSecondPassword] = useState("")

    const sendRegisterInfo = async() => {
        if (email && name && password.length >= 6 && secondPassword.length >= 6 ){
            if (password == secondPassword) {
                const response = await api.post('register', {
                    email,
                    password,
                    name,
                })
                const payload = await response.data
                if (payload.status) {
                    await AsyncStorage.setItem('@user_token', payload.token)
                    await AsyncStorage.setItem('@user_id', payload.id)
                    await AsyncStorage.setItem('@user_name', name)
                    await AsyncStorage.setItem('@user_email', email)
                    history.push("/");
                } else {
                    console.log(payload.message)
                    alertify.error("Beklenmedik bir hata oluştu..")
                }
            } else {
                alertify.error('Şifreler birbirleriyle uyuşmuyor..')
            }
        } else {
            if (!email || !password || !secondPassword || !name) {
                alertify.error('Bilgiler eksik..')
            }
            if(password.length < 6 || secondPassword.length <6){
                alertify.error('Şifre uzunluğu en az 6 karakterli olmalı..')
            }
    
        }
    }

    return (
        <Container style={{ height: "100%" }}>
            
                <p style={styles.notNote}>
                    <FontAwesomeIcon icon={faEdit} size="lg" className="mr-2" /> ToDo With React
                </p>
                <input type="email" placeholder="Email" value={email} onChange={(email) => setEmail(email.target.value)} style={styles.loginInput} />
                <input type="text" placeholder="Adınız" value={name} onChange={(name) => setName(name.target.value)} style={styles.loginInput} />
                <input type="password" placeholder="Şifreniz" value={password} onChange={(password) => setPassword(password.target.value)} style={styles.loginInput} />
                <input type="password" placeholder="Şifre Tekrar" value={secondPassword} onChange={(password) => setSecondPassword(password.target.value)} style={styles.loginInput} />
                <div style={styles.buttonDiv}>
                    <button style={styles.registerButton} onClick={() => sendRegisterInfo()}>Kayıt ol</button>
                </div>

            

        </Container>
    )
}

export default Login
