import { useLocation, useNavigate } from "react-router-dom"

import styles from '../../styles/Filters.module.css'
import global from '../../styles/Global.module.css'

const CategoryBtn = ({...item}) => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <li 
            key={item.id} 
            className={location.pathname === item.path ? `${global.active}` : `${styles.li}`}
            onClick={() => navigate(`${item.path}`)}
        >
            {item.title}
        </li>
    )  
}

export default CategoryBtn 