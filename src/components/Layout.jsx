import { Outlet, useLocation } from "react-router-dom"

import Navigation from './home/Navigation'
import RightPanel from './home/RightPanel'
import Title from './Title'

import styles from '../styles/Home.module.css'
import Filters from "./home/Filters"

const Layout = () => {
const location = useLocation()
    return (
        <section className={styles.main}>
            <Navigation />
                <div className={styles.container}>
                    <Title />
                    {
                        location.pathname.includes('/menu') ? 
                        <Filters /> 
                        : ''
                    }
                    <Outlet />
                </div>
            <RightPanel />
        </section>
    )
}

export default Layout