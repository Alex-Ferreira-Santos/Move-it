import styles from '../styles/components/Profile.module.css'

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/Alex-Ferreira-Santos.png" alt="Alex Ferreira Santos"/>
            <div>
                <strong>Alex Ferreira Santos</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}