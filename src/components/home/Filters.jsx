import CategoryBtn from "./CategoryBtn"

import styles from '../../styles/Filters.module.css'

const filtersList = [
    {
        id: 1,
        title: 'All',
        path: "/menu",  
    },

    {
        id: 2,
        title: 'Burger',
        path: "/menu/burger",  
    },

    {
        id: 3,
        title: 'Pizza',
        path: "/menu/pizza",  
    },

    {
        id: 4,
        title: 'Salads',
        path: "/menu/salads",  
    },
      
    {
        id: 5,
        title: 'Donut',
        path: "/menu/donuts",  
    },

    {
        id: 6,
        title: 'Drinks',
        path: "/menu/drinks",  
    },
]

const Filters = () => {
    return (
        <ul className={styles.ul}>
            {
                filtersList.map((item) => (
                   <CategoryBtn key={item.id} {...item} />
                ))
            }
        </ul>
    )
}

export default Filters 