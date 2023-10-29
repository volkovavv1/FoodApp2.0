import Card from "./Card"

import { categoriesList } from "../../utils/categoriesList"

import styles from '../../styles/Category.module.css'
import { useLocation } from "react-router-dom"

const Category = ({title, icon}) => {
    const location = useLocation()

    const filterIcon = () => {
            const result = categoriesList.filter((item) => (
               item.icon !== null && item.icon.slice(14,18) === icon
            ))
            if (result.length === 0) {
                return 'There was error getting items. Please, try again later'
            }
            return (
            result.map((item) => (
                <Card key={item.id} {...item} />)
            ))
    }


    const filterCards = () => {
        const lowerTitle = title.toLowerCase()

        if (lowerTitle === 'all items') {
            return (
                categoriesList.map((card) => (
                <Card key={card.id} {...card} />)
            ))
        } else {
            const result = categoriesList.filter((item) => item.category === lowerTitle)
            if (result.length === 0) {
                return 'There was error getting items. Please, try again later'
            }
            return (
                result.map((card) => (
                <Card key={card.id} {...card} />)
            ))
        }
    }

    return (
        <div className={styles.container}>
            <h4 className={styles.title}>
                {title}
            </h4>
            <div className={location.pathname.includes('/trending') ? styles.small_flex :  styles.flex}>
                {!icon ?  filterCards() : filterIcon()}
            </div>
        </div>
    )
}

export default Category