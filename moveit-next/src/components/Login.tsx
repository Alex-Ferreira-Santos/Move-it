import styles from '../styles/components/login.module.css'

export function Login(){
    return(
        <div className={styles.container}>
            <img src="icons/logo.svg" alt="logo" className={styles.logo}/>
            <div className={styles.welcome}>
                <img src="logo-full.svg" alt="logo" className={styles.img}/>
                <p className={styles.text}>Bem vindo</p>
            </div>
            
        </div>
    )
}