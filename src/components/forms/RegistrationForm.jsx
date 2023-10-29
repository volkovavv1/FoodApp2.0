import Input from "./Input";

import styles from '../../styles/Login.module.css'

const RegistrationForm = () => {
    return (
        <form onSubmit={()=> {}} >
            <Input inputType="text" inputPlaceholder="" inputName="Name"/>
            <Input inputType="text" inputPlaceholder="" inputName="Email"/>
            <Input inputType="password" inputPlaceholder="" inputName="Password" />
            <Input inputType="password" inputPlaceholder="" inputName="Confirm password" />           
            <button className={styles.btn} onClick={()=> {}}>Register</button>
            <a className={styles.link} href="/login">Already have an account? <span className={styles.span}>Log in</span></a>
        </form>
    )
}

export default RegistrationForm