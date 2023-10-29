import Category from "../components/categories/Category"

import styles from '../styles/Trending.module.css'

import fire from '../assets/img/categories/icons/fire.svg'
import like from '../assets/img/categories/icons/like.svg'
import star from '../assets/img/categories/icons/star.svg'

const Trending = () => {
    return (
        <div className={styles.container}>
            <div className={styles.block}>
                <Category title='Best discount' icon='fire' />
                <div className={styles.bottom}>
                    <div className={styles.image}>
                        <img src={fire} alt="" />
                    </div>
                    <p>Huge discount on burgers - get them with 50% off!</p>
                </div>
            </div>

            <div className={styles.block}>
                <Category title='Dish of the month' icon='star' />
                <div className={styles.bottom}>
                    <div className={styles.image}>
                        <img src={star} alt="" />
                    </div>
                    <p>Get this dish with 10% discount!</p>
                </div>
            </div>

            <div className={styles.block}>
                <Category title='Customers choose' icon='like' />
                <div className={styles.bottom}>
                    <div className={styles.image}>
                        <img src={like} alt="" />
                    </div>
                    <p>Most popular food of this month - give it a try!</p>
                </div>
            </div>
        </div>
    )
}

export default Trending