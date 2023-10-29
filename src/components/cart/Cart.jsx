import Order  from './Order'

import cart from '../../assets/img/button-icons/cart.svg'
import search from '../../assets/img/button-icons/search.svg'

import global from '../../styles/Global.module.css'
import styles from '../../styles/Cart.module.css'

const Cart = () => {
    return (
        <>
        <div className={styles.buttons_container}>
            <button className={global.button_square}>
                <img src={search} alt="" />
            </button>
            <button className={`${global.button_square} ${global.active}`}>
                <img src={cart} alt="" />
                <span className={styles.dot}></span>
            </button>
            
        </div>
        {/* <Order /> */}
        </>


        
    )
}

export default Cart