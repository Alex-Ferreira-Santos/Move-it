import styles from '../styles/components/login.module.css'
import {useState} from 'react'

export function Login(){
    const [placeholder, setPlaceholder] = useState('Digite seu username')
    const [name,setName] = useState('')
    const [color,setColor] = useState('')
    return(
        <div className={styles.container}>
            <img src="icons/logo.svg" alt="logo" className={styles.logo}/>
            <div className={styles.welcome}>
                <img src="logo-full.svg" alt="logo" className={styles.img}/>
                <p className={styles.text}>Bem vindo</p>
                <div className={styles.github}>
                    <img src="icons/Github.svg" alt="github"/>
                    <p className={styles.login}>
                    Faça login com seu Github para começar
                    </p>
                </div>
                <div className={styles.form}>
                    <input type="text" name="user" className={styles.input} placeholder={placeholder} id='input' onFocus={()=>{
                        setPlaceholder('')
                    }} onBlur={()=>{
                        setPlaceholder('Digite seu username')
                        if(document.getElementById('input').value.length == 0){
                            setColor('')
                        }
                    }} onChange={() => {
                        if(document.getElementById('input').value.length > 0){
                            setColor(styles.buttonColor)
                        }
                    }}
                    />
                    <button className={`${styles.button} ${color}`} onClick={()=>{
                        const name = document.getElementById('input').value
                        setName(name)
                    }}><img src="icons/arrow.svg" alt="arrow"/></button>
                </div>
                
                
            </div>
            
        </div>
    )
}