import ArticlesMini from '../articles/ArticlesMini'
import Cart from '../cart/Cart'

import discountImg from '../../assets/img/discount.png'
 
import styles from '../../styles/RightPanel.module.css'
import Order from '../cart/Order'

const RightPanel = () => {
    return (
        <div className={styles.right}>
            <Cart/>
           <div className={styles.discount}>
                <img className={styles.img} src={discountImg} alt='' />
                <div className={styles.bg}>
                    <p className={`${styles.text} ${styles.big}`}>-50% Off</p>
                    <p className={styles.text}>the full price of burgers</p>
                </div>
           </div>
            <ArticlesMini />
        </div>
    )
}

export default RightPanel