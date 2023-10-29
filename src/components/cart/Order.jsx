import styles from '../../styles/Order.module.css'
import global from '../../styles/Global.module.css'

import image from '../../assets/img/exampleImg.png'
import cross from '../../assets/img/button-icons/cross.svg'
import minus from '../../assets/img/button-icons/minus.svg'
import plus from '../../assets/img/button-icons/plus.svg'

const Order = ({...props}) => {
    return (
        <div className={styles.container}>
            <div className={styles.items_container}>
                <div>
                    <p className={styles.title}>Basket</p>
                    <button className={`${global.button_square} ${styles.btn}`}>
                        <img src={cross} alt="" />
                    </button>
                </div>
                <div className={styles.items}>
                    <div className={styles.item}>
                        <div className={styles.item_desc}>
                            <div className={styles.image}>
                                {/* <img src={image} alt="" /> */}
                            </div>
                            <div>
                                <p className={styles.item_title}>

                                </p>
                                <p className={styles.item_text}>

                                </p>
                            </div>
                        </div>
                        <div className={styles.item_sum}>
                            <div className={styles.quantity}>
                                <button className={styles.controls}>
                                    <img src={minus} alt="" />
                                </button>
                                <span className={styles.number}>1</span>
                                <button className={styles.controls}>
                                    <img src={plus} alt="" />
                                </button>
                            </div>
                            <p className={styles.item_price}></p>
                        </div>
                    </div>
                </div>
            </div>
            <button className={styles.button}>
                Order
            </button>
        </div>


        
    )
}

export default Order