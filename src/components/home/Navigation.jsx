import { useLocation, useNavigate } from "react-router-dom"

import leftImg from '../../assets/img/bottomIcon.png';
import userAvatar from '../../assets/img/exampleImg.png';

import { menuList } from '../../utils/menuList'

import styles from '../../styles/Navigation.module.css'

const Navigation = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div className={styles.navigation}> 
            <div className={styles.user}>
                <div className={styles.img} onClick={() => navigate('/user')}>
                    <img src={userAvatar} alt='' />
                </div>
                <p className={styles.name}>Alka Yagik</p>
            </div>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    {menuList.map((item) => (
                            <li 
                                className={location.pathname.includes(item.path) ? `${styles.item} ${styles.item_active}` : `${styles.item}`}
                                key={item.id}
                                onClick={() => navigate(item.path)}
                            >
                                <div 
                                    className={location.pathname.includes(item.path) ? `${styles.icon} ${styles.icon_active}` : `${styles.icon}`}
                                >
                                    {item.icon}
                                </div>
                                <span className={styles.title}>{item.title}</span>
                            </li> 
                        ))
                    }
                </ul>
            </nav>
            <div>
                <img src={leftImg} alt='' />
            </div>
        </div>
    )
}

export default Navigation