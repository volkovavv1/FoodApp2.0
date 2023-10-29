import { articlesList } from "../utils/articlesList"

import heart from "../assets/img/article-img/heart.webp"

import styles from '../styles/Articles.module.css'

const Articles = () => {
    let like = 0
    const likeFn = () => {
        const btn = document.getElementById("like_btn")
        const likesNumber = document.getElementById("like_quantity")
        let res = Number(likesNumber.innerText)
        if (like === 0) {
            like = 1;
            btn.classList.add(`${styles.like_btn__active}`);
            likesNumber.innerText = res+=1;
        } else if (like === 1) {
            like = 0;
            btn.classList.remove(`${styles.like_btn__active}`);
            likesNumber.innerText = res-=1;
        } else {
            console.log('Error')
        }
    }

    return (
        <div className={styles.container}>
            {articlesList.map((item) => {
            return (
            <div key={item.id} className={styles.article}>
                <div>
                    <img className={styles.icon} src={item.icon} alt="" />
                    <h6 className={styles.heading}>{item.title}</h6>
                </div> 
                <div className={styles.content}>
                    {item.text.map((elem) => {
                        return ( 
                            <div key={elem.id} className={styles.text_block}>
                                {elem.heading ? (<span className={styles.subheading}>{elem.heading}</span>) : ''}
                                <p className={styles.text}>{elem.text}</p>
                            </div>
                        )
                    })}
                </div>
                <div className={styles.like}>
                    <div id="like_btn" className={`${styles.like_btn}`} onClick={() => likeFn()}>
                        <img className={styles.heart} src={heart} alt="" />
                        <p id="like_quantity">{item.likes}</p>
                    </div>
                    <img src={item.avatars[1]} alt="" />
                    <img src={item.avatars[0]} alt="" />
                </div>
            </div>
        )})}
        </div>
    )
}

export default Articles