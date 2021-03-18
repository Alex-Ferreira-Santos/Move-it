import { useContext } from 'react'
import { ChallengesContext } from '../context/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile(){
    const { level, name,setName } = useContext(ChallengesContext)
    
    return(
        <div className={styles.profileContainer}>
            <img src={`https://github.com/${name}.png`} alt="imagem de perfil" onError={()=>{
                setName('github')
            }}/>
            <div>
                <strong>{name}</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}