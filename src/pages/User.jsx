import Input from '../components/forms/Input';

import styles from '../styles/User.module.css'
import form from '../styles/Login.module.css'
import button from '../styles/Order.module.css'

import userAvatar from '../assets/img/exampleImg.png';
import upload from '../assets/img/upload.svg'
import trash from '../assets/img/trash.svg'

const User = () => {
    const user = {
        name: 'Alla kA',
        email: 'aaa@gmail.com',
        password: '123',
        avatar: userAvatar,
    }

    return (
        <div className={styles.container}>
             <div className={styles.avatar_block}>
                <p className={form.label}>Profile picture</p>
                <div className="">
                    <img className={styles.img} src={user.avatar} alt="" />
                <div className={styles.buttons_container}>
                    <button className={styles.button}>
                        <img src={upload} alt=''/>
                        Upload new picture
                    </button>
                    <button className={`${styles.button} ${styles.btn_red}`}>
                        <img src={trash} alt=''/>
                        Remove
                    </button>
                </div>
                </div>
            </div>
            <form className={styles.form}>
                <Input inputType="text" value={user.name} inputName="Name"/>
                <Input inputType="text" value={user.email} inputName="Email"/>
                <Input inputType="password" value={user.password} inputName="Password" />
                <button className={button.button} type="submit">Save changes</button>
            </form>
        </div>
    )
}

export default User