import styles from './Test.module.css'
import Head from 'next/head'


export default function CSSModuleTest() {
    return (
        <body>
            <Head>
                <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
                <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
            </Head>
            <div className={styles.test}>
                <ul>
                    <li className="list">
                        <a>
                        <span className={styles.icon}><ion-icon name="home-outline"></ion-icon></span>
                        </a>
                        乃木坂
                    </li>
                    <li className={styles.sakura}>
                        櫻坂
                    </li>
                    <li>
                        日向坂
                    </li>
                </ul>
            </div>
        </body>
    )
}