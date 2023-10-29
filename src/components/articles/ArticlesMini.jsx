import { articlesList } from "../../utils/articlesList"

import {ReactComponent as ArrowIcon} from '../../assets/img/button-icons/arrow-right.svg'
import like from "../../assets/img/article-img/like.svg"

import styles from '../../styles/ArticlesMini.module.css'
import global from '../../styles/Global.module.css'
import { useNavigate } from "react-router-dom"

const ArticlesMini = () => {
    const navigate = useNavigate()
    return (
        <div className={styles.block}>
            <div>
                <h4 className={styles.title}>
                    Articles
                </h4>
                <button className={`${global.button_square} ${styles.arrow_img}`} onClick={() => navigate('/articles')}>
                    <ArrowIcon />
                </button>
            </div>
            <div className={styles.container}>
                <ul>
                    {articlesList.map((item) => (
                        <li key={item.id} className={styles.item}>
                            <div>
                                <img src={item.icon} alt="" />
                            </div>
                            <div className={styles.flex}>
                                <div>
                                    <span className={styles.title_mini}>{item.title}</span>
                                </div>
                                <div className={styles.likes}>
                                    <img src={item.avatars[0]} alt="" />
                                    <img src={item.avatars[1]} alt="" />
                                    <div className={styles.likes_block}>
                                        <img src={like} alt="" />
                                        <p>{item.likes}</p>
                                    </div>
                                </div>
                            </div>
                        </li> 
                    ))}
                </ul>
            </div>   
        </div>
    )
}

export default ArticlesMini