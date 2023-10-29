import {ReactComponent as HomeIcon} from '../assets/img/menu-icons/home.svg'
import {ReactComponent as ArticlesIcon} from '../assets/img/menu-icons/menu.svg'
import {ReactComponent as TrendingIcon} from '../assets/img/menu-icons/trending.svg'
import {ReactComponent as SettingsIcon} from '../assets/img/menu-icons/setting.svg'

export const menuList = [
    {
        id: 1,
        title: 'Home',
        icon: <HomeIcon />,
        path: '/menu',
    },
    {
        id: 2,
        title: 'Articles',
        icon: <ArticlesIcon />,
        path: '/articles',
    },
    {
        id: 3,
        title: 'Trending',
        icon: <TrendingIcon />,
        path: '/trending',
    },
    {
        id: 4,
        title: 'Settings',
        icon: <SettingsIcon />,
        path: '/user',
    },
]