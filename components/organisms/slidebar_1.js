import { useEffect } from 'react'
import Ionicons from '../ionicon'
import styles from './slidebar_1.module.css'

export default function Slidebar_1() {
    useEffect(() => {
        let list = document.querySelectorAll('.list');
        for (let i = 0; i < list.length; i++) {
            list[i].onclick = () => {
                let j = 0;
                while (j < list.length) {
                    list[j++].className = 'list';
                }
                list[i].className = 'list active';
            }
        }
    }, [])

    /*     const setToggle = () => {
            let menuToggle = document.querySelector('.toggle');
            let navigation = document.querySelector('.navigation');
            menuToggle.classList.toggle('active')
            navigation.classList.toggle('active')
        }
     */
    const openMenu = () => {
        let navigation = document.querySelector('.navigation');
        navigation.classList.toggle('active')
    }


    return (
        <body>
            <Ionicons></Ionicons>
            {/* <div className={styles.navigation}>
                <ul>
                    <li className="list">
                        <b></b>
                        <b></b>
                        <a href="#" onClick={openMenu}>
                            <span className={styles.icon}><ion-icon name="menu-outline"></ion-icon></span>
                            <span className={styles.title}>Menu</span>
                        </a>
                    </li>
                    <li className="list active">
                        <b></b>
                        <b></b>
                        <a href="#">
                            <span className={styles.icon}><ion-icon name="home-outline"></ion-icon></span>
                            <span className={styles.title}>Home</span>
                        </a>
                    </li>
                    <li className="list">
                        <b></b>
                        <b></b>
                        <a href="#">
                            <span className={styles.icon}><ion-icon name="person-outline"></ion-icon></span>
                            <span className={styles.title}>Profile</span>
                        </a>
                    </li>
                    <li className="list">
                        <b></b>
                        <b></b>
                        <a href="#">
                            <span className={styles.icon}><ion-icon name="chatbubbles-outline"></ion-icon></span>
                            <span className={styles.title}>Messages</span>
                        </a>
                    </li>
                    <li className="list">
                        <b></b>
                        <b></b>
                        <a href="#">
                            <span className={styles.icon}><ion-icon name="settings-outline"></ion-icon></span>
                            <span className={styles.title}>Settings</span>
                        </a>
                    </li>
                    <li className="list">
                        <b></b>
                        <b></b>
                        <a href="#">
                            <span className={styles.icon}><ion-icon name="help-outline"></ion-icon></span>
                            <span className={styles.title}>Help</span>
                        </a>
                    </li>
                    <li className="list">
                        <b></b>
                        <b></b>
                        <a href="#">
                            <span className={styles.icon}><ion-icon name="lock-closed-outline"></ion-icon></span>
                            <span className={styles.title}>Password</span>
                        </a>
                    </li>
                    <li className="list">
                        <b></b>
                        <b></b>
                        <a href="#">
                            <span className={styles.icon}><ion-icon name="log-out-outline"></ion-icon></span>
                            <span className={styles.title}>SignOut</span>
                        </a>
                    </li>
                </ul>
            </div> */}
          <div className="navigation">
                <ul>
                    <li className="list">
                        <b></b>
                        <b></b>
                        <a href="#" onClick={openMenu}>
                            <span className="icon"><ion-icon name="menu-outline"></ion-icon></span>
                            <span className="title">Menu</span>
                        </a>
                    </li>
                    <li className="list active">
                        <b></b>
                        <b></b>
                        <a href="#">
                            <span className="icon"><ion-icon name="home-outline"></ion-icon></span>
                            <span className="title">Home</span>
                        </a>
                    </li>
                    <li className="list">
                        <b></b>
                        <b></b>
                        <a href="#">
                            <span className="icon"><ion-icon name="person-outline"></ion-icon></span>
                            <span className="title">Profile</span>
                        </a>
                    </li>
                    <li className="list">
                        <b></b>
                        <b></b>
                        <a href="#">
                            <span className="icon"><ion-icon name="chatbubbles-outline"></ion-icon></span>
                            <span className="title">Messages</span>
                        </a>
                    </li>
                    <li className="list">
                        <b></b>
                        <b></b>
                        <a href="#">
                            <span className="icon"><ion-icon name="settings-outline"></ion-icon></span>
                            <span className="title">Settings</span>
                        </a>
                    </li>
                    <li className="list">
                        <b></b>
                        <b></b>
                        <a href="#">
                            <span className="icon"><ion-icon name="help-outline"></ion-icon></span>
                            <span className="title">Help</span>
                        </a>
                    </li>
                    <li className="list">
                        <b></b>
                        <b></b>
                        <a href="#">
                            <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                            <span className="title">Password</span>
                        </a>
                    </li>
                    <li className="list">
                        <b></b>
                        <b></b>
                        <a href="#">
                            <span className="icon"><ion-icon name="log-out-outline"></ion-icon></span>
                            <span className="title">SignOut</span>
                        </a>
                    </li>
                    <li className="list">
                        <b></b>
                        <b></b>
                        <a href="#">
                            <span className="icon"><ion-icon name="log-out-outline" class={styles.outline}></ion-icon></span>
                            <span className="title">SignOut</span>
                        </a>
                    </li>
                </ul>
            </div>
            {/*             <div onClick={setToggle} className="toggle">
                <ion-icon name="menu-outline" class="open"></ion-icon>
                <ion-icon name="close-outline" class="close"></ion-icon>
            </div>
 */}        </body>

    )
}