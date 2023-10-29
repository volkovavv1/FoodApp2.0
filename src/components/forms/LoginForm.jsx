import Input from "./Input";

import styles from '../../styles/Login.module.css'

const LoginForm = () => {
    return (
        <form onSubmit={()=> {}} >
            <Input inputType="text" inputPlaceholder="" inputName="Login"/>
            <Input inputType="password" inputPlaceholder="" inputName="Password" />
            <button className={styles.btn} onClick={()=> {}}>Login</button>
            <a className={styles.link} href="/register">Don't have an account? <span className={styles.span}> Sign up</span></a>
        </form>
    )
}

export default LoginForm