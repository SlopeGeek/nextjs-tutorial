import { useEffect } from 'react'
import Link from 'next/link'
import Ionicon from '../ionicon'
import styles from '../../styles/slidebar_2.module.css'
import UserCards from '../../components/organisms/usercards'

const doMenu = () => {
    let sidebar = document.querySelector(`.${styles.sidebar}`);
    let submenu = document.querySelector(`.${styles.submenu}`);
    let icon = document.querySelector(`.${styles.icon}`);
    sidebar.classList.toggle(`${styles.active}`);
    icon.classList.toggle(`${styles.active}`);
    
    if (submenu.classList.contains(`${styles.show}`)) {
        submenu.classList.toggle(`${styles.show}`);
    }

    if (icon.classList.contains(`${styles.rotate}`)){
        icon.classList.toggle(`${styles.rotate}`)
    }

}

const showMenu = () => {
    let sidebar = document.querySelector(`.${styles.sidebar}`);
    let submenu = document.querySelector(`.${styles.submenu}`);
    let icon = document.querySelector(`.${styles.icon}`);

    if (!sidebar.classList.contains(`${styles.active}`)) {
        doMenu();
    }
    submenu.classList.toggle(`${styles.show}`);
    icon.classList.toggle(`${styles.rotate}`);
}

export default function Slidebar_2(props) {
    return (
        <div>
            <Ionicon></Ionicon>
            <div className={styles.sidebar}>
                <div className={styles.menu} onClick={doMenu}>
                    <ion-icon name="menu-outline" id={styles.btn}></ion-icon>
                </div>
                <ul>
                    {/*                     <li>
                        <div onClick={doMenu}>
                            <ion-icon name="search-outline" class={styles.search}></ion-icon>
                        </div>
                        <input type="text" placeholder="Search..."></input>
                        <span className={styles.tooltip}>Search</span>
                    </li>
                    
 */}
                    <li>
                        <a href='/'>
                            <ion-icon name="home-outline"></ion-icon>
                            <span className={styles.links_name}>Home</span>
                        </a>
                        <span className={styles.tooltip}>Home</span>
                    </li>
                    <li>
                        <a href='https://www.hinatazaka46.com/'>
                            <ion-icon name="newspaper-outline"></ion-icon>
                            <span className={styles.links_name}>News</span>
                        </a>
                        <span className={styles.tooltip}>News</span>
                    </li>
                    <li>
                        <a href='/article/hinata'>
                            <ion-icon name="person-outline"></ion-icon>
                            <span className={styles.links_name}>Member</span>
                        </a>
                        <span className={styles.tooltip}>Member</span>
                    </li>
                    <li>
                        <a href='#'>
                            <ion-icon name="musical-notes-outline"></ion-icon>
                            <span className={styles.links_name}>Song</span>
                        </a>
                        <span className={styles.tooltip}>Song</span>
                    </li>
                    <li>
                        <a href="#" onClick={showMenu}>
                            <ion-icon name="logo-youtube"></ion-icon>
                            <span className={styles.links_name}>Youtube</span>
                            <ion-icon name="caret-down-outline" class={styles.icon}></ion-icon></a>
                        <span className={styles.tooltip}>Youtube</span>
                    </li>
                    <span className={styles.submenu}>
                        <li><a href="https://www.youtube.com/channel/UCmr9bYmymcBmQ1p2tLBRvwg">櫻坂46</a></li>
                        <li><a href="https://www.youtube.com/channel/UCR0V48DJyWbwEAdxLL5FjxA">日向坂46</a></li>
                    </span>
                    <li>
                        <a href="#">
                            <ion-icon name="settings-outline"></ion-icon>
                            <span className={styles.links_name}>Setting</span>
                        </a>
                        <span className={styles.tooltip}>Setting</span>
                    </li>
                    <li>
                        <a href="/article/test">
                            <ion-icon name="hand-right-outline"></ion-icon>
                            <span className={styles.links_name}>Test</span>
                        </a>
                        <span className={styles.tooltip}>Test</span>
                    </li>
                    <li>
                        <a href="/article/costmanagement">
                            <ion-icon name="create-outline"></ion-icon>
                            <span className={styles.links_name}>Management</span>
                        </a>
                        <span className={styles.tooltip}>Management</span>
                    </li>
                </ul>
            </div>
            <div className={styles.content_dark}></div>
            {/*             <div className={styles.home_content}></div>
 */}{/*             <div className={styles.home_content}>
                {props.component}
            </div>
 */}        </div>
    )
}