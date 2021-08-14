import styles from './slidebar_3.module.css'
import Ionicon from '../ionicon'

const showFeat = () => {
    let feat_show = document.querySelector(`.${styles.feat_show}`)
    let icon = document.querySelector(`.${styles.feat_icon}`)
    feat_show.classList.toggle(`${styles.show}`)
    icon.classList.toggle(`${styles.rotate}`)
}

const showServ = () => {
    let serv_show = document.querySelector(`.${styles.serv_show}`)
    let icon = document.querySelector(`.${styles.serv_icon}`)
    serv_show.classList.toggle(`${styles.show}`)
    icon.classList.toggle(`${styles.rotate}`)
}


export default function Slidebar_3() {
    return (
        <div className={styles.test}>
            <Ionicon></Ionicon>
            <nav className={styles.sidebar}>
                <div className={styles.text}>Side Menu</div>
                <ul>
                    <li><a href="#">Dashboard</a></li>
                    <li>
                        <a href="#" className={styles.feat_btn} onClick={showFeat}>Features
                        <ion-icon name="caret-down-outline" class={styles.feat_icon}></ion-icon></a>
                        <ul className={styles.feat_show}>
                            <li><a href="#">Pages</a></li>
                            <li><a href="#">Elements</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" className={styles.serv_btn} onClick={showServ}>Services
                        <ion-icon name="caret-down-outline" class={styles.serv_icon}></ion-icon></a>
                        <ul className={styles.serv_show}>
                            <li><a href="#">App Design</a></li>
                            <li><a href="#">Web Design</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Overview</a></li>
                    <li><a href="#">Shortcuts</a></li>
                    <li><a href="#">Feedback</a></li>
                </ul>
            </nav>
        </div>
    )
}