import styles from '../../styles/usercards.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'


export default function UserCards() {
    const url = '../data.json'
    const [data, setData] = useState({ GroupName: '', Member: [] })

    fetch(url)
        .then(res => res.json())
        .then(res => setData(res))

    return (
        <div>
            <div className={styles.container}>
                {
                    data.Member.map((value, key) =>

                        <div className={styles.cards}>
                            <div className={styles.content}>
                                <h2>
                                    {value.name}
                                    <h6>
                                        {value.birthday}
                                    </h6>
                                </h2>
                            </div>
                            <div className={styles.imgBx}>
                                <Image className={styles.img}
                                    src={value.imagepath}
                                    height={400}
                                    width={300}
                                    priority={true}
                                />
                            </div>
                        </div>
                    )
                }
            </div>
            {/*             <div className={styles.container}>
                <div className={styles.cards}>
                    <div className={styles.content}>
                        <h2>
                            河田陽菜
                        <h6>
                                生年月日 2001年7月23日
                        </h6>
                        </h2>
                    </div>
                    <div className={styles.imgBx}>
                        <Image className={styles.img}
                            src="/images/HinaKawata.jpg"
                            height={400}
                            width={300}
                            priority={true}
                        />
                    </div>
                </div>
                <div className={styles.cards}>
                    <div className={styles.content}>
                        <h2>
                            松田好花
                        <h6>
                                生年月日 1999年4月27日
                        </h6>
                        </h2>
                    </div>
                    <div className={styles.imgBx}>
                        <Image className={styles.img}
                            src="/images/KonokaMatsuda.jpg"
                            height={400}
                            width={300}
                            priority={true}
                        />
                    </div>
                </div>
                <div className={styles.cards}>
                    <div className={styles.content}>
                        <h2>
                            渡邊美穂
                        <h6>
                                生年月日 2000年2月24日
                        </h6>
                        </h2>
                    </div>
                    <div className={styles.imgBx}>
                        <Image className={styles.img}
                            src="/images/MihoWatanabe.jpg"
                            height={400}
                            width={300}
                            priority={true}
                        />
                    </div>
                </div>
            </div>
 */}        </div>
    )
}