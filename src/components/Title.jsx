import { useLocation } from "react-router-dom"

import styles from '../styles/Home.module.css'

const Title = () => {
    const location = useLocation();

    return (
        <h1 className={styles.title}>
            {
                location.pathname === '/articles' ? 'Articles' :
                location.pathname === '/trending' ? 'Best offers & trends' :
                location.pathname === '/user' ? 'Account settings' : 
                'Welcome To Lucknow'
            }
        </h1>
    )
}

export default Title