import plus from '../../assets/img/button-icons/plus-solid.svg'

import styles from '../../styles/Card.module.css'

const Card = ({img, title, price, desc, icon}) => {
    return ( 
        <div className={styles.card}>
            <div className={styles.img}>
                <img src={img} alt="" />
            </div>
            {icon ? 
                <div className={styles.icon}>
                    <img src={icon} alt="" />
                </div> : ''
            }
            <div className={styles.container}>
                <p className={styles.title}>
                    {title}
                </p>
                <p className={styles.description}>
                    {desc}
                </p>
                <div className={styles.bottom}>
                    <p className={styles.price}>
                        ${price}
                    </p>
                    <div className={styles.button}>
                        <button className={styles.btn}>
                            <img src={plus} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card