import React from "react";

import { Outlet } from "react-router-dom";

import pizza from '../assets/img/imgo.jpg'

import styles from '../styles/Login.module.css'

const LoginLayout = () => {
    return (
        <>
        <div className={styles.img}>
            <img src={pizza} alt="" />
        </div>
        <section className={styles.login}>
            <div className={styles.title}>
                <h1>
                    Welcome To 
                    Yelp App
                </h1>
            </div>
            <Outlet/>
        </section>
        </>
    )
}

export default LoginLayout